AFRAME.registerComponent('infusioncutleryopen',{
  schema:{
    
    message:{type:"string", default:"move to camera"},
    position:{default:'1 1 1'},
    rotation:{default:'0 90 0'},
  },

  
  init:function(){
    var self=this;
    var data= this.data;
    var el=this.el;

    var status=0;
    
    var infusioncutlerycap=document.querySelector("#infusioncutlerycap");
    var abwurfdecker = document.querySelector("#abwurfmodelcapnewpivot");
    var infusioncutleryinbottle=document.querySelector("#infusioncutleryinbottle");
    var bottle=document.querySelector("#nacl500");
    var switchwheel = document.querySelector("#switchwheel");
    
    
    el.addEventListener('click', function(){
      //alert("clcik");
      if(status === 0){
        infusioncutlerycapoff(infusioncutlerycap, abwurfdecker);
        status++;
      }else if(status === 1 && bottle.getAttribute('withcap')==='false' && switchwheel.getAttribute("off")==="true"){
        infusioncutleryopentobootle(el, infusioncutleryinbottle, switchwheel);
        status++;
      }
      /**
      if(status<=1){
         status++;
      }**/
    });
    
    switchwheel.addEventListener('click',function(){
      //alert("switch clicked");
      wheeloff(switchwheel);
      switchwheel.setAttribute("off","true");
    });
  },
});

function infusioncutlerycapoff(infusioncutlerycap, abwurfdecker){
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '-0.19 0.671 -0.85');
  move.setAttribute("dur", 300);

  infusioncutlerycap.appendChild(move);
  
  var t = setTimeout(function(){
    var oldMove = infusioncutlerycap.getElementsByTagName("a-animation");
    infusioncutlerycap.removeChild(oldMove[0]);
    //alert("move2");
    var move2 = document.createElement("a-animation");
    move2.setAttribute("begin","0");
    move2.setAttribute("attribute", "position");
    move2.setAttribute("to", '0.042 0.901 -0.97');
    move2.setAttribute("dur", 300);

    infusioncutlerycap.appendChild(move2);
    
    var deckermove = document.createElement("a-animation");
    deckermove.setAttribute("begin","0");
    deckermove.setAttribute("attribute", "rotation");
    deckermove.setAttribute("to", '0 0 -45');
    deckermove.setAttribute("dur", 300);
    abwurfdecker.appendChild(deckermove);
    
  },300);
  
  /**
  var t2 = setTimeout(function(){
    var oldMove = infusioncutlerycap.getElementsByTagName("a-animation");
    infusioncutlerycap.removeChild(oldMove[0]);
    //alert("move3");
    var move3 = document.createElement("a-animation");
    move3.setAttribute("begin","0");
    move3.setAttribute("attribute", "position");
    move3.setAttribute("to", '0.042 0.901 -0.97');
    move3.setAttribute("dur", 300);

    infusioncutlerycap.appendChild(move3);
  },300);**/
  
  var t3 = setTimeout(function(){
    var oldMove = infusioncutlerycap.getElementsByTagName("a-animation");
    infusioncutlerycap.removeChild(oldMove[0]);
    //alert("move4");
    var move4 = document.createElement("a-animation");
    move4.setAttribute("begin","0");
    move4.setAttribute("attribute", "position");
    move4.setAttribute("to", '0.042 0.7 -0.97');
    move4.setAttribute("dur", 300);

    infusioncutlerycap.appendChild(move4);
    
    
    
  },900);
  
  var t4 =setTimeout(function(){
    var deckermovecopy = abwurfdecker.querySelector("a-animation");
    abwurfdecker.removeChild(deckermovecopy);
    var deckermove2 = document.createElement("a-animation");
    deckermove2.setAttribute("begin","0");
    deckermove2.setAttribute("attribute", "rotation");
    deckermove2.setAttribute("to", '0 0 0');
    deckermove2.setAttribute("dur", 300);
    abwurfdecker.appendChild(deckermove2);
  },1200);
  
  var t5=setTimeout(function(){
    var deckermovecopy = abwurfdecker.querySelector("a-animation");
    abwurfdecker.removeChild(deckermovecopy);
  },1300);

};

function infusioncutleryrotatetobacksite(el){
  //alert("rotate to backsite");
  //el.setAttribute("rotation", "0 120 0");

  var oldMove = el.getElementsByTagName("a-animation");
  el.removeChild(oldMove[0]);

  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "rotation");
  move.setAttribute("to", '-90 90 0');
  move.setAttribute("dur", 300);

  el.appendChild(move);
}

function infusioncutleryopentobootle(el, infusioncutleryinbottle, switchwheel){
  el.setAttribute("visible",false);
  switchwheel.setAttribute("visible",false);
  infusioncutleryinbottle.setAttribute("visible",true);
  infusioncutleryinbottle.setAttribute('inbottle','true');
}

function wheeloff(switchwheel){
  //alert("wheeloff");
  var move = document.createElement("a-animation");
  move.setAttribute("begin","0");
  move.setAttribute("attribute", "position");
  move.setAttribute("to", '-0.153 0.673 -0.85');
  move.setAttribute("dur", 300);

  switchwheel.appendChild(move);
  
  var t=setTimeout(function(){
    var oldMove = switchwheel.getElementsByTagName("a-animation");
    switchwheel.removeChild(oldMove[0]);
  },350);
  
  
}
