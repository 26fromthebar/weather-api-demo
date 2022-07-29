const weatherBtn = document.querySelector('.weather-btn');
const weatherLocation = document.querySelector('.weather-location');
const weatherDescription = document.querySelector('.weather-description');
const weatherTemp = document.querySelector('.weather-temp');
const weatherIcon = document.querySelector('.weather-icon');

weatherBtn.addEventListener('click', async () => {
  const response = await axios.get(
    'http://api.weatherapi.com/v1/current.json?key=92eab374f8c14f52bb4115634221403&q=-31.083332,150.916672'
  );

  console.log(response);

  weatherLocation.textContent = response.data.location.name;
  weatherDescription.textContent = response.data.current.condition.text;
  weatherTemp.textContent = `${response.data.current.temp_c} oC`;
  weatherIcon.src = '//cdn.weatherapi.com/weather/64x64/day/113.png';
  //   weatherIcon.src = response.data.current.condition.icon;

  //   if (
  //     response.data.current.condition.icon ===
  //     '//cdn.weatherapi.com/weather/64x64/day/116.png'
  //   ) {
  //     weatherIcon.src =
  //       'https://media.istockphoto.com/photos/clouds-on-sky-picture-id184103864?b=1&k=20&m=184103864&s=170667a&w=0&h=ZngznsmOs4gnb0bRP13q5RFXY-cv-BHZJNjJXb6ffyk=';
  //   }
});
