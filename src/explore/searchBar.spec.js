import React from 'react'
import SearchBar from './searchBar'
import { shallow } from 'enzyme'

describe('<SearchBar />', () => {
  it('should not crash', () => {
    const search = shallow(<SearchBar />)
    expect(search).toBeTruthy
  })

  it('should render a filter text', () => {
    const search = shallow(<SearchBar />)
    expect(search).toMatchSnapshot
  })
})
