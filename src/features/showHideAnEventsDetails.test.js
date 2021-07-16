import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('By default the events details are collapsed', ({ given, and, when, then }) => {
    given('the list of events have been loaded', () => {    
    });
    let AppWrapper;  
    and('app loaded', () => {
      AppWrapper = mount(<App />)
    });
    when('the show/hide button is not clicked yet', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
    });
    then('the event details are collapsed', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });
  test('The user can expand to see an events details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the app has been loaded', () => {
      AppWrapper = mount(<App />)
    });
    and('the list of events have been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
    });

    when('the user clicks on the show/hide details button', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });

    then('the events details are expanded', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(1);
    });
  });
  test('The user can collapse to hide an events details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('the app has been loaded', () => {
      AppWrapper = mount(<App />);
    });
    and('the events details are shown/expanded', () => {
      AppWrapper.update();
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event__Details')).toHaveLength(1);
    });
    when('the user clicks on the show/hide details button', () => {
      AppWrapper.find('.event .details-btn').at(0).simulate('click');
    });
    then('the events details are collapsed', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });
})