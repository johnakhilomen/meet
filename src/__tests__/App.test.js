import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  // this way, AppWrapper is defined for before any test are ran.
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  })
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventState = AppWrapper.state('events');
    expect(AppEventState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventState);
    AppWrapper.unmount();
  });
  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });
  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });
  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
  test('EventList events is being populated by MockData', async () => {
    const AppWrapper = await mount(<App />)
    await AppWrapper.update();
    expect(AppWrapper.find(EventList).prop('events').length).not.toEqual(0); // Greater than 0 means list is not empty
    AppWrapper.unmount();
  })
  test('number of events displayed reflects the number of events input field', async () => {
    const AppWrapper = await mount(<App />);
    const numberOfEventsToDisplay = AppWrapper.find(NumberOfEvents).state('query');
    AppWrapper.update();
    expect(AppWrapper.find(EventList).prop('events')).toHaveLength(numberOfEventsToDisplay); // # of events shown is 32 by default
    AppWrapper.unmount();
  });
  test('changing number of events input field will change number of events displayed', async () => {
    const AppWrapper = await mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    await NumberOfEventsWrapper.find('.eventNumberInput').simulate('change', { target: { value: 5 } });
    AppWrapper.update();
    expect(AppWrapper.find(EventList).prop('events').length).toEqual(5); // Force change value to 5 to see if 5 events are displayed
    AppWrapper.unmount();
  })
});

