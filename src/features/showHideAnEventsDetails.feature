Feature: Show or hide an events details

Scenario: By default the events details are collapsed
Given the list of events have been loaded
And app loaded
When the show/hide button is not clicked yet
Then the event details are collapsed

Scenario: The user can expand to see an events details
Given the app has been loaded
And the list of events have been loaded
When the user clicks on the show/hide details button
Then the events details are expanded

Scenario: The user can collapse to hide an events details
Given the app has been loaded
And the events details are shown/expanded
When the user clicks on the show/hide details button
Then the events details are collapsed