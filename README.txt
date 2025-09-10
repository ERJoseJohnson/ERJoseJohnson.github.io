Spectral by HTML5 UP
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


A big, modern, blocky affair with a mobile-style menu, fully responsive styling,
and an assortment of pre-styled elements. So, pretty much what you were expecting
-- except, of course, for how it's put together, specifically:

- It's built with components from my Responsive Tools project.

- It uses flexbox, which eliminates all kinds of terrible hacks and clunky layout
  stopgaps (like CSS grid systems).

- It uses Sass* a lot more intelligently, thanks in part to several new mixins
  and functions I've been working on (as well as a few by @HugoGiraudel).

  (* = still entirely optional if you prefer vanilla CSS :)

- A ton of other stuff.

In short, Spectral's the culmination of several new things I'm working on/trying out,
so please, let me know what you think :)

Demo images* courtesy of Unsplash, a radtastic collection of CC0 (public domain) images
you can use for pretty much whatever.

(* = not included)

AJ
aj@lkn.io | @ajlkn


Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fontawesome.io)

	Other:
		jQuery (jquery.com)
		Scrollex (github.com/ajlkn/jquery.scrollex)
		Responsive Tools (github.com/ajlkn/responsive-tools)

Quick Setup (Development):
	##commands to enter into terminal in root folder
	npm install live-server
	live-server

How to Use:
	1) To add normal images
		1 upload the image to CF postImage account (https://postimages.org/)
		2 get the ____.jpg/ .png/ .<filetype> link
		3 add it to the json
			- You can speed this up by using the sheets on CF google account and going to a csv to json converter [RECOMMENDED! SO FUTURE PPL CAN KEEP USING THE EXCEL!!]
			- name: <id you will be assigning to the img>, link: <postImage link>
		ORRRRRR
		3 just add the link straight away (I suggest you just maintain the JSON so people can read the json to troubleshoot or reference in the future)

	2) How to use listGenerator.js for evangelism.html, wallpapers.html, ssbc.html and biblestudies.html
		- What does listGenerator do?
			- It automates the generation of the galleries you see in evangelism, wallpapers, ssbc and biblestudies
			- You can then copy and paste whatever it console.logs out
			- NOTE: It isn't the most efficient but it will have to do for now

		- How to use?
			(START HERE IF YOU ARE CREATING A NEW GALLERY)
			1 create an arr of javascript objects in listGenerator.js. Name this arr whatever you want as long as it is unique
			2 stringify the var name you gave your arr and add it to varmap in listGenerator.js as the key e.g varMap={"previousSchedules":previousSchedules}

			(START HERE IF YOU ARE ONLY UPDATING EXISTING GALLERIES)
			3 fill up the corresponding arr (same as your div id) with your images IN ORDER e.g.{type:"hosted",id:"2025_BibleStudyPlanQ1"}, {type:"local",src:"images/Term_Cards/John.jpg"}
				- There are three types of images: "hosted" which are hosted on postImage, "other" are external images with links and "local" which are uploaded on the website itself
					a) hosted: this will be accompanied by id:"<name on the json>"
					b) other: this will be accomanied by src:"<link to external image>"
					c) local: this will be accompanied by src:"<link to local image>"

			image link to an example: https://i.postimg.cc/CL8qZCHL/how-Toexample.png
			4 Run npm listGenerator.js (in the assets/js folder)
			5 Copy whatever is output in the console and paste it in the respective div. (I have marked it with some comments so you know where to start and end the paste)
		
		
Published on OpenSUTD subdomain @ sutdcf.opensutd.org
