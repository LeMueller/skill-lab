AFRAME.registerComponent('desinfectioncloth',{
  schema:{
    
    message:{type:"string", default:"desinfectioncloth"},
    position:{default:'-0.39 0.679 -0.81'},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;

    el.addEventListener('click', function(){
      if(status==0){
        status++;
        desinfection(el);
      }else if(status==1){
        status++;
        moveToAshcan(el);
      }
    });

  },
});


//desk desinfection
var move = document.createElement("a-animation");
move.setAttribute("begin","0");
move.setAttribute("attribute", "position");
move.setAttribute("from", '0 0.679 -0.81');
move.setAttribute("to", '-0.39 0.679 -0.81');
move.setAttribute("dur", 500);
move.setAttribute("direction","alternate");
move.setAttribute("repeat",3);
move.setAttribute("easing","ease");



function desinfection(el){
  if(!el.hasChildNodes()){
    el.appendChild(move);
  }

  var t= setTimeout(function(){
    var oldMove = el.getElementsByTagName("a-animation");
    el.removeChild(oldMove[0]);

  },2000);
}

//throw into ashcan
var move21 = document.createElement("a-animation");
move21.setAttribute("begin","0");
move21.setAttribute("attribute", "position");
move21.setAttribute("to", '-0.89 0.679 -0.81');
move21.setAttribute("dur", 500);

var move22 = document.createElement("a-animation");
move22.setAttribute("begin","0");
move22.setAttribute("attribute", "position");
move22.setAttribute("to", '-0.89 0.1 -0.81');
move22.setAttribute("dur", 500);

function moveToAshcan(el){
  
  if(!el.hasChildNodes()){
    el.appendChild(move21);
    
    var t= setTimeout(function(){
      var oldMove = el.getElementsByTagName("a-animation");
      el.removeChild(oldMove[0]);
      el.appendChild(move22);
    },500);
    
    var t2= setTimeout(function(){
      var oldMove = el.getElementsByTagName("a-animation");
      el.removeChild(oldMove[0]);
    },1000);
  }
  
}
