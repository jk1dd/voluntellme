import React from 'react'
import Map from './map'
import {shallow} from 'enzyme'

describe('<Map />', () => {
  it('should not crash', ()=> {
    const map = shallow(<Map />)
    expect(map).toBeTruthy
  })

  it('should have filler phrase', () => {
    const map = shallow(<Map />)
    expect(map.contains(<p>Look at organizations on the map!</p>)).toBeTruthy
  })
})
