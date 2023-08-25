// Промисификация – это когда берут асинхронную функциональность и 
// делают для неё обёртку, возвращающую промис.


function httpGet(url) {

	return new Promise(function (resolve, reject) {

		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function () {
			if (this.status == 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};

		xhr.onerror = function () {
			reject(new Error("Network Error"));
		};

		xhr.send();
	});

}



httpGet("/article/promise/user.json")
	.then(
		response => console.log(`Fulfilled: ${response}`),
		error => console.log(`Rejected: ${error}`)
	);


// Просто завернули реализацию в промис 