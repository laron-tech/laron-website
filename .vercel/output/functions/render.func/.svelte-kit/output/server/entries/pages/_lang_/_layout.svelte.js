import { c as create_ssr_component, d as createEventDispatcher, e as escape, f as null_to_empty, h as add_attribute, v as validate_component } from "../../../chunks/index.js";
const app = "";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".line.svelte-zcfenu.svelte-zcfenu{fill:none;stroke-width:4;transition:stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),\n			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)}.line1.svelte-zcfenu.svelte-zcfenu{stroke-dasharray:60 207;stroke-width:4}.line2.svelte-zcfenu.svelte-zcfenu{stroke-dasharray:60 60;stroke-width:4}.line3.svelte-zcfenu.svelte-zcfenu{stroke-dasharray:60 207;stroke-width:4}.active.svelte-zcfenu .line1.svelte-zcfenu{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:4}.active.svelte-zcfenu .line2.svelte-zcfenu{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:4}.active.svelte-zcfenu .line3.svelte-zcfenu{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:4}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  createEventDispatcher();
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `<button class="${[
    escape(null_to_empty($$props.class), true) + " svelte-zcfenu",
    active ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-expanded", active, 0)}><svg width="${"100%"}" height="${"100%"}" viewBox="${"0 0 100 100"}"><path class="${"line line1 stroke-inherit svelte-zcfenu"}" d="${"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}"></path><path class="${"line line2 stroke-inherit svelte-zcfenu"}" d="${"M 20,50 H 80"}"></path><path class="${"line line3 stroke-inherit svelte-zcfenu"}" d="${"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}"></path></svg>
</button>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-yukz77{width:50px;height:50px;background-image:url('/laron.svg');background-size:cover}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"realtive w-screen p-2 fixed top-0 backdrop-blur-sm"}"><div class="${"flex justify-between items-center"}"><a href="${"/"}" class="${"svelte-yukz77"}"></a>
		<div style="${"width: 50px; height: 50px;"}">${validate_component(Hamburger, "Hamburger").$$render($$result, { class: "stroke-blue-500" }, {}, {})}</div></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"relative"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
