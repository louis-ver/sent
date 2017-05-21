class OutgoingRequest{
    constructor(userTransfers, file){
        this._userTransfers = userTransfers;
        this._file = file;    
    }

    get userTransfers(){return this._userTransfers;}
    set userTransfers(userTransfers){this._userTransfers = userTransfers;}
    get file(){return this._file;}
    set file(file){this._file = file;}
}

export default OutgoingRequest;