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
    
    el.addEventListener('click', function(){
      
      checkportfolio(el, hookname, hookdrug, hookdose, hookiv, hookcf);
      
    });
  }
});

function checkportfolio(el, hookname, hookdrug, hookdose, hookiv, hookcf){
  
  switch(el.id){
      
    case "transparentname":
      hookname.setAttribute("check","true");
      hookname.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentdrug":
      hookdrug.setAttribute("check","true");
      hookdrug.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentdose":
      hookdose.setAttribute("check","true");
      hookdose.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentiv":
      hookiv.setAttribute("check","true");
      hookiv.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;
    case "transparentcf":
      hookcf.setAttribute("check","true");
      hookcf.setAttribute("visible","true");
      el.setAttribute("visible","false");
      break;

  }
  
}

