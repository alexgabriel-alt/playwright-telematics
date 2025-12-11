import test from "playwright/test";
import LoginPage from "../../pages/LoginPage";
import UseerCredentials from "../../helpers/UserCredentials";
import ErrorMessages from "../../helpers/ErrorMessages";
import ApplicationUrl from "../../helpers/ApplicationUrl";

test.describe("Positive login Flow", ()=>{
    
    let loginPage: LoginPage;

    test.beforeEach(async({page})=>{

        loginPage =new LoginPage(page);
    })


    test("Login with autofleet user", async({page})=>{

        await loginPage.loginToApplication();
        await loginPage.validatePageUrl(ApplicationUrl.Production_US_Dashboard_Page_Url);
    });
})