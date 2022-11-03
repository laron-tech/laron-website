import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { exist, loadFile, readDir } from '$lib/utils';

export const GET: RequestHandler = ({ url }) => {
  let base = 'contents/'
  let path = url.searchParams.get('path');
  let list = url.searchParams.get('list');
  if (!exist(base + path)) {
    throw error(404, 'Not found');
  }

  if (list) {
    let dir = readDir(base);
    return json(dir);
  }

  let content = loadFile(base + path);
  return json(content);
}
