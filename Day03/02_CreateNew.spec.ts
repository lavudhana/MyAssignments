import {chromium,test} from "@playwright/test";

test("Create a new Lead", async () => {
    //test.setTimeout(15000);
    const launchBrowser = await chromium.launch({ headless: false, channel: 'chrome' });
    const createContext = await launchBrowser.newContext();
    const page = await createContext.newPage();
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.fill('#username', 'Demosalesmanager');
    await page.fill("#password", 'crmsfa');
    await page.click("[value='Login']");
    await page.waitForTimeout(5000);
    await page.locator("text=CRM/SFA").click();
    await page.waitForTimeout(5000);
    await page.locator("[href='/crmsfa/control/leadsMain']").click();
    await page.locator("[href='/crmsfa/control/createLeadForm']").click();
    await page.fill('#createLeadForm_companyName','TCS Pvt Ltd');
    await page.fill('#createLeadForm_firstName','Lavanya');
    await page.fill('#createLeadForm_lastName','D');
    await page.click("[name='submitButton']");
    await page.waitForTimeout(5000);


})
