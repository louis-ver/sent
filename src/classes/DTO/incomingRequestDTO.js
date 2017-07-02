import {InfoFile} from "../../server/actions/classes/infoFile";

class IncomingRequestDTO {
    constructor(outgoingRequestId, file){
        this.id = outgoingRequestId;
        this.file = new InfoFile(file);
    }
}

export default IncomingRequestDTO;
