var imageUrInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
var gallery = document.querySelector('main');
var imageUrls = [];

addImageButton.addEventListener('click', function(){
  if(imageUrInput.value !== ""){
    imageUrls.push(imageUrInput.value)

  }
    imageUrInput.value = '';
    updateGallery();
});

function updateGallery(){
  gallery.innerHTML = '';
  for(var i = 0; i < imageUrls.length; i++){
  var imageElement = document.createElement('img');
  imageElement.classList.add('gallery-image');
  imageElement.src = imageUrls[i];
  gallery.append(imageElement);
  }
}
updateGallery();
