AFRAME.registerComponent('cursor-submit', {
  init: function () {
    var _this=this.el;
    this.el.addEventListener('click', function (evt) {
      //var _this=this;
      _this.setAttribute('material', 'color', 'red');
      //_this.setAttribute('material', 'color', 'green'); //_this.setAttribute is not a function
      //this.setAttribute('material', 'color', 'green'); //works well
      setTimeout(function(){
        //alert(_this); //works well
        //this.setAttribute('material', 'color', 'green');  //this.setAttribute is not a function
        _this.setAttribute('material', 'color', 'black'); //_this.setAttribute is not a function
      },300);
    });
  }
});