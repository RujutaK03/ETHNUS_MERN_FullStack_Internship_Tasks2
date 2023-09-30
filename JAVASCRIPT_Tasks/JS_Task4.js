function displayCurrentDate() {
    let today = new Date();

    const day = today.getDate();
    const formattedDay = (day < 10) ? `0${day}` : day;

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[today.getMonth()];

    const year = today.getFullYear();

    const date = `${formattedDay} / ${month} / ${year}`;

    document.getElementById("currentDate").innerHTML = date;

}

function displayCurrentTime() {
    let today = new Date();

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
    const day = days[today.getDay()];

    const date = today.getDate();
    const formattedDay = (date < 10) ? `0${date}` : date;

    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[today.getMonth()];

    const year = today.getFullYear();

    //GMT +5:30
    const timeZoneOffset = 5.5 * 60 * 60 * 1000;
    const currentTime = new Date(today.getTime() + timeZoneOffset);

    const hrs = currentTime.getUTCHours();
    const mins = currentTime.getUTCMinutes();
    const secs = currentTime.getUTCSeconds();

    //format hrs, mins, secs
    const hours = (hrs < 10) ? `0${hrs}` : hrs;
    const minutes = (mins < 10) ? `0${mins}` : mins;
    const seconds = (secs < 10) ? `0${secs}` : secs;

    const result_string = `${day} ${month} ${date} ${year} ${hours}:${minutes}:${seconds} GMT+0530 (Indian Standard Time)`;
    document.getElementById("currentTime").innerHTML = result_string;
}