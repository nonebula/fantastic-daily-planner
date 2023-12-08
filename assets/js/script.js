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
    newRow.append('<td id="time-block" class="col-md-1">' + businessHours[i] + '</td>');
    newRow.append('<td id="add-content" class="col-md-7 add-content"><textarea></textarea></td>');
    newRow.append('<td id="save-block" class="col-md-1"><button id ="save-button" class="btn btn-primary"><i class="fas fa-save"></i>Save</button></td>');
    newRow.append('<td id="complete-block" class="col-md-1"><button id ="complete-button" class="btn btn-primary"><i class="fa fa-check" aria-hidden="true"></i>Complete</button></td>');
    newRow.append('<td class="clear-block col-md-1"><button id="clear-button-' + businessHours[i] + '" class="btn btn-primary"><i class="fas fa-eraser"></i>Clear</button></td>');    
// color coding based on time of day
    var contentBlock = $("#add-content");

    var currentHour = dayjs().format('HH:mm');

    if (dayjs(businessHours[i], 'HH:mm').isBefore(currentHour, 'hour')){
        contentBlock.addClass('past-row');
    } else if (dayjs(businessHours[i], 'HH:mm').isSame(currentHour, 'hour')){
        contentBlock.addClass('present-row');
    }
     else {
        contentBlock.addClass('future-row');
    }

//final append of table & colors
    tbody.append(newRow);
}
});

