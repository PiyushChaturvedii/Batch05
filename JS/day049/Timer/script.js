let timeBegan = null; //did the clock start?
let timeStopped = null; //at what time was the timer stopped?
let stopedDuration = 0; // how long was the timer stopped?
let startInterval = null ; //this is needed to stop the startInterval() method
let flag = false; //to control the start/stop of the timer


document.querySelector('.container').addEventListener('click',()=>{
    if(!flag){
        startTimer();
        flag = true;
    }else{
        stopTimer();
        flag = false;
    }
})

document.querySelector('.container').addEventListener('dblclick',()=>{
    restTimer();
})

startTimer = () =>{
    if(timeBegan === null) timeBegan = new Date();

    if(timeStopped !== null) stopedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning,10);    
}

stopTimer = () =>{
    timeStopped = new Date();
    clearInterval(startInterval);
}

clockRunning = () =>{
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stopedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.querySelector('#timer_display').textContent = (minutes = minutes < 10 ? '0' + minutes : minutes) + ":" +
    (seconds = seconds <10 ? '0' + seconds : seconds) + ":"+
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

restTimer = () => {
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stopedDuration = 0;
    document.querySelector('#timer_display').innerHTML = "00:00:00";
    flag = false;
}