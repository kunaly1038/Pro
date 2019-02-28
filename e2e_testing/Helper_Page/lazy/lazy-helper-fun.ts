import { ElementFinder, browser } from "protractor";

export class LazyHelper{
    static loginUser(){
        browser.get('https://opensource-demo.orangehrmlive.com/')
    }
    static click(locatorName : ElementFinder){
        return locatorName.click();
    }
}
