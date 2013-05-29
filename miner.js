var MINER = window.MINER || {};
$ = jQuery;

Array.prototype.unique = function() {
    var o = {}, i, l = this.length, r = [];
    for(i=0; i<l;i+=1) o[this[i]] = this[i];
    for(i in o) r.push(o[i]);
    return r;
};

(function($) {
    (function() {
        
        var $this = this;
        $this.abs = [];
        $this.words = [];
        $this.allwords = [];
        
        $this.init = function(){
         //include CSS:
         $("head").append("<link id='styles' href='https://raw.github.com/gmergel/miner/master/styles.css' type='text/css' rel='stylesheet' />");
         console.warn("yeah");
        }
        
        $this.getAbs = function(){
          $(".abstract").each(function(key){
            var words = [];
            $this.abs[key] = $(this);
            $this.abs[key].txt = $this.abs[key].text().replace(/^[\s]/g,'').replace(/\s+/g,' ').toLowerCase();
            words = $this.abs[key].txt.split(/\s|,|\.|-|Â»|\/|\\|\(|\)|:|'s/ig).filter(function(value) { return value !== "" && value !== null;});
            $this.abs[key].words = words;
            $this.abs[key].uniqueWords = words.unique().sort();
          }); 
         }
         
         $this.countWords = function(key){
          if(typeof key === 'undefined') return;
          var tf = [];
          $this.abs[key].words.map( function (a) { if (a in tf) tf[a] ++; else tf[a] = 1; } );
          $this.abs[key].tf = tf;
         }
         
         $this.allWords = function(){
          $($this.abs).each(function(key, item){
            $this.allwords = $this.allwords.concat(this.words);
          });
          $this.allwords = $this.allwords.unique().sort();
         }
         
         $this.createBox = function(){
             $this.box = document.createElement('div');
             $this.box.id = 'box';
             var wrapper = document.createElement('div');
             wrapper.id = 'boxWrapper';
             
             $(wrapper).append($this.box);
             $('body').append(wrapper);
         }
        
        this.init();
        
    }).call(MINER);
})(jQuery);
