import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ request, fetch }) => {
  let locale = request.headers.get("Accept-Language");
  if (locale) {
    locale = locale.split(",")[0];
    locale = locale.split("-")[0];
  } else {
    locale = "en";
  }

  let res = await fetch(`contents?lists=true`);
  let { lists } = await res.json();
  if (!lists.includes(locale)) {
    locale = "en";
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${locale}/`,
    },
  });
}
