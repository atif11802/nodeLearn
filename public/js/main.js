const submitBtn = document.getElementById("submitBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const middle_layer = document.querySelector("#middle_layer");
const image = document.querySelector("#image");

console.log(image.src);

submitBtn.addEventListener("click", async (e) => {
	e.preventDefault();

	if (cityname.value) {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=51b8bd06158ab1f28c055f67c04118fa&units=metric`;
			const res = await fetch(url);
			const data = await res.json();
			const arrdata = [data];
			console.log(arrdata[0].main.temp);
			temp.innerText = arrdata[0].main.temp;
			temp_status = arrdata[0].weather[0].icon;
			console.log(temp_status);
			img.src.replace(`http://localhost:8000/${temp_status}`);
			// middle_layer.classList.add("hello");
			// http://localhost:8000/ddd
			// middle_layer.add("middle_layer");
		} catch {}
	} else {
		city_name.innerText = "please write city name properly.";
	}
});

const changeClass = () => {
	middle_layer.classList.add("hello");
};
