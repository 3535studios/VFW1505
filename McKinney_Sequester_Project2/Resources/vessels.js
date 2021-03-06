//GETDAIL FUNCTION
var getDetail = function() {
	var detailWindow = Ti.UI.createWindow ({
		title: this.text,
		backgroundColor: "f5f5f5"
	});
	
		var detailTitleView = Ti.UI.createView ({
			height: 65,
			backgroundColor: "#fff",
			top: 0
		});
		
		var detailBorder = Ti.UI.createView ({
			backgroundColor: "#dbdbdb",
			height: 1,
			top: detailTitleView.height + detailTitleView.top
		});
		
		var detailTitleLabel = Ti.UI.createLabel ({
			text: this.title,
			font: {fontSize: 30, fontFamily: "Arial", fontWeight: "bold"},
			top: 30,
			width: "100%",
			textAlign: "center"
		}); 
		
		var detailText = Ti.UI.createLabel ({
			text: this.desc,
			font: {fontSize: 14, fontFamily: "Arial"},
			top: detailBorder.height + detailBorder.top + 40,
			left: 10,
			right: 10
		});
		
		detailTitleView.add(detailTitleLabel);
		detailWindow.add(detailTitleView, detailBorder, detailText);
		navWindow.openWindow(detailWindow);
};

for (i=0, j=carriers.length; i<j; i++) {
	var theRow = Ti.UI.createTableViewRow ({
		title: carriers[i].title,
		desc: carriers[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS" ) {
		theRow.hasChild = false;
		theRow.hasDetail = true;
}
	
	carriersSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

for (i=0, j=submarines.length; i<j; i++) {
	var theRow = Ti.UI.createTableViewRow ({
		title: submarines[i].title,
		desc: submarines[i].description,
		hasChild: true
	});
	
	if (Ti.Platform.name === "iPhone OS" ) {
		theRow.hasChild = false;
		theRow.hasDetail = true;
}
	
	
	submarinesSection.add(theRow);
	theRow.addEventListener("click", getDetail);
}

var navySections = [carriersSection, submarinesSection];

//setData method
navy.setData(navySections);