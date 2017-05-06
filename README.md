# Sent Communication Protocol

## Connection and Network Topology

### Joining
When the application is launched, a `JOIN` message is broadcast to all other clients on the network. The format of a `JOIN` message is as follows:

```
{"type": "JOIN",
 "user": {
    "name": "John Appleseed",
    "ip": "75.34.652.12"
 }
}
```

Upon receiving a message of type `JOIN`, a receiver responds with a `PING` message, that will inform the newly joined user of the currently connected users. A `PING` message resembles the `JOIN` message in format:

```
{"type": "PING",
 "user": {
    "name": "Bob Dole",
    "ip": "75.34.652.13"
  }
}
```
### Leaving

When a user closes the application, a `LEAVE` message is broadcast to all other clients on the network. This is done to notify others that a peer has left the network and is no longer available to receive files. The format is as follows:

```
{"type": "LEAVE",
 "user": {
    "name": "Bob Dole",
    "ip": "75.34.652.13"
  }
}
```


## Sending a file

### Getting Permission
A sender must first obtain permission from the receiver before initiating a file transfer. This is done through a `ASK` message. The `ASK` format is as follows:
```
{"type": "ASK",
 "sender": {
    "name": "John Appleseed",
    "ip": "75.34.652.12"
 },
  "receivers": [{
    "name": "Bob Dole",
    "ip": "75.34.652.13"
  }],
  "file": {
    "name": "todo2017-05-05.txt",
    "size": "75",
    "type": "text/plain",
    "hash": "ff893030ffa59fd0c328118df5f8b5c2"
  },
  "time": "2017-05-05 14:33:32"
}
```

### Accepting or Refusing a Transfer Request
The receiver has the option to either accept or deny an incoming file transfer. If the receiver accepts, the transfer will start as soon as the transfer initiator receives and acknowledges the response. If the receiver refuses the request, the transfer will not be initiated, and the sender will be notified.

The format of the `ACCEPT` and `DENY` messages are as follows:

`ACCEPT`
```
{"type": "ACCEPT",
 "sender": {
   "name": "John Appleseed",
   "ip": "75.34.652.12"
 },
 "receiver": {
   "name": "Bob Dole",
   "ip": "75.34.652.13"
 },
 "file": {
   "name": "todo2017-05-05.txt",
   "size": "75",
   "type": "text/plain",
   "hash": "ff893030ffa59fd0c328118df5f8b5c2",
 },
 "time": "2017-05-05 14:34:04"
}
```

`REFUSE`
```
{"type": "REFUSE",
 "sender": {
  "name": "John Appleseed",
  "ip": "75.34.652.12"
 },
 "receiver": {
   "name": "Bob Dole",
   "ip": "75.34.652.13"
 },
 "file": {
   "name": "todo2017-05-05.txt",
   "size": "75",
   "type": "text/plain",
   "hash": "ff893030ffa59fd0c328118df5f8b5c2"
 },
 "time": "2017-05-05 14:34:04"
}
```

Once the `ACCEPT` message is received by the initiator, the file transfer can begin.
