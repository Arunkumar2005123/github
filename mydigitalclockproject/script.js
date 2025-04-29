function displayTime() {
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = formatNumber(dateTime.getMinutes());
    let sec = formatNumber(dateTime.getSeconds());

    let ampm = "AM";
    if (hr >= 12) {
        ampm = "PM";
    }

    document.getElementById("hours").innerHTML = formatNumber(hr);
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;
}

function formatNumber(num) {
    return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500);

