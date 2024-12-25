function customRender(child, parent) {
  const domElement = document.createElement(child.type); // making a children type
  domElement.innerHTML = child.children;
  for (const prop in child.props) {
    // adding attributes
    if (prop == "children") continue;
    domElement.setAttribute(prop, child.props[prop]);
  }
  parent.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
