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

	var siteNav = document.querySelector('.site-nav'),
			heroBottom = document.querySelector('.bottom-panel'),
			heroTop = document.querySelector('.top-panel'),
			bottomChildren = heroBottom.children,
			topChildren = heroTop.children,
		tl = new TimelineMax({
			paused:true//,
			//repeat:-1
		});

		console.log(heroTop);
		console.log(topChildren);

		tl.from(siteNav,0.75,{yPercent:-100,opacity:0,ease:Circ.easeOut})
			.from(topChildren[0], 0.5, {xPercent:25,opacity:0},"-=0.25")
			.from(bottomChildren[0], 0.8, {top:50, opacity:0}, "+=0.5")
			.play();

}
