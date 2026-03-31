import {test, expect} from '@playwright/test'
import apiJson from '../testData/apiCall.json'

test('API Testing - Pass request body from JSON POST call', async({request}) => {
    const respPost = await request.post("https://restful-booker.herokuapp.com/booking",{
        data : apiJson.postcallData
    })
    const respPostJson = await respPost.json()
    expect(respPostJson.booking).toMatchObject(apiJson.postcallData)
    expect(respPostJson.booking.additionalneeds).toEqual(apiJson.postcallData.additionalneeds)
})

test('API Testing - Pass request body from JSON PUT call', async({request}) => {
    const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1",{
        data : apiJson.putcallData
    })
    const respPutJson =  await respPut.json()
    expect(respPutJson).toMatchObject(apiJson.putcallData)
    expect(respPutJson.firstname).toEqual(apiJson.putcallData.firstname)
})