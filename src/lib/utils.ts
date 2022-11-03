import fs from 'fs';

// read directories.
export function readDir(path: string): string[] {
  return fs.readdirSync(path);
}

// is path exist.
export function exist(path: string): boolean {
  return fs.existsSync(path);
}

// load file
export function loadFile(path: string): string {
  return fs.readFileSync(path, 'utf8');
}
