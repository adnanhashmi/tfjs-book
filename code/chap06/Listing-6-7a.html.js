function loadImage() {
    const fileElement = document.getElementById("ImageFile");
    const imgElement = document.getElementById("ImageElement");
    
    const fileReader = new FileReader();
    fileReader.onload = function() {
       imgElement.src = fileReader.result;
    };

    fileReader.readAsDataURL(fileElement.files[0]);
  }