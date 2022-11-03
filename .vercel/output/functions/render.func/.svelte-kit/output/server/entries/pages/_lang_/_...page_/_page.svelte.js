import { c as create_ssr_component, e as escape, h as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { T as Template } from "../../../../chunks/templates.js";
import "vanta/dist/vanta.globe.min.js";
const Home_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scene.svelte-1wh6xgs{top:0;z-index:-1}.section{display:flex;height:100vh;width:100vw;align-items:center;justify-content:center}.section:nth-child(odd){--tw-bg-opacity:1;background-color:rgb(17 24 39 / var(--tw-bg-opacity))}.inner{width:66.666667%}@media(min-width: 768px){.inner{width:33.333333%}}.section-1 p{text-align:center;font-size:1.25rem;line-height:1.75rem}.section h1{text-align:center;font-size:2.25rem;line-height:2.5rem;font-weight:700}.section h2{text-align:center;font-size:1.5rem;line-height:2rem;font-weight:700}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  return `<div class="${"home-section text-gray-100"}"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div>
<div class="${"scene w-screen h-screen fixed svelte-1wh6xgs"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let description;
  let template;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  title = data.title;
  description = data.description;
  template = data.template;
  return `${$$result.head += `<!-- HEAD_svelte-wqwt6t_START -->${$$result.title = `<title>Laron | ${escape(title)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)}><meta name="${"twitter:card"}" content="${"summary"}"><meta name="${"twitter:site"}" content="${"@larontech"}"><meta name="${"twitter:title"}" content="${"Laron | " + escape(title, true)}"><meta name="${"twitter:description"}"${add_attribute("content", description, 0)}><!-- HEAD_svelte-wqwt6t_END -->`, ""}

${template === Template.home ? `${validate_component(Home, "Home").$$render($$result, { content: data.page }, {}, {})}` : `<p>Template not found</p>`}`;
});
export {
  Page as default
};
