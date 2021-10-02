module.exports = {
    "Should perform key strokes": (client) => {
        client
        .url('[https://ultimateqa.com/filling-out-forms/](https://ultimateqa.com/filling-out-forms/)', () => {
            console.log(JSON.stringify(client.Keys, null, '\t'))
        })
     }
}