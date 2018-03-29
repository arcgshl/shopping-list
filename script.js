var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// 选中所有的"li" tag. 得到一个array.
var shopList = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createDeleteButton(parent) {
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Done"));
	button.className = "delete";
	parent.appendChild(button);
}

function updateDeleteButton() {
	for (var i = 0; i < deleteButton.length; i++) {
		deleteButton[i].addEventListener("click", function() {
			this.parentNode.remove();
		})
	}
}

function createListElement() {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		createDeleteButton(li);
		deleteButton = document.querySelectorAll(".delete");
		updateDeleteButton();
		li.addEventListener("click", toggleDoneAfterClick);
		input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneAfterClick() {
	this.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
for (var i = 0; i < shopList.length; i++) {
	shopList[i].addEventListener("click", toggleDoneAfterClick);
	createDeleteButton(shopList[i]);
}
deleteButton = document.querySelectorAll(".delete");
updateDeleteButton();
