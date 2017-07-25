import React, { Component } from 'react';
import Explore from './explore'
import SearchBar from './searchBar'
import OrgTable from './orgTable'
import { shallow } from 'enzyme';

describe('<Explore />', () => {
  it('should not crash', () => {
    const explore = shallow(<Explore />)
    expect(explore).toBeTruthy
  })

  it('should render an h1', () => {
    const explore = shallow(<Explore />)
    expect(explore.find('h1').length).toEqual(1)
  })

  it('should render a header title', () => {
    const explore = shallow(<Explore />)
    expect(explore).toMatchSnapshot()
  })

  it('should render SearchBar', () => {
    const explore = shallow(<Explore />)
    expect(explore.find(SearchBar).length).toEqual(1)
  })

  it('should render OrgTable', () => {
    const explore = shallow(<Explore />)
    expect(explore.find(OrgTable).length).toEqual(1)
  })


})
