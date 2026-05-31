import { getPortfolioDownloadFilename } from '@/lib/downloadLinks';
import {
  getPdfDownloadHeaders,
  renderProjectPortfolioPdf,
} from '@/lib/pdfDocuments';

export const runtime = 'nodejs';

export async function GET() {
  const pdfBuffer = await renderProjectPortfolioPdf();

  return new Response(new Uint8Array(pdfBuffer), {
    headers: getPdfDownloadHeaders(getPortfolioDownloadFilename()),
  });
}
