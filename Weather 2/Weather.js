function getRapid(){
    let latitude = document.getElementById('latitude').value;
    let longitude =document.getElementById('longitude').value;
    if(latitude===""||longitude===""){
        alert("Please Enter The latitude and longitude First !!!");
        return;
    }
    if(isNaN(Number(latitude)) || isNaN(Number(longitude))){
        alert("Please Enter Proper Latitude and Longitude");
        return;
    }
    let val =Number(document.getElementById('dropDown').value);

    fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=${latitude}&lon=${longitude}`, {
        "method": "GET",
        "headers": {
        "x-rapidapi-key": "fd76630261msh19e2d7d01057cd9p1af8b6jsn339c8306c20c",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
       }
     })
    .then(response => response.json())
    .then(data => {
        let deg='&deg;',output=`<h1>${data.city_name}<h1>`,date;
        switch(val){
        case 1:
         output += '<h2>Maximum Temperature</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the maximum temperature will be : ${element.max_temp} ${deg} C</p>
            `;
        });
        break;
        case 2:
         output += '<h2>Minimum Temperature</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the minimum temperature will be : ${element.min_temp} ${deg} C</p>
            `;
        });
        break;
        case 3:
        output += '<h2>Dew Point</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the dew point will be : ${element.dewpt} ${deg} C</p>
            `;
        });
        break;
        case 4:
        output += '<h2>Moon Phase</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the moon phase will be : ${element.moon_phase} </p>
            `;
        });
        break;
        case 5:
        output += '<h2>Snowfall</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the snowfall will be : ${element.snow} mm </p>
            `;
        });
        break;
        case 6:
        output += '<h2>Wind Speed And Direction</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the wind will be : ${element.wind_spd} m/s ${element.wind_cdir_full} </p>
            `;
        });
        break;
        case 7:
        output += '<h2>Probibility Of Precipitation</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the Probibility Of Precipitation will be : ${element.pop} %</p>
            `;
        });
        break;
        case 8:
        output += '<h2>Average Pressure</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the Average Pressue will be : ${element.pres} mb</p>
            `;
        });
        break;
        case 9:
        output += '<h2>Average Cloud Coverage</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the Average Cloud Coverage will be : ${element.clouds} %</p>
            `;
        });
        break;
        case 10:
        output += '<h2>Visibility</h2>';
        data.data.forEach(element => {
            date=element.datetime.substring(8)+element.datetime.substring(4,8)+element.datetime.substring(0,4);
            output += `
                <p>At day ${date} the Visibility will be : ${element.vis} km</p>
            `;
        });
        break;
        default:output = "Please Select one of the option";
     }
     document.getElementById('output').style.display = 'block';
     document.getElementById('output').innerHTML = output;
    })
    .catch(err => {
        console.error(err);
    });
    document.getElementById('particles-js').style.height = '250vh';
}