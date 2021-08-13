"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Snackbar_1 = require("./components/Popups/Snackbar");
var Header_1 = require("./components/Header/Header");
var Messages_1 = require("./components/Messages/Messages");
var ExplainerModal_1 = require("./components/Popups/ExplainerModal");
var context_1 = require("./context");
function App() {
    return (<context_1.DashboardProvider>
      <ExplainerModal_1["default"] />
      <Snackbar_1["default"] />
      <Header_1["default"] />
      <Messages_1["default"] />
    </context_1.DashboardProvider>);
}
exports["default"] = App;
//# sourceMappingURL=App.js.map