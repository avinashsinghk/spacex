import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchInitialData} from './../../Actions'
import FilterCard from "./../../Components/FilterCard/FilterCard"
import  LaunchDetailsCard from "./../../Components/LaunchDetailsCard/LaunchDetailsCard"

class Home extends React.Component {
    componentDidMount(){
        this.props.fetchInitialData()
    }
    render(){
       
        return(
           <div className="container">
               <div className="page-title">SpaceX Launch Programs</div>
           <div className="flex-box-customized">
                <FilterCard></FilterCard>
                {this.props.spacexData.map((data) => {
                    console.log(data)
                return <LaunchDetailsCard details={data}/> 
                    })
                    }
               
              
               
            </div>

           </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchInitialData},dispatch)

}
function mapStateToProps(state){
    return {spacexData:state.data}

}



export default connect(mapStateToProps,mapDispatchToProps)(Home);