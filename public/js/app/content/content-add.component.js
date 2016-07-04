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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var content_1 = require("./content");
var content_service_1 = require("./content.service");
var error_service_1 = require("../errors/error.service");
var ContentAddComponent = (function () {
    function ContentAddComponent(_contentService, _fb, _errorService) {
        this._contentService = _contentService;
        this._fb = _fb;
        this._errorService = _errorService;
    }
    ContentAddComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            productName: ['', common_1.Validators.required],
            price: ['', common_1.Validators.required]
        });
    };
    ContentAddComponent.prototype.changeListener = function ($event) {
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var input = document.getElementById("store-input");
        filepicker.store(input, function (Blob) {
            var image = document.getElementById("imgPlaceholder");
            console.log("Store successful:", JSON.stringify(Blob));
            image.setAttribute('src', Blob.url);
        }, function (FPError) {
            //  console.log(FPError.toString()); - print errors to console
        }, function (progress) {
            var progressbar = document.getElementById("progressbar");
            progressbar.style.width = progress + '%';
            console.log("Loading: " + progress + "%");
        });
    };
    ContentAddComponent.prototype.onSubmit = function () {
        var _this = this;
        filepicker.setKey('A9LlxuvEwTomiX36nRj4Iz');
        var imageUrl = document.getElementById("imgPlaceholder").src;
        console.log(imageUrl);
        if (imageUrl == ".") {
            console.log("Choose a png to store to S3");
        }
        else {
            var image = document.getElementById("imgPlaceholder");
            image.setAttribute('src', ".");
            var content = new content_1.Content(this.myForm.value.productName, this.myForm.value.price, null, imageUrl);
            this._contentService.addContent(content)
                .subscribe(function (data) {
                console.log(data);
                _this._contentService.items.push(data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    ContentAddComponent = __decorate([
        core_1.Component({
            selector: 'my-content-add',
            template: "\n\t\t<div class=\"jumbotron\">\n          <h2 style=\"text-align: center;\">Add New Product</h2>\n        <br>\n         <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"productName\">Product Name</label>\n                        <input [ngFormControl]=\"myForm.find('productName')\" type=\"text\" id=\"productName\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"price\">Price</label>\n                        <input [ngFormControl]=\"myForm.find('price')\" type=\"text\" id=\"price\" class=\"form-control\">\n                    </div>\n                      <div class=\"row spacing\">\n                      <div class=\"col-md-4\">                        \n                          <label for=\"picture\">Picture</label>\n                          <input type=\"file\" id=\"store-input\" (change)=\"changeListener($event)\" />\n                         \n                      </div>\n                      <div class=\"col-md-8\">\n                         <div class=\"progress\">\n                            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" id=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                             </div>\n                          </div>\n                        <img src=\".\" alt=\"Preview\" id=\"imgPlaceholder\"/>\n                      </div>\n                      </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Submit</button>\n          </form>\n         </div>\n\n\t",
            styles: ["\n        .jumbotron {\n          \n        }\n\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n\n        #store-input {\n          padding-top: 20px;\n        }\n\n        img {\n          height: 90px;\n          width: 110px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, common_1.FormBuilder, error_service_1.ErrorService])
    ], ContentAddComponent);
    return ContentAddComponent;
}());
exports.ContentAddComponent = ContentAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQStELGlCQUFpQixDQUFDLENBQUE7QUFFakYsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBd0RyRDtJQUlHLDZCQUFvQixlQUErQixFQUFVLEdBQWUsRUFBVSxhQUEyQjtRQUE3RixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRXJILHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ25CLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxLQUFLLENBQ2YsS0FBSyxFQUNMLFVBQVMsSUFBSTtZQUNaLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELFVBQVMsT0FBTztZQUNoQiw4REFBOEQ7UUFDOUQsQ0FBQyxFQUNELFVBQVMsUUFBUTtZQUNWLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFDLEdBQUcsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUNILENBQUM7SUFDSCxDQUFDO0lBRUgsc0NBQVEsR0FBUjtRQUFBLGlCQXFCRTtRQXBCQyxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFNUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBTSxPQUFPLEdBQVcsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztpQkFDbkMsU0FBUyxDQUNOLFVBQUEsSUFBSTtnQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQS9HSDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBQywydERBZ0NSO1lBQ0QsTUFBTSxFQUFFLENBQUMsK1NBa0JMLENBQUM7U0FDTCxDQUFDOzsyQkFBQTtJQTBERiwwQkFBQztBQUFELENBekRBLEFBeURDLElBQUE7QUF6RFksMkJBQW1CLHNCQXlEL0IsQ0FBQSIsImZpbGUiOiJjb250ZW50L2NvbnRlbnQtYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzLCBDb250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQge0NvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCB7Q29udGVudFNlcnZpY2V9IGZyb20gXCIuL2NvbnRlbnQuc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbXktY29udGVudC1hZGQnLFxuXHR0ZW1wbGF0ZTpgXG5cdFx0PGRpdiBjbGFzcz1cImp1bWJvdHJvblwiPlxuICAgICAgICAgIDxoMiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5BZGQgTmV3IFByb2R1Y3Q8L2gyPlxuICAgICAgICA8YnI+XG4gICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9kdWN0TmFtZVwiPlByb2R1Y3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3Byb2R1Y3ROYW1lJylcIiB0eXBlPVwidGV4dFwiIGlkPVwicHJvZHVjdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmljZVwiPlByaWNlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncHJpY2UnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcmljZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGljdHVyZVwiPlBpY3R1cmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInN0b3JlLWlucHV0XCIgKGNoYW5nZSk9XCJjaGFuZ2VMaXN0ZW5lcigkZXZlbnQpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIGFjdGl2ZVwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGlkPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMFwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPVwid2lkdGg6MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuXCIgYWx0PVwiUHJldmlld1wiIGlkPVwiaW1nUGxhY2Vob2xkZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgIDwvZGl2PlxuXG5cdGAsIFxuXHRzdHlsZXM6IFtgXG4gICAgICAgIC5qdW1ib3Ryb24ge1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgI3N0b3JlLWlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRBZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHRcblx0bXlGb3JtOiBDb250cm9sR3JvdXA7XG5cbiAgXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb250ZW50U2VydmljZTogQ29udGVudFNlcnZpY2UsIHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cblxuICBcdG5nT25Jbml0KCkge1xuICAgIFx0dGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgICAgICBwcm9kdWN0TmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIHByaWNlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICBcdH1cblxuICBcdGNoYW5nZUxpc3RlbmVyKCRldmVudCk6IHZvaWQge1xuICAgIFx0ZmlsZXBpY2tlci5zZXRLZXkoJ0E5TGx4dXZFd1RvbWlYMzZuUmo0SXonKTtcblxuXHRcdFx0dmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yZS1pbnB1dFwiKTtcdFx0XG4gICAgICBmaWxlcGlja2VyLnN0b3JlKFxuICAgIFx0XHRcdGlucHV0LFxuICAgIFx0XHRcdGZ1bmN0aW9uKEJsb2Ipe1xuICAgIFx0XHRcdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKTtcbiAgICAgIFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdG9yZSBzdWNjZXNzZnVsOlwiLCBKU09OLnN0cmluZ2lmeShCbG9iKSk7XG4gICAgICBcdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgQmxvYi51cmwpO1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0ZnVuY3Rpb24oRlBFcnJvcikge1xuICBcdFx0XHRcdFx0Ly8gIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7IC0gcHJpbnQgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9ncmVzc2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NiYXJcIik7XG4gICAgICAgICAgICAgIHByb2dyZXNzYmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MrJyUnO1xuICAgICAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIkxvYWRpbmc6IFwiK3Byb2dyZXNzK1wiJVwiKTtcbiAgICBcdFx0XHR9XG4gIFx0XHQpO1xuXHQgIH1cblxuXHRvblN1Ym1pdCgpIHtcbiAgICBmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG4gICAgdmFyIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKS5zcmM7XG4gICAgY29uc29sZS5sb2coaW1hZ2VVcmwpOyAgIFxuICAgIGlmKGltYWdlVXJsID09IFwiLlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNob29zZSBhIHBuZyB0byBzdG9yZSB0byBTM1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1BsYWNlaG9sZGVyXCIpO1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBcIi5cIik7XG4gICAgICBjb25zdCBjb250ZW50OkNvbnRlbnQgPSBuZXcgQ29udGVudCh0aGlzLm15Rm9ybS52YWx1ZS5wcm9kdWN0TmFtZSwgdGhpcy5teUZvcm0udmFsdWUucHJpY2UsIG51bGwsIGltYWdlVXJsKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRTZXJ2aWNlLmFkZENvbnRlbnQoY29udGVudClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFNlcnZpY2UuaXRlbXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
