import React from 'react';
import { mount } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('By default the event list should display 32 events', ({ given, when, then }) => {
    given('the user has not input a number of events to show', () => {
    });
    let AppWrapper;
    when('the the app loads', () => {
      AppWrapper = mount(<App />);
    });
    then('the event list will display a default number of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(32);
    });
  });
  test('The user can specify the number events to be deplayed', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the app has loaded', () => {
      AppWrapper = mount(<App />);
    });
    and('the event list is displaying default number of events', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(32);
    });
    when('the user inputs a number', () => {
      AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: 5 } });
    });
    then('the number of events in the event list corresponds to that input number', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ query: 5 })
      expect(NumberOfEventsWrapper.state('query')).toBe(5);
    });
  });
})
