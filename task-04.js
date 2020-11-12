class StringBuilder { 
    constructor(string) { 
        this._value = string;

    }
    get value() { 
        return this._value
    }
    append = function (str) { 
        this._value += str
    }
    prepend = function (str) { 
        this._value = str + this._value 
    }
    pad = function (str) { 
        this._value = str +  this._value + str
    }
}
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='