/** Files under `Industry/`, served at `/industry-materials/`. */
export function industryFileUrl(relPath: string): string {
  const base = '/industry-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}

