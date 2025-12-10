import { url } from "inspector";
import { expect, Locator, Page } from "playwright/test";
import ApplicationUrl from "../helpers/ApplicationUrl";
import UseerCredentials from "../helpers/UserCredentials";
import { BasePage } from "./BasePage";
import UserCredentials from "../helpers/UserCredentials";

export default class LoginPage extends BasePage{
 
private usernameField: Locator;
private passwordField: Locator;
private loginButton: Locator;
private errorMessage: Locator;

    //protected page: Page; //אופציונלי 

    constructor(protected page: Page) {
        //this.page = page; אופציונלי 
        super(page)
        this.usernameField = this.page.locator('[id="loginName"]');
        this.passwordField = this.page.locator('[id="loginPassword"]');
        this.loginButton = this.page.locator('[id="loginSubmit"]');
        this.errorMessage= this.page.locator('[id="errorMessage"]');

        
    }

    public async loginToApplication(username = UseerCredentials.autofleet_USER_EMAIL, 
        password = UseerCredentials.autofleet_USER_Password, 
        url = ApplicationUrl.Production_US_URL)
    {
       
        await this.page.goto(url);
        await this.validatePageUrl(url); // call function of validateBaseUrl
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        await this.validatePageUrl(`${ApplicationUrl.Production_US_URL}/uZwB9vSeB8AAoU8nU4uBc1`);


    }

    
    public async validateLogin(username: string,password:string)
    {
        await expect(this.usernameField).toContainText(UserCredentials.autofleet_USER_EMAIL);
        await expect(this.passwordField).toContainText(UserCredentials.autofleet_USER_Password);

    }

    public async validateErrorMessage(errorMessage: string)
    {

        //await expect(this.errorMessage).toContainText(errorMessage);
        await this.validateElementText(this.errorMessage,errorMessage)
    }
   
}  