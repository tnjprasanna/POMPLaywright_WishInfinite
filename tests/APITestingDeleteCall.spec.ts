import {test, expect} from '@playwright/test'

test("Delete API Call", async({request}) => {
    const respDelete = request.delete('https://restful-booker.herokuapp.com/booking/254')
    expect((await respDelete).status()).toBe(201)
  

})