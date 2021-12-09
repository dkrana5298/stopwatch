// fetching all the field
var hourCount=document.getElementById('hour');
var minuteCount=document.getElementById('minute')
let secondCount = document.getElementById('second');
// fetching all the button
var start=document.getElementById('start');
var pausebtn=document.getElementById('pause');
var conti=document.getElementById('continue');
var stop=document.getElementById('stop');
// initializing all the variable
var interval;
var second=00;
var minute=00;
var hour=00;
// function on start button.
start.onclick=function (){
    console.log("clicked");
    stop.style.display= "block";
    stop.style.display= "inline";
  //  pausebtn.innerHTML= "pause";
    pausebtn.style.display= "block";

 clearInterval(interval);
 interval=setInterval(startTimer, 1000); //this function must be remember for interval purpose.
}
//function on pause 
pausebtn.onclick=function (){
   clearInterval(interval);
   console.log("pause clicked");
   conti.style.display= "block";
   pausebtn.style.display= "none";
   start.style.display= "none"
}
//for continue button
conti.onclick=function (){
   clearInterval(interval);
   interval=setInterval(startTimer, 1000);
   pausebtn.style.display= "block";
   conti.style.display= "none";
  
}
//function on stop
stop.onclick=function(){
   clearInterval(interval);
   clearFields();
   start.style.display= "block";
   pausebtn.style.display= "none";
   stop.style.display= "none";
   conti.style.display= "none";
}
function startTimer(){
   second++;
   if(second < 10){
      secondCount.innerHTML= "0" + second;
   }
    if(second >= 10 ){
      secondCount.innerHTML= second;
   }
   if(second > 60) {
       minute++;
       minuteCount.innerHTML="0" + minute;
       second=0;
       secondCount.innerHTML= "0" + second;
   }
   if(minute > 9){
       minuteCount.innerHTML=minute;
   }
   if(minute > 60){
      hour++;
      hourCount.innerHTML="0" + hour;
      minute=0;
      minuteCount.innerHTML=minute;
   }
   if(hour > 9){
      hourCount.innerHTML= hour;
   }
   
}

//for pausing 
function Pause() {
   if(second > 9){
      secondCount.innerText = second;
   }else {
      secondCount.innerText ="0" + second;
   }
   if( minute > 9){
      minuteCount.innerText = minute;
   }else {
      minuteCount.innerText ="0" + minute;
   } 
   if(  hour > 9){
      hourCount.innerText = hour;
   }else {
      hourCount.innerText ="0" + hour;
   }
}
// for clearing all the field
function clearFields() {
   hour =0;
   hourCount.innerHTML="0" + hour;
   minute = 0;
   minuteCount.innerHTML="0" + minute;
   second = 0;
   secondCount.innerHTML="0" + second;
}
