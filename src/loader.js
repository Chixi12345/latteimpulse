import HoldOn from "react-hold-on";

var options = {
  theme: "sk-cube-grid",
  message: "Please Wait...",
  backgroundColor: "#1847B1",
  textColor: "white",
  zIndex: "9999999999999",
};
// HoldOn.open({
//   theme: "sk-cube-grid"
// })

export const showLoader = () => {
  HoldOn.open(options);
};

export const hideLoader = () => {
  HoldOn.close();
};
