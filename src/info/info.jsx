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
        <p>People all over the country volunteer. You should too. It doesn't matter what age or stage of life you are in - there is always something to help with!</p>
      </div>
      <div className='what-info'>
        <h2>What sorts of things can you do?</h2>
        <ul>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+pets&t=hu&ia=web' target='_blank'>Pets</a></li>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+homeless&t=hu&ia=web' target='_blank'>Homeless</a></li>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+elderly&t=hu&ia=web' target='_blank'>Elderly</a></li>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+social+issues&t=hu&ia=web' target='_blank'>Social Issues</a></li>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+education&t=hu&ia=web' target='_blank'>Education</a></li>
          <li><a href='https://duckduckgo.com/?q=volunteering+for+health&t=hu&ia=web' target='_blank'>Health</a></li>
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
        <p><a href="https://www.nationalservice.gov/resources/recruitment/volunteering-america-resources">Check out some of the resources and information listed at this site!</a></p>
      </div>
    </div>
  </div>
)

export default Info;
