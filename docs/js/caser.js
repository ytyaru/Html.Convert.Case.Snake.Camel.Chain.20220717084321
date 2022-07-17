class Snake {
    static toCamel(str, isUpper=false) {
        return str.split('_').map((word, i)=>{
            if (i === 0 && !isUpper) { return word.toLowerCase(); }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }
    static toChain(str, isUpper=false) {
        if (isUpper) { return str.replace('_', '-').toUpperCase() }
        else { return str.replace('_', '-').toLowerCase() }
    }
}
class Camel {
    static toSnake(str, isUpper=false) {
        if (isUpper) { return str.split(/(?=[A-Z])/).join('_').toUpperCase() }
        else { return (str.charAt(0) + str.slice(1)).split(/(?=[A-Z])/).join('_').toLowerCase() }
    }
    static toChain(str, isUpper=false) {
        if (isUpper) { return str.split(/(?=[A-Z])/).join('-').toUpperCase() }
        else { return (str.charAt(0) + str.slice(1)).split(/(?=[A-Z])/).join('-').toLowerCase() }
    }
}
class Chain {
    static toCamel(str, isUpper=false) {
        return str.split('-').map((word, i)=>{
            if (i === 0 && !isUpper) { return word.toLowerCase(); }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }
    static toSnake(str, isUpper=false) {
        if (isUpper) { return str.replace('-', '_').toUpperCase() }
        else { return str.replace('-', '_').toLowerCase() }
    }
}
