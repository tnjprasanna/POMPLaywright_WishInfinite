import {test, expect} from '@playwright/test'

test('Curl command', async({request}) => {

    const respPUT = await request.put("/booking/1", {
        headers: {
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: {
            "firstname": "Prasanna",
            "lastname": "Venkatesan",
            "totalprice": 1010,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2026-01-01"
            },
            "additionalneeds": "Breakfast Basic"
        }
    })

    const jsonResp = await respPUT.json()
    console.log(jsonResp)
    expect(respPUT.status()).toBe(200)
    expect(respPUT.statusText()).toBe("OK")
    expect(respPUT.ok()).toBeTruthy()
    expect(jsonResp).toMatchObject({
        firstname: 'Prasanna',
        lastname: 'Venkatesan',
        totalprice: 1010,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2026-01-01' },
        additionalneeds: 'Breakfast Basic'
    })
    expect(jsonResp.additionalneeds).toEqual("Breakfast Basic")

    const resGet = await request.get("https://restful-booker.herokuapp.com/booking/1")
    const getJsonResp = await resGet.json()
    console.log(getJsonResp)
    expect(getJsonResp).toMatchObject({
        firstname: 'Prasanna',
        lastname: 'Venkatesan',
        totalprice: 1010,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2026-01-01' },
        additionalneeds: 'Breakfast Basic'
    })
})