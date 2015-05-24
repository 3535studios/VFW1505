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
	var galleryWindow = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: "Submarine Gallery"
	});
	
var viewContainer = Ti.UI.createScrollView ({
	top: 0,
	width: pWidth,
	contentWidth: pWidth,
	height: "100%",
	showVerticalScrollIndicator: true,
	backgroundColor: "#042F56",
	layout: "horizontal",
});
	
for (var i=0; i<imageFiles.length; i++) {
		var view = Ti.UI.createView ({
			backgroundColor: "#33CCFF",
			left: margin,
			right: margin,
			top: margin,
			width: size,
			height: size,
			borderRadius: margin
	});
	
	var thumb = Ti.UI.createImageView ({
		image: "images/gallery/" + imageFiles[i],
	});
	
	view.add(thumb);
	viewContainer.add(view);
}	

galleryWindow.add(viewContainer);
navWindow.openWindow(galleryWindow);
	
};
	
openGalleryLabel.addEventListener("click",getGallery);
		
	




