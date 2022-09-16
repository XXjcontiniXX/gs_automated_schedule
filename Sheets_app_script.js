//Establishes source and destination
var sheet = SpreadsheetApp.getActiveSpreadsheet();
var source = sheet.getSheets()[0];
var destination = sheet.getSheets()[1];
var lastRow = destination.getLastRow();
var lastColumn = destination.getLastColumn();
console.log(lastRow, lastColumn)
function lastCell () {
    if (lastRow > 0 && lastColumn > 0) {
      return destination.getRange(lastRow, lastColumn);
    }else{
      return false;
    }
}


//STORAGE FUNCTIONS
//////////////////////////
//Pushes blue week "Day Notes" to uninitialized storage 
function pushBlueDates() {
  //caches Day Notes
  let blue_notes = source.getRange('C26:I37');
  // if notInit
  if (!lastCell()) {
    blue_notes.copyTo(destination.getRange(1, 1));
  // if on last column is last and last column is populated
  } else if(lastColumn == 42 && !(destination.getRange(lastRow,lastColumn).isBlank())) {
      blue_notes.copyTo(destination.getRange(lastRow + 3, 1));
  // if normal 
  } else {
      for (let i = 8; i < 42; i+=7){
        console.log(i)
        if (destination.getRange(lastRow, i).isBlank() == true){
          blue_notes.copyTo(destination.getRange(lastRow - 16, i));
          break;
        };
}
}  
}

//Pushes green week "Day Notes" to storage
function pushGreenDates() {
  //caches Day Notes
  let green_notes = source.getRange('J26:P37');
  // if notInit
  if (!lastCell()) {
    green_notes.copyTo(destination.getRange(1, 1));
  // if on last column is last and last column is populated
  } else if(lastColumn == 42 && !(destination.getRange(lastRow,lastColumn).isBlank())) {
      green_notes.copyTo(destination.getRange(lastRow + 3, 1));
  // if normal 
  } else {
      for (let i = 8; i < 42; i+=7){
        console.log(i)
        if (destination.getRange(lastRow, i).isBlank() == true){
          green_notes.copyTo(destination.getRange(lastRow - 16, i));
          break;
        };
}
}  

}

//Pushes blue week "Total Percentage Completed" and "Organizational Tasks" and "MOOD RATING" to storage
function pushBluePercentages() {
  //caches Percentages range
  let percentages_completed = source.getRange('C19:I23');
  // if notInit
  if (!lastCell()) {
    percentages_completed.copyTo(destination.getRange(13, 1), {contentsOnly:true});
  // if on last column
  } else if(lastColumn == 42 && !(destination.getRange(lastRow,lastColumn).isBlank())) {
      percentages_completed.copyTo(destination.getRange(lastRow + 15, 1), {contentsOnly:true})
  // if normal 
  } else {
      for (let i = 8; i < 42; i+=7){
        if (destination.getRange(lastRow, i).isBlank() == true) {
          percentages_completed.copyTo(destination.getRange(lastRow - 4, i), {contentsOnly:true});
          break;
  };
}
}
}


//Pushes green week "Total Percentage Completed" and "Organizational Tasks" and "MOOD RATING" to storage
function pushGreenPercentages() {
  //caches Percentages range
  let percentages_completed = source.getRange('J19:P23');
  // if notInit
  if (!lastCell()) {
    percentages_completed.copyTo(destination.getRange(13, 1), {contentsOnly:true});
  // if on last column
  } else if(lastColumn == 42 && !(destination.getRange(lastRow,lastColumn).isBlank())) {
      percentages_completed.copyTo(destination.getRange(lastRow + 15, 1), {contentsOnly:true})
  // if normal 
  } else {
      for (let i = 8; i < 42; i+=7){
        if (destination.getRange(lastRow, i).isBlank() == true) {
          percentages_completed.copyTo(destination.getRange(lastRow - 4, i), {contentsOnly:true});
          break;
  };
}
}
}


//Pushes Blue Week
function pushBlue() {
  pushBlueDates()
  pushBluePercentages()
}

//Pushes Green Week
function pushGreen() {
  pushGreenDates()
  pushGreenPercentages()
}

//FRONT END DISPLAY FUNCTIONS 
///////////////////////////
//Updates so cell C3 becomes J3-- making green week the new blue week 
function blueIsGreen() {
  source.getRange('J2:P37').copyTo(source.getRange('C2:I37'), {contentsOnly:false});
}


//Clears green week data
function clearGreenWeek() {
  source.getRange('J4:P17').uncheck();
  source.getRange('J23:P23').clearContent();
  source.getRange('J26:P35').clearContent();
}



//MAIN CONTROLLER FUNCTIONS
/////////////////////////
//Moves all of green week to the left and pushes blue week to storage
function moveOneWeek() {
  pushBlue()
  blueIsGreen()
  clearGreenWeek()
}

//TEMP FUNCTIONS
////////////////////////
// Moves blue day notes and blue organizational tasks
function tempTask() {
  moveOneWeek()
}





function onOpen(){
  let ui = SpreadsheetApp.getUi();
  ui.createMenu('Next Week :)').addItem('Next Week :)', 'moveOneWeek').addToUi();
}