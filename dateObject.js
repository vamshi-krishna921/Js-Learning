//* new Date()
const curDate = new Date();
console.log(curDate); // Tue Jan 21 2025 05:02:10 GMT+0530 (India Standard Time)

//* new Date(date string)
var date = new Date("2013-11-25");
console.log(date); // Mon Nov 25 2013 05:30:00 GMT+0530 (India Standard Time)
date = new Date("October 13, 2014 11:13");
console.log(date); // Mon Oct 13 2014 11:13:00 GMT+0530 (India Standard Time)

//TODO : The months are stored in indexed format Jan-0 and Dec-11 (0-11).

//* new Date (year,month)
date = new Date(2024, 10);
console.log(date); // Fri Nov 01 2024 00:00:00 GMT+0530 (India Standard Time)

//* new Date (year,month,day)
date = new Date(2025, 1, 21);
console.log(date); // Fri Feb 21 2025 00:00:00 GMT+0530 (India Standard Time)

//* new Date (year,month,day,hour)
date = new Date(2025, 0, 21, 1);
console.log(date); // Fri Jan 21 2025 01:00:00 GMT+0530 (India Standard Time)

//* new Date (year,month,day,hour,minutes)
date = new Date(2025, 0, 21, 1, 1);
console.log(date); // Fri Jan 21 2025 01:01:00 GMT+0530 (India Standard Time)

//* new Date (year,month,day,hour,minutes,seconds)
date = new Date(2025, 0, 21, 1, 1, 20);
console.log(date); // Fri Jan 21 2025 01:01:20 GMT+0530 (India Standard Time)

//* new Date (year,month,day,hour,minutes,seconds, milliseconds)
date = new Date(2025, 0, 21, 1, 1, 20, 200);
console.log(date); // Fri Jan 21 2025 01:01:20 GMT+0530 (India Standard Time)

//* new Date( milliseconds )
const curMilliSeconds = new Date().getTime();
console.log(curMilliSeconds);
date = new Date(curMilliSeconds);
console.log(date);

//? Get Date object

//* getFullYear()
date = new Date();
console.log(date.getFullYear()); // 2025

//* getMonth()
console.log(date.getMonth()); // 0(Jan)

//* getDay()
console.log(date.getDay()); // 2(Tue)

//* getDate()
console.log(date.getDate()); // 21

//* getTime()
console.log(date.getTime()); // 1737468491785

//* getHours()
console.log(date.getHours()); // 21

//* getMinutes()
console.log(date.getMinutes()); // 20

//* getSeconds()
console.log(date.getSeconds()); // 48

//* getMilliseconds()
console.log(date.getMilliseconds()); // 894

//? set Date object

//* setFullYear(year, month, day)
date.setFullYear(2025, 1, 21);
console.log(date); // Fri Feb 21 2025 03:44:06 GMT+0530 (India Standard Time)

//* setMonth(month, day)
date.setMonth(6);
console.log(date); // Mon Jul 21 2025 03:44:06 GMT+0530 (India Standard Time)

//* setDate(day)
date.setDate(15);
console.log(date); // Tue Jul 15 2025 03:44:06 GMT+0530 (India Standard Time)

//* setHours(hours, minutes, seconds, milliseconds)
date.setHours(14, 30, 0, 0);
console.log(date); // Tue Jul 15 2025 14:30:00 GMT+0530 (India Standard Time)

//* setMinutes(minutes, seconds, milliseconds)
date.setMinutes(45, 30, 500);
console.log(date); // Tue Jul 15 2025 14:45:30 GMT+0530 (India Standard Time)

//* setSeconds(seconds, milliseconds)
date.setSeconds(50, 250);
console.log(date); // Tue Jul 15 2025 14:45:50 GMT+0530 (India Standard Time)

//* setMilliseconds(ms)
date.getMilliseconds(500), console.log(date); // Tue Jul 15 2025 14:45:50 GMT+0530 (India Standard Time)

//* setTime(ms)
date.setTime(173744640000);
console.log(date); // Sat Jul 05 1975 03:54:00 GMT+0530 (India Standard Time)
