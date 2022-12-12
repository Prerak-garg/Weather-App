const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf87bc77bcmsh09f454066cff0f1p13c9ccjsn776f750f504d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather = (city)=>{

	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
		// cloud_pct.innerHTML =  response.cloud_pct
  		temp.innerHTML = response.temp
		  temp2.innerHTML = response.temp
  		feels_like.innerHTML = response.feels_like
  		humidity.innerHTML = response.humidity
		  humidity2.innerHTML = response.humidity
  		min_temp.innerHTML = response.min_temp
  		max_temp.innerHTML = response.max_temp
  		wind_speed.innerHTML = response.wind_speed
		  wind_speed2.innerHTML = response.wind_speed
  		wind_degrees.innerHTML = response.wind_degrees
  		sunrise.innerHTML = response.sunrise
  		sunset.innerHTML = response.sunset

		console.log(response)
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct_Shan.innerHTML =  response.cloud_pct
  		temp_Shan.innerHTML = response.temp
  		feels_like_Shan.innerHTML = response.feels_like
  		humidity_Shan.innerHTML = response.humidity
  		min_temp_Shan.innerHTML = response.min_temp
  		max_temp_Shan.innerHTML = response.max_temp
  		wind_speed_Shan.innerHTML = response.wind_speed
  		wind_degrees_Shan.innerHTML = response.wind_degrees
  		sunrise_Shan.innerHTML = response.sunrise
  		sunset_Shan.innerHTML = response.sunset

		console.log(response)
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct_bos.innerHTML =  response.cloud_pct
  		temp_bos.innerHTML = response.temp
  		feels_like_bos.innerHTML = response.feels_like
  		humidity_bos.innerHTML = response.humidity
  		min_temp_bos.innerHTML = response.min_temp
  		max_temp_bos.innerHTML = response.max_temp
  		wind_speed_bos.innerHTML = response.wind_speed
  		wind_degrees_bos.innerHTML = response.wind_degrees
  		sunrise_bos.innerHTML = response.sunrise
  		sunset_bos.innerHTML = response.sunset

		console.log(response)
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct_luc.innerHTML =  response.cloud_pct
  		temp_luc.innerHTML = response.temp
  		feels_like_luc.innerHTML = response.feels_like
  		humidity_luc.innerHTML = response.humidity
  		min_temp_luc.innerHTML = response.min_temp
  		max_temp_luc.innerHTML = response.max_temp
  		wind_speed_luc.innerHTML = response.wind_speed
  		wind_degrees_luc.innerHTML = response.wind_degrees
  		sunrise_luc.innerHTML = response.sunrise
  		sunset_luc.innerHTML = response.sunset

		console.log(response)
	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct_kol.innerHTML =  response.cloud_pct
  		temp_kol.innerHTML = response.temp
  		feels_like_kol.innerHTML = response.feels_like
  		humidity_kol.innerHTML = response.humidity
  		min_temp_kol.innerHTML = response.min_temp
  		max_temp_kol.innerHTML = response.max_temp
  		wind_speed_kol.innerHTML = response.wind_speed
  		wind_degrees_kol.innerHTML = response.wind_degrees
  		sunrise_kol.innerHTML = response.sunrise
  		sunset_kol.innerHTML = response.sunset

		console.log(response)
	})
	.catch(err => console.error(err));