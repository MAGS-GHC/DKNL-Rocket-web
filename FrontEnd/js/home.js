


async function rocketData() {

    try {
        const response = await fetch("https://dknl.onrender.com/api/rocket");
        const userData = await response.json();
        console.log(userData);
        createHomeHTML(userData, 20);
}
    catch(error) {
        console.log(error);
    }
}

export function createHomeHTML(userData, index){
    const nav = document.getElementById('nav');
    const grid = document.getElementById("container");
    let currentItem = userData[index];

    nav.innerHTML = `
    <div class="nav-container">
        <div class="nav-wrapper">
            <a href="../home/index.html" class="nav-link active">Home</a>
            <a href="../catalogue/index.html" class="nav-link">Catalogue    </a>
            <a href="../specs/index.html" class="nav-link">Specs</a>
            <a href="../aboutUs/index.html" class="nav-link">About us</a>
            <a href="../settings/index.html" class="nav-link">Settings</a>
        </div>
    </div>`

    grid.innerHTML = `       
    <div class="home-container">
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
    <div class="sensorInfo">
        <p id="sensorName">Launch ID</p>
        <p id="sensorData">${userData[currentItem].temperature}</p>
        <p id="sensorName">Temperature</p>
        <p id="sensorData">${userData[currentItem].temperature}</p>
        <p id="sensorName">Top speed</p>
        <p id="sensorData">${userData[currentItem].topspeed}</p>
        <p id="sensorName">Top height</p>
        <p id="sensorData">${userData[currentItem].topheight}</p>
    </div>
</div>`;
}

window.onload = function(){
    rocketData();
}
    