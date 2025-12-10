import test from "playwright/test";
import LoginPage from "../../pages/LoginPage";
import UseerCredentials from "../../helpers/UserCredentials";
import ErrorMessages from "../../helpers/ErrorMessages";
import ApplicationUrl from "../../helpers/ApplicationUrl";
import UserCredentials from "../../helpers/UserCredentials";

test.describe("Negative login Flow", ()=>{
    
    let loginPage: LoginPage;

    test.beforeEach(async({page})=>{

        loginPage =new LoginPage(page);
    })

    test("Login with locked out user", async({page})=>{

        await loginPage.loginToApplication(UseerCredentials.Loced_out_User);
        await loginPage.validateErrorMessage(ErrorMessages.Locked_OUt_ErrorMessage);
        await loginPage.validatePageUrl(ApplicationUrl.Production_US_URL);
    })


    test("Login with incorrect user name", async({page})=>{

        await loginPage.loginToApplication(UserCredentials.Wrong_Name_User);
        await loginPage.validateErrorMessage(ErrorMessages.Login_With_Wrong_Credentials);
        await loginPage.validatePageUrl(ApplicationUrl.Production_US_URL);
    })

    test("Login with incorrect password", async({page})=>{

        await loginPage.loginToApplication(UseerCredentials.autofleet_USER_EMAIL,"wrong Pass");
        await loginPage.validateErrorMessage(ErrorMessages.Login_With_Wrong_Credentials);
        await loginPage.validatePageUrl(ApplicationUrl.Production_US_URL);

    })
})