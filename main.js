const tests = [];

tests.push(
  (() => {
    const selector = "h1";
    return {
      title: "should have exactly 1 <h1>",
      message: `found ${document.querySelectorAll(selector).length}`,
      state: document.querySelectorAll(selector).length === 1,
      elements: document.querySelectorAll(selector),
      selector,
    };
  })()
);

tests.push(
  (() => {
    const selector = "h1:empty,h2:empty,h3:empty,h4:empty,h5:empty,h6:empty";
    return {
      title: "should have no empty headers",
      message: `found ${document.querySelectorAll(selector).length}`,
      state: document.querySelectorAll(selector).length === 0,
      elements: document.querySelectorAll(selector),
      selector,
    };
  })()
);

tests.push(
  (() => {
    const selector = "a[role='link']";
    return {
      title: `should have <a> with role="link" `,
      message: `found ${document.querySelectorAll(selector).length}`,
      state: document.querySelectorAll(selector).length === 0,
      elements: document.querySelectorAll(selector),
      selector,
    };
  })()
);

tests.push(
  (() => {
    const selector = `[aria-readonly][readonly]`;
    return {
      title: `should not have aria-readonly on native "readonly" element`,
      message: `found ${document.querySelectorAll(selector).length}`,
      state: document.querySelectorAll(selector).length === 0,
      elements: document.querySelectorAll(selector),
      selector,
    };
  })()
);

tests.forEach((e) => {
  console.log(
    "%c" + e.title,
    `color: ${e.state ? "#2eff2e" : e.state === false ? "#fe1a1a" : "#fec81a"}`,
    {
      message: e.message,
      elements: e.elements,
      selector: e.selector,
    }
  );
});
