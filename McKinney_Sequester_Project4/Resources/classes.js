var classesDetail = function (){
	
var classesWindow = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: "Submarine Classes"
	});


navWindow.openWindow(classesWindow);
// DATA
var submarines = [
	{title: "Attack", description: "The Navy deploys three classes of these sleek subs: the Los Angeles, Seawolf and Virginia. All are capable of performing seek-and-destroy missions on enemy ships and subs, surveillance and reconnaissance, irregular warfare, covert troop insertion, mine and anti-mine operations and more. Plus, each is armed with Tomahawk® cruise missiles to stealthily strike targets from far out."}, 
	{title: "Ballistic Missile", description: "\"Boomers\" may have the most important mission in the Navy: strategic nuclear deterrence. They were built for it as their sole role. Capable of operating underwater for months on end, Ballistic Missile Submarines require crews that can work together under any circumstance. They can defend themselves individually with torpedoes, but what they do for the defense of America cannot be measured."},
	{title: "Guided Missile", description: "To complement the potent guided-missile platform of Cruisers and Destroyers, the Navy needed something a little more stealthy. And few things are as stealthy as an Ohio-Class boomer. Guided Missile Submarines were converted from that class and can carry over 150 Tomahawk® missiles plus transport and support Navy Special Operations forces."},
	{title: "Deep Submergence", description: "When trouble happens beneath the waves, there is only one vessel to call on: the DSRV. They perform underwater rescue operations on disabled submarines for the US or foreign navies. They’re designed for quick deployment in the event of a submarine accident – transportable by truck, aircraft, ship or specially configured attack submarine. Many Sailors owe their lives to the capabilities of a DSRV and its crew."}
	];

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

var submarinesSection = Ti.UI.createTableViewSection ({
	headerView: submarinesTableHeader,
	footerView: submarinesTableFooter
});

};

classesView.addEventListener("click",classesDetail);