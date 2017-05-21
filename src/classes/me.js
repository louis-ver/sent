class Me {
    constructor(name){
        this._name = name;
        this._color = "#6E00B9"; 
    }

    get name() {return this._name;}
    set name(name) {this._name = name;}
    get color() {return this._color;}
    set color(color){this._color = color;}
}

export default Me;