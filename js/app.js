document.addEventListener("DOMContentLoaded", function() {

    var placeholder = document.querySelector("#taskInput");
    var span = document.querySelector("#counter");
    var submitButton = document.querySelector("#addTaskButton");
    var taskList = document.querySelector("#taskList");
    var removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
    var counter = 0;

    removeFinishedTasksButton.addEventListener("click", function() {
      var completeList = document.querySelectorAll(".complete");

      for (var i = 0; i < completeList.length; i++) {
        completeList[i].parentElement.removeChild(completeList[i]);
        counter--;
        span.innerHTML = "Things to do " + "counter";
      }
    });

    submitButton.addEventListener("click", function() {
      var task = 
    });


});
