export function getResumeDownloadFilename(): string {
  return 'poly-resume-ko.pdf';
}

export function getResumeDownloadHref(): string {
  return '/downloads/resume';
}

export function getPortfolioDownloadFilename(category?: string): string {
  if (category && category !== 'all' && category !== '전체') {
    const slug = category.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return `poly-portfolio-${slug}-ko.pdf`;
  }
  return 'poly-project-portfolio-ko.pdf';
}

export function getPortfolioDownloadHref(category?: string): string {
  if (category && category !== 'all' && category !== '전체') {
    return `/downloads/portfolio?category=${encodeURIComponent(category)}`;
  }
  return '/downloads/portfolio';
}
