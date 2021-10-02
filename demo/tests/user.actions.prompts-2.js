module.exports = {
    "Should perform key strokes": (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .setValue('#et_pb_contact_message_0', 'testing key strokes')
        .keys(client.Keys.BACK_SPACE)
        .keys(client.Keys.BACK_SPACE)
        .keys(client.Keys.ENTER)
        .keys(client.Keys.SUBTRACT)
        .pause(5000)
     }
}