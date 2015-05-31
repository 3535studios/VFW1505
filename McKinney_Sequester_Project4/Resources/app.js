//Main Window
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#401515",
	title: "US NAVY SUBMARINES"
});

var galleryView = Ti.UI.createView ({
	backgroundColor: "1c3d59",
	height: "129px",
	top: 0
});

var galleryLabel = Ti.UI.createLabel ({
	text: "GALLERY",
	font: {fontSize: 40, fontFamily: 'OpenSans-Regular'},
	color: "#fff"
});

var classesView = Ti.UI.createView ({
	backgroundColor: "517330",
	height: "129px",
	top: 60
});

var classesLabel = Ti.UI.createLabel ({
	text: "CLASSES",
	font: {fontSize: 40, fontFamily: 'OpenSans'},
	color: "#fff",
});

var customView = Ti.UI.createView ({
	backgroundColor: "bfb6aa",
	height: "129px",
	top: 120
});

var customLabel = Ti.UI.createLabel ({
	text: "CUSTOM",
	font: {fontSize: 40, fontFamily: 'OpenSans'},
	color: "#fff"
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow,
});



//CLASSES SECTION
var submarinesTableHeader = Ti.UI.createView ({
	height: 50,
	backgroundColor: "#042F56"
});

var submarinesTableHeaderText = Ti.UI.createLabel ({
	text: "Navy Submarines",
	font: {fontSize: 22, fontWeight: "bold"},
	color: "#fff"
});

submarinesTableHeader.add(submarinesTableHeaderText);

//CUSTOM TABLE FOOTER
var submarinesTableFooter = Ti.UI.createView ({
	height: 30,
	backgroundColor: "#8297AB"
});

var submarinesTableFooterText = Ti.UI.createLabel ({
	text: "Silent Service",
	font: {fontSize: 16, fontWeight: "normal"},
	color: "#fff"
});

submarinesTableFooter.add(submarinesTableFooterText);

// TABLE
var navy = Ti.UI.createTableView ({
	//top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS" ) {
	navy.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// SECTIONS && ROWS
var submarinesSection = Ti.UI.createTableViewSection ({
	headerView: submarinesTableHeader,
	footerView: submarinesTableFooter
});


galleryView.add(galleryLabel);
classesView.add(classesLabel);
customView.add(customLabel);
mainWindow.add(galleryView, classesView, customView);
navWindow.open();

//load require file
var loadFile = require("gallery");
var loadFile = require("classes");
var loadFile = require("custom");
