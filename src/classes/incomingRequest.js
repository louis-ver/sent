import RequestTypes from '../constants/RequestTypes';
import Guid from "guid";

class IncomingRequest {
    constructor(fileName, fileSize){
        this._fileName = fileName;
        this._fileSize = fileSize;
        this._status = RequestTypes.WAITING;
        this._guid = Guid.raw();
    }

    get fileName(){return this._fileName;}
    set fileName(fileName){this._fileName = fileName;}
    get fileSize(){return this._fileSize;}
    set fileSize(fileSize){this._fileSize = fileSize;}
    get status(){return this._status;}
    set status(status){this._status = status;}
    get guid(){return this._guid;}
}

export default IncomingRequest;