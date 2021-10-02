module.exports = {
    // This is ran before our suite gets executed
    before: (client) => {
        console.log('Starting up')
    },

    // This is ran after our suite was executed
    after: (client) => {
      console.log('Closing down')
    },

    // This will be run before each test within our suite
    beforeEach: (client) => {
        client.url('https://ultimateqa.com/filling-out-forms')
    },

    // This will be run after each test within our suite
    afterEach: (client) => {
       console.log('Test completed')
    },

    "Should verify page tile": (client)=> {
        client.expect.title().which.contains('Filling Out')
    },

    "Should verify page url" : (client) => {
        client.expect.url().which.contains('filling-out-forms')
    },
};