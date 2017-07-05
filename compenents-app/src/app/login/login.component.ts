// Importing Angular Component from @angular/core
import {Component} from "@angular/core"

/** Component Decorator.
 *  template Url: added external html file, stylesurl: added external style sheet.
 */

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

// Class LoginComponent.
export class LoginComponent {

}