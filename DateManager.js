/*
/                        Date Manager
/ A javascripr class to manage dates, and easily add and subtract
/ days from a given date returning a date object in proper format
*/

class DateManager {
  constructor(date) {
    this.date = new Date(date);
    this.months = {
      0: 31,
      1: 28,
      2: 31,
      3: 30,
      4: 31,
      5: 20,
      6: 31,
      7: 31,
      8: 30,
      9: 31,
      10: 30,
      11: 31
    };

    /*We have to know if it is a leap year and set february (month 1) to 29 days*/
    if (this.isALeapYear( this.date.getYear)) {
      this.months[2]=29;
    }
  }
    
  // tells if a given year is a leap year (bissextile)
  isALeapYear(year) {
    /*
    Algorithm from wikipedia
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
    */
    if (year % 4 !== 0)
      return false;
    else if (year % 100 !== 0)
      return true;
    else if (year % 400 !== 0)
      return false;
    else
      return true;
  }
  
  //add one day to date
  addDay(){
    var month = this.date.getMonth();
    var day = this.date.getUTCDate();
    if(this.months[month] !== this.date.getDay){      
      day++;
      this.date.setDate(day);
    }
    else{
      month++;
      this.date.setMonth(month);
      this.date.setDate(1);
    }   
  }
  
  subtractDay(){
    var month = this.date.getMonth();
    var day = this.date.getUTCDate();
    if(this.date.getDay!=1){      
      day--;
      this.date.setDate(day);
    }
    else{
      month--;      
      this.date.setMonth(month);
      this.date.setDate(this.months[month]);
    } 
  }  
}