import React from 'react'
import MyMap from '../App'
import {shallow} from 'enzyme'

describe('<Map />', () => {
  it('should not crash', ()=> {
    const map = shallow(<MyMap />)
    expect(map).toBeTruthy
  })

  it('should have filler phrase', () => {
    const map = shallow(<MyMap />)
    expect(map.contains(<p>Look at organizations on the map!</p>)).toBeTruthy
  })

  it('renders the right things', () => {
    const map = shallow(<MyMap />)
    expect(map).toMatchSnapshot()
  })
})
