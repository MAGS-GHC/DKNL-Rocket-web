let userData = [];
let currentItem = 0; 

async function rocketData() {
    try {
        const response = await fetch("https://dknl.onrender.com/api/rocket");
        userData = await response.json();
        console.log(userData);
        createCatalogueHTML(userData);
}
    catch(error) {
        console.log(error);
    }
}

function createCatalogueHTML(userData){
    const nav = document.getElementById('nav');
    const grid = document.getElementById("container");
    let labels = '';
    for (let i = userData.length - 1; i >= 0 ; i--) {
        labels += `
        <label class="itemLabel" onclick="toggleDropdown(${i})">
            ${userData[i].created_at} 
            <img src="../assets/SVG/arrow.svg" class="arrow">
        </label>`;
    }
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

    grid.innerHTML = `       
    <div class="catalogue-container">
        <div class="pfAngle">
            <label class="infoLabel">
            <img src="../assets/SVG/info.svg">
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
    </div>
    </div>
</div>`;
}

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
    sensorInfo.innerHTML = `
    <img src="../assets/SVG/arrow.svg" class="arrow sensorInfoArrow" onclick="toggleDropdown(-1)">
    <p id="sensorName">Launch ID</p>
    <p id="sensorData">${currentItem.launch_id}</p>
    <p id="sensorName">Launch date</p>
    <p id="sensorData">${currentItem.created_at}</p>
    <p id="sensorName">Height reached</p>
    <p id="sensorData">${currentItem.altitude}</p>
    <p id="sensorName">Temperature</p>
    <p id="sensorData">${currentItem.temperature}</p>
    <p id="sensorName">Latitude change</p>
    <p id="sensorData">${currentItem.start_latitude} - ${currentItem.end_latitude}</p>
    <p id="sensorName">Longitude change</p>
    <p id="sensorData">${currentItem.start_longitude} - ${currentItem.end_longitude}</p>
    `;
    } else {
        console.error(`No data found for index ${index}`);
    }
}

window.onload = function(){
    rocketData();
}