import {test, expect } from '@playwright/test'

test('Verify response headers', async({request}) => {
    const getResponse =  await request.get('/booking/1')
    const headerValues = getResponse.headers()
    console.log(headerValues)
    expect(headerValues.server).toEqual('Heroku')
})