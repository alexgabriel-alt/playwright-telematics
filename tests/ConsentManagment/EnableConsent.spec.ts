import test from "playwright/test";
import LoginPage from "../../pages/LoginPage";
import AdminSettingsPage from "../../pages/AdminSettingsPage";
import { BasePage } from "../../pages/BasePage";

test.describe("Enabling consent management", ()=>{

    
    
    let adminSettingsPage: AdminSettingsPage;

    test.beforeEach(async({page})=>{
        

        adminSettingsPage = new AdminSettingsPage(page);
    })


    test("Enabling consent managemen", async({page})=>{

         const loginPage = new LoginPage(page);
        await loginPage.loginToApplication();
        await page.waitForTimeout(2000);    
        await page.goto("https://control.us.autofleet.io/vNuH9eg6fHoqvJiEWF7vbZ");
        await adminSettingsPage.disableConsentManagement();
        await page.waitForTimeout(2000);    
        await loginPage.loginToApplication();
        await adminSettingsPage.enableConsentManagement();
        await page.waitForTimeout(2000);    
        await loginPage.loginToApplication();
        
       
    });
})