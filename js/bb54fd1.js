var needconfirm = 0;

var confirmFunction = function(event) {
	if (confirm("Voulez-vous vraiment effectuer cette action ?") === false)
		event.preventDefault();
};

document.addEventListener("DOMContentLoaded", function(event) {
	while (needconfirm = document.querySelector('.confirm')) {
		needconfirm.addEventListener("click", confirmFunction);
		needconfirm.classList.remove('confirm');
	}
});

setTimeout(function() {
	var flashbag = null;
	while (flashbag = document.querySelector('.flashbag-active')) {
		flashbag.classList.remove('flashbag-active');
		flashbag.classList.add('flashbag-closed');
	}
}, 5000);

// List variables
var itemsContainer = $("#jsf-list");
var allItems = $("#jsf-list li");
var displayedItems = allItems;

// Controls variables
var sortTypeSelect = $("#sort-type-select");
var sortSensSelect = $("#sort-sens-select");
var searchInput = $("#search-input");

function sort() {
	var crit = sortTypeSelect.val();
	var sens = sortSensSelect.val();
	// console.log("Sorting by " + crit + " with sens " + sens + ".");

	displayedItems.sort(function (a, b) {
		if (crit === 'title') {
			a = a.dataset[crit];
			b = b.dataset[crit];
		} else if (crit === 'date' || crit === 'funding') {
			a = parseInt(a.dataset[crit]);
			b = parseInt(b.dataset[crit]);
		} else if (crit === 'status') {
			a = (a.dataset['published'] === '1' ? 10 : 0) + (a.dataset['valid'] === '1' ? 1 : 0);
			b = (b.dataset['published'] === '1' ? 10 : 0) + (b.dataset['valid'] === '1' ? 1 : 0);
		}
		return ((a == b) ? 0 : ((a > b) ? 1 : -1) * (sens === 'desc' ? -1 : 1));
	});

	allItems.detach();
	displayedItems.appendTo(itemsContainer);
}

function search() {
	// console.log("Search with terms : \"" + searchInput.val() + "\".");
	displayedItems = allItems.filter(function(index, item) {
		var titleFilter = item.dataset['title'] ? item.dataset['title'].toUpperCase().indexOf(searchInput.val().toUpperCase()) > -1 : false
		var authorFilter = item.dataset['author'] ? item.dataset['author'].toUpperCase().indexOf(searchInput.val().toUpperCase()) > -1 : false
		return (titleFilter || authorFilter);
	});
	// console.log(displayedItems.length);
	sort();
}
