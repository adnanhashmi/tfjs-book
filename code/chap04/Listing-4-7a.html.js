let model;

async function predictFromImage() {
  document.getElementById('message')
        .innerText = "Classification in progress. Please wait...";
  // Load mobilenet Model
  model = await mobilenet.load();

  // Make a prediction on the Image
  const imgElement = document.getElementById("ImageElement");
  const result = await model.classify(imgElement);
  document.getElementById('message').innerText = result[0].className;
}