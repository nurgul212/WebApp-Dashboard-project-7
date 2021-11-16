const alertBanner = document.getElementById("alert");
// create the HTML for the banner
alertBanner.innerHTML= `<div class="alert-banner">
                          <p><strong>Alert:</strong> You have unread messages</p>
                          <p class="alert-banner-close">x</p>
                        </div>`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none";
    }
});

// Closing new messages
const newMessage = document.getElementById("notificationList");
newMessage.addEventListener('click', e =>{
    const message = e.target;
    if(message.classList.contains("close-message")){
        message.parentNode.style.display = "none";
    }

});

// Traffic Chart
const trafficCanvas = document.getElementById("traffic-chart");
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor:'rgba(176,160,242,0.5)',
        pointBackgroundColor: 'rgba(176,160,242,1)',
        borderWidth: 1,
        tension: 0.6,
    }]
}

let trafficOptions ={
    backgroundColor:  'rgba(112, 104, 201,.5)',
    fill: true,
    aspectRatio: 2.5,
    animation:{
        duration: 0
    },
    scales: {
        y:{
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});






// -------------------------------Dara for daily traffic bar chart---------------------
const dailyCanvas = document.getElementById("dailyTraffic-chart");
const dailyData = {
    labels: ["S", "M", "T", "W", "Th", "F", "S"],
    datasets: [{
        label: '#of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#21c2aa',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y:{
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});



// ---------------------------------Doughnut chart---------------------
const mobileCanvas = document.getElementById("mobileUsers-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: "# of Users",
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#c74436',
            'orange',
            '#21c2aa'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});