Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully actualized page after marking presence in line and select actualize.
    Given I’m logged successfully and at RU Express page.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do actualize the page.
    Then I see the estimated waiting time countdown.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I’m in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.