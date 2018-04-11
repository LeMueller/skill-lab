AFRAME.registerComponent('portfoliocheck', {       
  schema:{
    
  },

  init: function(){
    var data= this.data;
    var el= this.el;
    
    var hookname = document.querySelector("#hookname");
    var hookdrug = document.querySelector("#hookdrug");
    var hookdose = document.querySelector("#hookdose");
    var hookiv = document.querySelector("#hookiv");
    var hookcf = document.querySelector("#hookcf");
    
    el.addEventListener('click', function(e){
      
      e.preventDefault();
      e.stopPropagation();
      
      checkportfolio(el, hookname, hookdrug, hookdose, hookiv, hookcf);
      
    });
  }
});

function checkportfolio(el, hookname, hookdrug, hookdose, hookiv, hookcf){
  
  switch(el.id){
      
    case "transparentname":
      hookname.setAttribute("checked","true");
      hookname.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentdrug":
      hookdrug.setAttribute("checked","true");
      hookdrug.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentdose":
      hookdose.setAttribute("checked","true");
      hookdose.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentiv":
      hookiv.setAttribute("checked","true");
      hookiv.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentcf":
      hookcf.setAttribute("checked","true");
      hookcf.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;

  }
  
}

