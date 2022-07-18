const stateGame = {
  taiXiu: true,
  xucXac: [
    { ma: 1, hinhAnh: "./img/gamexucxac/1.png" },
    { ma: 1, hinhAnh: "./img/gamexucxac/1.png" },
    { ma: 1, hinhAnh: "./img/gamexucxac/1.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const XucXacReducer = (state = stateGame, action) => {
  switch (action.type) {
    case "TAI_XIU":
      state.taiXiu = action.isCheck;
      return { ...state };
    case "PLAY_GAME": {
      state.tongSoBanChoi += 1;
      let newArrXucXac = [];
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6) + 1;

        newArrXucXac.push({
          ma: random,
          hinhAnh: `./img/gamexucxac/${random}.png`,
        });
      }
      state.xucXac = newArrXucXac;
      let totalXucXac = newArrXucXac.reduce((total, xucxac) => {
        return (total += xucxac.ma);
      }, 0);
      if (
        (totalXucXac > 10 && state.taiXiu) ||
        (totalXucXac < 10 && !state.taiXiu)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default XucXacReducer;
