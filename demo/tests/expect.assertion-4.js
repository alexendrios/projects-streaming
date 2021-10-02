module.exports = {
    "Assert Library demo tests" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },

    "Should assert form field value": (client) => {
        client.setValue('#et_pb_contact_name_0', 'Dimitri Harding')
        client.assert.value('#et_pb_contact_name_0', 'Dimitri')
    }
};