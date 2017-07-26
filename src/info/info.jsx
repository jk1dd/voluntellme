import React from 'react';

const Info = () => (
  <div className='volunteer-info'>
    <div className='tab-header' id='info-block'>
      <h1>Information</h1>
      <p>Find some thoughts and resources here</p>
    </div>
    <div className='off-the-wall'>
      <div className='who-info'>
        <h2>Who volunteers?</h2>
        <p>People all over the country volunteer. You should too.</p>
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
        <p>It is good for everyone.</p>
      </div>
      <div className='when-info'>
        <h2>When should you do it?</h2>
        <p>Anytime is a good time.</p>
      </div>
      <div className='how-info'>
        <h2>Want more info?</h2>
        <a href="https://www.nationalservice.gov/resources/recruitment/volunteering-america-resources">Lots of resources here</a>
      </div>
    </div>
  </div>
)

export default Info;
