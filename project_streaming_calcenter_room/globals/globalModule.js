const fs = require('fs')

module.exports = {

    before: (done) => {
        done();
    },


    after: (done) => {
        done();
    },
    beforeEach: (client, done) => {
        done()
    },

    afterEach: (client, done) => {
        done()
    },
    reporter: (results, done) => {
        fs.writeFile('testresults.json', JSON.stringify(results, null, '\t'), (err) => {
            if (err) throw err;
            console.log('report saved');
            done();
        });
    }
}
