import { getResumeDownloadFilename } from '@/lib/downloadLinks';
import { getPdfDownloadHeaders, renderResumePdf } from '@/lib/pdfDocuments';

export const runtime = 'nodejs';

export async function GET() {
  const pdfBuffer = await renderResumePdf();

  return new Response(new Uint8Array(pdfBuffer), {
    headers: getPdfDownloadHeaders(getResumeDownloadFilename()),
  });
}
