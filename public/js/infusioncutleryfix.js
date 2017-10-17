AFRAME.registerComponent('infusioncutleryfix',{
  schema:{
    
    message:{type:"string", default:"fix"},
    position:{default:'0.839 1.112 -0.52'},
    rotation:{default:'0 -180 -90'},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;

    var infusioncutleryfixed = document.querySelector("#InfusioncutleryFixed");    
    
    el.addEventListener('click', function(){
      //alert("clcik");
      changeToFixedCutlery(el, infusioncutleryfixed);
      
    });

  }
});
  
  
function changeToFixedCutlery(el, infusioncutleryfixed){
  el.setAttribute("visible","false");
  infusioncutleryfixed.setAttribute("visible","true");
}
