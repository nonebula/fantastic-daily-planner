var today = dayjs().format("dddd DD MMMM YYYY");
$("#currentDay").text(today);

var rootEl = $('#root');

var pageHeading = $("#page-heading");
var subHeading = $("#page-subheading");
var dateDisplay = $("#currentDay");
var timeBlockContainer = $("#timeblock-container")
// all classes not ids from here, could be an issue [check]!
var timeTable = $("#time-table");
// blocks for timeblock
var timeBlock = $("#time-block");
// var contentBlock = $("#add-content");
var saveBlock = $("#save-block");
var completeBlock = $("#content-block");
var clearBlock = $("#clear-block");

var currentTime = dayjs().format("HH:mm");


// buttons
var saveButton = $("#save-button");
var completeButton = $("#complete-button");
var clearButton = $(".clear-button");

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
var businessHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

var tbody = $('.time-table tbody');

// match variables above to these, see task 7 for model of how to tidy this area up
for (var i = 0; i < businessHours.length; i++) {
    var newRow = $('<tr>');
    newRow.append('<td class="time-block col-md-1">' + businessHours[i] + '</td>');
    var addContentCell = $('<td class="add-content"><textarea>' + (savedInput[i] || '') + '</textarea></td>');
    newRow.append(addContentCell);
    newRow.append('<td class="save-block col-md-1"><button class="save-button btn btn-primary"><i class="fas fa-save"></i>Save</button></td>');
    newRow.append('<td class="complete-block col-md-1"><button class="complete-button btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i>Complete</button></td>');
    newRow.append('<td class="clear-block col-md-1"><button class="clear-button btn btn-primary"><i class="fas fa-eraser"></i>Clear</button></td>');
    // color coding based on time of day
    var contentBlock = addContentCell.find('textarea');

    if (dayjs(businessHours[i], 'HH:mm').isBefore(currentTime, 'hour')){
        contentBlock.addClass('past-row');
    } else if (dayjs(businessHours[i], 'HH:mm').isSame(currentTime, 'hour')){
        contentBlock.addClass('present-row');
    }
     else {
        contentBlock.addClass('future-row');
    }

// final append of table & colors
    tbody.append(newRow);
}
});

// save button
function handleSaveEntry(event) {
    var saveButton = $(event.currentTarget);
    var blockID = saveButton.closest("tr").find(".time-block").index();

    var userEntry = $.trim(
        saveButton
            .closest("tr")
            .find(".add-content textarea")
            .val()
    );

    savedInput[blockID] = userEntry;

    localStorage.setItem("userInput", JSON.stringify(savedInput));
    console.log("Input Saved");
}
  
// complete button
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
}

var mainBody = $("body");
    $(document).on('click', '.clear-button', handleClearEntry);
    $(document).on('click', '.save-button', handleSaveEntry);
    $(document).on('click', '.complete-button', handleCompleteEntry);