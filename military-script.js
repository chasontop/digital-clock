const time = document.getElementById('time')
const datel = document.getElementById('date')

function main (){
    const d = new Date()
    let secs = d.getSeconds();
    let mins = d.getMinutes();
    let hours = d.getHours();

    let month = d.getMonth();
    let calDay = d.getDate();
    let day = d.getDay();
    let year = d.getFullYear()
    let day_night = 'PM'

    if (month == 0){
        month = 'January'
    }

    if (month == 1){
        month = 'Febuary'
    }

    if (month == 2){
        month = 'March'
    }

    if (month == 3){
        month = 'April'
    }

    if (month == 4){
        month = 'May'
    }

    if (month == 5){
        month = 'June'
    }

    if (month == 6){
        month = 'July'
    }

    if (month == 7){
        month = 'August'
    }

    if (month == 8){
        month = 'September'
    }

    if (month == 9){
        month = 'October'
    }

    if (month == 10){
        month = 'November'
    }

    if (month == 11){
        month = 'December'
    }

    if (calDay == 1){
        calDay = '1st'
    }

    if (calDay == 2){
        calDay = '2nd'
    }

    if (calDay == 3){
        calDay = '3rd'
    }

    if (calDay > 3){
        calDay += 'th'
    }

    if (day == 0){
        day = `Monday`
    }

    if (day == 1){
        day = `Tuesday`
    }

    if (day == 2){
        day = `Wednesday`
    }

    if (day == 3){
        day = `Thursday`
    }

    if (day == 4){
        day = `Friday`
    }

    if (day == 5){
        day = `Saturday`
    }

    if (day == 6){
        day = `Sunday`
    }

    if (secs < 10){
        secs = '0' + secs
    }

    if (mins < 10){
        mins = '0' + mins
    }
    var da = `${day} ${month} ${calDay} ${year}`
    datel.innerText = da;
    var clock = `${hours}:${mins}:${secs}`;
    time.innerText = clock;
    setTimeout(main, 1000)
}

window.addEventListener('load', function() {
    main()
})