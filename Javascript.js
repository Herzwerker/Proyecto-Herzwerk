const zumachen = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appointment",
    isCompleted: false
  }
];
// convert this into JSON

//const zumachenJSON = JSON.stringify(zumachen);
//console.log(zumachenJSON);

//for (let i = 0; i < zumachen.length; i++) {
// console.log(zumachen[i].text);
//}

//for (let zumach of zumachen) {
//  console.log(zumach.id);
//}

//High order array methods

zumachen.forEach(function(zumach) {
  console.log(zumach.text);
});
