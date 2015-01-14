(function () {
	// 0 - url, 1 = title
	var patterns = {
		vk: {
			s: 'http://vk.com/share.php?url={0}&title={1}',
			c: '4C75A3',
			h: 0
		}, 
		twitter: {
			s: 'https://twitter.com/intent/tweet?text={1}&url={0}&related=',
			c: '55ACEE',
			h: 1
		},
		facebook: {
			s: 'https://www.facebook.com/sharer/sharer.php?u={0}',
			c: '3A5795',
			h: 4
		},
		gplus: {
			s: 'https://plus.google.com/share?url={0}&t={1}',
			c: 'dd4b39',
			h: 2
		},
		mailru: {
			s: 'http://connect.mail.ru/share?url={0}&title={1}',
			c: '168DE2',
			h: 3
		},
		odnoklassniki: {
			s: 'http://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl={0}',
			c: 'F58220',
			h: 5
		},
		livejournal: {
			s: 'http://www.livejournal.com/update.bml?subject={1}&event=%3Ca+href%3D%22{0}%22%3E{1}%3C%2Fa%3E',
			c: '004359',
			h: 7
		},
		blogger: {
			s: 'https://www.blogger.com/blog_this.pyra?t&u={0}&n={1}',
			c: 'FF6600',
			h: 8
		},
		/* subscribe only */
		github: { 
			c: '171515',
			h: 6
		},
		youtube: {
			c: 'CD201F',
			h: 9
		},
		rss: {
			c: 'FB9E3A',
			h: 10
		}
	};
	var defaults = {
		services: 'vk,mailru,odnoklassniki,twitter,facebook,gplus',
		size: 2,
		form: 1,
		flex: true,
		subscribe: false,
		margin: 0.1
	};

	window.shara = function(element, options) {
		options = options || {};
		for (var attr in defaults) {
			if (options[attr] == undefined)
				options[attr] = defaults[attr];
		}
		var s = document.createElement('style'),
		rand = ~~(Math.random()*1000000),
		css = '\
.shara'+ rand +' {\
	font-size: '+ options.size +'em;\
	line-height: 0;\
	'+ (options.flex ? 'display: -webkit-flex; display: -ms-flex; display: flex; width: 100%;  -webkit-flex-flow: row wrap; flex-flow: row wrap;' : '') +'\
}\
.shara'+ rand +' div {\
	width: 1em;\
	height: 1em;\
	display: inline-block;\
	border-radius: '+(options.form/2)+'em;\
	cursor: pointer;\
	margin: '+ options.margin +'em;\
	'+ (options.flex ? '-webkit-flex: 1 1 1em; flex: 1 1 1em;' : '') +'\
}\
.shara'+ rand +' div:hover {\
	opacity: 0.5;\
}\
.shara'+ rand +' span {\
	width: 1em;\
	height: 1em;\
	display: block;\
	margin: 0 auto;\
	background-image: url(socialbuttons.svg);\
	background-size: auto 100%;\
	background-repeat: no-repeat;\
}';
		s.setAttribute('type', 'text/css');
		if (s.styleSheet) { // IE
			s.styleSheet.cssText = css;
		} else {
			s.appendChild(document.createTextNode(css));
		}
		var cont = document.createElement('div');
		cont.className = 'shara'+ rand;
		document.head.appendChild(s);
		var serv = options.services.split(',');
		for (var i in serv) { 
			if (patterns[serv[i]]) {
				var div = document.createElement('div');
				div.style.background = '#'+patterns[serv[i]].c;
				div.i = i;
				if (!options.subscribe)
					div.onclick = function () {
						window.open(
							patterns[serv[this.i]].s.replace(/\{0\}/g ,encodeURIComponent(options.href ? options.href : location.href)) 
													.replace(/\{1\}/g ,encodeURI(options.title ? options.title : document.title)),
							'', 'scrollbars=1,height='+Math.min(500, screen.availHeight)+',width='+Math.min(500, screen.availWidth)); 
						return false;
					}
				else
					div.onclick = function () {
						window.open(options[serv[this.i]]);
						return false;
					}
				var sp = document.createElement('span');
				sp.style.backgroundPosition = '-' + patterns[serv[i]].h + 'em 0';
				div.appendChild(sp);
				cont.appendChild(div);
			}
		}
		element.appendChild(cont);
	}
})();