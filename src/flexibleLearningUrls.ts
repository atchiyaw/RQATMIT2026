/** Files under `Flexible Learning/`, served at `/flexible-learning-materials/`. */
export function flexibleLearningFileUrl(relPath: string): string {
  const base = '/flexible-learning-materials';
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${parts.join('/')}`;
}
