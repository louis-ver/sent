class InfoFile{
    constructor(file){
        this.name = file.name;
        this.size = file.size;
        this.path = file.path;
        this.type = file.type;
    }
}
module.exports = {
    InfoFile
}