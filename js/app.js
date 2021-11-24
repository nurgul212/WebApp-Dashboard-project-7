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


// ----------------------Closing new messages-----------------------------
const newMessage = document.getElementById("notificationList");
newMessage.addEventListener('click', e =>{
    const message = e.target;
    if(message.classList.contains("close-message")){
        message.parentNode.style.display = "none";
    }

});

// ----------------------Traffic Chart-------------------------------------------
const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor:'rgba(176,160,242,0.5)',
        borderColor: 'purple',
        pointBackgroundColor: 'orange',
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



// --------Messaging Section-------------------------------------------------------
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", (e) => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending!");
    e.preventDefault();
    
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending!  ");
    e.preventDefault();
    
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending! ");
    e.preventDefault();
    
  } else {
    alert(`Awesome! Message successfully sent to ${user.value}!`);
  }
 
});


// Auto complete resources:  https://www.w3schools.com/howto/howto_js_autocomplete.asp

let friendsList = ["Victoria Chambers", "Dale Byrn", "Dawn Wood", "Dan Oliver"];

    function autocomplete(inp, arr) {
      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
          var a, b, i, val = this.value;
          /*close any already open lists of autocompleted values*/
          closeAllLists();
          
          if (!val) { return false;}
          currentFocus = -1;
          /*create a DIV element that will contain the items (values):*/
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          /*append the DIV element as a child of the autocomplete container:*/
          this.parentNode.appendChild(a);
          /*for each item in the array...*/
          for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
              /*create a DIV element for each matching element:*/
              b = document.createElement("DIV");
              /*make the matching letters bold:*/
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
              b.innerHTML += arr[i].substr(val.length);
              /*insert a input field that will hold the current array item's value:*/
              b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              /*execute a function when someone clicks on the item value (DIV element):*/
                  b.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                  inp.value = this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists();
              });
              a.appendChild(b);
            }
          }
      });
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener("keydown", function(e) {
          var x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
              /*and simulate a click on the "active" item:*/
              if (x) x[currentFocus].click();
            }
          }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }

    autocomplete(document.getElementById("userField"), friendsList);


// save and cancel button and local storage 

const saveBtn = document.getElementById('save');
const cancelBtn = document.getElementById('cancel');
const checkbox = document.querySelectorAll('input[type="checkbox"');
const select = document.querySelector('select');


const saveInfo = () =>{

    for (let i = 0; i < checkbox.length; i++) {
        localStorage.setItem(checkbox[i].value, checkbox[i].checked);
    }
    localStorage.setItem('timezone', select.value);

}
const loadInfo = () => {
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = localStorage.getItem(checkbox[i].value) === 'true';
    }
    if (localStorage.getItem('timezone')) {
    select.value = localStorage.getItem('timezone');
    }
}
const removeInfo = () => {
    for (let i = 0; i < checkbox.length; i++) {
        localStorage.setItem(checkbox[i].value, checkbox[i].checked=false);
    }
    localStorage.removeItem('timezone');
    select.value = '00';
}
saveBtn.addEventListener('click', () => {
    saveInfo();
    if (checkbox.checked === false && saveBtn.checked === false && timezone.value === 'default') {
      return null
    } else {
      alert("Your settings are saved!")
    }
});
cancelBtn.addEventListener('click', () => {
    removeInfo();
    cancelBtn.style.backgroundColor = "#37474F";
    if (checkbox.checked === false && saveBtn.checked === false && timezone.value === 'default') {
      return null
    } else {
      alert("Oops...Your settings are cancelled!")
    }
});
// loadInfo();