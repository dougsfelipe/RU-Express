Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully actualized page after marking presence in line.
    Given I’m logged successfully and at RU Express page.
    Given I’m logged successfully and at queue monitoring page.
    When Do select I’m in line option.
    Then I see the estimated waiting time countdown.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go as a sentence saying I’m in line.
    Then I see the option to actualize.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.
    Then I see the need to reload the page.