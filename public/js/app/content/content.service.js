"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var content_1 = require("./content");
var ContentService = (function () {
    function ContentService(_http) {
        this._http = _http;
        this.items = [];
    }
    ContentService.prototype.getContent = function () {
        return this._http.get('http://localhost:3000/content')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var item = new content_1.Content(data[i].item, data[i].price, data[i]._id, data[i].url);
                objs.push(item);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContentService.prototype.addContent = function (content) {
        var body = JSON.stringify(content);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.post('http://localhost:3000/content', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var content = new content_1.Content(data.item, data.price, data._id, data.url);
            return content;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContentService.prototype.deleteContent = function (content) {
        this.items.splice(this.items.indexOf(content), 1);
        return this._http.delete('http://localhost:3000/content/' + content.contentId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    ContentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContentService);
    return ContentService;
}());
exports.ContentService = ContentService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIsMkJBQXlCLGlCQUFpQixDQUFDLENBQUE7QUFFM0Msd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBR2xDO0lBRUMsd0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRS9CLFVBQUssR0FBYyxFQUFFLENBQUM7SUFGWSxDQUFDO0lBSW5DLG1DQUFVLEdBQVY7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUM7YUFDcEQsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUNaLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxVQUFBLFFBQVE7WUFDWixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7YUFDekUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF0Q0w7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXVDYixxQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksc0JBQWMsaUJBc0MxQixDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbnRlbnRTZXJ2aWNlIHtcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cblx0aXRlbXM6IENvbnRlbnRbXSA9IFtdO1xuXG5cdGdldENvbnRlbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY29udGVudCcpXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG5cdFx0XHRcdGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsZXQgaXRlbSA9IG5ldyBDb250ZW50KGRhdGFbaV0uaXRlbSwgZGF0YVtpXS5wcmljZSwgZGF0YVtpXS5faWQsIGRhdGFbaV0udXJsKTtcblx0XHRcdFx0XHRvYmpzLnB1c2goaXRlbSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiBvYmpzO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXHR9XG5cblx0YWRkQ29udGVudChjb250ZW50OiBDb250ZW50KSB7XG5cdFx0Y29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbnRlbnQpO1xuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXHRcdHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb250ZW50JywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuXHRcdFx0Lm1hcChyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xuXHRcdFx0XHRsZXQgY29udGVudCA9IG5ldyBDb250ZW50KGRhdGEuaXRlbSwgZGF0YS5wcmljZSwgZGF0YS5faWQsIGRhdGEudXJsKTtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9KSBcblx0XHRcdC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXHR9XG5cblx0ZGVsZXRlQ29udGVudChjb250ZW50OiBDb250ZW50KSB7XG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKHRoaXMuaXRlbXMuaW5kZXhPZihjb250ZW50KSwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbnRlbnQvJyArIGNvbnRlbnQuY29udGVudElkKVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
