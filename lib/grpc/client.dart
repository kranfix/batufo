import 'dart:async';

import 'package:batufo/generated/message_bus.pbgrpc.dart';
import 'package:batufo/grpc/server_game/arena.dart';
import 'package:batufo/models/player_model.dart';
import 'package:grpc/grpc.dart';

class Client {
  ClientChannel _channel;
  GameUpdatesClient _updatesClient;
  PlayingClient _playingClient;
  Arena _arena;

  final _inputEvent$ = StreamController<PlayingClientEvent>();
  ResponseStream<GameStateEvent> _gameStateEvent$;

  Arena get arena => _arena;
  ResponseStream<GameStateEvent> get gameStateEvent$ => _gameStateEvent$;

  void submitPlayerInputs(PlayerInputs playerInputs) {
    _inputEvent$.add(PlayingClientEvent()..playerInputs = playerInputs);
  }

  void _init() {
    _createClient();
  }

  Future<void> _requestToPlay(String levelName) async {
    final request = PlayRequest()..levelName = levelName;
    _playingClient = await _updatesClient.play(request);
    _arena = Arena.unpack(_playingClient.arena);
    await _updatesClient.playingClientSync(_inputEvent$.stream);
    _gameStateEvent$ = _updatesClient.subscribeGameStates(_playingClient);
  }

  void _createClient() {
    final channelOpts =
        ChannelOptions(credentials: ChannelCredentials.insecure());
    _channel = ClientChannel('localhost', port: 8080, options: channelOpts);
    final clientOpts = CallOptions(timeout: null);
    _updatesClient = GameUpdatesClient(_channel, options: clientOpts);
  }

  void dispose() {
    if (!_inputEvent$.isClosed) _inputEvent$?.close();
  }

  static Future<Client> create(String levelName) async {
    final client = Client().._init();
    await client._requestToPlay(levelName);
    return client;
  }
}

void main(List<String> args) async {
  final client = await Client.create('simple');
  client.gameStateEvent$.listen(_onGameStateEvent);
}

void _onGameStateEvent(GameStateEvent event) {
  final infos = event.gameState.players.map((x) {
    final player = PlayerModel.unpack(x);
    return 'id: ${player.id} => ${player.angle}';
  });
  print('\n-------------------------\n');
  print(infos.join('\n'));
}
