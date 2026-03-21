/** Build URL for a file under `/faculty-credentials/<faculty>/<relPath>`. */
export function credentialFileUrl(facultyFolderName: string, relPath: string): string {
  const base = '/faculty-credentials';
  const facultySeg = encodeURIComponent(facultyFolderName);
  const parts = relPath
    .split('/')
    .filter(Boolean)
    .map((p) => encodeURIComponent(p));
  return `${base}/${facultySeg}/${parts.join('/')}`;
}

const PDF_EXT = /\.pdf$/i;
const IMG_EXT = /\.(png|jpe?g|gif|webp)$/i;

export type CredentialPreviewKind = 'pdf' | 'image' | 'other';

export function credentialPreviewKind(fileName: string): CredentialPreviewKind {
  if (PDF_EXT.test(fileName)) return 'pdf';
  if (IMG_EXT.test(fileName)) return 'image';
  return 'other';
}
