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
var contentBlock = $("#add-content");
var saveBlock = $("#save-block");
var completeBlock = $("#complete-block");
var clearBlock = $("#clear-block");

// buttons
var saveButton = $("#save-button");
var completeButton = $("#complete-button");
var clearButton = $("#clear-button");

// table body content
$(document).ready(function () {
var businessHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

var tbody = $('.time-table tbody');

for (var i = 0; i < businessHours.length; i++) {
    var newRow = $('<tr>');
    newRow.append('<td class="time-block">' + businessHours[i] + '</td>');
    newRow.append('<td class="col-md-7 add-content"><textarea></textarea></td>');
    newRow.append('<td class="col-md-1 save-block"><button id ="save-button" class="btn btn-primary">Save</button></td>');
    newRow.append('<td class="col-md-1 complete-block"><button id ="complete-button" class="btn btn-primary">Complete</button></td>');
    newRow.append('<td class="col-md-1 clear-block"><button id = "clear-button" class="btn btn-primary">Clear</button></td>');
    tbody.append(newRow);
}
});


