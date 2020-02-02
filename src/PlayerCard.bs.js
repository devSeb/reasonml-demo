'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function PlayerCard(Props) {
  var avatar = Props.avatar;
  var name = Props.name;
  var level = Props.level;
  var match = React.useState((function () {
          return false;
        }));
  var setEditMode = match[1];
  var avatarTest = avatar !== undefined ? avatar : "coucou";
  return React.createElement("div", undefined, React.createElement("div", undefined, React.createElement("span", undefined, avatarTest)), React.createElement("span", undefined, "A player " + name), React.createElement("span", undefined, "a level  " + String(level)), match[0] ? React.createElement("span", {
                    onClick: (function (_evt) {
                        return Curry._1(setEditMode, (function (param) {
                                      return true;
                                    }));
                      })
                  }, "editmode  ") : React.createElement("span", undefined, "pas de editmode  "));
}

var make = PlayerCard;

exports.make = make;
/* react Not a pure module */
