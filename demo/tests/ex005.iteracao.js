module.exports = {
    "Iteração de Elementos": (browser) => {
          browser
          .url('https://www.google.com.br/')
          .waitForElementVisible('div.a4bIc > input')
          .setValue('div.a4bIc > input', 'testing')
          .waitForElementVisible('input.gNO89b')
          .click('input.gNO89b')
          .waitForElementVisible('#tw-source-text-ta')
          .getText('#tw-source-text-ta', (result) =>{
              console.log(result)
          })
          .getText('#tw-source-text-ta', (result) =>{
            console.log(result.value)
        })
          
    }
};