//Main Window
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#401515",
	title: "US NAVY SUBMARINES",
	fontFamily: "ProximaNova-Semibold",
	fontSize: "40px"
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow,
});

navWindow.open();
