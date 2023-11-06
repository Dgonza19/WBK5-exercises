"use strict";

let academyMember = [
  {
  memID: 101,
  name: "Bob Brown",
  films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
  },
  {
  memID: 142,
  name: "Sallie Smith",
  films: ["A Good Day", "A Better Day"]
  },
  {
  memID: 187,
  name: "Fred Flanders",
  films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
  },
  {
  memID: 203,
  name: "Bobbie Boots",
  films: ["Walking Boots", "Hiking Boots","Cowboy Boots"]
  },
];


// Who is the Academy Member whose ID is 187?

let targetMemID = 187;

let member = academyMember.find(member => member.memID === targetMemID);

if (member) {
  console.log(`The Academy Member with ID ${targetMemID} is ${member.name}.`);
} else {
  console.log(`No Academy Member found with ID ${targetMemID}.`);
};

console.log("----------------------------");


// Who has been in at least 3 films?

let membersInThreeFilms = academyMember.filter(member => member.films.length >= 3);

if (membersInThreeFilms.length > 0) {
  console.log("Academy Members who have been in at least 3 films:");
  membersInThreeFilms.forEach(member => {
    console.log(`${member.name} has been in ${member.films.length} films.`);
  });
} else {
  console.log("No Academy Members have been in at least 3 films.");
};

console.log("----------------------------");


// Who has a name that starts with "Bob"?

let membersStartingWithBob = academyMember.filter(member => member.name.startsWith("Bob"));

if (membersStartingWithBob.length > 0) {
  console.log("Academy Members whose names start with 'Bob':");
  membersStartingWithBob.forEach(member => {
    console.log(member.name);
  });
} else {
  console.log("No Academy Members have names that start with 'Bob'.");
};

console.log("----------------------------");

// HARDER: Which Academy Members have been in a film
// that starts with "A"

let filmsStartingWithA = academyMember.filter(member => {
  return member.films.some(film => film.startsWith("A"));
});

if (filmsStartingWithA.length > 0) {
  console.log("Academy Members who have been in a film starting with 'A':");
  filmsStartingWithA.forEach(member => {
    console.log(member.name);
  });
} else {
  console.log("No Academy Members have been in a film starting with 'A'.");
};
