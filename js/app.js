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
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor:'rgba(176,160,242,0.5)',
        borderColor: 'purple',
        pointBackgroundColor: 'orange',
        pointHoverBackgroundColor: 'red',
        borderWidth: 1,
        tension: 0.5,
    }]
}

let hourlyData = {
    labels: ["7-8am", "9-10am", "11-12am", "1-2pm", "3-4pm", "5-6pm", "7-8pm","9-10pm", "11-12pm"],
    datasets: [{
        data: [150, 185, 140, 200, 150, 175, 125, 35, 50],
    }]
}

let dailyData1 = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [{
        data: [2500, 1350, 1400, 1200, 2500, 1750, 2450],
    }]
}

let weeklyData = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7","W8", "W9", "W10"],
    datasets: [{
        data: [1200, 2500, 1750, 2500, 1350, 1400, 2450,1750, 1500, 1050],
    }]
}

let monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [2200, 1500, 3750, 2500, 3350, 3400, 4450,  3349, 4845, 3160, 1850, 1950],
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

// Display hourly, daily, weekly, monthly data chart by clicking the traffic navigation 

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};


const trafficNavigation = document.querySelector('.traffic-nav');
trafficNavigation.addEventListener('click', (e) => {
     let targetNav = e.target;
    if (targetNav.tagName === 'LI') {
        targetNav.className = "active";
    }
    const trafficList = document.querySelectorAll('.traffic-nav li');
    for (let i = 0; i < trafficList.length; i++) {
        const activeList = trafficList[i];
        if (activeList.className === 'active') {
            activeList.className += ' traffic-active';
            let listName = activeList.textContent;
        if (listName === 'Hourly') {
            updateChart(trafficChart, hourlyData);
        }
        else if (listName === 'Daily') {
            updateChart(trafficChart, dailyData1);
        }
        else if (listName === 'Weekly') {
            updateChart(trafficChart, weeklyData);
        }
        else if (listName === 'Monthly') {
            updateChart(trafficChart, monthlyData);
        }
        } else {
            activeList.className = 'traffic-nav-link';
        }
    }
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