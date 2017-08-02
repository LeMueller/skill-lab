AFRAME.registerComponent('portfolio', {       
  schema:{
    openPosition : {default: '0 0 0'},
    openRoataion : {default: '0 0 0'},
    closePosition :   {default: '0.007 0.019 0'},
    closeRotation : {default: '0 0 -122.728'},
    ontablePosition : {default: '-0.57 0.684 -0.94'},
    ontableRotation : {default: '0 -90 -1.43'},
    infrontofeyesPosition : {default: '0 1.109 -0.09'},
    infrontofeyesRotation : {default: '0 -90 -70'},
    dur : {default: 500},
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    var status=10;
    
    var foregroundOfPortfolio = el.querySelector("#foregroundOfPortfolio");
    
    el.addEventListener('click', function(){
      //alert(foregroundOfPortfolio);
      if(status===10){
      close(foregroundOfPortfolio, data.openPosition, data.closePosition, data.openRotation, data.closeRotation, data.dur);
      setOnTable(el, data.infrontofeyesPosition, data.ontablePosition, data.infrontofeyesRotation, data.ontableRotation, data.dur);
      //this.removeEventListener('click',arguments.callee,false);
        status++;
      }
    });
  }
});

function close(el, openP, closeP, openR, closeR, dur){
  var move = document.createElement("a-animation");
    move.setAttribute("begin","0");
    move.setAttribute("attribute", "position");
    move.setAttribute("from", openP)
    move.setAttribute("to", closeP);
    move.setAttribute("dur", dur);
    
    el.appendChild(move);
  
  var move2 = document.createElement("a-animation");
    move2.setAttribute("begin","0");
    move2.setAttribute("attribute", "rotation");
    move2.setAttribute("from", openR)
    move2.setAttribute("to", closeR);
    move2.setAttribute("dur", dur);
    
    el.appendChild(move2);
  
    var t = setTimeout(function(){
    el.removeChild(move);
    el.removeChild(move2);
    },600); 
}

function setOnTable(el, eyesP, tableP, eyesR, tableR, dur){
  var move = document.createElement("a-animation");
    move.setAttribute("begin","0");
    move.setAttribute("attribute", "position");
    move.setAttribute("from", eyesP)
    move.setAttribute("to", tableP);
    move.setAttribute("dur", dur);
    
    el.appendChild(move);
  
  var move2 = document.createElement("a-animation");
    move2.setAttribute("begin","0");
    move2.setAttribute("attribute", "rotation");
    move2.setAttribute("from", eyesR)
    move2.setAttribute("to", tableR);
    move2.setAttribute("dur", dur);
    
    el.appendChild(move2);
  
    var t = setTimeout(function(){
    el.removeChild(move);
    el.removeChild(move2);
    },600); 
}
