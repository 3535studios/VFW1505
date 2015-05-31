var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
var imageFiles = imagesFolder.getDirectoryListing();
var pHeight = Ti.Platform.displayCaps.platformHeight;
var pWidth = Ti.Platform.displayCaps.platformWidth;

var getGalleryImage = function() {
	var galleryWindow = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: "Submarine Gallery"
	});
	
	
	for (var i=0; i<imageFiles.length; i++) {
		var imageView = Ti.UI.createView ({
			backgroundColor: "#042F56",
		});
	
		var fullSizeImage = Ti.UI.createImageView ({
		  image: "images/gallery/" + imageFiles[i],
		  top: 0
		});
	}
	
	getNewImageView = Ti.UI.createView ({
		backgroundColor: "#F2F4F3",
		height: "129px",
		bottom: 0
	});
	
	getNewImageLabel = Ti.UI.createLabel ({
		color: "#000",
		font: {fontSize: 30, fontWeight: 'bold'},
		text: "NEW IMAGE"
	});
	
	getNewImageView.add(getNewImageLabel);
	imageView.add(fullSizeImage, getNewImageView);
	galleryWindow.add(imageView);
	navWindow.openWindow(galleryWindow);
	
	getNewImageView.addEventListener("click", getNewRandomImage);
	
};

//SHOW RANDOM IMAGE
var getNewRandomImage = function() {
	var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
	var imageFiles = imagesFolder.getDirectoryListing();
	
	for (var i=0; i<imageFiles.length; i++) {
		var imageView = Ti.UI.createView ({
			backgroundColor: "#042F56",
		});
	
		var fullSizeImage = Ti.UI.createImageView ({
		  image: "images/gallery/" + imageFiles[i],
		  top: 0
		});
	}
	
	imageView.add(fullSizeImage);
};

//OPEN GALLERY WINDOW
galleryView.addEventListener("click", getGalleryImage);

