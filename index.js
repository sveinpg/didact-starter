const createElement = (type, props, ...children) => ({});

const render = () => {};

const Bekkact = {
  createElement,
  render,
};

/** @jsx Bekkact.createElement */
const element = <h1 id="test">Test</h1>;

const container = document.getElementById('root');
Bekkact.render(element, container);
