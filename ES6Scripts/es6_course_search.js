"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];


// When does the PROG200 course start?

const prog200StartDate = courses.find(course => course.CourseId === "PROG200").StartDate;

console.log(`PROG200 course starts on: ${prog200StartDate}`);



// What is the title of the PROJ500 course?


const proj500Title = courses.find(courses => courses.CourseId === "PROJ500").Title;

console.log(`PROJ500 course title is: ${proj500Title}`);



// What are the titles of the courses that cost $50 or less?

const affordableCourses = courses.filter(course => parseFloat(course.Fee) <= 50);
const affordableCourseTitles = [];

for (const course of affordableCourses) {
  affordableCourseTitles.push(course.Title);
}

console.log("Courses that cost $50 or less:");
console.log(affordableCourseTitles);


// What classes meet in "Classroom 1"?

const classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
const classroom1CourseTitles = [];

for (const course of classroom1Courses) {
  classroom1CourseTitles.push(course.Title);
}


console.log("Courses that meet in Classroom 1:");
console.log(classroom1CourseTitles);




