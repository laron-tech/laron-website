var Template = /* @__PURE__ */ ((Template2) => {
  Template2[Template2["home"] = 0] = "home";
  Template2[Template2["none"] = 1] = "none";
  return Template2;
})(Template || {});
function getTemplate(page) {
  switch (page) {
    case "":
      return 0;
    default:
      return 1;
  }
}
export {
  Template as T,
  getTemplate as g
};
