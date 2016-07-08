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
            styles: ["\n        .jumbotron {\n          \n        }\n\n        .list-group {\n            display: inline-block;\n            padding-left: 20px;\n        }\n\n        img {\n          height: 90px;\n          width: 110px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [content_service_1.ContentService, common_1.FormBuilder, error_service_1.ErrorService])
    ], ContentAddComponent);
    return ContentAddComponent;
}());
exports.ContentAddComponent = ContentAddComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY29udGVudC1hZGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQStELGlCQUFpQixDQUFDLENBQUE7QUFFakYsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2pELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBb0RyRDtJQUlHLDZCQUFvQixlQUErQixFQUFVLEdBQWUsRUFBVSxhQUEyQjtRQUE3RixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7SUFBRyxDQUFDO0lBRXJILHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ25CLFVBQVUsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU5QyxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDbkMsVUFBVSxDQUFDLE1BQU0sQ0FDYixHQUFHLEVBQ0g7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7UUFDRCxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQ2YsS0FBSyxFQUNMLFVBQVMsSUFBSTtZQUNaLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELFVBQVMsT0FBTztZQUNoQiw4REFBOEQ7UUFDOUQsQ0FBQyxFQUNELFVBQVMsUUFBUTtZQUNWLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekQsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFDLEdBQUcsQ0FBQztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBQyxRQUFRLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUNILENBQUM7SUFDSCxDQUFDO0lBRUgsc0NBQVEsR0FBUjtRQUFBLGlCQXFCRTtRQXBCQyxVQUFVLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFNUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFNLE9BQU8sR0FBVyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2lCQUNuQyxTQUFTLENBQ04sVUFBQSxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBcEhIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFDLG11REFnQ1I7WUFDRCxNQUFNLEVBQUUsQ0FBQyw0T0FjTCxDQUFDO1NBQ0wsQ0FBQzs7MkJBQUE7SUFtRUYsMEJBQUM7QUFBRCxDQWxFQSxBQWtFQyxJQUFBO0FBbEVZLDJCQUFtQixzQkFrRS9CLENBQUEiLCJmaWxlIjoiY29udGVudC9jb250ZW50LWFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcblxuaW1wb3J0IHtDb250ZW50fSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQge0NvbnRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9jb250ZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ215LWNvbnRlbnQtYWRkJyxcblx0dGVtcGxhdGU6YFxuXHRcdDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cbiAgICAgICAgICA8aDIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+QWRkIE5ldyBQcm9kdWN0PC9oMj5cbiAgICAgICAgPGJyPlxuICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvZHVjdE5hbWVcIj5Qcm9kdWN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdwcm9kdWN0TmFtZScpXCIgdHlwZT1cInRleHRcIiBpZD1cInByb2R1Y3ROYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpY2VcIj5QcmljZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3ByaWNlJylcIiB0eXBlPVwidGV4dFwiIGlkPVwicHJpY2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGljdHVyZVwiPlBpY3R1cmU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cInN0b3JlLWlucHV0XCIgKGNoYW5nZSk9XCJjaGFuZ2VMaXN0ZW5lcigkZXZlbnQpXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBhY3RpdmVcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBpZD1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjBcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIiBzdHlsZT1cIndpZHRoOjAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLlwiIGFsdD1cIlByZXZpZXdcIiBpZD1cImltZ1BsYWNlaG9sZGVyXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgIDwvZGl2PlxuXG5cdGAsIFxuXHRzdHlsZXM6IFtgXG4gICAgICAgIC5qdW1ib3Ryb24ge1xuICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmxpc3QtZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudEFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdFxuXHRteUZvcm06IENvbnRyb2xHcm91cDtcblxuICBcdGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRTZXJ2aWNlOiBDb250ZW50U2VydmljZSwgcHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxuXG4gIFx0bmdPbkluaXQoKSB7XG4gICAgXHR0aGlzLm15Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcHJpY2U6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gIFx0fVxuXG4gIFx0Y2hhbmdlTGlzdGVuZXIoJGV2ZW50KTogdm9pZCB7XG4gICAgXHRmaWxlcGlja2VyLnNldEtleSgnQTlMbHh1dkV3VG9taVgzNm5SajRJeicpO1xuXG5cdFx0XHR2YXIgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKS5zcmM7XG4gICAgICBpZiAodXJsICE9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIikge1xuICAgICAgICAgIGZpbGVwaWNrZXIucmVtb3ZlKFxuICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmVkXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvcmUtaW5wdXRcIik7XHRcdFxuICAgICAgZmlsZXBpY2tlci5zdG9yZShcbiAgICBcdFx0XHRpbnB1dCxcbiAgICBcdFx0XHRmdW5jdGlvbihCbG9iKXtcbiAgICBcdFx0XHRcdHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nUGxhY2Vob2xkZXJcIik7XG4gICAgICBcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3RvcmUgc3VjY2Vzc2Z1bDpcIiwgSlNPTi5zdHJpbmdpZnkoQmxvYikpO1xuICAgICAgXHRcdFx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIEJsb2IudXJsKTtcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdGZ1bmN0aW9uKEZQRXJyb3IpIHtcbiAgXHRcdFx0XHRcdC8vICBjb25zb2xlLmxvZyhGUEVycm9yLnRvU3RyaW5nKCkpOyAtIHByaW50IGVycm9ycyB0byBjb25zb2xlXG4gICAgXHRcdFx0fSxcbiAgICBcdFx0XHRmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3NiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2dyZXNzYmFyXCIpO1xuICAgICAgICAgICAgICBwcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IHByb2dyZXNzKyclJztcbiAgICAgIFx0XHRcdFx0Y29uc29sZS5sb2coXCJMb2FkaW5nOiBcIitwcm9ncmVzcytcIiVcIik7XG4gICAgXHRcdFx0fVxuICBcdFx0KTtcblx0ICB9XG5cblx0b25TdWJtaXQoKSB7XG4gICAgZmlsZXBpY2tlci5zZXRLZXkoJ0E5TGx4dXZFd1RvbWlYMzZuUmo0SXonKTtcblxuICAgIHZhciBpbWFnZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nUGxhY2Vob2xkZXJcIikuc3JjO1xuICAgIGNvbnNvbGUubG9nKGltYWdlVXJsKTsgICBcbiAgICBpZihpbWFnZVVybCA9PSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIikge1xuICAgICAgY29uc29sZS5sb2coXCJDaG9vc2UgYSBwbmcgdG8gc3RvcmUgdG8gUzNcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdQbGFjZWhvbGRlclwiKTtcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgXCIuXCIpO1xuICAgICAgY29uc3QgY29udGVudDpDb250ZW50ID0gbmV3IENvbnRlbnQodGhpcy5teUZvcm0udmFsdWUucHJvZHVjdE5hbWUsIHRoaXMubXlGb3JtLnZhbHVlLnByaWNlLCBudWxsLCBpbWFnZVVybCk7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50U2VydmljZS5hZGRDb250ZW50KGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRTZXJ2aWNlLml0ZW1zLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
