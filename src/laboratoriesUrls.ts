/** Files under `Laboratories/`, served at `/laboratories-materials/`. */
export function laboratoriesFileUrl(relPath: string): string {
  const base = '/laboratories-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}
