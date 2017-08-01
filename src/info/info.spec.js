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
      <div className='tab-header' id='info-block'>
        <h1>Information</h1>
        <p>Find some thoughts and resources here</p>
      </div>
      <div className='off-the-wall'>
        <div className='who-info'>
          <h2>Who volunteers?</h2>
          <p>People all over the country volunteer. You should too. It doesn't matter what age or stage of life you are in - there is always something to help with!</p>
        </div>
        <div className='what-info'>
          <h2>What sorts of things can you do?</h2>
          <ul>
            <li>Pets</li>
            <li>Homeless</li>
            <li>Elderly</li>
            <li>Social Issues</li>
            <li>Education</li>
            <li>Health</li>
          </ul>
        </div>
        <div className='why-info'>
          <h2>What are some reasons to volunteer?</h2>
          <p>It is good for everyone! It can make you happier and heathier, more connected to others and to your community, and bring you enjoyment. At the same time, it makes your community and country a better place to live in, and those who volunteer are more personally invested in the community and its success.</p>
        </div>
        <div className='when-info'>
          <h2>When should you do it?</h2>
          <p>Anytime is a good time! There are so many different types of activities and ways to get involved, that there is always a way to fit in volunteering in your life. The options range from months-long (or even years-long!) commitments, all the way down to just a few hours on a Saturday afternoon.</p>
        </div>
        <div className='how-info'>
          <h2>Want more info?</h2>
          <a href="https://www.nationalservice.gov/resources/recruitment/volunteering-america-resources">Check out some of the resources and information listed at this site!</a>
        </div>
      </div>
    </div>)).toBeTruthy
  })
})
