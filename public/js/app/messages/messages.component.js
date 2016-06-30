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
var message_input_component_1 = require("./message-input.component");
var message_list_component_1 = require("./message-list.component");
var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'my-messages',
            template: "\n        <div class=\"row spacing\">\n            <my-message-input></my-message-input>\n        </div>\n        <div class=\"row spacing\">\n            <my-message-list></my-message-list>\n        </div> \n    ",
            directives: [message_list_component_1.MessageListComponent, message_input_component_1.MessageInputComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHdDQUFzQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2xFLHVDQUFxQywwQkFBMEIsQ0FBQyxDQUFBO0FBYWhFO0lBQUE7SUFFQSxDQUFDO0lBZEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHVOQU9UO1lBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsK0NBQXFCLENBQUM7U0FDNUQsQ0FBQzs7eUJBQUE7SUFHRix3QkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlkseUJBQWlCLG9CQUU3QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE1lc3NhZ2VJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2UtbGlzdC5jb21wb25lbnRcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4gICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuICAgICAgICA8L2Rpdj4gXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbTWVzc2FnZUxpc3RDb21wb25lbnQsIE1lc3NhZ2VJbnB1dENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNDb21wb25lbnQge1xuICAgIFxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
