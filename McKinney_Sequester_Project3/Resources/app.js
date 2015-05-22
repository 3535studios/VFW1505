// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#000");


//MAIN WINDOW
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#eee",
});

var imageBackground = Ti.UI.createImageView ({
		image: "images/background/navy-submarine-1920x1200.jpg",
		layout: "vertical"
	});
	
var openGalleryButton = Ti.UI.createView ({
	backgroundColor: "#6593B6",
	borderRadius: 5,
	width: 200,
	height: 50,
	top: imageBackground.height
});

var openGalleryLabel = Ti.UI.createLabel ({
	text: "OPEN GALLERY",
	color: "#fff",
	align: "center"
});

mainWindow.add(imageBackground, openGalleryButton, openGalleryLabel);
mainWindow.open();


//LOAD REQUIRED FILE
var loadFile = require("gallery");
