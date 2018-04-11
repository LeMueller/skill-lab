AFRAME.registerComponent('portfolio', {       
  schema:{
    openPosition : {default: '0 0 0'},
    openRoataion : {default: '0 0 0'},
    closePosition :   {default: '0.007 0.019 0'},
    closeRotation : {default: '0 0 -122.728'},
    ontablePosition : {default: '-0.57 0.684 -0.94'},
    ontableRotation : {default: '0 -90 -1.43'},
    infrontofeyesPosition : {default: '0 1.109 -0.45'},
    infrontofeyesRotation : {default: '0 -90 -70'},
    dur : {default: 500},
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    
    var foregroundOfPortfolio = el.querySelector("#foregroundOfPortfolio");
    
    var hookname = el.querySelector("#hookname");
    var hookdrug = el.querySelector("#hookdrug");
    var hookdose = el.querySelector("#hookdose");
    var hookiv = el.querySelector("#hookiv");
    var hookcf = el.querySelector("#hookcf");
    
    //alert(hookname.getAttribute("checked"));
    //alert(hookdrug.getAttribute("checked"));
    //alert(hookdose.getAttribute("checked"));
    //alert(hookname.getAttribute("checked"));
    //alert(hookname.getAttribute("checked"));
    
    el.addEventListener('click', function(){
      //alert(foregroundOfPortfolio);
      if(hookname.getAttribute("checked")=="true" && hookdrug.getAttribute("checked")=="true" && hookdose.getAttribute("checked")=="true" && hookiv.getAttribute("checked")=="true" && hookcf.getAttribute("checked")=="true"
        ){
      close(foregroundOfPortfolio, data.openPosition, data.closePosition, data.openRotation, data.closeRotation, data.dur);
      setOnTable(el, data.infrontofeyesPosition, data.ontablePosition, data.infrontofeyesRotation, data.ontableRotation, data.dur);
      //this.removeEventListener('click',arguments.callee,false);
      hidehooks(hookname, hookdrug, hookdose, hookiv, hookcf);
      }else{
        //alert("5-R ?");//forget to check 5-R?
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
  //alert("setontable");
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
  
    //alert("move2");
  
    var t = setTimeout(function(){
    el.removeChild(move);
    el.removeChild(move2);
    },600); 
}

function hidehooks(hookname, hookdrug, hookdose, hookiv, hookcf){
  hookname.setAttribute("visible","false");
  hookdrug.setAttribute("visible","false");
  hookdose.setAttribute("visible","false");
  hookiv.setAttribute("visible","false");
  hookcf.setAttribute("visible","false");
}
