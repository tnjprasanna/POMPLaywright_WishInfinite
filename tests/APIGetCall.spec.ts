import {request,test, APIRequestContext, expect } from '@playwright/test'

let reqContext2 : APIRequestContext 

test.beforeAll('Before all test', async() => {
        reqContext2 = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com" // we can put this url in .config.ts file also
    })
})


test('Practice api get call', async ({request}) => {

    const resp1 = await request.get("https://restful-booker.herokuapp.com/booking/1",{
        headers: { Accept: "application/json" }
    })
    console.log(await resp1.json())

})


test('Practice api get call 2', async() =>{
    const reqContext = await request.newContext({
        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders : {
            Accept : "application/json"
        }
    })
    const resp1 = await reqContext.get('/booking/1')
    console.log(await resp1.json())
}) 
test('Use before all', async() => {
    let resp2 = await reqContext2.get('/booking/1')
    console.log(await resp2.json())
}) 


test('Use config.ts before all', async( {request} ) => {
    let resp2 = await request.get('/booking/1')
    console.log(await resp2.json())
})

test('API query parameter', async({request}) =>{
    let resp3 = await request.get('/booking/?firstname=James&lastname=Brown')
    console.log(await resp3.json())
})


test('API query parameter 2', async({request}) => {

    const resp4 = await request.get("/booking",{
        params : {
            firstname   : "James",
            lastname    : "Brown"
        }
    })
    console.log(await resp4.json());
})

test('Assertion 1 ', async( {request} ) => {
    let resp2 = await request.get('/booking/1')
    console.log(await resp2.json())

    expect(resp2.status()).toBe(200)
    expect(resp2.ok()).toBeTruthy()

  const body = await resp2.json();
  expect (body.firstname).toBe('Mary')
    expect(body).toMatchObject({
        firstname: "Mary",
        lastname: "Brown",
        totalprice: 178,
        depositpaid: false,
        bookingdates: {
           "checkin": "2024-11-23",
           "checkout": "2025-06-18",
        }
    })
})

test('API with UI verification', async ({ request, page }) => {
  const resp2 = await request.get("https://api.demoblaze.com/entries");
  const jsonResponse = await resp2.json();
  console.log(jsonResponse.Items[0].title);

  await page.goto("https://www.demoblaze.com");
  await expect(page.getByRole('link', { name: 'Samsung galaxy s6' }))
    .toHaveText(jsonResponse.Items[0].title);
});

test('Postcall 1', async ({ request }) => {
  const resp1 = await request.post("/booking", {
    data: {
      firstname: "John",
      lastname: "Doe",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "breakfast"
    }
  });

  expect(resp1.status()).toBe(200); // verify success
  const jsonResp1 = await resp1.json();
  console.log(jsonResp1);
  expect(resp1.status()).toBe(200)
  expect(resp1.statusText()).toBe('OK')
  expect(resp1.ok()).toBeTruthy()
  expect(jsonResp1.booking).toMatchObject({
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 150,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'breakfast'
  })
});

test.only('api with ui demo blaze', async ({ request, page }) => {
  const resp = await request.post('https://api.demoblaze.com/addtocart', {
    data: {
      id: "f78cdcd6-4fa6-bca0-16fa-cd4d4fbd217a",
      cookie: "user=5cc14b35-644c-d837-c43a-e9320ff564bf",
      prod_id: 1,
      flag: false
    }
  });

  const bodyText = await resp.text(); // ✅ call the function
  console.log(bodyText);
  expect(resp.status()).toBe(200);
  expect(resp.statusText()).toBe("OK");

  await page.goto("https://www.demoblaze.com"); // ✅ await navigation

  await page.locator('#login2').click();
  await page.locator('#loginusername').fill("tnjprasannav@gmail.com");
  await page.locator('#loginpassword').fill("Test@123");
  await page.getByRole('button', { name: 'Log in' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();

  // Wait for product link to appear
  const productLink = page.getByRole('link', { name: /Samsung galaxy s6/i });
  await expect(productLink).toHaveText('Samsung galaxy s6');
});