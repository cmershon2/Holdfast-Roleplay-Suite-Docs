---
sidebar_position: 2
---

# Holdfast Players
This article outlines the key endpoints for managing player interactions within Holdfast Server Monitoring. The following endpoints are covered:

- **Player Join:** Signify when a player joins the server. Create a new player if they don't exist.
- **Player Leave:** Signify when a player leaves the server. Update the player's online status.

Each endpoint requires authentication using a generated token for secure interactions.

---

## Player Join
The "Player Join" endpoint is used to signify that a player has joined the Holdfast server. This requires the server to be online and an active event.

**Endpoint**: `POST /api/holdfast/players/join`

### Request

#### Headers
- `token` (Required): An authentication token generated within your application. This token is used to authenticate requests. The token can be found under `Admin Settings > Manage Tokens`.

#### Request Body
The request body must be in JSON format and contain the following parameter:

- `serverId` (Required, String): The unique identifier for the Holdfast server. The server id can be found under `Admin Settings > Manage Servers`.
- `eventId` (Required, String): The event identifier associated with the server status update.
- `playerId` (Required, String): The unique identifier for the player. This is typically the assigned Steam ID of a user.
- `playerCount` (Required, Number): The current player count on the Holdfast server.

Example request body:

```json
{
  "serverId": "<string>",
  "eventId": "<string>",
  "playerId": "<string>",
  "playerCount": <number>
}
```

:::note
If a player does not yet exist, a new player will be created when the request is sent.
:::

### Response
#### HTTP Status 200
**Success Response for New Player:**
- HTTP Status Code: **`200 OK`**
- Response Body:
- ```json
{
  "message": "New Player Joined",
  "player": {
    "steamId": "<string>",
    "isOnline": <boolean>
  }
}
- Description: Indicates that a new player has joined the server. The response includes the player's Steam ID and their online status.

**Success Response for Existing Player:**
- HTTP Status Code: **`200 OK`**
- Response Body:
- ```json
{
  "message": "New Player Joined",
  "player": {
    "steamId": "<string>",
    "isOnline": <boolean>
  }
}
- Description: Indicates that an existing player has joined the server. The response includes the player's Steam ID and their online status.

### Example
#### Request
```json
POST /api/holdfast/players/join HTTP/1.1
Host: example-domain.com
Content-Type: application/json
token: <your-authentication-token>

{
  "serverId": "holdfast-server-123",
  "eventId": "event-12345",
  "playerId": "player-67890",
  "playerCount": 26
}
```
#### Response
##### New Player
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "New Player Joined",
  "player": {
    "steamId": "1234567890",
    "isOnline": true
  }
}
```

##### Existing Player
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Player Joined",
  "player": {
    "steamId": "1234567890",
    "isOnline": true
  }
}
```
---
## Player Leave
The "Player Leave" endpoint is used to signify that a player has left the Holdfast server. This requires the server to be online and an active event.

**Endpoint**: `POST /api/holdfast/players/leave`

### Request

#### Headers
- `token` (Required): An authentication token generated within your application. This token is used to authenticate requests. The token can be found under `Admin Settings > Manage Tokens`.

#### Request Body
The request body must be in JSON format and contain the following parameters:
- `serverId` (Required, String): The unique identifier for the Holdfast server. The server id can be found under `Admin Settings > Manage Servers`.
- `eventId` (Required, String): The event identifier associated with the server status update.
- `playerId` (Required, String): The unique identifier for the player.
- `playerCount` (Required, Number): The current player count on the Holdfast server.

Example request body:

```json
{
  "serverId": "<string>",
  "eventId": "<string>",
  "playerId": "<string>",
  "playerCount": <number>
}
```
### Response
#### HTTP Status 200
**Success Response:**
- HTTP Status Code: **`200 OK`**
- Response Body:
- ```json 
{
  "message": "Player Left",
  "player": {
    "steamId": "<string>",
    "isOnline": <boolean>
  }
}

- Description: Indicates that a player has left the server. The response includes the player's Steam ID and their online status.
### Example
#### Request
```json
POST /api/holdfast/players/leave HTTP/1.1
Host: example-domain.com
Content-Type: application/json
token: <your-authentication-token>

{
  "serverId": "holdfast-server-123",
  "eventId": "event-12345",
  "playerId": "player-67890",
  "playerCount": 25
}
```
#### Response
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Player Left",
  "player": {
    "steamId": "1234567890",
    "isOnline": false
  }
}
```