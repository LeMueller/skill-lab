AFRAME.registerComponent('infusioncutlery',{
  schema:{
    
    message:{type:"string", default:"move to camera"},
    position:{default:'1 1 1'},
    rotation:{default:'0 90 0'},
    movetocamerap : {default:''},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;
    var capstatus=0;
    
    var infusioncutleryopened=document.querySelector("#infusioncutleryopen");
    var infusioncutlerycap=document.querySelector("#infusioncutlerycap");
    var switchwheel = document.querySelector("#switchwheel");
    
    
    el.addEventListener('click', function(){
      //alert("clcik");
      if(status === 0){
        infusioncutlerymovetocamera(el);
      }else if(status === 1){
        infusioncutleryrotatetobacksite(el);
      }else if(status === 2){
        infusioncutlerymovetodesk(el);
      }else if(status === 3){
        infusioncutleryopen(el, infusioncutleryopened, infusioncutlerycap);
      }
      if(status<=3){
         status++;
      }
    });
    
    /**
    //alert(infusioncutlerycap);
    infusioncutlerycap.addEventListener('click',function(){
      alert("capclick");
      if(capstatus===0){
        infusioncutlerycapoff(infusioncutlerycap);
      }else if(capstatus===1){
        
      }
      if(capstatus<=1){
        capstatus++;
      }
    });**/
  },
});

function infusioncutlerymovetocamera(el){
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '4.896 10.5 -0.19');
  move.setAttribute("dur", 300);

  el.appendChild(move);

};

function infusioncutleryrotatetobacksite(el){
  //alert("rotate to backsite");
  //el.setAttribute("rotation", "0 120 0");

  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '-90 90 0');
  move.setAttribute("dur", 300);

  el.appendChild(move);
}

function infusioncutlerymovetodesk(el){
  
  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);
  
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '2.222 6.967 1.384');
  move.setAttribute("dur", 300);
  
  var move2 = document.createElement("a-animation");
  move2.setAttribute("begin","0");
  move2.setAttribute("attribute", "rotation");
  move2.setAttribute("to", '0 0 0');
  move2.setAttribute("dur", 300);

  el.appendChild(move);
  el.appendChild(move2);

};

function infusioncutleryopen(el, infusioncutleryopened, infusioncutlerycap){
  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);
  el.removeChild(oldMove[0]);
  
  el.setAttribute("visible", "false");
  
  infusioncutleryopened.setAttribute("visible", "true");
  infusioncutlerycap.setAttribute("visible", "true");
  switchwheel.setAttribute("visible", "true");
  
}
/**
function infusioncutlerycapoff(infusioncutlerycap){
  alert("infusioncutlerycapoff");
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '0.022 0.676 -0.8');
  move.setAttribute("dur", 300);
  
  infusioncutlerycap.appendChild(move);
}
**/
