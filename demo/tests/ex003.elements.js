module.exports = {
    'demo Test': function (browser) {
        browser
        .url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementNotVisible('button[name="et_builder_submit_button"]')
    }
}