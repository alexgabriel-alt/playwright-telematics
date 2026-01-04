
import test, { expect, Locator, Page } from "playwright/test";

export abstract class BasePage {

private userbutton: Locator;
private logoutButton: Locator;
private fleetButton: Locator;
private vehiclesButton: Locator;

constructor(protected page:Page){

      this.userbutton= this.page.locator('[data-test-id="user"]');
      this.logoutButton= this.page.locator('[data-test-id="logoutBtnTest"]');
      this.fleetButton= this.page.locator('[data-tooltip-content="Fleet"]');
      this.vehiclesButton= this.page.locator('[data-tooltip-content="Vehicles"]');
}


public async validatePageUrl(url: string){
      await test.step(`Validate url is ${url}`,async()=>{
        await expect(this.page).toHaveURL(url);

      })

    }
     public async validateElementText(element: Locator, expectedText: string){
      await test.step(`Validate correct text is ${expectedText}`,async()=>{
        await expect(element).toContainText(expectedText);
    })
    
}
 public async logoutFromApplication()
    {
        await this.userbutton.click();
        await this.logoutButton.click();
    }

     public async selectFleetMenu()
    {
        await this.fleetButton.click();
        await this.vehiclesButton.click();
    }
}
