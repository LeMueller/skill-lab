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
        hang(el);
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
  //alert(oldMove[0]);
  el.removeChild(oldMove[0]);
  el.removeChild(oldMove[0]);
  //alert("take off cap");

  var cap = el.querySelector('#bottlecap');
  //alert("cap before remove: "+cap);
  el.removeChild(cap);
  //alert("cap after remove: "+cap);  
  var scene = document.querySelector('#scene');
  var abwurfdecker = scene.querySelector("#abwurfmodelcapnewpivot");
  //alert(scene);
  scene.appendChild(cap);
  cap.setAttribute("position", "-0.27 0.826 -0.83");
  cap.setAttribute("rotation", "0 90 0 ");
  cap.setAttribute("scale", "0.1 0.1 0.1");
  
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '-0.27 0.9 -0.83');
  move.setAttribute("dur", 300);
  cap.appendChild(move);
  
  var t1 = setTimeout(function(){
    var move2 = document.createElement("a-animation");
    move2.setAttribute("begin","0");
    move2.setAttribute("attribute", "position");
    move2.setAttribute("to", '-0.01 0.9 -0.9');
    move2.setAttribute("dur", 300);
    cap.appendChild(move2);
    
    
    //alert(abwurfdecker);
    var deckermove = document.createElement("a-animation");
    deckermove.setAttribute("begin","0");
    deckermove.setAttribute("attribute", "rotation");
    deckermove.setAttribute("to", '0 0 -45');
    deckermove.setAttribute("dur", 300);
    abwurfdecker.appendChild(deckermove);
  },300);
  
  var t2 = setTimeout(function(){
    var move3 = document.createElement("a-animation");
    move3.setAttribute("begin","0");
    move3.setAttribute("attribute", "position");
    move3.setAttribute("to", '-0.01 0.73 -0.9');
    move3.setAttribute("dur", 300);
    cap.appendChild(move3);
  },600);
  
  var t3 = setTimeout(function(){
    var deckermovecopy = abwurfdecker.querySelector("a-animation");
    abwurfdecker.removeChild(deckermovecopy);
    var deckermove2 = document.createElement("a-animation");
    deckermove2.setAttribute("begin","0");
    deckermove2.setAttribute("attribute", "rotation");
    deckermove2.setAttribute("to", '0 0 0');
    deckermove2.setAttribute("dur", 300);
    abwurfdecker.appendChild(deckermove2);
  },800);
  
  var t4 = setTimeout(function(){
    var deckermovecopy = abwurfdecker.querySelector("a-animation");
    abwurfdecker.removeChild(deckermovecopy);
  },900);
}

function hang(el){    
  //alert("hang");

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '180 270 0');
  move.setAttribute("dur", 500);

  var move2 = document.createElement("a-animation");
  move2.setAttribute("begin","0");
  move2.setAttribute("attribute", "position");
  move2.setAttribute("to", '1.156 1.513 -0.63');
  move2.setAttribute("dur", 500);

  el.appendChild(move);
  el.appendChild(move2);
  
  
  var t = setTimeout(function(){
    el.removeChild(move);
    el.removeChild(move2);
  },900);
}