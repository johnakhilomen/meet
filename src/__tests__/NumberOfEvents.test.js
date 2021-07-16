import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe ('<NumberOfEvents /> Component', () => {

  // initialize wrapper to use shallow before all tests are ran
  let NumberOfEventsWrapper;
  NumberOfEventsWrapper = shallow(<NumberOfEvents/>)

  // Test #1
  test('renders input field for number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  // Test #2
  test('renders input field and is not empty', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).not.toEqual(0);
  });

  // Test #3
  test('renders text input correctly', () => {
    const query = NumberOfEventsWrapper.state('query');
    expect(NumberOfEventsWrapper.find('.eventNumberInput').prop('value')).toBe(query)
  });

  // Test #4
  test("input type is entered is a number", () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput').at(0).props().type).toEqual('number');
  })

  // Test #5
  test("input value is by default 32", () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput').at(0).props().value).toEqual(32);
  })
});