import { isBirthday, isLeapYear } from "./birthdayProgram.js";

describe("Birthday Matcher Tests", () => {
  test("should correctly identify a birthday", () => {
    const person = { firstName: "Test", lastName: "User", dob: "2000/01/30" };
    const today = new Date("2000/01/30");
    expect(isBirthday(person, today)).toBe(true);
  });

  test("should correctly handle non-birthday", () => {
    const person = { firstName: "Test", lastName: "User", dob: "2000/01/30" };
    const today = new Date("2000/02/01");
    expect(isBirthday(person, today)).toBe(false);
  });

  test("should correctly handle leap year birthdays", () => {
    const person = { firstName: "Leap", lastName: "Year", dob: "2000/02/29" };
    const nonLeapYear = new Date("2001/02/28");
    expect(isBirthday(person, nonLeapYear)).toBe(true);
  });

  test("should correctly identify leap years", () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(2001)).toBe(false);
  });
});
