//SETUP GRID FOR IMAGES
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 33;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - (rowCount * margin) - margin;
var size =  trueCanvasWidth / rowCount;

//OPEN FULL GALLERY WINDOW
var getGallery = function() {
	var fullGallery = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		title: mainWindow.title
	});
	
var border = Ti.UI.createView ({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});
	
var viewContainer = Ti.UI.createView ({
	width: pWidth,
	backgroundColor: "#fef",
	layout: "horizontal"
});
	
for (var i=0; i<itemCount; i++) {
	var view = Ti.UI.createView({
		backgroundColor: "#33CCFF",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	
	var text = Ti.UI.createLabel({
		text: i+1,
		color: "#fff"
	});
	
	view.add(text);
	viewContainer.add(view);
}	
	
	
	
	navWindow.openWindow(fullGallery);
	
	navWindow.add(border);
	navWindow.add(viewContainer);
	
};
	openGalleryLabel.addEventListener("click",getGallery);
	
	
	




