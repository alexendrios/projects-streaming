module.exports = {
    'demo Test' : function(browser) {
       browser
       .url('https://www.ultimateqa.com/filling-out-forms')
       .element('css selector', 'body', function(result) {
         console.log(result.value)
       });
     },
   
     'es6 async demo Test': async function(browser) {
       const result = await browser.element('css selector', 'body');
       console.log('result value is:', result.value);
     }
   }