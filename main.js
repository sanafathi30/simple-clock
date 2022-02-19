function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let mint = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    hour = (hour < 10) ? `0${hour}` : hour;
    mint = (mint < 10) ? `0${mint}` : mint;
    second = (second < 10) ? `0${second}` : second;



    let time = ` ${hour} : ${mint} : ${second}  ${session}`;

    document.querySelector(".clock").innerHTML = time;
    console.log(time);
}

setInterval(showTime, 1000);