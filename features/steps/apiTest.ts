import assert from 'assert';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import { searchUser } from "../../support/api"
import testInputData from "../../data/testData.json"

let result: any;
let nameToSearch: string;

// resetting all state
Before(() => {
  nameToSearch = " "
})

Given(/^I search for a name "([^"]*)"$/, function (name) {
  nameToSearch = name;
});

When('I search for the name', async function () {
  // searching for the user name through the api
  result = await searchUser(nameToSearch);
})

Then('User should receive back the name, age and count probability', function () {
    assert.ok(result, "shoul;d always be defined")
    assert.deepStrictEqual(typeof result.name , "string")
    assert.deepStrictEqual(typeof result.age , 'number');
    assert.deepStrictEqual(typeof result.count,'number');

})

// validating the typeof for each data
Then('User should receive back the same result as the previous search', function () {
  assert.deepStrictEqual(typeof result.name ,"string")
  assert.deepStrictEqual(typeof result.age , 'number');
  assert.deepStrictEqual(typeof result.count,'number');
})


// Scenario: Verify searching with an empty string and @*
Given('I search for a name with an empty string', function () {
  nameToSearch = '';

});

Given('I search for a name with a number', function () {
  nameToSearch = testInputData.nameWithNumber;

});

Given('I search for a name with a special character', function () {
  nameToSearch = testInputData.nameWithSpecialCharacter;

})

//  storing the json result into the result variable 
When('I search with an "empty string"', async function () {
  result = await searchUser(" ");
})


Then('User should receive back nothing', function () {
  // this is done to switch between multiple test type and check since they invalid the result sytays the same
    assert.deepStrictEqual(result.age, null);
    assert.deepStrictEqual(result.count, 0);
})







