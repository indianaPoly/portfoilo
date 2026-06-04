import { describe, expect, test } from 'bun:test';

import {
  getPdfDownloadHeaders,
  renderProjectPortfolioPdf,
  renderResumePdf,
} from './pdfDocuments';

describe('PDF documents', () => {
  test('creates download headers with a PDF content type and filename', () => {
    const headers = new Headers(getPdfDownloadHeaders('poly-resume-ko.pdf'));

    expect(headers.get('Content-Type')).toBe('application/pdf');
    expect(headers.get('Content-Disposition')).toContain(
      'filename="poly-resume-ko.pdf"'
    );
  });

  test('renders non-empty resume and project portfolio PDF buffers', async () => {
    const [resume, portfolio] = await Promise.all([
      renderResumePdf(),
      renderProjectPortfolioPdf(),
    ]);

    expect(resume.byteLength).toBeGreaterThan(1000);
    expect(portfolio.byteLength).toBeGreaterThan(1000);
  });
});
