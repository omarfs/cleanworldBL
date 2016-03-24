var hasClass = function (elem, className){
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

var addClass = function (elem, className){
	if(!hasClass(elem, className)) {
		elem.className += ' ' + className;
	}
}

var removeClass = function(elem, className){
	var newClass = ' ' + elem.className.replace(/[\t\r\n]/g,' ')+' ';
	if(hasClass(elem, className)) {
		while (newClass.indexOf(' ' + className + ' ') >= 0){
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		elem.className = newClass.replace(/^\s+|\s+$/g, '');
	}
}

if ('querySelector' in document && 'addEventListener' in window){

	var body = document.querySelector('body'),
			siteNav = document.querySelector('.site-nav'),
			panelBottom = document.querySelector('.bottom-panel'),
			panelTop = document.querySelector('.top-panel'),
			menuButton = document.querySelector('.mobile-menu'),
			bottomChildren = panelBottom.children,
			topChildren = panelTop.children,
			ticking = false,
		tl = new TimelineMax({
			paused:true//,
			//repeat:-1
		});

	document.addEventListener('scroll', function(e){
		var scrollTop = (document.documentElement.scrollTop||document.body.scrollTop),
				headerHeight = document.querySelector('.site-header').offsetHeight;

		if (!ticking) {
			if (scrollTop > 5){
				ticking = true;
				addClass(body,'scrolling');
				TweenMax.to(siteNav, 2, {opacity: 0});
				console.log(ticking);
			}
		} else {
			if (scrollTop < 5){
				removeClass(body,'scrolling');
				ticking = false;
				TweenMax.to(siteNav, 2, {opacity: 1});
				console.log(ticking);
			}
		}
	});

	menuButton.addEventListener('click', function(){
		alert('clicked');
		var menuLinks = document.querySelector('.nav-links');
		console.log(menuLinks);
		TweenMax.to(menuLinks,1,{autoAlpha:1,display:'block'});
	});
	// animations

	//console.log(heroTop);
	//console.log(topChildren);
	tl.from(siteNav,0.75,{yPercent:-100,opacity:0,ease:Circ.easeOut})
		.from(topChildren[0], 0.5, {xPercent:25,opacity:0},"-=0.25")
		.from(bottomChildren[0], 0.8, {top:50, opacity:0}, "+=0.5")
		.play();

}
