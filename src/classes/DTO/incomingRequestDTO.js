import {InfoFile} from "../../server/actions/classes/infoFile";

class IncomingRequestDTO {
    constructor(outgoingRequestId, files){
      debugger;
        this.id = outgoingRequestId;
        this.file = new InfoFile(files[0]);
    }
}

export default IncomingRequestDTO;
