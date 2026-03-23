/** PDFs under `Administration/`, served at `/Administration/*`.
 *  `relPath` should be the path relative to the `Administration/` root,
 *  e.g. `College Dean/2025 CEC College Dean.pdf`.
 */
export function administrationDocUrl(relPath: string): string {
  const encoded = relPath
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `/Administration/${encoded}`;
}

