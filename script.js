
// var oneDay = 24*60*60*1000
// var date_of_birth =new Date(1996,06,07)
// var currentdate = new Date()

// console.log("Date of Birth",date_of_birth);
// console.log("Current Date",currentdate);
// var diffDays = Math.round(
//   Math.abs((date_of_birth.getTime() - currentdate.getTime()) / oneDay)
// );
// console.log("Days Lived", + diffDays);

// var diffSeconds = Math.round(
//   Math.abs((date_of_birth.getTime() - currentdate.getTime()) / 1000)
// );

// console.log("Seconds Lived",+diffSeconds);

// Setup
// var recordCollection = {
// 1011: {
//   albumTitle: 'Slippery When Wet',
//   artist: 'Bon Jovi',
//   tracks: ['Let It Rock', 'You Give Love a Bad Name']
// },
// 1012: {
//   albumTitle: '1999',
//   artist: 'Prince',
//   tracks: ['1999', 'Little Red Corvette']
// },
// 1013: {
//   artist: 'Robert Palmer',
//   tracks: []
// },
// 1014: {
//   albumTitle: 'ABBA Gold'
// }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
// if (prop != "tracks" && value != "") {
//   records[id][prop] = value;
// }else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
//   records[id]["tracks"] = [value];
// }else if (prop == "tracks" && value != "") {
//   records[id]["tracks"].push(value);
// }else if (value == "") {
//   delete records[id][prop];
// }
// return records;

// }
// updateRecords(recordCollection, 1011, 'artist', 'Ababa')
// console.log(recordCollection);


//Contact problem

var contacts = [
  {
    firstName: "Akira",
    LastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Hary",
    LastName: "Potter",
    number: "0543236543",
    likes: ["Pizza", "Magic", "Brownie Points"],
  },
  {
    firstName: "Sherlok",
    LastName: "Holmes",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Kristian",
    LastName: "Vos",
    number: "unknown",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
];
function lookUpProfile(name, prop) {
  var index = 0;
  var i = 0;
  while (contacts[i].firstName != name) {
    i++;
    index++;
  }

  if (
    contacts[index].firstName === name &&
    contacts[index].hasOwnProperty(prop)
  ) {
    return contacts[index][prop];
  } else if (contacts[index].firstName !== name) {
    return "No such contact";
  } else if (contacts[index].hasOwnProperty(prop) === false) {
    return "No such property";
  }

}

console.log(lookUpProfile("Akira", "likes"))