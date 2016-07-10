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
var category_1 = require("./category");
var CategoryService = (function () {
    function CategoryService(_http) {
        this._http = _http;
        this.categories = [];
    }
    CategoryService.prototype.getCategory = function () {
        return this._http.get('http://localhost:3000/product')
            .map(function (response) {
            var data = response.json().obj;
            var objs = [];
            for (var i = 0; i < data.length; i++) {
                var category = new category_1.Category(data[i].name, data[i]._id);
                objs.push(category);
            }
            ;
            return objs;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    CategoryService.prototype.addCategory = function (category) {
        var body = JSON.stringify(category);
        var headers = new http_1.Headers({ 'Content-type': 'application/json' });
        return this._http.post('http://localhost:3000/product', body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            var category = new category_1.Category(data.name, data._id);
            return category;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    CategoryService.prototype.deleteCategory = function (category) {
        this.categories.splice(this.categories.indexOf(category), 1);
        return this._http.delete('http://localhost:3000/product/' + category.categoryId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    CategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQyx5QkFBeUIsWUFBWSxDQUFDLENBQUE7QUFHdEM7SUFFQyx5QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFL0IsZUFBVSxHQUFlLEVBQUUsQ0FBQztJQUZNLENBQUM7SUFJbkMscUNBQVcsR0FBWDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQzthQUNwRCxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1osSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQUEsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksUUFBa0I7UUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUMvRSxHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1osSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNqQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsUUFBa0I7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDM0UsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF0Q0w7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQXVDYixzQkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksdUJBQWUsa0JBc0MzQixDQUFBIiwiZmlsZSI6ImNhdGVnb3J5L2NhdGVnb3J5LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIi4vY2F0ZWdvcnlcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U2VydmljZSB7XG5cdFxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG5cdGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXTtcblxuXHRnZXRDYXRlZ29yeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9kdWN0Jylcblx0XHRcdC5tYXAocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcblx0XHRcdFx0bGV0IG9ianM6IGFueVtdID0gW107XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShkYXRhW2ldLm5hbWUsIGRhdGFbaV0uX2lkKTtcblx0XHRcdFx0XHRvYmpzLnB1c2goY2F0ZWdvcnkpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRyZXR1cm4gb2Jqcztcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblx0fVxuXG5cdGFkZENhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSkge1xuXHRcdGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjYXRlZ29yeSk7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cdFx0cmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2R1Y3QnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG5cdFx0XHQubWFwKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XG5cdFx0XHRcdGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShkYXRhLm5hbWUsIGRhdGEuX2lkKTtcblx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5O1xuXHRcdFx0fSkgXG5cdFx0XHQuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblx0fVxuXG5cdGRlbGV0ZUNhdGVnb3J5KGNhdGVnb3J5OiBDYXRlZ29yeSkge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMuc3BsaWNlKHRoaXMuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Byb2R1Y3QvJyArIGNhdGVnb3J5LmNhdGVnb3J5SWQpXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
