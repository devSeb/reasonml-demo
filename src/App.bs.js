'use strict';

var React = require("react");
var PlayerCard$ReasonReactExamples = require("./PlayerCard.bs.js");

function App(Props) {
  var title = Props.title;
  return React.createElement("div", {
              className: ""
            }, React.createElement("h1", {
                  className: ""
                }, title), React.createElement(PlayerCard$ReasonReactExamples.make, {
                  name: "toto",
                  level: 2
                }), React.createElement(PlayerCard$ReasonReactExamples.make, {
                  avatar: "test avatar",
                  name: "toto",
                  level: 2
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
