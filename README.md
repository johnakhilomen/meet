# Your Meet App (web/mobile application)

## Find upcoming web development events happening around you!

![Your-Meet-App-Main-Page](/IMG/your-meet-app-main-page.png)

## Project Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## How to run the project:
1. Clone GitHub repository
2. Navigate to project root directory
3. Run "npm install" on command prompt CLI
4. Open web browser and navigate to http:localhost:3000
5. Enjoy using the app!

## Project Description
 - Your Meet App is both a web and mobile application(can be downloaded onto Desktop or mobile) that allows the user to receive a list of upcoming CareerFoundry events. 
 - Users are able to type in the name of a city that they want to view upcoming events in, and then are able to view a list of suggested cities that match the characters of their input. 
 - Upon selecting a city (or choosing the "all cities" selection), the user will then be able to view a list of upcoming events pertaining to that selection. 
 - They can enter a number between 1 and 32 to specify how many events they would like to be displayed on the page. 
 - In the list of events shown, they can view basic information regarding the event (ie. event name, start-time, and location). 
 - They can click on a button to display more details (ie. event description and a link to the google calendar invite). By default the details are collapsed. 
Once the details are displayed, they can click the button again to hide the details. 
 - A scatterchart and a pie chart are displayed for visual representation of the number of events, the type of events, and the location of the events that are upcoming. 
Event data used for this application are CareerFoundry events. 
 - This project uses a serverless function created on AWS Lambda. The user first requests an access code from Google API. The access code is then sent to the serverless function along with client details, which are then passed back to google to acquire an access token. Once authenticated by google, user will then be authorized to fetch the events from Google storage to be displayed in the app. 
 - The methodology for building this app was through test-driven development. Unit tests and integration tests were written first before the code was modified to passed those test. The Jest library was used (shallow rendering for unit tests and mount rendering for integration tests) as well as Jest-Cucumber for Acceptance testing and Puppeteer for End-to-End testing.
 - Your Meet App also functions offline thanks to it being a Progressive Web Application (has secure requests, uses ServiceWorker API to fetch data from previous cache, and manifest.json).
 - Atatus browser monitoring tool used for determining page load time and generating daily reports Service Level Agreement Reports.

## FEATURE 1: FILTER EVENTS BY CITY

![List-of-cities](/IMG/list-of-cities.png)

### Feature 1 User Story:
 - As a: User
 - I should be able to: start typing in a city name to the filter box
 - So that: if that city name matches one on the list, I can see all upcoming events for that city

### Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
 - Given: User has not search a city
 - When: User opens up the app
 - Then: the user should see a list of the events

### Scenario 2: User should see a list of suggestions when they search for a city.
 - Given: the main page is loaded
 - When: user starts typing in the city textbox
 - Then: user should see a list of cities (suggestion) matching what they typed

### Scenario 3: User can select a city from the suggested list.
 - Given: the user was typing a city name in the textbox and a list of suggested cities is showing
 - When: the user is selecting a city from the suggested list
 - Then: city should change to that selected city and user will get all the events happening there


## FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

![Event-list-screenshot](/IMG/event-list-screenshot.png)

### Feature 2 User Story:
 - As a: User
 - I should be able to: toggle on an “event’s details” button
 - So that: I can show or hide the details of that particular event

### Scenario 1: An event element is collapsed by default.
 - Given: the list of events have been loaded
 - When: User navigates to the events page
 - Then: User sees a collapsed bar that can expand to show details
### Scenario 2: User can expand an event to see its details.
 - Given: the list of events have been loaded
 - When: user clicks “show details” button for an event
 - Then: the event element will expand to show event details
### Scenario 3: User can collapse an event to hide its details.
 - Given: the details of a particular event are loaded
 - When: the user clicks “show less” button for an event
 - Then: the event element will collapse the event details


## FEATURE 3: SPECIFY NUMBER OF EVENTS

### Feature 1 User Story:
 - As a: User
 - I should be able to: enter a number in a “number of events” field
 - So that: I can see that many event displayed my the current webpage

### Scenario 1: When user hasn’t specified a number, 32 is the default number.
 - Given: all events have been loaded from database
 - When: user navigates to the event page
 - Then: events list will display 32 items
### Scenario 2: User can change the number of events they want to see.
 - Given: text field when all events have been loaded
 - When: user types in number events to be displayed on screen
 - Then: number of events are displayed according to user’s input in text field


## FEATURE 4: USE THE APP WHEN OFFLINE

![offline-warning](/IMG/offline-warning.png)

### Feature 1 User Story:
 - As a: User
 - I should be able to: open the app on the desktop
 - So that: I can see a static list of events even when there is no internet connection

### Scenario 1: Show cached data when there’s no internet connection.
 - Given: all events that were loaded when there was connection are stored in cache folder
 - When: user navigates to event page without internet connection
 - Then: displays a list of events stored in cache
### Scenario 2: Show error when user changes the settings (city, time range).
 - Given: all events relating to a particular city is displayed
 - When: user navigates to event page without internet connection
 - Then: user gets error prompt that there is no internet connection and city cannot be changed


## FEATURE 5: DATA VISUALIZATION

### Feature 1 User Story:
 - As a: User
 - I should be able to: navigate to an “event chart” page
 - So that: view a chart that displays number of events by city

### Scenario 1: Show a chart with the number of upcoming events in each city.
 - Given: data chart is created from derived list of upcoming events
 - When: user clicks on show a button/link to view chart of upcoming events in each city 
 - Then: displays a chart of a breakdown of upcoming events by city


## Dependancies:
 - "@testing-library/jest-dom": "^5.11.10",
 - "@testing-library/react": "^11.2.6",
 - "@testing-library/user-event": "^12.8.3",
 - "atatus-spa": "^4.3.2",
 - "axios": "^0.21.1",
 - "nprogress": "^0.2.0",
 - "react": "^17.0.2",
 - "react-dom": "^17.0.2",
 - "react-scripts": "4.0.3",
 - "recharts": "^2.0.9",
 - "web-vitals": "^0.2.4",
 - "workbox-background-sync": "^5.1.4",
 - "workbox-broadcast-update": "^5.1.4",
 - "workbox-cacheable-response": "^5.1.4",
 - "workbox-core": "^5.1.4",
 - "workbox-expiration": "^5.1.4",
 - "workbox-google-analytics": "^5.1.4",
 - "workbox-navigation-preload": "^5.1.4",
 - "workbox-precaching": "^5.1.4",
 - "workbox-range-requests": "^5.1.4",
 - "workbox-routing": "^5.1.4",
 - "workbox-strategies": "^5.1.4",
 - "workbox-streams": "^5.1.4"

## Dev Dependancies (Testing Libraries):
 - "@wojtekmaj/enzyme-adapter-react-17": "^0.6.1",
 - "gh-pages": "^3.1.0",
 - "jest-cucumber": "^3.0.1",
 - "puppeteer": "^8.0.0"