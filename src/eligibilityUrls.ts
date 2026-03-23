/** PDFs under `Eligibility/`, served at `/Eligibility/`. */
export function eligibilityDocUrl(fileName: string): string {
  return `/Eligibility/${encodeURIComponent(fileName)}`;
}
