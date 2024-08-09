let _box = document.getElementById("box");
// console.log(_box);
let _addElement = document.getElementById("addElement");
function createTittleElement() {
  let text = "hello";
  let elementString = `<h1 id="myP"> ${text}</h1>`;
  _box.innerHTML = elementString;
}
_addElement.onclick = createTittleElement;
