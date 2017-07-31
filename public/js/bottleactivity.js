AFRAME.registerComponent('bottleactivity',{
  schema:{
    event:{type:"string", default:""},
    message:{type:"string", default:"move to camera"},
    position:{default:'1 1 1'},
    rotation:{default:'0 90 0'},
  },
  
  multiple:true,
  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;
    var status=0;
    
    this.movetocamera=function(){
      //alert(data.message);
      el.setAttribute("position", "0 1.054 -0.19");
    };
    
    this.rotatetobacksite=function(){
      //alert("rotate to backsite");
      el.setAttribute("rotation", "0 120 0");
    }
    
    this.rotatetotopsite=function(){
      //alert("rotate to backsite");
      el.setAttribute("rotation", "0 120 90");
    }
    
    this.movetodesk=function(){
      //alert("move to desk");
      el.setAttribute("rotation", "0 270 0");
      el.setAttribute("position", "-0.27 0.735 -0.83");
    }
    
    this.takeoffcap=function(){
      //alert("take off cap");
      var cap = el.querySelector('#bottlecap');
      el.removeChild(cap);
    }
    
    this.hang=function(){    
      //alert("hang");
      el.setAttribute("position", "1.156 1.513 -0.63");
      el.setAttribute("rotation", "180 270 0");
    }
    
    el.addEventListener('click', function(){
      if(status === 0){
        el.emit("movetocamera");
      }else if(status === 1){
        el.emit("rotatetobacksite");
      }else if(status === 2){
        el.emit("rotatetotopsite");
      }else if(status === 3){
        el.emit("movetodesk");
      }else if(status === 4){
        el.emit("takeoffcap");
      }else if(status === 5){
        el.emit("hang");
      }
      if(status<=6){
         status++;
      }
    });
  },
  
  update:function(){
    var data=this.data;
    var el=this.el;
    
    if(data.event==="movetocamera"){
      el.addEventListener(data.event, this.movetocamera);
    }
    
    if(data.event==="rotatetobacksite"){
      el.addEventListener(data.event, this.rotatetobacksite);
    }
    
    if(data.event==="rotatetotopsite"){
      el.addEventListener(data.event, this.rotatetotopsite);
    }
    
    if(data.event==="movetodesk"){
      el.addEventListener(data.event, this.movetodesk);
    }
    
    if(data.event==="takeoffcap"){
      el.addEventListener(data.event, this.takeoffcap);
    }
    
    if(data.event==="hang"){
      el.addEventListener(data.event, this.hang);
    }
  }
});
