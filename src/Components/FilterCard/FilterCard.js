import React from "react";
import {
  filterYearOptions,
  filterBooleanOptions,
} from "./../../Assets/Config/filterYear";
class FilterCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      year: "",
      successfullLanding: "",
      successfulLaunch: "",
    };
  }
  fetchInitialDataParameterWise(type, value) {
    this.setState(
      {
        [type]: value,
      },
      () =>
        this.props.updateFilter(
          this.state.year,
          this.state.successfullLanding,
          this.state.successfulLaunch
        )
    );
  }
  render() {
    return (
      <div className="filter-container margin-10 width-responsive">
        <div className="filter-label">Filter</div>

        <div className="label-text-class">
          <div className="title-class">Launch Year</div>
          <p className="label-text-border-bottom"></p>
        </div>
        <div className="flex-container">
          {filterYearOptions.map((options) => {
            return (
              <div className="button-container center">
                <div
                  className={
                    this.state.year === options.value
                      ? "button-customized active"
                      : "button-customized"
                  }
                  onClick={() =>
                    this.fetchInitialDataParameterWise("year", options.value)
                  }
                >
                  {options.value}
                </div>
              </div>
            );
          })}
        </div>

        <div className="label-text-class">
          <div className="title-class">Successfull Launch</div>
          <p className="label-text-border-bottom"></p>
        </div>
        <div className="flex-container">
          {filterBooleanOptions.map((options) => {
            return (
              <div className="button-container center">
                <div
                  className={
                    this.state.successfulLaunch === options.value
                      ? "button-customized active"
                      : "button-customized"
                  }
                  onClick={() =>
                    this.fetchInitialDataParameterWise(
                      "successfulLaunch",
                      options.value
                    )
                  }
                >
                  {options.value}
                </div>
              </div>
            );
          })}
        </div>
        <div className="label-text-class">
          <div class="title-class">Successfull Landing</div>
          <p className="label-text-border-bottom"></p>
        </div>
        <div className="flex-container">
          {filterBooleanOptions.map((options) => {
            return (
              <div className="button-container center">
                <div
                  className={
                    this.state.successfullLanding === options.value
                      ? "button-customized active"
                      : "button-customized"
                  }
                  onClick={() =>
                    this.fetchInitialDataParameterWise(
                      "successfullLanding",
                      options.value
                    )
                  }
                >
                  {options.value}
                </div>
              </div>
            );
          })}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default FilterCard;
