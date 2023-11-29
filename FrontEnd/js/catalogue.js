let userData = [];
let currentItem = null; 

async function rocketData() {
    try {
        const response = await fetch("https://dknl.onrender.com/api/rocket");
        const userData = await response.json();
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
    for (let i = 0; i < userData.length; i++) {
        labels += `
        <label class="itemLabel">
            ${userData[i].created_at} 
            <div class="dropdown">
                <img src="../assets/SVG/arrow.svg" class="arrow">
                <div class="dropdown-content">
                    <p id="sensorName">Launch ID</p>
                    <p id="sensorData">${userData[i].temperature}</p>
                    <p id="sensorName">Temperature</p>
                    <p id="sensorData">${userData[i].temperature}</p>
                    <p id="sensorName">Top speed</p>
                    <p id="sensorData">${userData[i].topspeed}</p>
                    <p id="sensorName">Top height</p>
                    <p id="sensorData">${userData[i].topheight}</p>
                </div>
            </div>
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
</div>`;
}

function toggleDropdown(arrow, index) {
    let dropdownContent = arrow.nextElementSibling;
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
    currentItem = userData[index]
}

window.onload = function(){
    rocketData();
}