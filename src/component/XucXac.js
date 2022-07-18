import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.xucxac.map((xucxac, index) => {
      return <img src={xucxac.hinhAnh} alt={xucxac.hinhAnh} key={index} />;
    });
  };
  render() {
    return <div className="xucxac">{this.renderXucXac()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    xucxac: state.XucXacReducer.xucXac,
  };
};
export default connect(mapStateToProps)(XucXac);
