import { test, expect } from '@playwright/test'

let tokenValue: string;

test("check basic auth", async ({ request }) => {
  const respToken = await request.post("https://restful-booker.herokuapp.com/auth", {
    data: {
      username: "admin",
      password: "password123"
    }
  });

  expect(respToken.status()).toBe(200); // validate success
  const body = await respToken.json();
  tokenValue = body.token;
  console.log("Token:", tokenValue);
});

test("Put call using basic auth", async ({ request }) => {
  const putResp = await request.put("https://restful-booker.herokuapp.com/booking/1", {
    headers: {
      Cookie: `token=${tokenValue}`
    },
    data: {
      firstname: "James",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "Breakfast"
    }
  });

  expect(putResp.status()).toBe(200);
  console.log(await putResp.json()); // log parsed body instead of promise
});