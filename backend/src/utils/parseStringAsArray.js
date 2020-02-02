module.exports = function parceStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}