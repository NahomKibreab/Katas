const organizeInstructors = function(instructors) {
  // Put your solution here
  let results = {};
  for(let x of instructors){
    if(!results[x.course]){
      results[x.course] = [x.name];
    } else {
      results[x.course].push(x.name);
    }
  }
  return results;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));