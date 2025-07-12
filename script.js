
let container = document.querySelector(".container")
const fetchPhotos = async () => {
  let res = await fetch('./Clicks/00.json')
  const data = await res.json()
  console.log(data)
  data.forEach(image => {
    let div = document.createElement("div")
    div.classList.add("photo")
    let ext = image.split('.')[1]
    if (ext === "jpeg") {
      div.innerHTML = ` <img class="image" src="Clicks/${image}" alt="Sample" />`
    }
    else if (ext === "mp4") {
      console.log(ext)
      div.innerHTML = ` <video  controls loop  src="Clicks/${image}" class="image" ></video> `
    }

    container.appendChild(div)
  })

}

async function rest() {
  await fetchPhotos()

  let photo = document.querySelectorAll(".photo");
  let viewButton = document.createElement("button");
  let downloadButton = document.createElement("button");
  console.log(photo)
  function createButtons(img, url) {
    viewButton.classList.add("button", "button1");
    downloadButton.classList.add("button", "button2");
    img.appendChild(viewButton);
    img.appendChild(downloadButton);
    viewButton.innerHTML = `<a href="${url}">VIEW</a>`;
    downloadButton.innerHTML = `<a href="${url}" download>DOWNLOAD</a>`;
  }
  function deleteButtons() {
    viewButton.classList.remove("button1");
    downloadButton.classList.remove("button2");
  }

  photo.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      console.log("mouse entered")
      let imgtag = img.querySelector(".image");
      const url = imgtag.src;
      console.log(url)
      createButtons(img, url);
    });
  });

  photo.forEach((img) => {
    img.addEventListener("mouseleave", deleteButtons);
  });

}
rest()