module.exports = {
    'demo Test' : function(browser) {
       browser
       .url('https://www.ultimateqa.com/filling-out-forms')
       .elements('css selector', 'input[type="text"]', function(result) {
         console.log(result.value)
       });
     }
   }