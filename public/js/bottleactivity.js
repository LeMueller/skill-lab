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
    //var $el=$("#nacl500")[0];
    //var $el=$(el)[0];
    var status=0;
    
    this.movetocamera=function(){
      //alert(data.message);
      //el.setAttribute("position", "0 1.054 -0.19");
      //alert($el);
      //$el.animate({position:'0 1.054 -0.19'},300);
      
      var move = document.createElement("a-animation");
      move.setAttribute("begin","0");
      move.setAttribute("attribute", "position");
      move.setAttribute("to", '0 1.054 -0.19');
      move.setAttribute("dur", 300);

      el.appendChild(move);
      
      
    };
    
    this.rotatetobacksite=function(){
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
    
    this.rotatetotopsite=function(){
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
    
    this.movetodesk=function(){
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
    
    this.takeoffcap=function(){
      var oldMove = el.getElementsByTagName("a-animation");
      el.removeChild(oldMove[0]);
      el.removeChild(oldMove[1]);
      el.removeChild(oldMove[2]);//without this line, there is still a animate about position leaved
      //alert("take off cap");
      
      var cap = el.querySelector('#bottlecap');
      alert("cap before remove: "+cap);
      cap.setAttribute("position", "-0.27 0.826 -0.83");
      cap.setAttribute("rotation", "0 90 0 ");
      cap.setAttribute("scale", "0.1 0.1 0.1");
      el.removeChild(cap);
      alert("cap after remove: "+cap);
      var scene = document.querySelector('#scene');
      //alert(scene);
      scene.appendChild(cap);
      
      var move = document.createElement("a-animation");
      move.setAttribute("begin","0");
      move.setAttribute("attribute", "positon");
      move.setAttribute("to", '-0.27 1 -0.83');
      move.setAttribute("dur", 300);
      
      cap.appendChild(move);
      
      
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
