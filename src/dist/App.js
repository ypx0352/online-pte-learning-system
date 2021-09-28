"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Hero_1 = require("components/Hero/Hero");
var PracticeArea_1 = require("components/PracticeArea/PracticeArea");
var StudyMaterial_1 = require("components/StudyMaterial/StudyMaterial");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var styled_components_2 = require("styled-components");
var theme_1 = require("styles/theme");
var GlobalStyles = styled_components_2.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n"], ["\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');\n  body {\n    font-family: 'Roboto', sans-serif;\n  }\n"])));
function App() {
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"] },
        react_1["default"].createElement(GlobalStyles, null),
        react_1["default"].createElement(Hero_1["default"], null),
        react_1["default"].createElement(PracticeArea_1.PracticeArea, null),
        react_1["default"].createElement(StudyMaterial_1["default"], null)));
}
exports["default"] = App;
var templateObject_1;
