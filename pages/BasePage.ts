
import test, { expect, Locator, Page } from "playwright/test";

export abstract class BasePage {

constructor(protected page:Page){

     
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
}
