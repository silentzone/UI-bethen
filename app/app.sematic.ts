import { Component } from '@angular/core';;
//import {CHECKBOX_DIRECTIVES} from 'ng2-semantic-ui/ng2-semantic-ui';
import {TAB_DIRECTIVES}   from 'ng2-semantic-ui/ng2-semantic-ui';

/*@Component({
    selector: 'my-app',
    directives: [CHECKBOX_DIRECTIVES],
    template: `
 	<sui-checkbox>Checkbox example</sui-checkbox>
 	`
})
*/
@Component({
    selector: 'tab-example-standard',
    directives: [TAB_DIRECTIVES],
    template: `<sui-tabset>
	    <div class="ui top attached tabular menu">
	        <a class="item" suiTabHeader="1">First</a>
	        <a class="item" suiTabHeader="2">Second</a>
	        <a class="item" suiTabHeader="3">Third</a>
	    </div>
	    <div class="ui bottom attached segment" suiTabContent="1">First tab!</div>
	    <div class="ui bottom attached segment" suiTabContent="2">Second tab!</div>
	    <div class="ui bottom attached segment" suiTabContent="3">Third tab!</div>
	</sui-tabset>
    `
})
export class TabExampleStandard { 
	
}
// export class SematicUI {}