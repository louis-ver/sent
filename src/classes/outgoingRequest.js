const uuid = require("uuid");
import UserRequest from "./userRequest";

class OutgoingRequest {
    constructor(users, file){
        this.id = uuid();
        this.users = [];
        users.forEach(user => {
            this.users.push(new UserRequest(user));
        });
        this.file = file;
    }
}

export default OutgoingRequest;