import 'dart:ui' show Offset;

import 'package:batufo/engine/world_position.dart';
import 'package:flutter/foundation.dart';

@immutable
class TilePosition {
  final int col;
  final int row;
  final double relX;
  final double relY;

  const TilePosition(this.col, this.row, this.relX, this.relY);

  bool isSameTileAs(TilePosition other) =>
      other.col == this.col && other.row == this.row;

  WorldPosition toWorldPosition() => WorldPosition.fromTilePosition(this);
  Offset toOffset() => toWorldPosition().toOffset();

  @override
  String toString() {
    return '''TilePosition {
      col: $col + $relX
      row: $row + $relY
    }''';
  }
}
