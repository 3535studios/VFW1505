//set main window for app
Ti.UI.setBackgroundColor("#000");

//create a window
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "#333"
});

//create an array
var fruitOfSpirit = ["Love","Joy","Peace", "Patience", "Kindness", "Goodness", "Gentleness", "Faithfulness", "Self-Control"];

//create a view
var textView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 20,
	left: 20,
	right: 20,
	height: 450,
	borderRadius: 5
});

// Add a label
var textLabel = Ti.UI.createLabel({
	text: fruitOfSpirit[0],
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

//create previousButton function
var previousButton = function(){
		
	
};

//create nextButton function 
var nextButton = function() {
	textLabel.text = fruitOfSpirit;
};

//add event listener
buttonView.addEventListener("click", previousButton);

//add event listener
buttonView2.addEventListener("click", nextButton);

mainWindow.add(textView, buttonView);
mainWindow.add(textView, buttonView2);
textView.add(textLabel);
buttonView.add(buttonText);
buttonView2.add(buttonText2);
mainWindow.open();

//load require file
//var loadFile = require("fruitOfSpirit");


