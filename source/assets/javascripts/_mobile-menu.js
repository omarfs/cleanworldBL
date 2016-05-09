'use strict';

var navController = {
  trigger: document.querySelector('.mobile-menu'),

  animate: {
    duration: 0.5,
    visible: {
      //properties to be animated
    },
    hidden: {
      //properties to be animated

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
    this.timeline();
  },

  bindUI: function(){
    this.trigger.addEventListener('click', this.handleClick);
  },

  timeline: function(){
    navTl = new TimelineMax({paused:true});
  },

  handleClick: function(e){
    var _nc = navController,
        trigger = this,
        navId = trigger.getAttribute(_nc.attrs.id),
        xNav = document.getElementById(navId),
        navItem = document.getElementsByClassName('nav-link');

        //CSSPlugin.defaultTransformPerspective = 800;
    e.preventDefault();
    navTl
    .to(xNav,_nc.animate.duration,{height:"56px",opacity:1,ease:Expo.easeOut})
    .staggerFrom(".nav-link",_nc.animate.duration,{opacity:0,y:-50,delay:0.1},.1);
    xNav.classList.toggle(_nc.classes.active);
    _nc.animate.visible.height = xNav.offsetHeight;

    if(_nc.isNavOpen(xNav)){
      trigger.classList.add(_nc.classes.active);
      //TweenLite.fromTo(xNav, _nc.animate.duration, _nc.animate.hidden, _nc.animate.visible);
      navTl.play();
      console.log(navTl.progress());
    } else {
      trigger.classList.remove(_nc.classes.active);
      navTl.reverse();
      //TweenLite.fromTo(xNav, _nc.animate.duration, _nc.animate.visible, _nc.animate.hidden);
      //TweenMax.staggerTo(".nav-link",_nc.animate.duration,{opacity:0,y:-50,delay:0.1},.1)
      //TweenMax.to(xNav,_nc.animate.duration,{height:0,opacity:0});
    }
  },

  isNavOpen: function(xNav){
    return xNav.classList.contains(this.classes.active);
  }
};
