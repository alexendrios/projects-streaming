const elements = {
    post: 'article'
};

const commands = [

];

module.exports = {
   elements: elements,
   commands: commands,

   url: function() {
       return `${this.api.launchUrl}/?s`
   }
}