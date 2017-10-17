AFRAME.registerComponent('infusioncutleryhang',{
  schema:{
    
    message:{type:"string", default:"hang"},
    position:{default:'0.839 1.112 -0.52'},
    rotation:{default:'0 -180 -90'},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;

    var infusionhangingrad = document.querySelector("#InfusionHangedWheel");
    var filledCutlery=document.querySelector("#InfusionHangedFilledCutlery");
    
    
    el.addEventListener('click', function(){
      //alert("clcik");
      if(status === 0){
        alert("filled");
        status++;
      }
      /**
      if(status<=1){
         status++;
      }**/
    });
    
    infusionhangingrad.addEventListener('click',function(){
      //alert("switch clicked");
      if(status === 1 ){
        
        infusionhangingradon(el, infusionhangingrad, filledCutlery);//animation of switch
        //after 1 sec, change to the cutlery with filling 
        
        //infusionhangingrad.setAttribute("off","false");  
        status++;
      }
      
    });
  },
});

function infusionhangingradon(el, infusionhangingrad, filledCutlery){
  
  //alert("infusionhangingradon");
  
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '-0.45 0.053 -0.03');
  move.setAttribute("dur", 300);
  
  //alert(move);
  //alert(infusionhangingrad);
  
  infusionhangingrad.appendChild(move);
  
  var t= setTimeout(function(){
    var oldMove = infusionhangingrad.getElementsByTagName("a-animation");
    infusionhangingrad.removeChild(oldMove[0]);
    
    changeToFilledCutlery(el, filledCutlery);
  },300);
  
  
}

function changeToFilledCutlery(el, filledCutlery){
  el.setAttribute("visible","false");
  filledCutlery.setAttribute("visible","true");
}
