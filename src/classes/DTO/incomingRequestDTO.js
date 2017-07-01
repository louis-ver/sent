class IncomingRequestDTO {
    constructor(outgoingRequestId, file){
        this.id = outgoingRequestId;
        this.file = file;
    }
}

export default IncomingRequestDTO;
