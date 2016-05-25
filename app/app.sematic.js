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
var core_1 = require('@angular/core');
;
//import {CHECKBOX_DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';
var ng2_semantic_ui_1 = require('ng2-semantic-ui/ng2-semantic-ui');
/*@Component({
    selector: 'my-app',
    directives: [CHECKBOX_DIRECTIVES],
    template: `
    <sui-checkbox>Checkbox example</sui-checkbox>
    `
})
*/
var TabExampleStandard = (function () {
    function TabExampleStandard() {
    }
    TabExampleStandard = __decorate([
        core_1.Component({
            selector: 'tab-example-standard',
            directives: [ng2_semantic_ui_1.TAB_DIRECTIVES],
            template: "<sui-tabset>\n\t    <div class=\"ui top attached tabular menu\">\n\t        <a class=\"item\" suiTabHeader=\"1\">First</a>\n\t        <a class=\"item\" suiTabHeader=\"2\">Second</a>\n\t        <a class=\"item\" suiTabHeader=\"3\">Third</a>\n\t    </div>\n\t    <div class=\"ui bottom attached segment\" suiTabContent=\"1\">First tab!</div>\n\t    <div class=\"ui bottom attached segment\" suiTabContent=\"2\">Second tab!</div>\n\t    <div class=\"ui bottom attached segment\" suiTabContent=\"3\">Third tab!</div>\n\t</sui-tabset>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TabExampleStandard);
    return TabExampleStandard;
}());
exports.TabExampleStandard = TabExampleStandard;
// export class SematicUI {} 
//# sourceMappingURL=app.sematic.js.map