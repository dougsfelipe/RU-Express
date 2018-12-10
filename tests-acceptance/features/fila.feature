Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully loaded page.
    Given I’m logged successfully and at main page.
    When Do go to queue monitoring page.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page.
    Given I’m logged successfully and at queue monitoring page.
    When Do actualize the page.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page after marking presence in line.
    Given I’m logged successfully and at queue monitoring page.
    When Do select I’m in line option.
    Then I see the estimated waiting time countdown.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I’m in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.

  Scenario: Successfully actualized page after marking presence in line and select actualize.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do actualize the page.
    Then I see the estimated waiting time countdown.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I’m in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.

  Scenario: Successfully actualized page after marking presence in line and select I’m entering the restaurant.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do select I’m entering the restaurant option.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page after marking presence in line and select I’m leaving the line.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do select I’m leaving the line option.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do countdown goes zero.
    Then I see the message of over limit of time to wait.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.
    Then I see the option to say I’m staying in line.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero and I select I’m leaving the line.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at zero countdown state.
    When Do select after zero countdown I’m leaving the line option.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero and I select I’m entering the restaurant.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at zero countdown state.
    When Do select after zero countdown I’m entering the restaurant option.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero and I select I’m staying in line.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at zero countdown state.
    When Do select after zero countdown I’m in line option.
    Then I see the estimated waiting time as a sentence saying I’ve passed the limit of normal waiting.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I'm in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.