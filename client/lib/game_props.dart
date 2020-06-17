import 'package:batufo/setup/config.dart';
import 'package:flutter/foundation.dart';

const PORT = 2222;

class ParallaxProps {
  final int starsBackDensity;
  final int starsMiddleDensity;
  final int starsFrontDensity;
  final int planetsBackDensity;
  final int planetsFrontDensity;

  ParallaxProps({
    @required this.starsBackDensity,
    @required this.starsMiddleDensity,
    @required this.starsFrontDensity,
    @required this.planetsBackDensity,
    @required this.planetsFrontDensity,
  });

  factory ParallaxProps.forDesktop() {
    return ParallaxProps(
        starsBackDensity: 22,
        starsMiddleDensity: 6,
        starsFrontDensity: 2,
        planetsBackDensity: 10,
        planetsFrontDensity: 2);
  }

  factory ParallaxProps.forMobile() {
    return ParallaxProps.forDesktop();
  }

  factory ParallaxProps.forWeb() {
    return ParallaxProps(
        starsBackDensity: 2,
        starsMiddleDensity: 1,
        starsFrontDensity: 1,
        planetsBackDensity: 1,
        planetsFrontDensity: 0);
  }

  factory ParallaxProps.forPlatForm(PlatformType platform) {
    switch (platform) {
      case PlatformType.MacOS:
      case PlatformType.Linux:
      case PlatformType.Windows:
      case PlatformType.Fuchsia:
        return ParallaxProps.forDesktop();
      case PlatformType.Android:
      case PlatformType.IOS:
        return ParallaxProps.forMobile();
      case PlatformType.Web:
        return ParallaxProps.forWeb();
      default:
        return ParallaxProps.forMobile();
    }
  }
}

class GameProps {
  static const gesturePlayerRotationFactor = 0.04;
  static const gesturePlayerMinThrustDelta = 2.2;

  static const keyboardPlayerRotationFactor = 0.004;
  static const playerThrustForce = 0.07; // Newton

  // TODO(thlorenz): need to take those into account for above
  // thrust force value
  static const playerMass = 4000.0; // kg
  static const playerThrustAcceleration =
      playerThrustForce / playerMass; // m/s2
  static const playerHitsWallSlowdown = 0.3;
  static const playerSizeFactor = 0.75;
  static const playerTotalHealth = 100.0;

  static const playerHitsWallHealthFactor = 30.0;
  static const bulletHitsPlayerHealthToll = playerTotalHealth / 20;

  static const playerThrustAnimationDurationMs = 200.0;

  static const bulletForce = 0.4;
  static const bulletMsToExplode = 200.0;

  static bool get debugPlayerHitTile => false;
  static bool get debugWallHitTile => false;
  static bool get debugGrid => false;
  static bool get debugStarsBackVisibleRect => false;
  static bool get debugStarsMiddleVisibleRect => false;
  static bool get debugStarsFrontVisibleRect => true;

  static bool get renderFloor => true;

  static const GAME_ID = 'gameid';
  static const CLIENT_ID = 'clientid';

  static const playerInputSyncIntervalMs = 50.0;
  static const timeBetweenThrustsMs = 500.0;
  static const timeBetweenBulletsMs = 250.0;

  static const scoreOnHit = 100;
  static const scoreOnKill = 500;

  static const z10Lerp = 0.15;
  static const z20Lerp = 0.15;
  static const z30Lerp = 0.15;
  static const z40Lerp = 0.15;
  static const z100Lerp = 1.0;

  static const z10LerpFactor = (1.0 + z10Lerp) * 2.0;
  static const z20LerpFactor = z10LerpFactor + z20Lerp * 2.0;
  static const z30LerpFactor = z20LerpFactor + z30Lerp * 2.0;
  static const z40LerpFactor = z30LerpFactor + z40Lerp * 2.0;
  static const z100LerpFactor = (1.0 + z100Lerp) * 2.0;

  static const maxFiredBulletVolume = 0.8;
  static const maxBulletExplodedVolume = 1.0;
  static const maxPlayerHitWallVolume = 0.8;
  static const appliedThrustVolume = 0.4;

  static const localhost = 'http://localhost:$PORT';
  static const localbox = 'http://192.168.1.7:$PORT';
  static const cloudbox = 'https://batufo-game.appspot.com';
}
