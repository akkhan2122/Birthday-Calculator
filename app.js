const milliSecondInYear = 31557600000;
const miliSecondInMonth = 2629800000;
const miliSecondInDay = 86400000;

let intervalID1 = undefined;
let intervalID2 = undefined;

function ageCal () {
   
    if (intervalID1 !== undefined) clearInterval(intervalID1)
    getNextBirthday()
    intervalID1 = setInterval(() => {
        getNextBirthday()
    }, 1000)

    if (intervalID2 !== undefined) clearInterval(intervalID2)
    getYearsOld()
    intervalID2 = setInterval(() => {
        getYearsOld()
    }, 1000)
}

let getNextBirthday = () => {

    let today = new Date()
    const userDate = new Date(document.querySelector("#birth").value + " 00:00:00") 
    // console.log(userDate);

    let birthdayDateThisYear = userDate
    birthdayDateThisYear.setFullYear(today.getFullYear())

    if (today.getMonth() > userDate.getMonth()) {
    birthdayDateThisYear.setFullYear(birthdayDateThisYear.getFullYear()+1)
}

    let nextBirthdayDiffInMili = birthdayDateThisYear - today  

    let nextBirthdayInDays = Math.floor(nextBirthdayDiffInMili / miliSecondInDay)
    let nextBirthdayInDaysReminder = nextBirthdayDiffInMili % miliSecondInDay

    let nextBirthdayInHours = Math.floor(nextBirthdayInDaysReminder / (1000 * 60 * 60))
    let nextBirthdayInHoursReminder = nextBirthdayInDaysReminder % (1000 * 60 * 60)

    let nextBirthdayInMinutes = Math.floor(nextBirthdayInHoursReminder / (1000 * 60))
    let nextBirthdayInMinutesReminder = nextBirthdayInHoursReminder % (1000 * 60)

    let nextBirthdayInSeconds = Math.floor(nextBirthdayInMinutesReminder / 1000)

    // console.log(`${nextBirthdayInDays} days, ${nextBirthdayInHours} hours,
    // ${nextBirthdayInMinutes} minutes and ${nextBirthdayInSeconds} seconds left
    // in your next birthday`);
    document.querySelector("#text2").innerHTML = `${nextBirthdayInDays} days, ${nextBirthdayInHours} hours,
    ${nextBirthdayInMinutes} minutes and ${nextBirthdayInSeconds} seconds left
    in your next birthday`
    
    
    birthdayDateThisYear.setSeconds(birthdayDateThisYear.getSeconds() - 1);

}

let getYearsOld = () => {

    let today = new Date();
    const dateEntered = new Date(
        document.querySelector("#birth").value + " 00:00:00"
    );

    let diffInMili = today - dateEntered;
    // console.log("diffInMili: ", diffInMili);

    let ageInYear = Math.floor(diffInMili / milliSecondInYear);
    let reminderOfYearAge = diffInMili % milliSecondInYear;

    let ageInMonth = Math.floor(reminderOfYearAge / miliSecondInMonth);
    let reminderOfMonthAge = reminderOfYearAge % miliSecondInMonth;

    let ageInDay = Math.floor(reminderOfMonthAge / miliSecondInDay);
    let ageInDayReminder = reminderOfMonthAge % miliSecondInDay;

    let ageInHour = Math.floor(ageInDayReminder / (1000 * 60 * 60));
    let ageInHourReminder = ageInDayReminder % (1000 * 60 * 60);

    let ageInMinute = Math.floor(ageInHourReminder / (1000 * 60));
    let ageInMinuteReminder = ageInHourReminder % (1000 * 60);

    let ageInSecond = Math.floor(ageInMinuteReminder / 1000);

//     console.log(`you are ${ageInYear} years, ${ageInMonth} month, ${ageInDay}
// days, ${ageInHour} hour, ${ageInMinute} minutes
// and ${ageInSecond} seconds old`);

 document.querySelector("#text1").innerHTML = `you are ${ageInYear} years, ${ageInMonth} month, ${ageInDay}
 days, ${ageInHour} hour, ${ageInMinute} minutes
 and ${ageInSecond} seconds old`
    
    
}
