const buttonFilter = document.getElementById("filter-button");
const filterPanel = document.getElementById("filter-panel");

buttonFilter.addEventListener("click",
	function() {
		if (filterPanel.dataset.visibilityStatus === "closed") {
			isPanelVisibility("open");
		} else { isPanelVisibility("closed") }
	});

function isPanelVisibility(isForVisibility) {
	if (isForVisibility === "open") {
		filterPanel.dataset.visibilityStatus = "open";
		filterPanel.classList.remove("hidden", "scale-0");
	} else {
		filterPanel.dataset.visibilityStatus = "closed";
		filterPanel.classList.add("scale-0");

		setTimeout(() => {
			filterPanel.classList.add("hidden");
		}, 130);
	}
}