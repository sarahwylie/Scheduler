var saveBtnEl = $(".saveBtn");
// var currentDate = moment().format('ll')
// $("#currentDay")

var saveTasks = function(event) {
    // event.preventDefault();
    var timeBlock = $(this).parent().attr("id")
    console.log(timeBlock);
    var captureData = $(this).siblings(".userData").val()
    localStorage.setItem(timeBlock, captureData);
};

var retrieveTasks = function() {
    $("#hour8 .userData").val(localStorage.getItem("hour8"))
    $("#hour9 .userData").val(localStorage.getItem("hour9"))
    $("#hour10 .userData").val(localStorage.getItem("hour10"))
    $("#hour11 .userData").val(localStorage.getItem("hour11"))
    $("#hour12 .userData").val(localStorage.getItem("hour12"))
    $("#hour13 .userData").val(localStorage.getItem("hour13"))
    $("#hour14 .userData").val(localStorage.getItem("hour14"))
    $("#hour15 .userData").val(localStorage.getItem("hour15"))
    $("#hour16 .userData").val(localStorage.getItem("hour16"))
}

var hourChecker = function() {
    var currentTime = moment().hours();
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").match(/(\d+)/))
        if (blockTime < currentTime) {
          $(this).addClass("past")
        } else if (blockTime === currentTime) {
          $(this).removeClass("past")
          $(this).addClass("present")
        }   else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future");
        };
    }) 
}

retrieveTasks();
hourChecker();
saveBtnEl.on("click", saveTasks);