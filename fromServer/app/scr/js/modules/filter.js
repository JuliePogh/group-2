import SELECT from "./select";

export default async function (btnArray, url, UI, PATCH, DELETE, COMPLETE) {
	btnArray.forEach(btn => {
		btn.addEventListener("click", async () => {
			let filterURL;
			UI.listsBlock.innerHTML = "";

			if (btn.dataset.filter === "filterComplete") {
				filterURL = `${url}?isComplete=true`;
			} else if (btn.dataset.filter === "filterUnComplete") {
				filterURL = `${url}?isComplete=false`;
			} else if (btn.dataset.filter === "filterAll") {
				filterURL = url;
			} else if (btn.dataset.filter === "deleted") {
				filterURL = `${url},${history}`;
			}

			return await fetch(filterURL)
			.then(data => data.json())
			.then(data => data.forEach(obj => UI.toHTML(obj.id, obj.title, obj.isComplete, obj.history)))
			.then(() => SELECT(PATCH, DELETE, COMPLETE, url));
		});
	});
}