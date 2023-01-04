/** @jsx createElement */

import useState from "./useState";
import render from "./render";

function createElement(type, props, ...children) {
  if (typeof type === "function") {
    let newType = type(props);
    return createElement(
      newType.type,
      {
        ...newType.props,
        ...(props
          ? Object.keys(props)
              .filter(
                (prop) =>
                  prop.startsWith("on") &&
                  window.hasOwnProperty(prop.toLowerCase())
              )
              .reduce((acc, prop) => {
                acc[prop] = props[prop];
                return acc;
              }, {})
          : {}),
      },
      newType.props.children
    );
  }
  return {
    $$typeof: Symbol("react.element"),
    type: type,
    key: props?.key || null,
    props: {
      ...props,
      children: children?.length == 1 ? children[0] : children,
    },
  };
}

const React = {
  render,
  createElement,
  useState,
};

export default React;
