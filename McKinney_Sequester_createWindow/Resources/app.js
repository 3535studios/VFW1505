Ti.UI.setBackgroundColor("#000");

//create a window
var mainWindow = Ti.UI.createWindow({
	//Reserved Properties
	backgroundColor: "#333"
});

//create a view
var textView = Ti.UI.createView({
	backgroundColor: "#fff",
	top: 120,
	left: 20,
	right: 20,
	height: 150,
	borderRadius: 5
});

// Add a label
var textLabel = Ti.UI.createLabel({
	text: "Click button below to start",
	font: {fontSize: 20, fontFamily: "Arial"},
	textAlign: "center",
	top: 25, 
	left: 25,
	right: 25,
	bottom: 25
});

var buttonView = Ti.UI.createView({
	backgroundColor: "23ba00",
	top: textView.top + textView.height + 15,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Arial"},
	textAlign: "center",
	text: "Change Text"
});

//create function
var displayItems = function(){
	textView.hide();
};
//add event listener
buttonView.addEventListener("click", displayItems);

mainWindow.add(textView, buttonView);
textView.add(textLabel);
buttonView.add(buttonText);
mainWindow.open();