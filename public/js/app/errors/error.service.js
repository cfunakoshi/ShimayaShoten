"use strict";
var core_1 = require("@angular/core");
var error_1 = require("./error");
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccurred = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_1.Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    };
    return ErrorService;
}());
exports.ErrorService = ErrorService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFFN0Msc0JBQXNCLFNBQVMsQ0FBQyxDQUFBO0FBRWhDO0lBQUE7UUFDSSxrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBUyxDQUFDO0lBTTlDLENBQUM7SUFKRyxrQ0FBVyxHQUFYLFVBQVksS0FBVTtRQUNsQixJQUFNLFNBQVMsR0FBRyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxvQkFBWSxlQU94QixDQUFBIiwiZmlsZSI6ImVycm9ycy9lcnJvci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JTZXJ2aWNlIHtcbiAgICBlcnJvck9jY3VycmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gbmV3IEVycm9yKGVycm9yLnRpdGxlLCBlcnJvci5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvck9jY3VycmVkLmVtaXQoZXJyb3JEYXRhKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
