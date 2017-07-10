AFRAME.registerComponent('opencloseabwurfcap', {       
  schema:{
    open : {default: '0 0 0'},
    close :   {default: '0 0 -45'},
    dur : {default: 300},
  },

  init: function(){
    var data= this.data;
    var el= this.el;

    var move = document.createElement("a-animation");
    move.setAttribute("begin","click");
    move.setAttribute("attribute", "rotation");
    move.setAttribute("from", data.close)
    move.setAttribute("to", data.open);
    move.setAttribute("dur", data.dur);
    move.setAttribute("direction", "alternate");

    el.appendChild(move);

  }
});