export default function render(element, container) {
  let domElement;
  if (typeof element === "string" || typeof element === "number") {
    domElement = document.createTextNode(element);
  } else {
    domElement = document.createElement(element.type);
  }
  if (element.props) {
    Object.keys(element.props).forEach((prop) => {
      if (prop == "style") {
        Object.keys(element.props[prop]).forEach((key) => {
          domElement.style[key] = element.props[prop][key];
        });
      } else if (
        prop.startsWith("on") &&
        window.hasOwnProperty(prop.toLowerCase())
      ) {
        domElement.addEventListener(
          prop.slice(2).toLowerCase(),
          element.props[prop]
        );
      } else if (prop != "children") {
        domElement[prop] = element.props[prop];
      }
    });

    let children = element.props.children;

    if (typeof children === "string" || typeof children === "number") {
      let textNode = document.createTextNode(children);
      domElement.appendChild(textNode);
    } else {
      children = children?.length > 1 ? children : [children];
      children.forEach((child) => {
        render(child, domElement);
      });
    }
  }

  container.appendChild(domElement);
}
