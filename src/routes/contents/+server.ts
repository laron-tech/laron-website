import { json } from '@sveltejs/kit';
import fs from 'fs';
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
  let path = url.searchParams.get("path");
  let lists = url.searchParams.get("lists");

  if (lists) {
    let base = "contents";
    let dirs = fs.readdirSync(base);
    return json({ lists: dirs });
  }

  if (!path) {
    return new Response("path is required", { status: 400 });
  }

  // check if directory exists
  if (!fs.existsSync(path)) {
    return new Response("content not found", { status: 404 });
  }

  let content = fs.readFileSync(path, "utf-8");
  return new Response(content);
}
