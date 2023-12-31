console.log('Script loaded'); 
let userData = [];
let currentItem = 0; 

/*here i am fetching data from the database's api*/
async function rocketData() {
    try {
        const response = await fetch("https://dknl.onrender.com/api/rocket");
        userData = await response.json();

        if (userData.length === 0) {
        alert('No launchdata available, please launch a rocket first!');
        return;
        }

        console.log(userData);
        createCatalogueHTML(userData);
}
    catch(error) {
        console.log(error);
    }
}
/*here i am making a function, to rearrange how the date of the launch is displayet on screen*/
function formatDate(dateString) {
    let date = new Date(dateString);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let year = date.getFullYear();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${day}-${month}/${year} at ${hours}:${minutes}:${seconds} GMT`;
}

/*i am making the html for the page "catalogue.html"*/
function createCatalogueHTML(userData){
    const nav = document.getElementById('nav');
    const grid = document.getElementById("container");
    let labels = '';
    for (let i = userData.length - 1; i >= 0 ; i--) {
        let currentItem = i;
        let formattedDate = formatDate(userData[currentItem].created_at);
        labels += `
        <label class="itemLabel" onclick="toggleDropdown(${i})">
            ${formattedDate} 
            <img src="../assets/arrow.svg" class="arrow">
        </label>`;
    }
/*in here, i am adding my html, to the "nav" div i made in the html page.*/
    nav.innerHTML = `
    <div class="nav-container">
        <div class="nav-wrapper">
            <a href="../home/index.html" class="nav-link">Home</a>
            <a href="../catalogue/index.html" class="nav-link active">Catalogue    </a>
            <a href="../specs/index.html" class="nav-link">Specs</a>
            <a href="../aboutUs/index.html" class="nav-link">About us</a>
            <a href="../settings/index.html" class="nav-link">Settings</a>
        </div>
    </div>`
/*in here, i am adding my html, to the "container" div i made in the html page.*/ 
    grid.innerHTML = `       
    <div class="catalogue-container">
        <div class="pfAngle">
            <label class="infoLabel">
            <img src="../assets/info.svg">
            <div class="textContainer">
                <p id="launchBool">SUCCESS</p>
                <p id="text">The Launching platform is at a perfect angle, Get ready to take flight!</p>
            </div>
            </label>
        </div>   
    <div class="Launch">
        <label class="infoLabel2">You are clear for lift off</label>
        <button class="launchBTN">Launch</button>
    </div>
    <div class="launchCatalogue">
        ${labels}
    </div>
    <div class="sensorInfo">
    </div>`;
}

/*here i make a dropdown, where i can display the data of the specific launch i want.*/
function toggleDropdown(index) {
    let launchCatalogue = document.querySelector('.launchCatalogue');
    let sensorInfo = document.querySelector('.sensorInfo');

    if (index === -1) {
        if (sensorInfo.style.visibility === "visible") {
            launchCatalogue.style.visibility = "visible";
            sensorInfo.style.visibility = "hidden";
        }
        return;
    }

    if (!userData || userData.length === 0) {
        console.error('No data available');
        return;
    }
    
    if (sensorInfo.style.visibility === "hidden" || sensorInfo.style.visibility === "") {
        launchCatalogue.style.visibility = "hidden";
        sensorInfo.style.visibility = "visible";
    } else {
        launchCatalogue.style.visibility = "visible";
        sensorInfo.style.visibility = "hidden";
    }

    currentItem = userData[index];

    if (currentItem) {
        let formattedDate = formatDate(currentItem.created_at);
    sensorInfo.innerHTML = `
        <img src="../assets/arrow.svg" class="arrow sensorInfoArrow" onclick="toggleDropdown(-1)">
        <p id="sensorName">Launch ID:</p>
        <p id="sensorData">${currentItem.launch_id ? currentItem.launch_id : 'No Launch ID available'}</p>
        <p id="sensorName">Launch date:</p>
        <p id="sensorData">${formattedDate}</p>
        <p id="sensorName">Height reached:</p>
        <p id="sensorData">${currentItem.altitude} m above sea level.</p>
        <p id="sensorName">The temperature around the device is:</p>
        <p id="sensorData">${currentItem.temperature} °C</p>
        <p id="sensorName">The pressure inside the rocket top is:</p>
        <p id="sensorData">${currentItem.pressure * 0.001} Bar</p>
        <p id="sensorName">The rocket was fired at this angle:</p>
        <p id="sensorData">${currentItem.direction} °</p>`;
    } else {
        console.error(`No data found for index ${index}`);
    }
}