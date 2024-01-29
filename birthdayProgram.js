const jsonData = `[
    {"firstName": "John", "lastName": "Doe", "dob": "1982/10/08"},
    {"firstName": "Bruce", "lastName": "Wayne", "dob": "1965/01/30"},
    {"firstName": "Lady", "lastName": "Gaga", "dob": "1986/03/28"},
    {"firstName": "Mark", "lastName": "Curry", "dob": "1988/02/29"}
]`;

const people = JSON.parse(jsonData);

export function isBirthday(person, currentDate) {
  const [year, month, day] = person.dob.split("/").map(Number);
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (month === 2 && day === 29 && !isLeapYear(currentDate.getFullYear())) {
    return currentMonth === 2 && currentDay === 28;
  }

  return currentMonth === month && currentDay === day;
}

export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const today = new Date();
people.forEach((person) => {
  if (isBirthday(person, today)) {
    console.log(
      `It's ${person.firstName} ${person.lastName}'s birthday today!`
    );
  }
});
