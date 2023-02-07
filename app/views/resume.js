const resume = `
<div class="resume-view">
  <div class="resume-wrapper">
    <div class="resume">
      <div class="resume-brief selected" onclick="showDetails(0)">
        <div class="small-text">June 2021 - January 2023</div>
        <div class="big-text highlight">
          Fullstack Developer
        </div>
        <div>
          <a class="text-white" target="_blank" href="https://www.mikmak.com/"> @MikMak</a>
          , New York, NY
        </div>
      </div>
      <div class="resume-brief" onclick="showDetails(1)">
        <div class="small-text">January 2019 - June 2021</div>
        <div class="big-text highlight">
          Frontend Developer
        </div>
        <div>
          <a class="text-white" target="_blank" href="https://www.alteryx.com/about-us/lore-io"> @Lore IO
          </a> (Acquired by Alteryx)
          , Sunnyvale, CA
        </div>
      </div>
      <div class="resume-brief" onclick="showDetails(2)">
        <div class="small-text">January 2017 - May 2018</div>
        <div class="big-text highlight">
          Marketing Engineer
        </div>
        <div>
          <a class="text-white" target="_blank" href="https://simpliroute.com/en-us"> @SimpliRoute</a>
          , Santiago, Chile
        </div>
      </div>
    </div>
    <div class="selected-description">
      <div class="resume-details">
        <ul>
          <li>Software Engineer part of the Insights team working with Vue.js, REST APIs, Postgres, and Big Query.</li>
          <li>Implement dashboards with d3.js to help users understand their brands performance in social media campaigns.</li>
          <li>Contribute to MikMak’s internal components library. Replace standard components with Vuetify components.</li>
          <li>Lead frontend implementation of the Shopper Intelligence feature that displays demographic information associated with the customers’ brands and their campaigns.</li>
          <li>Develop a simulator for MikMak’s Benchmarks feature, to help Product Managers to understand how the different restrictions and thresholds impact data displayed to customers and discover improvement opportunities for the user experience.</li>
          <li>Unit test every feature being added in order to ensure there is no negative impact to the user experience.</li>
          <li>Dispatch and analyze logs on Amplitude and Datadog to understand product performance and user experience.</li>
        </ul>
      </div>
      <div class="resume-details hide">
        <ul>
          <li>Propose, Design and Develop features with the Ember.js framework and the Semantic-ui library.</li>
          <li>Proactively propose and implement different user experience workflows.</li>
          <li>Constantly collect colleagues and customers feedback to improve our product.</li>
          <li>Improve frontend application loading performance by 50%.</li>
        </ul>
      </div>
      <div class="resume-details hide">
        <ul>
          <li>Analyze market-based keywords to manage their Adwords Campaigns and apply SEO techniques to generate more leads,
            resulting in 100% increase in demo requests within the first three months and reaching more than 300 new users on a monthly basis.</li>
          <li>Create Tableau dashboards to keep the company informed about marketing action-results.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="resume-container">
    <a href="https://nmenares.github.io/portfolio/public/resume.pdf" target="_blank" alt="resume">
      <img src="https://nmenares.github.io/portfolio/public/resume.png">
    </a>
  </div>
</div>
`;
