document.getElementById('fetch-weather').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'b1fd6e14799699504191b6bdbcadfc35'; // Replace with your weather API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const locationName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = `Location: ${locationName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Condition: ${description}`;
        })
        .catch(err => {
            document.getElementById('location').textContent = 'Location not found!';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
        });
});
