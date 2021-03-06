// APP BACKGROUND COLOR
Ti.UI.setBackgroundColor("#000");

// DATA
var carriers = [
	{title: "Nimitz-Class", description: "Admiral Chester W. Nimitz was one of the most brilliant Navy tacticians and strategists in history – a major factor in U.S. victory in the Pacific theater during WWII. In his honor, the Navy launched the USS. Nimitz. Nine other Nimitz-Class carriers followed that launch, eventually replacing the world's first class of nuclear carriers, the Enterprise class. For over 40 years, these gigantic ships have been the world's most dominant and capable warships."}, 
	{title: "Ford-Class", description: "The successor of the Nimitz-Class is the USS Gerald R. Ford. It's a new class of carrier, expected for delivery in 2015. It's represents the Navy's focus on super-advanced technology, efficiency and capabilities. An advanced reactor design gives it more power than the Nimitz class. It has stealth features to help reduce radar profile. For defense, a Ford-Class carrier features an evolved missile system and powerful AN/SPY-3 dual-band radar. Even the way it launches planes has changed – the Electromagnetic Aircraft Launch System (EMALS) replaces steam pistons with powerful magnets to launch jets."}
	];
var submarines = [
	{title: "Attack", description: "The Navy deploys three classes of these sleek subs: the Los Angeles, Seawolf and Virginia. All are capable of performing seek-and-destroy missions on enemy ships and subs, surveillance and reconnaissance, irregular warfare, covert troop insertion, mine and anti-mine operations and more. Plus, each is armed with Tomahawk® cruise missiles to stealthily strike targets from far out."}, 
	{title: "Ballistic Missile", description: "\"Boomers\" may have the most important mission in the Navy: strategic nuclear deterrence. They were built for it as their sole role. Capable of operating underwater for months on end, Ballistic Missile Submarines require crews that can work together under any circumstance. They can defend themselves individually with torpedoes, but what they do for the defense of America cannot be measured."},
	{title: "Guided Missile", description: "To complement the potent guided-missile platform of Cruisers and Destroyers, the Navy needed something a little more stealthy. And few things are as stealthy as an Ohio-Class boomer. Guided Missile Submarines were converted from that class and can carry over 150 Tomahawk® missiles plus transport and support Navy Special Operations forces."},
	{title: "Deep Submergence", description: "When trouble happens beneath the waves, there is only one vessel to call on: the DSRV. They perform underwater rescue operations on disabled submarines for the US or foreign navies. They’re designed for quick deployment in the event of a submarine accident – transportable by truck, aircraft, ship or specially configured attack submarine. Many Sailors owe their lives to the capabilities of a DSRV and its crew."}
	];



// MAIN WINDOW BACKGROUND COLOR
var mainWindow = Ti.UI.createWindow ({
	title: "Navy Vessels",
	backgroundColor: "#f5f5f5"
});

//NAVIGATION WINDOW
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
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

var titleLabel = Ti.UI.createLabel ({
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
	//top: border.top + border.height
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

titleView.add(titleLabel);
mainWindow.add(titleView, border, navy);
mainWindow.add(navy);
navWindow.open();

//load require file
var loadFile = require("vessels");