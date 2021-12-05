"use strict";

var tasksDOM = document.querySelector(".tasks");
var loadingDOM = document.querySelector(".loading-text");
var formDOM = document.querySelector(".task-form");
var taskInputDOM = document.querySelector(".task-input");
var formAlertDOM = document.querySelector(".form-alert"); // Load tasks from /api/tasks

var showTasks = function showTasks() {
  var _ref, tasks, allTasks;

  return regeneratorRuntime.async(function showTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          loadingDOM.style.visibility = "visible";
          _context.prev = 1;
          console.log("got here");
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get("/api/v1/tasks"));

        case 5:
          _ref = _context.sent;
          tasks = _ref.data.tasks;

          if (!(tasks.length < 1)) {
            _context.next = 11;
            break;
          }

          tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>';
          loadingDOM.style.visibility = "hidden";
          return _context.abrupt("return");

        case 11:
          allTasks = tasks.map(function (task) {
            var completed = task.completed,
                taskID = task._id,
                name = task.name;
            return "<div class=\"single-task ".concat(completed && "task-completed", "\">\n<h5><span><i class=\"far fa-check-circle\"></i></span>").concat(name, "</h5>\n<div class=\"task-links\">\n\n\n\n<!-- edit link -->\n<a href=\"task.html?id=").concat(taskID, "\"  class=\"edit-link\">\n<i class=\"fas fa-edit\"></i>\n</a>\n<!-- delete btn -->\n<button type=\"button\" class=\"delete-btn\" data-id=\"").concat(taskID, "\">\n<i class=\"fas fa-trash\"></i>\n</button>\n</div>\n</div>");
          }).join("");
          tasksDOM.innerHTML = allTasks;
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](1);
          tasksDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>';

        case 18:
          loadingDOM.style.visibility = "hidden";

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 15]]);
};

showTasks(); // delete task /api/tasks/:id

tasksDOM.addEventListener("click", function _callee(e) {
  var el, id;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          el = e.target;

          if (!el.parentElement.classList.contains("delete-btn")) {
            _context2.next = 13;
            break;
          }

          loadingDOM.style.visibility = "visible";
          id = el.parentElement.dataset.id;
          _context2.prev = 4;
          _context2.next = 7;
          return regeneratorRuntime.awrap(axios["delete"]("/api/v1/tasks/".concat(id)));

        case 7:
          showTasks();
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](4);
          console.log(_context2.t0);

        case 13:
          loadingDOM.style.visibility = "hidden";

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[4, 10]]);
}); // form

formDOM.addEventListener("submit", function _callee2(e) {
  var name;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          e.preventDefault();
          name = taskInputDOM.value;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(axios.post("/api/v1/tasks", {
            name: name
          }));

        case 5:
          showTasks();
          taskInputDOM.value = "";
          formAlertDOM.style.display = "block";
          formAlertDOM.textContent = "success, task added";
          formAlertDOM.classList.add("text-success");
          _context3.next = 16;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](2);
          formAlertDOM.style.display = "block";
          formAlertDOM.innerHTML = "error, please try again";

        case 16:
          setTimeout(function () {
            formAlertDOM.style.display = "none";
            formAlertDOM.classList.remove("text-success");
          }, 3000);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 12]]);
});