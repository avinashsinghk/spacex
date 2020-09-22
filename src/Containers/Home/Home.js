import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchInitialData, fetchFilteredData } from "./../../Actions";
import FilterCard from "./../../Components/FilterCard/FilterCard";
import LaunchDetailsCard from "./../../Components/LaunchDetailsCard/LaunchDetailsCard";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }
  updateDashboard=(year, landing, launch) => {
  this.props.fetchFilteredData(year, landing, launch);
  }
  render() {
    const { spacexData } = this.props;
    return (
      <div className="container">
        <div className="page-title">SpaceX Launch Programs</div>
        <div className="flex-box-customized">
          <FilterCard updateFilter={this.updateDashboard}></FilterCard>
         
            {spacexData.map((data) => {
              console.log(data);
              return <LaunchDetailsCard details={data} />;
            })}
          
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInitialData, fetchFilteredData }, dispatch);
}
function mapStateToProps(state) {
  return { spacexData: state.data };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
