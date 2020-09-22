import React from "react";

class LaunchDetailsCard extends React.Component {
render(){
  console.log(this.props)
  return (
    <div className="filter-container margin-10 width-responsive">
        <br></br>
        <div className="mission-image-container"><img src={this.props.details.links.mission_patch} alt="img3"></img>
            
        </div>
        <div class="padding-tb"><span className="mission-name">{this.props.details.mission_name}</span></div>
  <div class="padding-tb"><span className="mission-ids">Mission Ids:</span><ul>{this.props.details.mission_id.map((ids)=>{ return <li className="spacex-details-value">{}</li>})}</ul></div>
  <div class="padding-tb"><span className="launc-year-block">Launch Year:</span><span className="spacex-details-value">{this.props.details.launch_year}</span></div>
  <div class="padding-tb"><span className="successful-launch-status">Successful Launch:</span><span className="spacex-details-value">{this.props.details.launch_success}</span></div>
  <div class="padding-tb"><span className="successful-landing-status">Successful Landing:</span><span className="spacex-details-value">{}</span></div>
      
    </div>
  );
}
};

export default LaunchDetailsCard;