module.exports = function (array) {
    var output = []
    var index = 0;
    var size = array.length
    for(; index < size; index++) {
        var item = array[index]
        var outputLastItem = output[output.length - 1]
        if (outputLastItem !== item) {
            output.push(item)
        }
    }
    return output
}
