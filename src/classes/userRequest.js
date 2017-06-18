import { requestType, requestStatus } from "../constants/requests";

class UserRequest {
    constructor(userId){
        this.id = userId;
        this.status = requestStatus.WAITING;
        this.progress = 0;
    }
}

export default UserRequest;
