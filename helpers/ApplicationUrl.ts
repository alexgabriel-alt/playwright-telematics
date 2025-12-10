import { Page } from "@playwright/test";

export default class ApplicationUrl {

public static readonly Staging_URL: string = 'https://control.staging.eu.autofleet.io/login';
public static readonly Production_US_URL: string = 'https://control.us.autofleet.io/login';
public static readonly Production_EU_URL: string = 'https://control.autofleet.io/login?userEmail=alexgabriel@autofleet.io';
public static readonly Simulation_US_URL: string = `https://${URL}.control.autofleet-dev.io/login`;

public static readonly Staging_Dashboard_Page_Url ='https://control.staging.eu.autofleet.io/r7tTQoEX74mL2cXdjsm5mC';
public static readonly Production_US_Dashboard_Page_Url= 'https://control.us.autofleet.io/uZwB9vSeB8AAoU8nU4uBc1';

}