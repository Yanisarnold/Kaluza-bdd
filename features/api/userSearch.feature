Feature: Searching user name

@positive
  Scenario: As a user I want to be able to search for a user name
    Given I search for a name "Bob"
    When I search for the name
    Then User should receive back the name, age and count probability
  
  Scenario: Verify searching with case sensitive
    Given I search for a name "bob"
    When I search for the name
    Then User should receive back the same result as the previous search

@negative
  Scenario: Verify searching with an empty string
    Given I search for a name with an empty string
    When I search with an "empty string"
    Then User should receive back nothing 

  Scenario: Verify searching with a number
    Given I search for a name with a number
    When I search for the name
    Then User should receive back nothing

  Scenario: Verify searching with a special character
    Given I search for a name with a special character
    When I search for the name
    Then User should receive back nothing

  Scenario: Verify not having a parameter throws an 429 error 
    