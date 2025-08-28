export const createButton = document.getElementById("create-button");
export const createdPanel = document.getElementById("created-panel");

createButton.addEventListener("click", function() {
	if (createdPanel.dataset.status === "closed") {
		doorPanel("open");
	} else { doorPanel("close") }
});

// helps function for close or open panel
export function doorPanel(isFor) {
	if (isFor === "open") {
		createdPanel.dataset.status = "open";
		createdPanel.classList.remove("hidden");
		setTimeout(() => {
			createdPanel.classList.remove("scale-0");
		}, 150);
	} else {
		createdPanel.dataset.status = "closed";
		createdPanel.classList.add("scale-0");
		setTimeout(() => {
			createdPanel.classList.add("hidden");
		}, 150);
	}
}

// [< close panel if click button close in panel >]
const closePanelButton = document.getElementById("close-created-panel-button");

closePanelButton.addEventListener("click", function() {
	doorPanel("close");
});

// [<close panel if click is not in target>]
document.addEventListener("click", (e) => {
	if (!createdPanel.contains(e.target) && !createButton.contains(e.target)) {
		doorPanel("close");
	}
});

// [< close panel if click key ESC in keyboard >]
document.addEventListener("keydown", function(isKey) {
	if (isKey.key === "Escape") {
		doorPanel("close");
	}
});