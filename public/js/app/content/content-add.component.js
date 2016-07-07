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
        var url = document.getElementById("imgPlaceholder").src;
        if (url !== "http://localhost:3000/") {
            filepicker.remove(url, function () {
                console.log("Removed");
            });
        }
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
        if (imageUrl == "http://localhost:3000/") {
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
            template: "\n\t\t<div class=\"jumbotron\">\n          <h2 style=\"text-align: center;\">Add New Product</h2>\n        <br>\n         <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"productName\">Product Name</label>\n                        <input [ngFormControl]=\"myForm.find('productName')\" type=\"text\" id=\"productName\" class=\"form-control\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"price\">Price</label>\n                        <input [ngFormControl]=\"myForm.find('price')\" type=\"text\" id=\"price\" class=\"form-control\">\n                    </div>\n                      <div class=\"row spacing\">\n                        <div class=\"col-md-4\">                        \n                          <label for=\"picture\">Picture</label>\n                          <input type=\"file\" id=\"store-input\" (change)=\"changeListener($event)\" />\n                         \n                        </div>\n                        <div class=\"col-md-8\">\n                         <div class=\"progress\">\n                            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" id=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">\n                             </div>\n                          </div>\n                        <img src=\".\" alt=\"Preview\" id=\"imgPlaceholder\"/>\n                        </div>\n                      </div>\n\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!myForm.valid\">Submit</button>\n          </form>\n         </div>\n\n\t",
            styles: ["\n        .jumbotron {\n          \n        }\n\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n\n        #store-input {\n          padding-top: 20px;\n        }\n\n        img {\n          height: 90px;\n          width: 110px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, common_1.FormBuilder, error_service_1.ErrorService])
    ], ContentAddComponent);
    return ContentAddComponent;
}());
exports.ContentAddComponent = ContentAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQStELGlCQUFpQixDQUFDLENBQUE7QUFFakYsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBd0RyRDtJQUlHLDZCQUFvQixlQUErQixFQUFVLEdBQWUsRUFBVSxhQUEyQjtRQUE3RixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRXJILHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ25CLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FDYixHQUFHLEVBQ0g7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7UUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQ2YsS0FBSyxFQUNMLFVBQVMsSUFBSTtZQUNaLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELFVBQVMsT0FBTztZQUNoQiw4REFBOEQ7UUFDOUQsQ0FBQyxFQUNELFVBQVMsUUFBUTtZQUNWLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFDLEdBQUcsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUNILENBQUM7SUFDSCxDQUFDO0lBRUgsc0NBQVEsR0FBUjtRQUFBLGlCQXFCRTtRQXBCQyxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFNUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFNLE9BQU8sR0FBVyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNuQyxTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBeEhIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFDLG11REFnQ1I7WUFDRCxNQUFNLEVBQUUsQ0FBQywrU0FrQkwsQ0FBQztTQUNMLENBQUM7OzJCQUFBO0lBbUVGLDBCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQTtBQWxFWSwyQkFBbUIsc0JBa0UvQixDQUFBIiwiZmlsZSI6ImNvbnRlbnQvY29udGVudC1hZGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBDb250cm9sR3JvdXAsIFZhbGlkYXRvcnMsIENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7Q29udGVudH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHtDb250ZW50U2VydmljZX0gZnJvbSBcIi4vY29udGVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1jb250ZW50LWFkZCcsXG5cdHRlbXBsYXRlOmBcblx0XHQ8ZGl2IGNsYXNzPVwianVtYm90cm9uXCI+XG4gICAgICAgICAgPGgyIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPkFkZCBOZXcgUHJvZHVjdDwvaDI+XG4gICAgICAgIDxicj5cbiAgICAgICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2R1Y3ROYW1lXCI+UHJvZHVjdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncHJvZHVjdE5hbWUnKVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwcm9kdWN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaWNlXCI+UHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwcmljZScpXCIgdHlwZT1cInRleHRcIiBpZD1cInByaWNlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBpY3R1cmVcIj5QaWN0dXJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJzdG9yZS1pbnB1dFwiIChjaGFuZ2UpPVwiY2hhbmdlTGlzdGVuZXIoJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgYWN0aXZlXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgaWQ9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIwXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9XCJ3aWR0aDowJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi5cIiBhbHQ9XCJQcmV2aWV3XCIgaWQ9XCJpbWdQbGFjZWhvbGRlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICA8L2Rpdj5cblxuXHRgLCBcblx0c3R5bGVzOiBbYFxuICAgICAgICAuanVtYm90cm9uIHtcbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5saXN0LWdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICNzdG9yZS1pbnB1dCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIH1cbiAgICBgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50QWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0XG5cdG15Rm9ybTogQ29udHJvbEdyb3VwO1xuXG4gIFx0Y29uc3RydWN0b3IocHJpdmF0ZSBfY29udGVudFNlcnZpY2U6IENvbnRlbnRTZXJ2aWNlLCBwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UpIHt9XG5cbiAgXHRuZ09uSW5pdCgpIHtcbiAgICBcdHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgcHJvZHVjdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICBwcmljZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgXHR9XG5cbiAgXHRjaGFuZ2VMaXN0ZW5lcigkZXZlbnQpOiB2b2lkIHtcbiAgICBcdGZpbGVwaWNrZXIuc2V0S2V5KCdBOUxseHV2RXdUb21pWDM2blJqNEl6Jyk7XG5cblx0XHRcdHZhciB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1BsYWNlaG9sZGVyXCIpLnNyYztcbiAgICAgIGlmICh1cmwgIT09IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiKSB7XG4gICAgICAgICAgZmlsZXBpY2tlci5yZW1vdmUoXG4gICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92ZWRcIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9yZS1pbnB1dFwiKTtcdFx0XG4gICAgICBmaWxlcGlja2VyLnN0b3JlKFxuICAgIFx0XHRcdGlucHV0LFxuICAgIFx0XHRcdGZ1bmN0aW9uKEJsb2Ipe1xuICAgIFx0XHRcdFx0dmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKTtcbiAgICAgIFx0XHRcdFx0Y29uc29sZS5sb2coXCJTdG9yZSBzdWNjZXNzZnVsOlwiLCBKU09OLnN0cmluZ2lmeShCbG9iKSk7XG4gICAgICBcdFx0XHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgQmxvYi51cmwpO1xuICAgIFx0XHRcdH0sXG4gICAgXHRcdFx0ZnVuY3Rpb24oRlBFcnJvcikge1xuICBcdFx0XHRcdFx0Ly8gIGNvbnNvbGUubG9nKEZQRXJyb3IudG9TdHJpbmcoKSk7IC0gcHJpbnQgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9ncmVzc2JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZ3Jlc3NiYXJcIik7XG4gICAgICAgICAgICAgIHByb2dyZXNzYmFyLnN0eWxlLndpZHRoID0gcHJvZ3Jlc3MrJyUnO1xuICAgICAgXHRcdFx0XHRjb25zb2xlLmxvZyhcIkxvYWRpbmc6IFwiK3Byb2dyZXNzK1wiJVwiKTtcbiAgICBcdFx0XHR9XG4gIFx0XHQpO1xuXHQgIH1cblxuXHRvblN1Ym1pdCgpIHtcbiAgICBmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG4gICAgdmFyIGltYWdlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKS5zcmM7XG4gICAgY29uc29sZS5sb2coaW1hZ2VVcmwpOyAgIFxuICAgIGlmKGltYWdlVXJsID09IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL1wiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNob29zZSBhIHBuZyB0byBzdG9yZSB0byBTM1wiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ1BsYWNlaG9sZGVyXCIpO1xuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBcIi5cIik7XG4gICAgICBjb25zdCBjb250ZW50OkNvbnRlbnQgPSBuZXcgQ29udGVudCh0aGlzLm15Rm9ybS52YWx1ZS5wcm9kdWN0TmFtZSwgdGhpcy5teUZvcm0udmFsdWUucHJpY2UsIG51bGwsIGltYWdlVXJsKTtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRTZXJ2aWNlLmFkZENvbnRlbnQoY29udGVudClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFNlcnZpY2UuaXRlbXMucHVzaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
