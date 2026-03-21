/** Files under `Research/`, served at `/research-materials/`. */
export function researchFileUrl(relPath: string): string {
  const base = '/research-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}
