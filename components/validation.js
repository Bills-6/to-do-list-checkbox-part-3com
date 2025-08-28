export const nameActivityInput = document.getElementById("name-todo-input"),
	idActivityInput = document.getElementById("id-todo-input");

nameActivityInput.addEventListener("input", 
	function() {
		let valueNameActivity = nameActivityInput.value;

		if (valueNameActivity === "") {
			this.style.outline = "1px solid red";
			this.style.color = "red";
			this.style.backgroundColor = "#b5b5b5ff";
			this.placeholder = "Activity harus diberi nama";
		} else {
			this.setAttribute("style", "");
			this.style.backgroundColor = "";
			this.placeholder = "type here...";
		}
	});