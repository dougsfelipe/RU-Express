Feature: Queue Monitoring
  I as an application user
  Want to see the actual line (queue) state to think if it’s worth to enter it.

  Scenario: Successfully actualized page after marking presence in line and countdown goes zero.
    Given I’m logged successfully and at RU Express page.
    Given I’m logged successfully and at queue monitoring page.
    Given I’m at line state.
    When Do countdown goes zero.
    Then I see the message of over limit of time to wait.
    Then I see the option to say I’m leaving the line.
    Then I see the option to say I’m entering the restaurant.
    Then I see the option to say I’m staying in line.