'use strict';

var navController = {
  trigger: document.querySelector('.mobile-menu'),

  animate: {
    duration: 0.5,
    visible: {
      display: 'block',
      autoAlpha: 1,
      height: 0
    },
    hidden: {
      display: 'none',
      autoAlpha: 0,
      height: 0
    }
  },

  attrs: {
    id: 'data-nav-id'
  },

  classes: {
    active: 'is-active'
  },

  init: function(){
    this.bindUI();
  },

  bindUI: function(){
    this.trigger.addEventListener('click', this.handleClick);
  },

  handleClick: function(e){
    var _nc = navController,
        trigger = this,
        navId = trigger.getAttribute(_nc.attrs.id),
        xNav = document.getElementById(navId);

    //console.log(xNav);
    e.preventDefault();
    xNav.classList.toggle(_nc.classes.active);
    _nc.animate.visible.height = xNav.offsetHeight;
    //console.log(_nc.animate.visible.height);

    if(_nc.isNavOpen(xNav)){
      //alert('is open');
      trigger.classList.add(_nc.classes.active);
      TweenLite.fromTo(xNav, _nc.animate.duration, _nc.animate.hidden, _nc.animate.visible);
    } else {
      //alert('is close');
      trigger.classList.remove(_nc.classes.active);
      TweenLite.fromTo(xNav, _nc.animate.duration, _nc.animate.visible, _nc.animate.hidden);
    }
  },

  isNavOpen: function(xNav){
    return xNav.classList.contains(this.classes.active);
  }
};
