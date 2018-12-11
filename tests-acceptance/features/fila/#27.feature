Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully actualized page.
    Given I’m logged successfully and at RU Express page.
    Given I’m logged successfully and at queue monitoring page.
    When Do actualize the page.
    Then I see the estimated waiting time.
    Then I see the estimated number of persons in line.
    Then I see the estimated best time to go.
    Then I see the option to actualize.
    Then I see the option to say I’m in line.