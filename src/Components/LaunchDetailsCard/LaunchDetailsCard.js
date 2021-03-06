import React from "react";

class LaunchDetailsCard extends React.Component {
render(){
  
  return (
    <div className="filter-container margin-10 width-responsive tablet-container">
        <br></br>
        <div className="mission-image-container"><img src={this.props.details.links.mission_patch_small} alt="img3"></img>
            
        </div>
        <div class="padding-tb"><span className="mission-name">{this.props.details.mission_name}</span></div>
  <div class="padding-tb"><span className="mission-ids">Mission Ids:</span><ul>{this.props.details.mission_id.map((ids)=>{ return <li className="spacex-details-value">{ids}</li>})}</ul></div>
  <div class="padding-tb"><span className="launc-year-block">Launch Year:</span><span className="spacex-details-value">{this.props.details.launch_year}</span></div>
  <div class="padding-tb"><span className="successful-launch-status">Successful Launch:</span><span className="spacex-details-value">{this.props.details.launch_success?"True":"False"}</span></div>
  <div class="padding-tb"><span className="successful-landing-status">Successful Landing:</span><span className="spacex-details-value">{this.props.details.rocket.first_stage.cores[0].land_success?"True":"False"}</span></div>
      
    </div>
  );
}
};

export default LaunchDetailsCard;