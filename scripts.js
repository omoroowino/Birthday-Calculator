let isDoBValid = function (dob){
  let today = new Date().toLocaleDateString('en-GB')
  today = today.split(',')[0];
  while(today.includes('/')){
    today = today.replace(/\//, '-');
  }
  today = today.split('-').reverse().join('-');
  return dob < today;
}

let getAkanName = function(){
  console.log("here")
  let dweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let date = document.querySelector('.date').value;
  console.log(date);
  let gender = document.querySelector('input[name=gender]:checked').value;
  
  if (isDoBValid(date)){
    let date = document.querySelector('.date').value,
        result = document.querySelector('.day-name'),
        dobDetails = date.split('-'),
        year = parseInt(dobDetails[0].substring(2)),
        century = parseInt(dobDetails[0].substring(0,2)),
        month = parseInt(dobDetails[1]),
        day = parseInt(dobDetails[2]),
        dayCalculate = Math.floor(parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
    dayCalculate -= 1;
    if (gender == "male") {
      alert("You were born on " + dweek[dayCalculate] + " Your name is " + male[dayCalculate]);
    } else {
      alert("You were born on " + dweek[dayCalculate] + " Your name is " + female[dayCalculate]);
    }
  }
}
