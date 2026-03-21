/** Files under `GPMO/`, served at `/gpmo-materials/`. */
export function gpmoFileUrl(relPath: string): string {
  const base = '/gpmo-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}
