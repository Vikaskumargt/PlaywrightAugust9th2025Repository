const {test, expect} = require('@playwright/test')
 
test('First PLaywright Test', async function display({page}){    //Traditional approach
    console.log('Running first Playwright test');
   
})

test('Secound Playwright Test', async function({}){      //Anonynomous Function
    console.log('Running secound Playwright test');
})

test.only('Thrid Playwright Test',async ({})=>{                //Arrow Function
    console.log('Running thrid Playwright test');
})