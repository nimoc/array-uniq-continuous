var uniqc = require('../index')
it('basic', function () {
    expect(uniqc([1, 1, 2, 3, 1, 1])).toEqual([1, 2, 3, 1])
    expect(uniqc(['1', 1, 2, 3, 1, 1])).toEqual(['1', 1, 2, 3, 1])
    expect(uniqc(['','','','','1','','','2','',''])).toEqual(["", "1", "", "2", ""])
})
