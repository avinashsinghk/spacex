(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[3],{78:function(e,a,t){"use strict";t.r(a);var n=t(16),c=t(17),s=t(19),l=t(18),r=t(0),i=t.n(r),m=t(22),o=t(9),u=t(26),d=function(){return i.a.createElement("div",{className:"filter-container margin-10 width-responsive"},i.a.createElement("div",{className:"filter-label"},"Filter"),i.a.createElement("div",{className:"label-text-class"},i.a.createElement("div",{className:"title-class"},"Launch Year"),i.a.createElement("p",{className:"label-text-border-bottom"})),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2006")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2007"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2016")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2017"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2016")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2017"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2016")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2017"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2016")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2017"))),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2016")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"2017"))),i.a.createElement("div",{className:"label-text-class"},i.a.createElement("div",{className:"title-class"},"Successfull Launch"),i.a.createElement("p",{className:"label-text-border-bottom"})),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"True")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"False"))),i.a.createElement("div",{className:"label-text-class"},i.a.createElement("div",{class:"title-class"},"Successfull Landing"),i.a.createElement("p",{className:"label-text-border-bottom"})),i.a.createElement("div",{className:"flex-container"},i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"True")),i.a.createElement("div",{className:"button-container center"},i.a.createElement("div",{className:"button-customized"},"False"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null))},E=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),i.a.createElement("div",{className:"filter-container margin-10 width-responsive"},i.a.createElement("br",null),i.a.createElement("div",{className:"mission-image-container"},i.a.createElement("img",{src:this.props.details.links.mission_patch,alt:"img3"})),i.a.createElement("div",{class:"padding-tb"},i.a.createElement("span",{className:"mission-name"},this.props.details.mission_name)),i.a.createElement("div",{class:"padding-tb"},i.a.createElement("span",{className:"mission-ids"},"Mission Ids:"),i.a.createElement("ul",null,this.props.details.mission_id.map((function(e){return i.a.createElement("li",{className:"spacex-details-value"})})))),i.a.createElement("div",{class:"padding-tb"},i.a.createElement("span",{className:"launc-year-block"},"Launch Year:"),i.a.createElement("span",{className:"spacex-details-value"},this.props.details.launch_year)),i.a.createElement("div",{class:"padding-tb"},i.a.createElement("span",{className:"successful-launch-status"},"Successful Launch:"),i.a.createElement("span",{className:"spacex-details-value"},this.props.details.launch_success)),i.a.createElement("div",{class:"padding-tb"},i.a.createElement("span",{className:"successful-landing-status"},"Successful Landing:"),i.a.createElement("span",{className:"spacex-details-value"})))}}]),t}(i.a.Component),b=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchInitialData()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"page-title"},"SpaceX Launch Programs"),i.a.createElement("div",{className:"flex-box-customized"},i.a.createElement(d,null),this.props.spacexData.map((function(e){return console.log(e),i.a.createElement(E,{details:e})}))))}}]),t}(i.a.Component);a.default=Object(m.connect)((function(e){return{spacexData:e.data}}),(function(e){return Object(o.bindActionCreators)({fetchInitialData:u.b},e)}))(b)}}]);
//# sourceMappingURL=3.2b9bab8a.chunk.js.map