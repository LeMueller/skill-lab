AFRAME.registerComponent('infusioncutlery',{
  schema:{
    
    message:{type:"string", default:"move to camera"},
    position:{default:'1 1 1'},
    rotation:{default:'0 90 0'},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;
    
    
    el.addEventListener('click', function(){
      //alert("clcik");
      if(status === 0){
        infusioncutlerymovetocamera(el);
      }else if(status === 1){
        infusioncutleryrotatetobacksite(el);
      }else if(status === 2){
        infusioncutlerymovetodesk(el)
      }else if(status === 3){
        
      }else if(status === 4){
        
      }else if(status === 5){
        
      }
      if(status<=6){
         status++;
      }
    });
  },
});

function infusioncutlerymovetocamera(el){
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '8.896 10.5 -0.19');
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
  move.setAttribute("to", '2.222 6.967 -0.18');
  move.setAttribute("dur", 300);
  
  var move2 = document.createElement("a-animation");
  move2.setAttribute("begin","0");
  move2.setAttribute("attribute", "rotation");
  move2.setAttribute("to", '0 0 0');
  move2.setAttribute("dur", 300);

  el.appendChild(move);
  el.appendChild(move2);

};
