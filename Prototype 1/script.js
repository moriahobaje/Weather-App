var city = "";
var img_url = "";

function watherInfo() {
    // Get data from API
    if (document.getElementById("locBox").value == "") {
        city = "London";
    } else {
        city = document.getElementById("locBox").value;
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=997ba322c3b6c704a3bd37a737fc65f5')

    // Convert response string to json object
    .then(response => response.json())
        .then(response => {

            // Display whole API response in browser console (take a look at it!)
            console.log(response);

            // Copy one element of response to our HTML paragraph
            document.getElementById("main").innerHTML = response.weather[0].description;
            document.getElementById("tempNow").innerHTML = response.main.temp + " " + "farenheit";
            document.getElementById("tempMin").innerHTML = response.main.temp_min + " " + "farenheit";
            document.getElementById("tempMax").innerHTML = response.main.temp_max + " " + "farenheit";
            document.getElementById("humidity").innerHTML = response.main.humidity + " %";
            document.getElementById("city").innerHTML = response.name;

            const conditionIcon = document.getElementById("weatherImage");
            conditionIcon.src = "https://images.theconversation.com/files/336133/original/file-20200519-152298-1icmco7.jpg?ixlib=rb-1.1.0&rect=867%2C810%2C3877%2C2347&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip";

        })
        .catch(err => {

            // Display errors in console
            console.log(err);
        });
}