import {element, by} from 'protractor';

export class LoginPageHelper{
    static get userameLogin(){ return element(by.css('[id="txtUsername"]'))}
    static get passwordLogin(){ return element(by.css('[name="txtPassword"]'))}
}