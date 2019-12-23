window.onload = function() {

  document.getElementbyId("add-Item").onclick = addItem
}

let x = document.getElementbyId("add-Item");
x.appendToEnd()

const addItem = function() {
  let textEntered = document.getElementbyId("myText")
  let canvas = document.createElement("CANVAS")
  
  let ctx = canvas.getContext('2d')
  ctx.clearRect = (0, 0, canvas.width, canvas.height)


}
