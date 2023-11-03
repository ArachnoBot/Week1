let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

const list = [
    ["Staffordshire Bullterrier", "bullterrier", "Staffordshire_Bull_Terrier"], 
    ["Beagle", "beagle", "Beagle"], 
    ["Finnish lapphund", "finnish", "Finnish_Lapphund"], 
    ["Boxer", "boxer", "Boxer_(dog)"], 
    ["Corgi", "corgi", "Corgi"]]

for (dog of list) {
    addItem(dog[0], dog[1], dog[2])
}

function addItem(headerText, imgName, wikiName) {
    let item = document.createElement("div")
    item.classList.add("wiki-item")
    container.appendChild(item)

    let header = document.createElement("h1")
    header.classList.add("wiki-header")
    header.textContent = headerText
    item.appendChild(header)

    let content = document.createElement("div")
    content.classList.add("wiki-content")
    item.appendChild(content)

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")
    content.appendChild(imgContainer)

    let img = document.createElement("img")
    img.classList.add("wiki-img")
    getImg(img, imgName)
    imgContainer.appendChild(img)

    let text = document.createElement("p")
    text.classList.add("wiki-text")
    getSummary(text, wikiName)
    text.textContent = "Text goes here. ".repeat(40)
    content.appendChild(text)


    



}

async function getImg(img, dog) {
    const response = await fetch("https://dog.ceo/api/breed/" + dog + "/images/random")
    const data = await response.json()
    img.src = data.message
}

async function getSummary(text, dog) {
    const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + dog)
    const data = await response.json()
    text.textContent = data.extract
}




/*
    <div class="wiki-item" >
        <h1 class="wiki-header">Breed X</h1>
        <div class="wiki-content">
           <p class="wiki-text">
             Some text about this breed.
           </p>
           <div class="img-container">
             <img class="wiki-img" src="">
           </div>
        </div>
    </div>
*/