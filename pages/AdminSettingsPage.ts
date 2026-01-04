import { expect,Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


export default class AdminSettingsPage extends BasePage {
    
    private AdminButton: Locator;
    private SettingsButton: Locator;
    private SettingsAdminButton: Locator;
    private SercheBox: Locator;
    //find locator of edit button 
    private ConsentManagementButton: Locator;
    private ConfirmPopupButton: Locator;
    private SaveChangesButton: Locator;



    constructor(protected page: Page) {
        super(page);

        this.AdminButton = this.page.locator('[data-tooltip-content="Admin"]');
        this.SettingsButton = this.page.locator('[data-tooltip-content="Settings"]');
        this.SettingsAdminButton = this.page.locator('[data-tooltip-content="Settings Admin"]');
        this.SercheBox = this.page.locator('[data-test-id="mainPageHeader-subTitle"]');
        this.ConsentManagementButton = this.page.locator('[data-test-id="evCharging.deactivateOnArrive-boolean-toggle-switch"]');
        this.ConfirmPopupButton = this.page.locator('[data-test-id="boolean-setting-warning-popup-action-primary"]');
        this.SaveChangesButton = this.page.locator('[data-test-id="apply-settings-changes-button"]');

    }

    public async enableTelematicsSetting() {
        await this.AdminButton.click();
        await this.SettingsAdminButton.click();
        await this.SercheBox.fill("enableTelematics");
        //Add edit button and change to true 
}

    public async enableConsentManagement () {
        await this.AdminButton.first().waitFor()
        await this.AdminButton.click();
        await this.SettingsButton.click();
        await this.ConsentManagementButton;
        await this.SaveChangesButton.click();
        await this.logoutFromApplication();
        

}

    public async disableConsentManagement() {
        await this.AdminButton.first().waitFor()
        await this.AdminButton.click();
        await this.SettingsButton.click();
        await this.ConsentManagementButton.click();
        await this.ConfirmPopupButton.click();
        await this.SaveChangesButton.click();
       await this.logoutFromApplication();
}
}