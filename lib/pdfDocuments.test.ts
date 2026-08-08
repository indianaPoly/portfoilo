import { describe, expect, test } from 'bun:test';

import {
  portfolioProjectNames,
  projects,
  resumeProjectNames,
} from '@/data/portfolioContent';

import {
  getPdfDownloadHeaders,
  renderCategoryPortfolioPdf,
  renderProjectPortfolioPdf,
  renderResumePdf,
} from './pdfDocuments';

const a4PageBox = [0, 0, 595.280029, 841.890015];

function getMediaBoxes(pdfBuffer: Buffer) {
  return [
    ...pdfBuffer
      .toString('latin1')
      .matchAll(
        /\/MediaBox\s*\[\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\]/g
      ),
  ].map((match) => match.slice(1).map(Number));
}

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

  test('renders domain-specific portfolio PDFs for all 4 categories', async () => {
    const [frontend, fullstack, devops, aiAx] = await Promise.all([
      renderCategoryPortfolioPdf('Frontend'),
      renderCategoryPortfolioPdf('Full-stack'),
      renderCategoryPortfolioPdf('DevOps'),
      renderCategoryPortfolioPdf('AI / AX'),
    ]);

    expect(frontend.byteLength).toBeGreaterThan(1000);
    expect(fullstack.byteLength).toBeGreaterThan(1000);
    expect(devops.byteLength).toBeGreaterThan(1000);
    expect(aiAx.byteLength).toBeGreaterThan(1000);

    // Domain portfolio contains 1 page per representative project (cover page removed)
    expect(getMediaBoxes(frontend)).toHaveLength(5);
    expect(getMediaBoxes(fullstack)).toHaveLength(5);
    expect(getMediaBoxes(devops)).toHaveLength(4);
    expect(getMediaBoxes(aiAx)).toHaveLength(4);
  });

  test('renders resume and portfolio pages in A4 size', async () => {
    const [resume, portfolio] = await Promise.all([
      renderResumePdf(),
      renderProjectPortfolioPdf(),
    ]);

    expect(getMediaBoxes(resume)).toEqual([a4PageBox]);
    expect(getMediaBoxes(portfolio)).toEqual(
      Array.from({ length: portfolioProjectNames.length }, () => a4PageBox)
    );
  });

  test('uses every project in the detailed portfolio and valid resume selection', () => {
    const projectNames = new Set(projects.map((project) => project.name));

    expect(resumeProjectNames).toHaveLength(11);
    expect(resumeProjectNames).toEqual([
      '바시 필라테스',
      '사내 콘솔 웹페이지',
      '사내 포털 서비스',
      'MYCMS',
      'AI 기반 HWP 문서 자동 작성 서비스 — 또박또박',
      '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study',
      '제주국제관악제 홈페이지',
      'Moazip',
      '동아·동서 글로컬 연합대학 홈페이지',
      'sLM(small language model)을 활용한 분석 투자 솔루션',
      '블록체인 기반 데이터 저장 구조 설계',
    ]);
    expect(portfolioProjectNames).toHaveLength(projects.length);
    expect(portfolioProjectNames).toEqual(
      projects.map((project) => project.name)
    );
    expect(new Set(resumeProjectNames).size).toBe(resumeProjectNames.length);
    expect(new Set(portfolioProjectNames).size).toBe(
      portfolioProjectNames.length
    );

    for (const name of [...resumeProjectNames, ...portfolioProjectNames]) {
      expect(projectNames.has(name)).toBe(true);
    }
  });

  test('links source writing to projects with matching case-study evidence', () => {
    const projectsWithWriting = projects.filter(
      (project) => 'relatedPosts' in project && project.relatedPosts?.length
    );

    expect(projectsWithWriting.length).toBeGreaterThanOrEqual(5);
  });
});
