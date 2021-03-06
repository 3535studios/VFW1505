//set main window for app
Ti.UI.setBackgroundColor("#000");

//create a window
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "#333"
});

//create an array
var fruitOfSpirit = ["Love","Joy","Peace", "Patience", "Kindness", "Goodness", "Gentleness", "Faithfulness", "Self-Control"];
var i = 0;
var j = 1;
//create a view
var textView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 30,
	left: 20,
	right: 20,
	height: 450,
	borderRadius: 5
});

// Add a label
var textLabel = Ti.UI.createLabel({
	text: j + ". "+ fruitOfSpirit[i],
	font: {fontSize: 20, fontFamily: "Arial"},
	textAlign: "center",
	top: 25, 
	left: 25,
	right: 25,
	bottom: 25
});

// Create first button
var buttonView = Ti.UI.createView({
	backgroundColor: "23ba00",
	top: textView.top + textView.height + 15,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50,
	width: 100
});

var buttonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "center",
	text: "Previous"
});

// Create second button
var buttonView2 = Ti.UI.createView({
	backgroundColor: "23ba00",
	top: textView.top + textView.height + 15,
	left: 200,
	right: 20,
	borderRadius: 5,
	height: 50,
	width: 100
});

var buttonText2 = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "center",
	text: "Next"
});

mainWindow.add(textView, buttonView);
mainWindow.add(textView, buttonView2);
textView.add(textLabel);
buttonView.add(buttonText);
buttonView2.add(buttonText2);
mainWindow.open();

//load require file
var loadFile = require("fruit");


