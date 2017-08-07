AFRAME.registerComponent('drawerwithinfusioncutlery',{

  schema: {
    open : {default: '1.8 0 0.1'},
    close : {default: '0 0 0.1'},
    dur : {default: 300},
    moveWithInfusion :{default: true},
  },
  
  init: function(){
    var data=this.data;
    var el=this.el;
    var closed=true;
    var infusion=document.querySelector("#infusioninpack");
    var moveWithInfusion = data.moveWithInfusion;
    
    infusion.addEventListener("click",function(){
      moveWithInfusion=false;
    });

    el.addEventListener("click",function(){
      if(moveWithInfusion===true){
        if(closed === true){
          open(el, data.close, data.open, data.dur);
          open(infusion, '1.24 4.439 1.555', '3.04 4.439 1.555', data.dur);
          closed=false;
        }else if(closed===false){
          open(el, data.open, data.close, data.dur);
          open(infusion, '3.04 4.439 1.555', '1.24 4.439 1.555', data.dur);
          closed=true;
        }   
      }else if(moveWithInfusion===false){       
        if(closed === true){
          open(el, data.close, data.open, data.dur);
          closed=false;
        }else if(closed===false){
          open(el, data.open, data.close, data.dur);
          closed=true;
        }   
      }  
    });   
  },
});

function open(el, close, open, dur){
  var move=document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("from", close)
  move.setAttribute("to", open);
  move.setAttribute("dur", dur);
  el.appendChild(move);
  var t = setTimeout(function(){
    el.removeChild(move);
  },300);
}
