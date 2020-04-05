# Multiplayer Client-Server Architecture

## Terms

### Latency aka RTT aka Ping

- round trip time is the time for a client message to result in a received server message
- the larger the RTT is, the larger is the latency

#### Jitter

- the rate of change in the RTT

### Authorative Server

- game happens in server under our control
- clients just send inputs and render world as similated by the server

### Lockstep

- client waits for server messages before updating or rendering anything
- used in Doom, worked well over LAN, but was unplayable over the internet

## Server Time Step

- goal decouple server updates from client command frequency
- queue player inputs without any processing (game loop does not run yet)
- instead game loop runs at much lower frequency i.e. every 100ms (time step)
- applies all queued player inputs
  - to make physics more realistic they may be applied at smaller time deltas
- then we take snapshot of resulting game state and broadcast to clients
- in order for client to successfully predict other entities in between updates it needs to
  have sufficient info, in our game that means knowing the players + bullets velocity vectors

### Prediction

- predict local player and other entities from last given state
- when we get server state we'll _correct_ our prediction
- best done via shared game simulation code
- the more deterministic our game is the better the result
- use message IDs to be able to replay commands that server hasn't received yet [see](https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html#server-reconciliation)


### Dead Reckoning

- using prediction to _guess_ the position and other state of a given entity given last update
  received from the server
- we correct our assumptions once the next server update arrives
- falls down when game state is less predictable, i.e. if player direction changes frequently

### Smoothing

- correcting client position to position sent by server in one step may lead to jumps
- instead we can correct position slowly over time to make it look _smoother_
- if interpolation work properly smoothing is not required as we know ahead of time where the
  entity will be

### Interpolation

- on the client show all entities except the player we control in the past
- buffer server game state messages and replay positions of other players delayed
  - usually two packets behind
- as a result we see ourselves in the present but everyone else in the past
- as this adds more lag to the opponents it makes lag compensation more importantXC
- adds client complexity

### Lag Compensation

- due to network lag and interpolation we're aiming at opponent's past positions
- to fix the server does the following
  - reconstructs the world as we saw it when we fired shot (takes step back in time)
  - this means all entities are moved back to where they were in that past
  - then processes our action and determines result of shot as it would have happened in the
    past
  - then moves game state back to present and sends snapshot - note that if present state is affected by outcome of player action applied in the past that needs to be applied to that present game state
- adds server complexity


## Resources

- [Fast-Paced Multiplayer four parts](https://www.gabrielgambetta.com/client-server-game-architecture.html)
- [Making Fast-Paced Multiplayer Networked Games is Hard](https://www.gamasutra.com/blogs/MarkMennell/20140929/226628/Making_FastPaced_Multiplayer_Networked_Games_is_Hard.php)

### Valve

- [Prediction](https://developer.valvesoftware.com/wiki/Prediction)
- [Interpolation](https://developer.valvesoftware.com/wiki/Interpolation)
- [Lag Compensation](https://developer.valvesoftware.com/wiki/Lag_compensation)
- [Interpolation / Latency
  Compensation](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization)
- [Source Multiplayer
  Networking](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking)

### IT Hare on Software

- [Game Entities and Interactions](http://ithare.com/chapter-ii-game-entities-and-interactions-from-upcoming-book-development-and-deployment-of-mmog/)
- [On Cheating, P2P, and non-Authoritative Servers](http://ithare.com/chapter-iii-on-cheating-p2p-and-non-authoritative-servers-from-dd-of-mmog-book/)
- [MMOG. RTT, Input Lag, and How to Mitigate Them](Http://ithare.com/mmog-rtt-input-lag-and-how-to-mitigate-them/)
- [MMOG: World States and Reducing Traffic](http://ithare.com/mmog-world-states-and-reducing-traffic/)
- [MMOG. Point-to-Point Communications and non-blocking RPCs](http://ithare.com/mmog-point-to-point-communications-and-non-blocking-rpcs/)

### Gaffer On Games

- [Deterministic Lockstep](https://gafferongames.com/post/deterministic_lockstep/)
- [State Synchronization](https://gafferongames.com/post/state_synchronization/)
- [Snapshot Interpolation](https://gafferongames.com/post/snapshot_interpolation/)

### Unreal

- [Unreal Engine 2: Unreal Networking
  Architecture](https://docs.unrealengine.com/udk/Three/NetworkingOverview.html)
- [Unreal Engine 4: Networking Overview](https://docs.unrealengine.com/en-US/Gameplay/Networking/Overview/index.html)



# Strategies to Apply Multiplayer Techniquest to Our Game

## Main Strategy Used

- authoratative server sending updates every 100ms
- client updates are limited to 10/second
- client side prediction is used to exrapolate opponent's position from previous position and
  their velocity
- other players and bullets are predicted on the client from previous position and velocity
  - same controllers as on server are used which allows us to predict collisions client side as
    well
- use dead reckoning to correct client predictions, both for opponents and bullets as well as
  our own player


## Limiting Player Inputs

- require 100ms between each shot
  - instead of sending a key press we send `bulletCreated(angle)`
- require 100ms between each thrust
  - instead of sending key press we send `appliedThrust(anger)`
  - server then calculates velocity
- instead of sending rotation input we send `updatedAngle(angle)`
- change of player angle happens in real time but is reported to the server at a 100ms interval
  even if no other client action occured

## Server Processing of Player Inputs

- delay execution of action until server tick
  - in the worst case bullet is trailing client side prediction by 100ms
- find way to align client input ticks to server ticks

## To be seen

- test how well dead reckoning works for our game and try the following if we end up with lots
  of player position jumps
- apply smooting to correct position slowly over time
- if nothing else works look into interpolation

## Smaller Packets

- if packets get too large we can omit bullet positions
  - instead rely on client prediction to show bullets in flight
  - use server to report created bullets `createBullet(bulletID, position, velocity)`
    - after that client predicts positions
  - and exploded bullets
    - `explodedBullet(bulletID, position)`
- alternative is to limit amount of bullets / ammo available