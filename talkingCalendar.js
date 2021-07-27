const talkingCalendar = function(date) {
  // Your code here
  let newDate = date.split('/');
  newDate[1] = month(Number(newDate[1]));
  return `${newDate[1]} ${surfix(Number(newDate[2]))}, ${newDate[0]}`;
};

const month = function(month){
  switch(month){
    case 01:
      return 'January';
    case 02:
      return 'Feburary';
    case 03:
      return 'March';
    case 04:
      return 'April';
    case 05:
      return 'May';
    case 06:
      return 'June';
    case 07:
      return 'July';
    case 08:
      return 'August';
    case 09:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
  }
};

const surfix = function(number){
  if(number === 1){
    return '1st';
  } else if(number === 2){
    return '2nd';
  } else {
    return number + 'th';
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));