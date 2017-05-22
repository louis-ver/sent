class User {
    constructor(ip, name, incomingRequests = []){
        this._ip = ip;
        this._name = name;
        this._incomingRequests = incomingRequests;
    }

    get ip() {return this._ip;}
    set ip(ip) {this._ip = ip;}
    get name() {return this._name;}
    set name(name) {this._name = name;}
    get incomingRequests() {return this._incomingRequests;}
    set incomingRequests(incomingRequests) {this._incomingRequests = incomingRequests;}
}

export default User;