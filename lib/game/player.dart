import 'package:batufo/engine/geometry/dart_geometry.dart' show Offset;
import 'package:batufo/engine/sprite.dart';
import 'package:batufo/engine/world_position.dart';
import 'package:batufo/game_props.dart';
import 'package:batufo/models/player_model.dart';
import 'package:batufo/sprites/thrust_sprite.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

Paint _debugHitTilePaint = Paint()
  ..color = Colors.amberAccent
  ..strokeWidth = 0.5
  ..style = PaintingStyle.stroke;

class Player {
  Sprite playerSprite;
  ThrustSprite thrustSprite;
  final double tileSize;
  final double hitSize;

  Player({
    String playerImagePath,
    @required this.tileSize,
    @required this.hitSize,
    @required double thrustAnimationDurationMs,
  }) {
    playerSprite = Sprite(playerImagePath);
    thrustSprite = ThrustSprite(
      width: tileSize / 2,
      height: tileSize / 2,
      animationDurationMs: thrustAnimationDurationMs,
    );
  }

  void render(Canvas canvas, PlayerModel player) {
    final playerTilePosition = player.tilePosition;
    final center = WorldPosition.fromTilePosition(playerTilePosition);
    canvas.save();
    canvas.translate(center.x, center.y);
    canvas.rotate(player.angle);
    playerSprite.render(canvas, Offset.zero, width: tileSize, height: tileSize);
    thrustSprite.render(canvas, Offset.zero, tileSize);
    _renderDebugHitTile(canvas, player);
    canvas.restore();
  }

  void _renderDebugHitTile(Canvas canvas, PlayerModel player) {
    if (!GameProps.debugPlayerHitTile) return;
    final radius = hitSize / 2;
    final rect = Rect.fromLTWH(-radius, -radius, hitSize, hitSize);
    canvas.drawRect(rect, _debugHitTilePaint);
  }
}
