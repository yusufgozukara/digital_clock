function getTime(){
    let now = new Date;
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds(); 

    let day = now.getDate();
    let ay = now.getMonth()+1;
    let year = now.getFullYear();
    
    if(hour < 10){
        document.querySelector('.hour').innerText = '0' + hour;
    } else{
        document.querySelector('.hour').innerText = hour;
    }
    if(minute < 10){
        document.querySelector('.minute').innerText = '0' + minute;
    } else{
        document.querySelector('.minute').innerText = minute;
    }
    if(second < 10){
        document.querySelector('.second').innerText = '0' + second;
    } else{
        document.querySelector('.second').innerText = second;
    }

    document.querySelector('.date').innerText = day + ' | ' +ay + ' | ' + year;

    
}


setInterval(function(){getTime()},1000);

