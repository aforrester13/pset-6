window.onload = function() {


  document.getElementById("add-item").onclick = addItem
}


const addItem = function() {
  let canvas = document.getElementById("canvas1").onclick
  let ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let array = [add]
  do {
    var add = prompt("Add Item: ");
    if (add == null) {
      break;
    }

    var priority = prompt("Priority: ");
    if (priority == null) {
      break;
    }


  }
}
