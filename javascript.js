function openNav() {
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function openWork() {
    document.getElementById("work-page").style.height = "100%";
  }
  
function closeWork() {
    document.getElementById("work-page").style.height = "0%";
}

function back () {
    history.back()
}

function earlyLife() {
    document.getElementById('text1').style.display = "block";
}

function lifeToday() {
    document.getElementById('text2').style.display = "block";
 }
 function futureLife() {
    document.getElementById('text3').style.display = "block";
 }

function showTime(){
    const date = new Date();
    let hour = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds(); 
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    const time = hour + ":" + minute + ":" + second;
    document.getElementById("timeDisplay").innerText = time;
    document.getElementById("timeDisplay").textContent = time;
    setTimeout(showTime, 1000);
}

showTime();

