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


