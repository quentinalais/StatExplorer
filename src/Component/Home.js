import React from 'react'
import bonzai_pic from '../Images/MyBonzai.png';

export const Home = () => {
  return (
    <main className="px-5 py-3 ">
      <div class="row featurette py-3 ">
        <div class="col-md-6">
          <h2 class="featurette-heading fw-normal lh-1">Welcome to the <span class="text-muted">Bonzai project.</span></h2>
          <p class="lead">Try not. Do. Or do not. </p>
          <p class="lead">There is no try.  </p>
        </div>
        <div class="col-md-5">
          <img class="rounded float-start" width="300" height="400" src={bonzai_pic} alt="" />
        </div>
      </div>
  </main>
        
  )
}
