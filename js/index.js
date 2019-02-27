var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //Renders carriage return as a line break
marked.setOptions({
  breaks: true });


var placeholder = "# this is a h1 \n\n   ## this is a h2\n\n   [I'm an inline-style link](https://www.google.com)\n\n   `<p>This is <em>Raw</em> HTML</p>`\n\n   ```\n    var s = \"JavaScript syntax highlighting\";\n   ```\n   \n   * This is a list item\n   \n\n   > Blockquotes are very handy in email to emulate reply text.\n   > This line is part of the same quote.\n\n   ![alt text](https://bit.ly/2qro4js \"Logo Title Text 1\")\n\n   **This is bold text**\n  ";var























App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      input: placeholder };


    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(App, [{ key: "handleChange", value: function handleChange(

    e) {
      placeholder = e.target.value;
      this.setState({
        input: placeholder });

    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", null,
          React.createElement("p", { className: "header" }, "Editor"),
          React.createElement("textarea", { id: "editor", onKeyUp: this.handleChange },
            this.state.input),

          React.createElement(Preview, { input: this.state.input })));


    } }]);return App;}(React.Component);


//PREVIEW SECTION
var Preview = function (_React$Component2) {_inherits(Preview, _React$Component2);function Preview() {_classCallCheck(this, Preview);return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));}_createClass(Preview, [{ key: "render", value: function render()
    {
      function createMarkup() {
        return { __html: marked(placeholder) };
      }
      return (
        React.createElement("div", { id: "preview-container" },
          React.createElement("p", { className: "header" }, "Previewer"),
          React.createElement("div", { id: "preview", dangerouslySetInnerHTML: createMarkup() })));


    } }]);return Preview;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));