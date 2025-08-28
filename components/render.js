import { nameActivityInput } from './validation.js';
import { doorPanel } from './createdTodo.js';

let stack = [];
let undoStack = [];
let redoStack = [];

const ul = document.getElementById("todolist-wrapper");
const sytling = {
	listStyle: ['todo', 'p-[1rem]', 'bg-zinc-300', 'rounded-md', 'shadow-sm', 'shadow-gray-300', 'pt-2'],
	headStyle: ['head-todo', 'flex', 'items-center', 'justify-between', 'mb-3'],
	timeTodoStyle: ['time-todo', 'lg:text-lg'],
	deleteButtonStyle: ['delete-button', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'flex', 'items-center', 'justify-center', 'hover:cursor-pointer', 'active:scale-[0.9]'],
	iconDeleteStyle: ['material-symbols-outlined', 'size'],

	bodySection: {
		bodytodoStyle: ['body-todo', 'py-1', 'flex', 'flex-col', 'lg:flex-row', 'items-center', 'gap-3'],
		todoActivityStyle: ['todo-activity-wrapper', 'w-full', 'lg:grow', 'relative'],
		activityInputStyle: ['activity-input', 'w-full', 'resize-none', 'text-[1.3rem]', 'lg:text-[1.6rem]', 'py-3'],
		editActivityButtonStyle: ['edit-activity-button', 'w-[30px]', 'h-[30px]', 'lg:w-[40px]', 'lg:h-[40px]', 'hidden', 'items-center', 'justify-center', 'absolute', 'right-[10px]', 'top-[50%]', 'translate-y-[-50%]', 'hover:cursor-pointer', 'active:scale-[0.9]', 'opacity-0', 'hover:opacity-100', 'hover:flex'],
		iconEditActivityStyle: ['material-symbols-outlined', 'size'],

		todoCheckboxWrapperStyle: ['todo-checkbox-wrapper', 'w-full', 'lg:w-[60%]', 'py-2', 'flex', 'items-center', 'gap-3', 'justify-center'],
		checkboxInputwrapperStyle: ['checkbox-input-wrapper', 'w-[40px]', 'h-[40px]', 'relative'],
		checkboxInput: ['checkbox-input', 'w-full', 'h-full']
	}
}

function renderTask(data = stack) {
	ul.innerHTML = null;

	data.forEach((todo, index) => {
		const fragment = document.createDocumentFragment();
		// create li
		const li = document.createElement("li");
		li.classList.add(...sytling.listStyle);
		// create head todo
		const headTodo = document.createElement("div");
		headTodo.classList.add(...sytling.headStyle);
		// create time todo
		const timeTodo = document.createElement("time");
		timeTodo.dateTime = null;
		timeTodo.classList.add(...sytling.timeTodoStyle);
		// create delete button
		const deleteButton = document.createElement("span");
		deleteButton.classList.add(...sytling.deleteButtonStyle);
		// create icon delete
		const iconDelete = document.createElement("i");
		iconDelete.classList.add(...sytling.iconDeleteStyle);
		iconDelete.textContent = "delete";

		// create body todo
		const bodyTodo = document.createElement("div");
		bodyTodo.classList.add(...sytling.bodySection.bodytodoStyle);
		// create todo activity wrapper
		const todoactivityWrapper = document.createElement("div");
		todoactivityWrapper.classList.add(...sytling.bodySection.todoActivityStyle);
		// create activity input
		const activityInput = document.createElement("textarea");
		activityInput.classList.add(...sytling.bodySection.activityInputStyle);
		activityInput.value = todo.data;
		activityInput.disabled = true;
		// create edit activity button
		const editActivityButton = document.createElement("span");
		editActivityButton.classList.add(...sytling.bodySection.editActivityButtonStyle);
		// crete icon edit activity
		const iconEditActivity = document.createElement("i");
		iconEditActivity.classList.add(...sytling.bodySection.iconEditActivityStyle);
		iconEditActivity.textContent = "edit";
		// create todo checkbox wrapper
		const checkboxWrapper = document.createElement("div");
		checkboxWrapper.classList.add(...sytling.bodySection.todoCheckboxWrapperStyle);

		// combine
		headTodo.appendChild(timeTodo);
		deleteButton.appendChild(iconDelete);
		headTodo.appendChild(deleteButton);
		li.appendChild(headTodo);

		todoactivityWrapper.appendChild(activityInput);
		editActivityButton.appendChild(iconEditActivity);
		todoactivityWrapper.appendChild(editActivityButton);
		bodyTodo.appendChild(todoactivityWrapper);

		for (let i = 0; i <= 6; i++) {
			const isWrapperInputCheckbox = document.createElement("div");
			isWrapperInputCheckbox.classList.add(...sytling.bodySection.checkboxInputwrapperStyle);

			const inputCheckbox = document.createElement("input");
			inputCheckbox.type = "checkbox";
			inputCheckbox.classList.add(...sytling.bodySection.checkboxInput);
			inputCheckbox.checked = todo.check[i];

			inputCheckbox.addEventListener("change", function() {
				todo.check[i] = this.checked;
				saveStackToLocalStorage();
			});
			isWrapperInputCheckbox.appendChild(inputCheckbox);
			checkboxWrapper.appendChild(isWrapperInputCheckbox);
		}
		bodyTodo.appendChild(checkboxWrapper);
		li.appendChild(bodyTodo);
		fragment.appendChild(li);
		ul.appendChild(fragment);
		saveStackToLocalStorage();

		// [< autoResize input >]
		autoResize(activityInput);
		activityInput.addEventListener("input", () => autoResize(activityInput));

		// [< edit activity script >]
		editActivityButton.addEventListener("click", function() {
			if (activityInput.hasAttribute("disabled")) {
				activityInput.disabled = false;
				activityInput.focus();
				this.style.opacity = "1";
			} else {
				this.setAttribute("style", "");
				activityInput.disabled = true;
				activityInput.blur();

				const newValue = activityInput.value;
				todo.data = newValue;
				saveStackToLocalStorage();
			}
		});
	});
}

	class Data {
		constructor(data, id) {
			this.data = data;
			this.id = id;
			this.check = [false, false, false, false, false, false, false];
		}
	}
const id = document.getElementById("id-todo-input");
const buttonConfirm = document.getElementById("confirm-create-button");

buttonConfirm.addEventListener("click", 
	function() {
		let valueActivity = nameActivityInput.value.trim(),
			valueId = id.value.trim();

		const validityId = valueId === ""
			? "id tidak diberikan"
			: valueId
		
		if (valueActivity !== "") {
			stack.push(new Data(valueActivity, validityId));
			nameActivityInput.value = "";
			console.log(stack);
			renderTask();
			doorPanel("close");
		}
	});

	window.addEventListener("DOMContentLoaded", function() {
		if (this.localStorage.getItem("stack") !== null) {
			const takeThat = this.localStorage.getItem("stack");
			stack = [...JSON.parse(takeThat)];
			renderTask();
			console.log(stack)
		}
	});

// [< delete all activity >]
const deleteForeverButton = document.getElementById("remove-forever-button");
deleteForeverButton.addEventListener("click", () => {
	stack = [];
	saveStackToLocalStorage();
	renderTask();
});

console.log(localStorage)

function saveStackToLocalStorage() {
	localStorage.setItem("stack", JSON.stringify(stack));
}
function autoResize(Node) {
	Node.style.height = "0";
	Node.style.height = `${Node.scrollHeight}px`;
}