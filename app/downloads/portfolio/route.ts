import { type NextRequest } from 'next/server';

import { getPortfolioDownloadFilename } from '@/lib/downloadLinks';
import {
  getPdfDownloadHeaders,
  renderProjectPortfolioPdf,
} from '@/lib/pdfDocuments';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get('category') ?? undefined;
  const pdfBuffer = await renderProjectPortfolioPdf(category);
  const filename = getPortfolioDownloadFilename(category);

  return new Response(new Uint8Array(pdfBuffer), {
    headers: getPdfDownloadHeaders(filename),
  });
}
