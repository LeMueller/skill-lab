AFRAME.registerComponent('handwashing', {       
  schema:{
    open : {default: '0 -0.07 0'},
    close :   {default: '0 0 0'},
    dur : {default: 500},
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    var handleusing = false;
    
    var clock = document.querySelector("#clock");
    
    el.addEventListener('click', function(){
      handleDownUp(el, data.open, data.close);      
      //alert(clock);
      clock.emit("handwashing");
    });

    

  }
});

function handleDownUp(el, open, close){
  handleDown(el, open, close);
  var t = setTimeout(function(){
    handleUp(el,open,close);
  },300);
}

function handleDown(el, open, close){
  var move = document.createElement("a-animation");
    move.setAttribute("begin","0");
    move.setAttribute("attribute", "position");
    move.setAttribute("from", close)
    move.setAttribute("to", open);
    move.setAttribute("dur", 300);
    
    el.appendChild(move);
  
    var t = setTimeout(function(){
    el.removeChild(move);
    },600); 
}

function handleUp(el, open, close){
  
  var move = document.createElement("a-animation");
    move.setAttribute("begin","0");
    move.setAttribute("attribute", "position");
    move.setAttribute("from", open)
    move.setAttribute("to", close);
    move.setAttribute("dur", 500);
    
    el.appendChild(move);
  
    var t = setTimeout(function(){
    el.removeChild(move);
    },600);
}