import React from 'react'
import OrgTable from './orgTable'
import { shallow } from 'enzyme'

describe('<OrgTable />', () => {

  const fakeOrgs = [{id: 1, name: 'the'}, {id: 2, name: 'what'}]
  const fakeText = 'the'

  it('should not crash', () => {
    const table = shallow(<OrgTable orgs={fakeOrgs} filterText={fakeText} />)
    expect(table).toBeTruthy
  })

  it('should render as expected', () => {
    const table = shallow(<OrgTable orgs={fakeOrgs} filterText={fakeText}/>)
    expect(table).toMatchSnapshot
  })
})
