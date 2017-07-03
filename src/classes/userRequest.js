import { requestStatus } from "../constants/requests";

class UserRequest {
    constructor(user){
        this.user = user;
        this.status = requestStatus.WAITING;
        this.progress = 0;
    }
}

export default UserRequest;
