/** Files under `Library/`, served at `/library-materials/`. */
export function libraryFileUrl(relPath: string): string {
  const base = '/library-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}
