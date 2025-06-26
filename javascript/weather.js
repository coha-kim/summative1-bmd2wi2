const apiKey = "316b23610a014ee4b9e52607252606"; 
const location = "Auckland";


fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`)
    .then(response => response.json())
    .then(data => {
        const condition = data.current.condition.text; 
        const temp = data.current.temp_c;             

        let advice = "";

        if (condition.toLowerCase().includes("rain")) {
            advice = "No need to water Mossie!";
        } else if (temp > 25) {
            advice = "Give Mossie a drink!";
        } else {
            advice = "Weather is mild. Water if soil feels dry.";
        }

        document.getElementById("weather-today").textContent = condition;
        document.getElementById("plant-advice").textContent = advice;
    });