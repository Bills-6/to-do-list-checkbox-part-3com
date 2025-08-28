import { createdPanel, createButton } from "./createdTodo.js";

const buttonMode = document.getElementById("mode-button");
const iconLight = document.getElementById("icon-light"),
	iconDark = document.getElementById("icon-dark");

const body = document.body;
var allTag = document.querySelectorAll("h1");

buttonMode.addEventListener("click", function() {
	if (body.dataset.theme === "light") {
		styleMode("dark");
	} else {
		styleMode("light");
	}
});

window.addEventListener("DOMContentLoaded", function() {
	if (this.localStorage.getItem("mode") === "dark") {
		styleMode("dark")
	}
});

function styleMode(isMode) {
	if (isMode === "dark") {
		body.dataset.theme = "dark";
		body.classList.add("bg-gray-900");

		allTag.forEach((item) => {
			if (item.nodeName === "H1") {
				item.classList.replace("text-gray-500", "text-gray-100");
			}
			item.classList.add("text-gray-100");
			localStorage.setItem("mode", "dark");
		});
		// [< icon move >]
		iconLight.classList.add("scale-0");
		iconDark.style.display = "block";
		setTimeout(() => {
			iconLight.style.display = "none";
			iconDark.classList.replace("translate-x-[20px]", "translate-x-[0]");
		}, 100);

		// [< createdPanel style >]
		createdPanel.classList.replace(
			"bg-gray-300", "bg-gray-700"
		);
		createdPanel.classList.remove("shadow-md", "shadow-gray-300");
		const allElemenInPanel = document.querySelectorAll(
			"#created-panel label, input, span#title-panel, i#icon-close"
		);
		allElemenInPanel.forEach((item) => {
			if (item.nodeName === "LABEL") {
				item.classList.add("text-gray-300");
			}
			if (item.nodeName === "SPAN") {
				item.classList.add("text-gray-300");
				item.classList.replace("after:bg-gray-900", "after:bg-gray-300");
			}
			if (item.nodeName === "INPUT") {
				item.classList.replace(
					"bg-gray-200", "bg-gray-600"
				);
				item.classList.add("text-gray-400")
			}
			if (item.nodeName === "I") {
				item.classList.add("text-gray-300");
			}
		});
	} else {
		body.dataset.theme = "light";
		body.classList.remove("bg-gray-900");
		
		allTag.forEach((item) => {
			if (item.nodeName === "H1") {
				item.classList.replace("text-gray-100", "text-gray-500");
			}
			item.classList.remove("text-gray-100");
		});
		localStorage.setItem("mode", "white");

		iconDark.classList.replace(
			"translate-x-[0]", "translate-x-[20px]"
		);
		iconLight.style.display = "block";

		setTimeout(() => {
			iconLight.classList.remove("scale-0");
			iconDark.style.display = "none";
		}, 100);

		// [< createdPanel style >]
		createdPanel.classList.replace(
			"bg-gray-700", "bg-gray-300"
		);
		createdPanel.classList.add("shadow-md", "shadow-gray-300");
		const allElemenInPanel = document.querySelectorAll(
			"#created-panel label, input, span#title-panel, i#icon-close"
		);
		console.log(allElemenInPanel);
		
		allElemenInPanel.forEach((item) => {
			if (item.nodeName === "LABEL") {
				item.classList.remove("text-gray-300");
			}
			if (item.nodeName === "SPAN") {
				item.classList.remove("text-gray-300");
				item.classList.replace("after:bg-gray-300", "after:bg-gray-900");
			}
			if (item.nodeName === "INPUT") {
				item.classList.replace(
					"bg-gray-600", "bg-gray-200"
				);
				item.classList.remove("text-gray-400")
			}
			if (item.nodeName === "I") {
				item.classList.remove("text-gray-300");
			}
		});
	}
} 