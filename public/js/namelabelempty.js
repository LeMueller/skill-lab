AFRAME.registerComponent('namelabelempty', {       
  schema:{
    
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    
    var status=0;
    
    var namelabelyes = document.querySelector("#namelabelyes");
    
    //alert(namelabelyes);

    
    el.addEventListener('click', function(e){
      
      e.preventDefault();
      e.stopPropagation();
      
      if(status==0){
        moveToCamera(el);
        status++;
      }else if(status==1){
        //fillOut(el); //undefined!???
        el.setAttribute("visible","false");
        namelabelyes.setAttribute("visible","true");
        status++;
      }
      
      
    });
  }
});

function moveToCamera(el){
  
  var movePosition=document.createElement("a-animation");
  movePosition.setAttribute("begin","0");
  movePosition.setAttribute("attribute", "position");
  movePosition.setAttribute("to", '-0.01 1.053 -0.48');
  movePosition.setAttribute("dur", '300');
  
  var moveRotation=document.createElement("a-animation");
  moveRotation.setAttribute("begin","0");
  moveRotation.setAttribute("attribute", "rotation");
  moveRotation.setAttribute("to", '-25 0 0');
  moveRotation.setAttribute("dur", '300');
  
  
  el.appendChild(movePosition);
  el.appendChild(moveRotation);
  
  var t = setTimeout(function(){
    el.removeChild(movePosition);
    el.removeChild(moveRotation);
  },300);
};

function fillOut(el,namelabelyes){
  
  alert("fillOUt");
  
  el.setAttribute("visible","false");
  namelabelyes.setAttribute("visible","true");
  
};

