import { test, expect , request } from '@playwright/experimental-ct-react';
import App from './App';

test.use({ viewport: { width: 1080, height: 900 } });

test.beforeAll(async () => {

  let userData = {
    email
: 
"tumisang@entrostat.com",
password
: 
"tumisang"
} 
//  const apiContext = await request
const apiContext = await request.newContext()
const aptResponse = apiContext.post("http://localhost:4002/login", {data:userData})


    await page.pause()

  })

// test.only('should work', async ({ mount , page}) => {
//   const component = await mount(<App></App>);
//   await expect(component).toContainText('Welcome to Tumisang presentation...');
//   let emailInput =  component.locator('input[name="email"]');
//   let passwordInput =  component.locator('input[name="password"]');
//   let checkboxInput = component.locator('input[type=checkbox]')
//   let login = component.locator('input[type=\'submit\']')

// await emailInput.type("tumisang@entrostat.com")
// await passwordInput.fill("tumisang")
// expect(await page.isChecked('input[type=checkbox]')).toBeFalsy()
// await page.check('input[type=checkbox]')

// await login.click()



// await page.pause()

// });