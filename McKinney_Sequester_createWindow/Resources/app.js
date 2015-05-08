Ti.UI.setBackgroundColor("#000");

//create a window
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "#fff",
	backgroundImage: "KS_nav_ui.png",
	backgroundRepeat: true
});

//create a view
var myFirstView = Ti.UI.createView({
	backgroundColor: "#333",
	borderRadius: 5,
	borderWidth: 1,
	width: 100,
	height: 100
});

//position my second view
var mySecondView = Ti.UI.createView({
	backgroundColor: "red",
	width: "50%",
	height: "50%",
	top: 40
});

// Add a label
var myText = Ti.UI.createLabel({
	text: "Hello World!",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"},
	top: 10, 
	left: 10
});

mainWindow.add(myFirstView, mySecondView);
mySecondView.add(myText);
mainWindow.open();