import { r as redirect } from "../../../chunks/index2.js";
import { r as readDir } from "../../../chunks/utils.js";
const load = async ({ params }) => {
  let langs = readDir("src/contents");
  if (!langs.includes(params.lang)) {
    throw redirect(302, `/en/${params.lang}/${params.page}`);
  }
  return { lang: params.lang };
};
export {
  load
};
