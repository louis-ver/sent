class UserTransfer{
    constructor(ip, state){
        this._ip = ip;
        this._state = state;
    }

    get ip(){return this._ip;}
    set ip(ip){this._ip = ip;}
    get state(){return this._state;}
    set state(state){this._state = state;}
}