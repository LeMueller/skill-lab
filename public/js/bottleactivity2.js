AFRAME.registerComponent('bottleactivity2',{
  schema:{
    event:{type:"string", default:""},
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
      if(status === 0){
        movetocamera(el);
      }else if(status === 1){
        rotatetobacksite(el);
      }else if(status === 2){
        rotatetotopsite(el);
      }else if(status === 3){
        movetodesk(el);
      }else if(status === 4){
        takeoffcap(el);
      }else if(status === 5){
        this.hang
      }
      if(status<=6){
         status++;
      }
    });
  },
});

function movetocamera(el){
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '0 1.054 -0.19');
  move.setAttribute("dur", 300);

  el.appendChild(move);

};

function rotatetobacksite(el){
  //alert("rotate to backsite");
  //el.setAttribute("rotation", "0 120 0");

  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '0 120 0');
  move.setAttribute("dur", 300);

  el.appendChild(move);
}

function rotatetotopsite(el){
  //alert("rotate to backsite");
  //el.setAttribute("rotation", "0 120 90");

  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '0 120 90');
  move.setAttribute("dur", 300);

  el.appendChild(move);
}

function movetodesk(el){
  //alert("move to desk");
  //el.setAttribute("rotation", "0 270 0");
  //el.setAttribute("position", "-0.27 0.735 -0.83");

  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '0 270 0');
  move.setAttribute("dur", 300);

  var move2 = document.createElement("a-animation");
  move2.setAttribute("begin","0");
  move2.setAttribute("attribute", "position");
  move2.setAttribute("to", '-0.27 0.735 -0.83');
  move2.setAttribute("dur", 300);

  el.appendChild(move);
  el.appendChild(move2);
}

function takeoffcap(el){
  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);
  el.removeChild(oldMove[1]);
  //alert("take off cap");

  var cap = el.querySelector('#bottlecap');
  alert("cap before remove: "+cap);
  cap.setAttribute("position", "-0.27 0.826 -0.83");
  cap.setAttribute("rotation", "0 90 0 ");
  cap.setAttribute("scale", "0.1 0.1 0.1");
  el.removeChild(cap);
  alert("cap after remove: "+cap);
  var scene = document.querySelector('#scene');
  //alert(scene);
  scene.appendChild(cap);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "positon");
  move.setAttribute("to", '-0.27 1 -0.83');
  move.setAttribute("dur", 300);

  cap.appendChild(move);
}

function hang(el){    
  //alert("hang");
  el.setAttribute("position", "1.156 1.513 -0.63");
  el.setAttribute("rotation", "180 270 0");
}