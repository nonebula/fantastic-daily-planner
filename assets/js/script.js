var today = dayjs().format("dddd DD MMMM YYYY");
$("#currentDay").text(today);

var pageHeading = $("#page-heading");
var subHeading = $("#page-subheading");
var dateDisplay = $("#currentDay");
var timeBlockContainer = $("#timeblock-container")
var timeTable = $("#time-table");

// blocks for timeblock
var timeBlock = $("#time-block");
var contentBlock = $("#add-content");
var saveBlock = $("#save-block");

// buttons
var saveButton = $("#save-button");
// var completeButton = $("#complete-button");
// var clearButton = $(".clear-button");

var savedInput;

// local storage check
var workDay = JSON.parse(localStorage.getItem("userInput"));
if (workDay) {
    savedInput = workDay;
} else {
    savedInput = [];
}

// table body content
$(document).ready(function () {
var businessHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

var tbody = $('.time-table tbody');

var currentTime = dayjs().hour();

for (var i = 0; i < businessHours.length; i++) {
    var newRow = $('<tr id='+ businessHours[i] + ' >');
    newRow.append('<td class="time-block col-md-1">' + businessHours[i] + ":00" + '</td>');
    var addContentCell = $('<td class="add-content"><textarea>' + (savedInput[businessHours[i]] || '') + '</textarea></td>');
    newRow.append(addContentCell);
    newRow.append('<td class="save-block col-md-1"><button class="save-button btn btn-primary"><i class="fas fa-save"></i></button></td>');
    
    // Additional buttons that could be added in future
    // newRow.append('<td class="complete-block col-md-1"><button class="complete-button btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i></button></td>');
    // newRow.append('<td class="clear-block col-md-1"><button class="clear-button btn btn-primary"><i class="fas fa-eraser"></i></button></td>');
    
    // color coding based on time of day
    var contentBlock = newRow.find('.add-content textarea');

    if (businessHours[i] < currentTime) {
        // console.log('past');
        contentBlock.addClass('past-row');
    } else if (businessHours[i] === currentTime) {
        // console.log('present');
        contentBlock.addClass('present-row');
    } else {
        contentBlock.addClass('future-row');
    }

// final append of table & colors
    tbody.append(newRow);
}
});


// save button
function handleSaveEntry(event) {
    var saveButton = $(event.currentTarget);
    var blockID = saveButton.closest("tr").attr("id");

    var userEntry = $.trim(
        $(event.currentTarget)
            .closest("tr")
            .find("textarea")
            .val()
    );

    blockID = parseInt(blockID);
    savedInput[blockID] = userEntry;
    localStorage.setItem("userInput", JSON.stringify(savedInput));
    if (!isNaN(blockID) && blockID >= 8 && blockID <= 18) {
}
}

// console.log(savedInput)
// console.log("Input Saved");


// Possible future button functions
/* // complete button
function handleCompleteEntry(event) {
    event.preventDefault();
    var btnClicked = $(event.target);
    var textarea = btnClicked.closest('tr').find('.add-content textarea');
    textarea.css("text-decoration", "line-through");
    console.log("Task Completed!");
}

// clear button
function handleClearEntry(event) {
    event.preventDefault();
    var btnClicked = $(event.target);
    var textarea = btnClicked.closest('tr').find('.add-content textarea');
    textarea.val('');
    textarea.css("text-decoration", "none");
    console.log('Clear button clicked');
} */

var mainBody = $("body");
    $(document).on('click', '.save-button', handleSaveEntry);

// Possible future function calls
    // $(document).on('click', '.complete-button', handleCompleteEntry);
    // $(document).on('click', '.clear-button', handleClearEntry);