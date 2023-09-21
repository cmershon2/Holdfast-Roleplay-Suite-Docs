---
sidebar_position: 1
---

# Holdfast Server Monitoring
This article outlines the key endpoints for Holdfast Server Monitoring, allowing you to manage and track the status of your Holdfast server seamlessly. The following endpoints are covered:

- **Start Server:** Initiate the server and begin receiving heartbeat updates.
- **Heartbeat:** Continuously update the server status and player count.
- **End Server:** Mark the server as stopped, ending heartbeat updates.

Each endpoint requires authentication using a generated token for secure interactions.

---

## Start Server
The "Start Server" endpoint is used to signify that the Holdfast server has started, and it will begin sending heartbeat updates to the API.

**Endpoint**: `POST /api/holdfast/server/start`

### Request

#### Headers
- `token` (Required): An authentication token generated within your application. This token is used to authenticate requests. The token can be found under `Admin Settings > Manage Tokens`.
#### Request Body
The request body must be in JSON format and contain the following parameter:

- `serverId` (Required, String): The unique identifier for the Holdfast server. The server id can be found under `Admin Settings > Manage Servers`.

Example request body:

```json
{
  "serverId": "clmtbvabj0000gx1330ajafyb"
}
```

### Response
#### HTTP Status 200
**Success Response:**
- HTTP Status Code: **`200 OK`**
- Response Body:
- ```json
{
  "message": "Server start recorded successfully",
  "event_id": "auto-generated-event-id"
}


- Description: Indicates that the server start has been successfully recorded, and an event_id is provided for reference.

### Example
#### Request
```json
POST /api/holdfast/server/start HTTP/1.1
Host: example-domain.com
Content-Type: application/json
token: <your-authentication-token>

{
  "serverId": "holdfast-server-123"
}
```
#### Response
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Server start recorded successfully",
  "event_id": "event-12345"
}
```
---
## Server Heartbeat
The "Heartbeat" endpoint is used to provide short, consecutive updates from the Holdfast server regarding its status and player count.

**Endpoint**: `POST /api/holdfast/server/heartbeat`

### Request

#### Headers
- `token` (Required): An authentication token generated within your application. This token is used to authenticate requests. The token can be found under `Admin Settings > Manage Tokens`.

#### Request Body
The request body must be in JSON format and contain the following parameters:
- `serverId` (Required, String): The unique identifier for the Holdfast server. The server id can be found under `Admin Settings > Manage Servers`.
- `eventId` (Required, String): The event identifier associated with the server status update. This is provided from the Server Start endpoint.
- `playerCount` (Required, Number): The current player count on the Holdfast server.

Example request body:

```json
{
  "serverId": "<string>",
  "eventId": "<string>",
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
  "message": "Server heartbeat recorded successfully",
  "event_id": "<string>"
}
- Description: Indicates that the server heartbeat has been successfully recorded, and an `event_id` is provided for reference.
### Example
#### Request
```json
POST /api/holdfast/server/heartbeat HTTP/1.1
Host: example-domain.com
Content-Type: application/json
token: <your-authentication-token>

{
  "serverId": "holdfast-server-123",
  "eventId": "event-12345",
  "playerCount": 25
}
```
#### Response
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Server heartbeat recorded successfully",
  "event_id": "event-12345"
}
```
---
## End Server
The "End Server" endpoint is used to signify that the Holdfast server has stopped, and it will no longer be receiving heartbeat updates from this point onward.

**Endpoint**: `POST /api/holdfast/server/end`

### Request
#### Headers
- `token` (Required): An authentication token generated within your application. This token is used to authenticate requests. The token can be found under `Admin Settings > Manage Tokens`.

#### Request Body
The request body must be in JSON format and contain the following parameters:
- `serverId` (Required, String): The unique identifier for the Holdfast server. The server id can be found under `Admin Settings > Manage Servers`.
- `eventId` (Required, String): The event identifier associated with the server status update. This is provided from the Server Start endpoint.
- `playerCount` (Required, Number): The final player count on the Holdfast server before it stopped.

Example request body:

```json
{
  "serverId": "<string>",
  "eventId": "<string>",
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
  "message": "Server end recorded successfully",
  "event_id": "<string>"
}
- Description: Indicates that the server end has been successfully recorded, and an event_id is provided for reference.

### Example
Request
```json
POST /api/holdfast/server/end HTTP/1.1
Host: example-domain.com
Content-Type: application/json
token: <your-authentication-token>

{
  "serverId": "holdfast-server-123",
  "eventId": "event-12345",
  "playerCount": 0
}
```
Response
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Server end recorded successfully",
  "event_id": "event-12345"
}

```