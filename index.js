const eidulfitr = "30 March 2025"
const daysDiv=document.getElementById("days");
const hoursDiv=document.getElementById("hours");
const minsDiv=document.getElementById("mins");
const secsDiv=document.getElementById("secs");

function countdown(){

const eidday = new Date(eidulfitr);
const currentday = new Date();

const totaltime = (eidday - currentday)/1000;

const day = Math.floor(totaltime / 3600 / 24);
const hours = Math.floor((totaltime / 3600 ) % 24);
const mins = Math.floor((totaltime / 60 ) % 60);
const secs = Math.floor((totaltime) % 60);

daysDiv.innerHTML=day;
hoursDiv.innerHTML=hours;
minsDiv.innerHTML=mins;
secsDiv.innerHTML=secs;

console.log(day,hours,mins,secs);

}
countdown();
setInterval(countdown,1000);
