// Network messages
var JOINMessage = {
  type: "JOIN",
  user: { name: "Simon", icon: "Bonhomme" }
};

var ASKMessage = {
  type: "ASK",
  file: {
    name: "todo2017-05-05.txt",
    length: 75,
    type: "text/plain",
    hash: "ff893030ffa59fd0c328118df5f8b5c2"
  },
  time: "2017-05-05 14:33:32"
};

// Action message
var JOINMessage = {
  type: "JOIN",
  content: {
    user: { ip: "10.0.0.1", name: "Simon", icon: "Bonhomme" }
  }
};

var ASKMessasge = {
  type: "ASK",
  content: {
    user: { ip: "10.0.0.1", name: "Simon", icon: "Bonhomme" },
    file: {
      name: "todo2017-05-05.txt",
      length: 75,
      type: "text/plain",
      hash: "ff893030ffa59fd0c328118df5f8b5c2"
    },
    time: "2017-05-05 14:33:32"
  }
};
