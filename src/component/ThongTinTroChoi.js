import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Bạn chọn:{" "}
          <span className="text-danger">
            {this.props.taiXiu ? " Tài " : "Xỉu"}
          </span>
        </div>
        <div className="display-4">
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soBanTHang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.totalBanDaChoi}</span>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              this.props.handlePlayGame();
            }}
            className="btn btn-success"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.XucXacReducer.taiXiu,
    totalBanDaChoi: state.XucXacReducer.tongSoBanChoi,
    soBanTHang: state.XucXacReducer.soBanThang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlayGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTroChoi);
