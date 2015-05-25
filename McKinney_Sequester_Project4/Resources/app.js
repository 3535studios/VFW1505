//Main Window
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#401515",
	title: "US NAVY SUBMARINES",
	fontFamily: "OpenSans-Regular",
	fontSize: 40
});

var galleryView = Ti.UI.createView ({
	backgroundColor: "1c3d59",
	height: "129px",
	top: 60
});

var galleryLabel = Ti.UI.createLabel ({
	text: "GALLERY",
	fontFamily: "OpenSans-Semibold",
	fontSize: 80,
	color: "#fff"
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow,
});

galleryView.add(galleryLabel);
navWindow.add(galleryView);
navWindow.open();
