const buttonFilter = document.getElementById("filter-button");
const filterPanel = document.getElementById("filter-panel");

buttonFilter.addEventListener("click",
	function() {
		if (filterPanel.dataset.visibilitystatus === "closed") {
			isPanelVisibility("open");
		} else { isPanelVisibility("closed") }
	});

function isPanelVisibility(isForVisibility) {
	if (isForVisibility === "open") {
		filterPanel.dataset.visibilitystatus = "open";
		filterPanel.classList.remove("hidden");

		setTimeout(() => {
			filterPanel.classList.remove("scale-0");
		}, 100);
	} else {
		filterPanel.dataset.visibilitystatus = "closed";
		filterPanel.classList.add("scale-0");

		setTimeout(() => {
			filterPanel.classList.add("hidden");
		}, 130);
	}
}