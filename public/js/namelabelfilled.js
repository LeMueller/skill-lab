AFRAME.registerComponent('namelabelfilled', {       
  schema:{
    
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    
    //var namelabelwritten = document.querySelector("#hookname");

    
    el.addEventListener('click', function(e){
      
      e.preventDefault();
      e.stopPropagation();
      
      moveToBottle(el);
      
    });
  }
});

function moveToBottle(el){
  console.log("positon: 0.892 1.541 -0.49 rotation: 0.573 -25 -7.04 scale:0.055 0.027 0.055");
  
  var movePosition=document.createElement("a-animation");
  movePosition.setAttribute("begin","0");
  movePosition.setAttribute("attribute", "position");
  movePosition.setAttribute("to", '0.892 1.541 -0.49');
  movePosition.setAttribute("dur", '300');
  
  var moveRotation=document.createElement("a-animation");
  moveRotation.setAttribute("begin","0");
  moveRotation.setAttribute("attribute", "rotation");
  moveRotation.setAttribute("to", '0.573 -25 -7.04');
  moveRotation.setAttribute("dur", '300');
  
  var moveScale=document.createElement("a-animation");
  moveScale.setAttribute("begin","0");
  moveScale.setAttribute("attribute", "scale");
  moveScale.setAttribute("to", '0.055 0.027 0.055');
  moveScale.setAttribute("dur", '300');
  
  
  el.appendChild(movePosition);
  el.appendChild(moveRotation);
  el.appendChild(moveScale);
  
  var t = setTimeout(function(){
    el.removeChild(movePosition);
    el.removeChild(moveRotation);
    el.removeChild(moveScale);
  },300);
}


