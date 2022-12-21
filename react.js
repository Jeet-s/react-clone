/** @jsx createElement */

function createElement(type, props, ...children) {
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

function render(element, container) {
  let domElement = document.createElement(element.type);
  Object.keys(element.props).forEach((prop) => {
    if (prop != "children") {
      domElement[prop] = element.props[prop];
    }
  });

  let children = element.props.children;

  if (typeof children === "string") {
    domElement.innerText = children;
  }

  container.appendChild(domElement);
}

const React = {
  render,
  createElement,
};

export default React;
