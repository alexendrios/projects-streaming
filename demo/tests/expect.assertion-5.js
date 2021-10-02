module.exports = {
    "Assert Library demo tests" : (client) => {
        client
        .url('https://ultimateqa.com/filling-out-forms/')
        .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
        .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },

    "Should assert form field value": (client) => {
        client.setValue('#et_pb_contact_name_0', 'Dimitri Harding')
        client.assert.valueContains('#et_pb_contact_name_0', 'Dimitri')
    },

    "Should assert current url": (client) => {
        client.assert.urlEquals('https://ultimateqa.com/filling-out-forms/')
    }
};