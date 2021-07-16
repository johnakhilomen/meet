Feature: Specify Number of Events

Scenario: By default the event list should display 32 events
Given the user has not input a number of events to show
When the the app loads
Then the event list will display a default number of events

Scenario: The user can specify the number events to be deplayed
Given the app has loaded
And the event list is displaying default number of events
When the user inputs a number
Then the number of events in the event list corresponds to that input number