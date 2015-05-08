Ti.UI.setBackgroundColor("#000");

//create a window
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "KS_nav_ui.png",
	backgroundRepeat: true
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	width: 100,
	height: 100
});

var mySecondView = Ti.UI.createView({
	backgroundColor: "red",
	width: "50%",
	height: "50%",
	top: 40
});

mainWindow.add(myFirstView, mySecondView);
mainWindow.open();