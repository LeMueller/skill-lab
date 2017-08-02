AFRAME.registerComponent('clockhand_roll',{
        schema:{
          type:'string', default: "secondClockhand"
        },
        
        init:function(){
          var data = this.data;
          var el=this.el;
          
          var oTime= new Date();
          var curTime;
          
          if(data == "secondClockhand" ){
            curTime = oTime.getSeconds();
            //alert("Sec"+curTime);
          }else if(data == "minuteClockhand"){
            curTime = oTime.getMinutes();
          }else if(data == "hourClockhand"){
            curTime = oTime.getHours();
            //alert("Hour"+curTime);
          }else {
            alert("invalid input!");
          }
          
          setClockhandPosition(el, curTime, data);
  
        },
        
        tick: function(time, timeDelta){
          var data = this.data;
          var el=this.el;
          
          var oTime= new Date();
          var curTime;
          
          if(data == "secondClockhand" ){
            curTime = oTime.getSeconds();
          }else if(data == "minuteClockhand"){
            curTime = oTime.getMinutes();
          }else if(data == "hourClockhand"){
            curTime = oTime.getHours();
          }else {
            alert("invalid input!");
          }
          
          setClockhandPosition(el, curTime, data);
        }     
      });
      
      function getPlat30Rotation(){
        var oTime= new Date();
        var curTime=oTime.getSeconds();
        var gradForOneSec=360/60;
        var rotationPosition={x: -(curTime*gradForOneSec), y: 0, z: 0};
        return rotationPosition;
      }
      
      //set the position of clock hands
      function setClockhandPosition(el, curTime, typeOfClockhand){
        var gradForOneSec;
        var gradRoll;
        var rotationArray;
          
        if(typeOfClockhand == "secondClockhand" || typeOfClockhand == "minuteClockhand"){
          gradForOneSec=360/60;
        }else if(typeOfClockhand == "hourClockhand"){
          gradForOneSec=360/12;
        }
      
        gradRoll=curTime*gradForOneSec;

        //The value of rotation is a object
        rotationArray={x: -gradRoll, y: 0, z: 0};
        el.setAttribute("rotation", rotationArray);  
      }

AFRAME.registerComponent('clockclick', {
        schema: {},
        init: function () {
          var data= this.data;
          var el= this.el;

          el.addEventListener("handwashing",function(ev){
            if(el.querySelector('#plat30')==null){
              var plat30sec=document.createElement("a-gltf-model");
              
              plat30sec.setAttribute("id","plat30");
              plat30sec.setAttribute("src","#markingnew");
              plat30sec.setAttribute("position", "0.01 0 0");
              plat30sec.setAttribute("rotation", getPlat30Rotation());

              el.appendChild(plat30sec);
              
              var time30=setTimeout(function(){
                
                el.removeChild(el.querySelector('#plat30'));
                //alert("time out");
              },3000);
            }
            
            //alert(el.querySelector('#plat30'));

          });
        }
      });