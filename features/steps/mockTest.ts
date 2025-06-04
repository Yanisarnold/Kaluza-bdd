import assert from 'assert';
import { Given, When, Then, Before} from '@cucumber/cucumber';
import testInputData from "../../data/testData.json";
import { userMockSearch } from '../../support/userMocks';
import {expect} from 'chai'
let result: any;
let nameToSearch: string;

// resetting search state
Before(() => {
  nameToSearch = " "
})

// Scenario: valid scenarios
Given(/^I search for a name "([^"]*)"$/, function (name) {
  nameToSearch = name;
});

When('I search for the name', async function () {
  // searching for the user name through the api
  result = await userMockSearch(nameToSearch);
})

Then('User should receive back the name, age and count probability', function () {
  assert.ok(result, "should always be defined")
  // validating the user name (although I wasn't told to validate on the data)
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


// Scenario: Invalid scenario
Given('I search for a name with an empty string', function () {
  nameToSearch = '';
});

Given('I search for a name with a number', function () {
  nameToSearch = testInputData.nameWithNumber;
});

Given('I search for a name with a special character', function () {
  nameToSearch = testInputData.nameWithSpecialCharacter;
})

When('I search with an "empty string"', async function () {
 result =  await userMockSearch(" ");
})


Then('User should receive back nothing', function () {
  // user should receive no data back so this assertion is to be strict and under no circumstances it should change
  assert.deepStrictEqual(result.age, null);
  assert.deepStrictEqual(result.count, 0);
}
)










