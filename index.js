let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

for (let i = 0; i < 5; i++) {
    addItem()
}

function addItem(headText) {

    let item = document.createElement("div")
    item.classList.add("wiki-item")
    container.appendChild(item)

    let header = document.createElement("h1")
    header.classList.add("wiki-header")
    header.textContent = "Breed X"
    item.appendChild(header)

    let content = document.createElement("div")
    content.classList.add("wiki-content")
    item.appendChild(content)

    let text = document.createElement("p")
    text.classList.add("wiki-text")
    text.textContent = "Text goes here. ".repeat(40)
    content.appendChild(text)

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")
    content.appendChild(imgContainer)

    let img = document.createElement("img")
    imgContainer.classList.add("wiki-img")
    imgContainer.appendChild(img)

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