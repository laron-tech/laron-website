import { r as redirect } from "../../chunks/index2.js";
const load = ({ params }) => {
  throw redirect(302, "/en/");
};
export {
  load
};
