import {InfoFile} from "../../server/actions/classes/infoFile";

class IncomingRequestDTO {
    constructor(outgoingRequestId, files){
        let file = files.length ? files[0] : files;
        this.id = outgoingRequestId;
        this.file = new InfoFile(file);
    }
}

export default IncomingRequestDTO;
