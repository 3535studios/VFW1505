//SETUP GRID FOR IMAGES
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
var imageFiles = imagesFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 5;
var trueCanvasWidth = pWidth - (rowCount * (margin * 2));
var size =  trueCanvasWidth / rowCount;

//OPEN FULL GALLERY WINDOW
var getGallery = function() {
	var fullGallery = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: mainWindow.title
	});
	
var border = Ti.UI.createView ({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView ({
	top: 0,
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef",
	layout: "horizontal"
});
	
for (var i=0; i<imageFiles.length; i++) {
		var view = Ti.UI.createView ({
			backgroundColor: "#33CCFF",
			left: margin,
			right: margin,
			top: 20,
			width: size,
			height: size,
			borderRadius: 10
	});
	
	var thumb = Ti.UI.createImageView ({
		image: "images/gallery/" + imageFiles[i]
	});
	
	view.add(thumb);
	viewContainer.add(view);
}	
	
	
	
	navWindow.openWindow(fullGallery);
	
	navWindow.add(border);
	navWindow.add(viewContainer);
	
};
	openGalleryLabel.addEventListener("click",getGallery);
	
	
	




