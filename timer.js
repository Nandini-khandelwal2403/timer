for(let i=1; i<=2; i++){
let seconds = 0;
let minutes =0;
let hours = 0;
let day = 0;
let start = document.getElementById('start' +i); 
let pause = document.getElementById('pause' +i);
let reset = document.getElementById('reset' +i);
let set = document.getElementById('set' +i);
let stopstatus = 0;
/* DOM element to update timer */
let timer = document.querySelector('.timer' +i);







  // Display the result in the element with id="demo"
    //    timer.innerHTML = ` ${} : ${b} : ${c} : ${d}`;

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var a = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var b = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var c = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var d = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//          timer.innerHTML = ` ${a} : ${b} : ${c} : ${d}`;

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer" +i).innerHTML = "EXPIRED";
//     }
// }, 1000);







/* function to start the timer */
start.addEventListener('click', ()=>{
    // Set the date we're counting down to
    if(i==1){
        var countDownDate = new Date("May 24, 2022 00:00:00").getTime();
    }else{
        var countDownDate = new Date("Jan 9, 2023 00:00:00").getTime();
    }

console.log(countDownDate);

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  day = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(stopstatus!==0){
        clearInterval(stopstatus);
    }
    stopstatus = setInterval(()=>{
        seconds-=1;
        if(seconds === 0){
            // seconds = 0;
            minutes--;
            if(minutes!==0){
                seconds=60;
            }
            if(minutes === 0){
                // minutes = 0;
                hours--;
                if(hours !== 0){
                    // hours = 0;
                    // day += 1
                    minutes = 60;
                    seconds = 60;
                }
                if(hours === 0){
                    day -= 1;
                    if(day !== 0){
                        hours = 24;
                        minutes = 60;
                        seconds = 60;
                    }
                }
            }
        }
    let d = day < 10 ? ("0" + hours): day;
    let h = hours < 10 ? ("0" + hours ): hours;
    let m = minutes < 10 ? ("0" + minutes) : minutes;
    let s = seconds < 10 ?("0" + seconds) : seconds;
    // timer.innerHTML = ` ${d} days ${h} hours ${m} minutes ${s} seconds`;
    document.getElementById('d'+i).innerText = `${d}`;
    document.getElementById('h'+i).innerText = `${h}`;
    document.getElementById('m'+i).innerText = `${m}`;
    document.getElementById('s'+i).innerText = `${s}`; 
},1000);
});


/* function to pause the timer */
pause.addEventListener('click', ()=>{
    clearInterval(stopstatus);
});

/* function to reset the timer */
reset.addEventListener('click', ()=>{
    clearInterval(stopstatus);

    seconds = 0;
    minutes =0;
    hours = 0;
    day = 0;
    timer.innerHTML = ' 00 days 00 hours 00 minutes 00 seconds ';
});
}