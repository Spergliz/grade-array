// Student Grades Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let outputE2 = document.getElementById("output2");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let grades = [60, 70, 80, 65, 90, 83];
let maxGrade = 100; // grade values should be b/t 0 and max

// Display Data
drawArray();

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "first40") {
    firstTo40();
  } else if (selection === "last50") {
    lastTo50();
  } else if (selection === "random100") {
    randomTo100();
  } else if (selection === "addRandom") {
    addRandomGrade();
  } else if (selection === "removeLast") {
    removeLastGrade();
  } else if (selection === "count50") {
    countBelow50();
  } else if (selection === "change50") {
    lowGradesTo50();
  } else if (selection === "increase10") {
    increaseGradesBy10();
  } else if (selection === "decrease10") {
    decreaseGradesBy10();
  }

  // Redraw array to show any changes
  drawArray();
}

function randomint(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function firstTo40() {
  // Set the grade of the first student to 40.
  grades[0] = 40;
  outputEl.innerHTML = "First grade to 40";
}

function lastTo50() {
  // Set the grade of the last student to 50.
   
  grades[grades.length-1] = 50;
  outputEl.innerHTML = "Last grade to 50";
}

function randomTo100() {
  // Set the grade of a random student to 100.
  grades[randomint(0, grades.length)] = 100;
  outputEl.innerHTML = "Random grade to 100";
}

function addRandomGrade() {
  // Add a random grade between 0 and 100 to the end of the array.
  let y = Math.random() * 100;
  grades.push(y)

  outputEl.innerHTML = "Add random grade";
}

function removeLastGrade() {
  // Remove the last grade.
  grades.pop();
  outputEl.innerHTML = "Remove the last grade";
}

function countBelow50() {
  // Count how many grades are below 50.  Output the result.
  let count = 0;
  for (let y = 0; y < grades.length; y++) {
    if (grades[y] < 50) {
      count++;
    }
  }
  outputE2.innerHTML = count;
  outputEl.innerHTML = "Count grades below 50";
  console.log(count);
}
function lowGradesTo50() {
  // Change all grades that are below 50 to be equal to 50.
  for (let y = 0; y < grades.length; y++) {
    if (grades[y] < 50) { 
      grades[y] =50
    }
  }

  outputEl.innerHTML = "Change low grades to 50";
}

function increaseGradesBy10() {
  // Increase each grade by 10%.
  for (let y = 0; y < grades.length; y++) {
    let A = grades[y]*0.1
    grades[y] += A
  }
  outputEl.innerHTML = "Increase all grades by 10%";
}

function decreaseGradesBy10() {
  // Decrease each grade by 10%.
  for (let y = 0; y < grades.length; y++) {
    let A = grades[y]*0.1
    grades[y] -= A
  outputEl.innerHTML = "Decrease all grades by 10%";
}
}
// Function to draw current state of grades array
function drawArray() {
  let outputStr = "";
  let divHeight;

  for (let i = 0; i < grades.length; i++) {
    divHeight = (grades[i] / maxGrade) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}
