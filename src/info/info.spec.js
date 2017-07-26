import React from 'react'
import Info from './info'
import { shallow } from 'enzyme'

describe('<Info />', () => {
  it('should not crash', () => {
    const info = shallow(<Info />)
    expect(info).toBeTruthy()
  })

  it('renders things at all', () => {
    const info = shallow(<Info />)
    expect(info.contains(<h1>Information</h1>)).toEqual(true)
  })

  it('renders the proper things', () => {
    const info = shallow(<Info />)
    expect(info).toMatchSnapshot()
  })

  it('has a div with class volunteer-info', () => {
    const info = shallow(<Info />)
    expect(info.find('div').length).toEqual(8)
  })

  it('has the right content', () => {
    const info = shallow(<Info />)
    expect(info.equals(<div className='volunteer-info'>
      <h1>Wondering how to get started?</h1>
        <div className='who-info'>
          <h2>Who volunteers?</h2>
          <p>People all over the country volutneer. You should too.</p>
        </div>
        <div className='what-info'>
          <h2>What sorts of things can you do?</h2>
          <ul>
            <li>Pets</li>
            <li>Homeless</li>
            <li>Elderly</li>
            <li>Social Issues</li>
          </ul>
        </div>
        <div className='why-info'>
          <h2>What are some reasons to volunteer?</h2>
          <p>It is good for you and the country</p>
        </div>
        <div className='when-info'>
          <h2>When should you do it?</h2>
          <p>Anytime is a good time</p>
        </div>
        <div className='how-info'>
          <h2>Want more info?</h2>
          <a href="https://www.nationalservice.gov/resources/recruitment/volunteering-america-resources">Lots of resources here</a>
        </div>
      </div>)).toBeTruthy
  })
})
