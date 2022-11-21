const talkingCalendar = function(date) {
  // Your code here
  // split into year / month / day
  let year = date.slice(0, 4);
  // add to friendlyDate month
  function getMonth (dateMonth) {
    //console.log(dateMonth);
    let month = {
      '01': 'January',
      '02': 'February',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December'
    };
    return month[dateMonth];
  }
  let friendlyMonth = getMonth(date.slice(5, 7));

  // add to friendlyDate day (make sure st, nd, rd, th used)
  let day = date.slice(8, 10);
  if (day[0] === "0") {
    day = day.slice(1,2);
  }
  //console.log(typeof day)
  function getOrdinal (day) {
    if (day === '1' || day === '21' || day === '31') {
      ordinal = 'st';
    } else if (day === '2' || day === '22') {
      ordinal = 'nd';
    } else if (day === '3' || day === '23') {
      ordinal = 'rd';
    } else {
      ordinal = 'th';
    }
    return ordinal;
  }
  let ord = getOrdinal(day);
  let friendlyDate = friendlyMonth + " " + day + ord + ", " + year;
  // add comma and space ", "
  // add to friendlyDate year
  return friendlyDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1976/06/11"));