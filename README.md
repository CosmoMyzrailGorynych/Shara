**Shara** was made to make content shareable.

![default.png][]

#Supported services

**Subscribe and share:**

 - Twitter
 - Facebook
 - Google +
 - Vkontakte
 - Mail.ru
 - Odnoklassniki
 - Livejournal
 - Blogger

**Subscribe only:**

 - Github
 - YouTube
 - RSS-feed

#Usage
##Basic
![basic.png][]

	<body>

		<!-- lots of content -->
			<div id="caring"></div>
		<!-- even more content -->

		<script type="text/javascript" src="js/shara.js"></script>
		<script type="text/javascript">
			shara(document.getElementById('caring'));
		</script>
	</body>

## Subscription block
![subscribe.png][]

	<body>

		<!-- lots of content -->
			<h4>Get in touch:</h4>
			<div id="broccoli"></div>
		<!-- even more content -->

		<script type="text/javascript" src="js/shara.js"></script>
		<script type="text/javascript">
			shara(document.getElementById('broccoli'), {
				subscribe: true,
				services: 'blogger,github,twitter',
				github: 'https://github.com/CosmoMyzrailGorynych',
				blogger: 'http://www.nersta.ru',
				twitter: 'https://twitter.com/NerstaDesign',
			});
		</script>
	</body>

## Big square buttons, define own URL and snippet
![square.png][]

	<body>

		<!-- lots of content -->
			<div id="carrot"></div>
		<!-- even more content -->

		<script type="text/javascript" src="js/shara.js"></script>
		<script type="text/javascript">
			shara(document.getElementById('carrot'), {
				flex: false,
				margin: 0,
				size: 4,
				form: 0,
				href: 'https://github.com/CosmoMyzrailGorynych/Shara',
				title: 'Sharing is caring!'
			});
		</script>
	</body>

#Configuring
The only public method is `shara`. It accepts two parameters:

 - an element in which we need to place buttons;
 - `options` object (optional). This may have such fields:
     - `svgSource` – icons' URL. Default to `/images/shara.min.svg`.
     - `services` – which buttons to show. It is a string with items separated by a comma. The default is `vk,mailru,odnoklassniki,twitter,facebook,gplus`, all the values are `vk,twitter,facebook,gplus,mailru,odnoklassniki,livejournal,blogger,github,youtube,rss`.
     - `size` – size of buttons measured in `em`. The default is `2`.
     - `form` – a float number from 0 to 1 specifying `border-radius` of buttons. 0 for squares, 1 for circles.
     - `flex` – boolean value. Set it to false if you don't need fluid buttons.
     - `subscribe` – if it is a subscription block. Default to `false`.
     - `margin` – margin in `em`. The default is `0.1`.
     - `href` – a link to the sharing page. Default is `location.href`.
     - `title` – a snippet to share. Default to `document.title`.

#Why not Addthis?

Addthis and other services are blocked by AdBlock. Shara was made to let content be shareable, again.

#Why not using official buttons?

1. Buttons are heavy;
2. They are blocked too.

#Why resist AdBlock?

1. **AdBlock was created to block annoying ads.** Shara is neither annoying nor an ad.
2. **Web is social**. Blocking sharing buttons decreases user interaction, not only spread rate. Besides that, it is one of the ways to show developers some love. Sharing is caring.
3. **Sharing is useful for users**. They share content and thus they save it for later access. It's like bookmarks. It's handy too – especially when you need to give a link to someone.
4. **Sharing is useful for web**. If a user shares some page, it means that this page is useful and thus *good* content spreads faster.
5. **I have to do it**. I want my sites to spread the world. You want the same with yours sites. But almost all **sharing** and **subscription** services are blocked now. So if a user finds and likes my site, he will hardly find it again.

#Okay, what are the benefits of Shara?

- Shara may be used both for 'subscribe' and 'share' blocks;
- It is lightweight (~13kb full, 10kb min - SVG included);
- It is modern - adaptive `flex` layout, vector shapes (SVG), up-to-date brands;
- It makes no load on your website - all is computed on client side.
- Shara is fully editable;
- Shara is bright, and it uses real brand logos and colors;
- It has popular Russian services :3

#What are the recomendations of use?

1. **First of all, host it on your site**. It won't make much load 'cause all is cacheable and has no server requirements. If you don't host it on your server, it will be blocked fastly.
2. **Mutate**. Don't use 'Shara' name, use your own. Same reasons. Remove services you don't need.
3. **Be creative**. There are many styles of Shara you can create.
4. **Be up-to-date**. Internet changes, so better watch the project. Besides that, Shara may be blocked so you may need to change layout and variable names.
5. **Be good**. Make Internet better.

[default.png]: meta/default.png
[basic.png]: meta/basic.png
[subscribe.png]: meta/subscribe.png
[square.png]: meta/square.png
