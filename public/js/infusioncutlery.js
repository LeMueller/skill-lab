AFRAME.registerComponent('infusioncutlery', {       
  schema:{
    
  },

  init: function(){
    var el=this.el;
    var data=this.data;
    
    el.addEventListener("click",function(){
      getIndependentInfusioncutlery(el);
    });
    
  }
});



function getIndependentInfusioncutlery(el){
  var drawer=document.querySelector("#drawerWithInfusion");
  alert(drawer);
}

function setOnTable(el){
   
}
