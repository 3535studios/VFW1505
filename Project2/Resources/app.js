// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#000");

// DATA
var submarines =[{title: "Attack"}, {title: "Ballistic Missile"}, {title: "Guided Missile"}, {title: "Deep Submergence"}];
var carriers = [{title: "Nimtz-Class"}, {title: "Ford-Class"}];

// MAIN WINDOW BACKGROUND COLOR
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#f5f5f5"
});

var titleView = Ti.UI.createView ({
	height: 65,
	backgroundColor: "#fff",
	top: 0
});

var border = Ti.UI.createView ({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "NAVY VESSELS",
	font: {fontSize: 30, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: "100%",
	textAlign: "center"
});

//CUSTOM TABLE HEADER
var carriersTableHeader = Ti.UI.createView ({
	height: 50,
	backgroundColor: "#042F56"
});

var carriersHeaderText = Ti.UI.createLabel ({
	text: "Navy Carriers",
	font: {fontSize: 22, fontWeight: "bold"},
	color: "#fff"
});

carriersTableHeader.add(carriersHeaderText);

//CUSTOM TABLE FOOTER
var carriersTableFooter = Ti.UI.createView ({
	height: 30,
	backgroundColor: "#8297AB"
});

var carriersTableFooterText = Ti.UI.createLabel ({
	text: "Warships",
	font: {fontSize: 16, fontWeight: "normal"},
	color: "#fff"
});

carriersTableFooter.add(carriersTableFooterText);

//CUSTOM TABLE HEADER
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
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS" ) {
	navy.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// SECTIONS && ROWS
var carriersSection = Ti.UI.createTableViewSection ({
	headerView: carriersTableHeader,
	footerView: carriersTableFooter
});

var submarinesSection = Ti.UI.createTableViewSection ({
	headerView: submarinesTableHeader,
	footerView: submarinesTableFooter
});

for (i=0, j=carriers.length; i<j; i++) {
	var theRow = Ti.UI.createTableViewRow ({
		title: carriers[i].title
	});
	
	carriersSection.add(theRow);
}

for (i=0, j=submarines.length; i<j; i++) {
	var theRow = Ti.UI.createTableViewRow ({
		title: submarines[i].title
	});
	
	submarinesSection.add(theRow);
}

var navySections = [carriersSection, submarinesSection];

//setData method
navy.setData(navySections);

titleView.add(titleLabel);
mainWindow.add(titleView, border, navy);
mainWindow.open();
