import IncomingRequestDTO from "./DTO/incomingRequestDTO";

class IncomingRequest extends IncomingRequestDTO {
    constructor(incomingRequestDTO, sender){
        super(incomingRequestDTO.id, incomingRequestDTO.file);
        this.sender = sender;
    }
}

export default IncomingRequest;
