Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero and I select I’m staying in line.
    Given I’m logged successfully and at RU Express page.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at zero countdown state.
    When Do select after zero countdown I’m in line option.
    Then I see the estimated waiting time as a sentence saying I’ve passed the limit of normal waiting.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I'm in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.