const divForImg = document.getElementById("img-box");
const requestOne = "https://api.unsplash.com/search/photos?page=1&query=&client_id=h0-MBu3PEhoBpdlmgfmRAoGcG1QcMph-qdjedsUtnx0";
const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=expensive-cars&client_id=h0-MBu3PEhoBpdlmgfmRAoGcG1QcMph-qdjedsUtnx0"
function makeRequestToUnsplash(requestUrl){
  fetch(requestUrl)
    .then( res => res.json())
    .then((data) => {
        data.results.forEach( (imageObj) =>{
          createImage(imageObj);
        });
    });
}
function createImage(imageObj){
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");

  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "600px";
  image.style.height = "500px";
  image.style.border = "double 4px black"
  imageDiv.append(image);
  divForImg.append(imageDiv);
}

makeRequestToUnsplash(requestOne);
makeRequestToUnsplash(requestTwo);