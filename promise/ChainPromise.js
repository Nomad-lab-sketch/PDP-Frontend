// «Чейнинг» (chaining), то есть возможность строить асинхронные цепочки из 
// промисов – пожалуй, основная причина, 
// из-за которой существуют и активно используются промисы.

httpGet('/article/promise/user.json')
	// 1. Получить данные о пользователе в JSON и передать дальше
	.then(response => {
		console.log(response);
		let user = JSON.parse(response);
		return user;
	})
	// 2. Получить информацию с github
	.then(user => {
		console.log(user);
		return httpGet(`https://api.github.com/users/${user.name}`);
	})
	// 3. Вывести аватар на 3 секунды (можно с анимацией)
	.then(githubUser => {
		console.log(githubUser);
		githubUser = JSON.parse(githubUser);

		let img = new Image();
		img.src = githubUser.avatar_url;
		img.className = "promise-avatar-example";
		document.body.appendChild(img);

		setTimeout(() => img.remove(), 3000); // (*)
	});

	// Если очередной then вернул промис, то далее по цепочке будет передан 
	// не сам этот промис, а его результат.	