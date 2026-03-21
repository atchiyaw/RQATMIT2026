/** PDFs under `Level of Accreditation/`, served at `/level-of-accreditation/`. */
export function accreditationDocUrl(fileName: string): string {
  return `/level-of-accreditation/${encodeURIComponent(fileName)}`;
}
