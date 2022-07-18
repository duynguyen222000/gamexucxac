import React, { Component } from "react";
import "./gamexucxac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
import { connect } from "react-redux/es/exports";
class GameXucXac extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center title-game">Game đổ xúc xắc</div>
        <div className="row">
          <div className="col-md-5">
            <button
              onClick={() => {
                this.props.taiXiu(true);
              }}
              className="btn btn-primary btn-choose"
            >
              Tài
            </button>
          </div>
          <div className="col-md-2">
            <XucXac />
          </div>
          <div className="col-md-5">
            <button
              onClick={() => {
                this.props.taiXiu(false);
              }}
              className="btn btn-primary btn-choose"
            >
              Xỉu
            </button>
          </div>
        </div>
        <ThongTinTroChoi />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    taiXiu: (isCheck) => {
      dispatch({ type: "TAI_XIU", isCheck });
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);
