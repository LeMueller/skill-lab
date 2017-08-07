AFRAME.registerComponent('openclosedrawer',{

  schema: {
    open : {default: '1.8 0 0.1'},
    close : {default: '0 0 0.1'},
    dur : {default: 300},
    closed : {default: "true"},
    
  },

  init: function (){
    var data= this.data;
    var el=this.el;
    
    var move=document.createElement("a-animation");
    move.setAttribute("begin","click");
    move.setAttribute("attribute", "position");
    move.setAttribute("from", data.close)
    move.setAttribute("to", data.open);
    move.setAttribute("dur", data.dur);
    move.setAttribute("direction", "alternate");

    el.appendChild(move);      

  }
});

