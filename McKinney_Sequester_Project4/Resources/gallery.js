var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
var imageFiles = imagesFolder.getDirectoryListing();

var getGalleryImage = function() {
	var galleryWindow = Ti.UI.createWindow ({
		backgroundColor: "#fff",
		layout: "horizontal",
		title: "Submarine Gallery"
	});


navWindow.openWindow(galleryWindow);

};




//OPEN GALLERY WINDOW
galleryView.addEventListener("click", getGalleryImage);
