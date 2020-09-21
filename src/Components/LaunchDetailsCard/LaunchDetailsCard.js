import React from "react";

class LaunchDetailsCard extends React.Component {
render(){
  console.log(this.props)
  return (
    <div className="filter-container margin-10 width-responsive">
        <br></br>
        <div className="mission-image-container">Hello
            
        </div>
        <div class="padding-tb"><span className="mission-name">ssada</span></div>
        <div class="padding-tb"><span className="mission-ids">Mission Ids:</span><ul><li className="spacex-details-value">dadada</li></ul></div>
        <div class="padding-tb"><span className="launc-year-block">Launch Year:</span><span className="spacex-details-value"></span></div>
        <div class="padding-tb"><span className="successful-launch-status">Successful Launch:</span><span className="spacex-details-value"></span></div>
        <div class="padding-tb"><span className="successful-landing-status">Successful Landing:</span><span className="spacex-details-value"></span></div>
      
    </div>
  );
}
};

export default LaunchDetailsCard;