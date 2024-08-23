let main = document.querySelector("#main")
let customCursor = document.createElement('div')
customCursor.classList.add("custom-cursor")
main.prepend(customCursor)
main.addEventListener("mousemove", (dets) => {
    customCursor.style.left = dets.x + "px"
    customCursor.style.top = dets.y + 20 + "px"
})