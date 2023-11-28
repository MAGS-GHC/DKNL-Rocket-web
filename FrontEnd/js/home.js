
async function rocketData() {
    const nav = document.getElementById('nav');
    const grid = document.getElementById("container");
    try {
        const response = await fetch("https://dknl.onrender.com/api/rocket");
        const userData = await response.json();
        console.log(userData);
        let lastItem = userData.length - 1;

        nav.innerHTML = `
        <div class="nav-container">
            <div class="nav-wrapper">
                <a href="../home/index.html" class="nav-link active">Home</a>
                <a href="../catalogue/index.html" class="nav-link">Catalogue    </a>
                <a href="page3.html" class="nav-link">Page 3</a>
                <a href="page4.html" class="nav-link">Page 4</a>
                <a href="page5.html" class="nav-link">Page 5</a>
            </div>
        </div>`

        grid.innerHTML = `       
        <div class="grid-container">
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
            <p id="sensorData">${userData[lastItem].LaunchId}</p>
            <p id="sensorName">Temperature</p>
            <p id="sensorData">${userData[lastItem].temperature}</p>
            <p id="sensorName">Top speed</p>
            <p id="sensorData">${userData[lastItem].topspeed}</p>
            <p id="sensorName">Top height</p>
            <p id="sensorData">${userData[lastItem].topheight}</p>
        </div>
    </div>`;
}
    catch(error) {
        console.log(error);
    }
}

window.onload = function(){
    rocketData();
}
    