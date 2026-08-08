import path from 'node:path';

import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from '@react-pdf/renderer';

import { profile, timelineItems, workExperiences } from '@/data/aboutContent';
import type { ProfileTimelineItem } from '@/data/aboutContent';
import {
  domainMetadata,
  domainSlugToCategory,
  portfolioProjectNames,
  projects,
  resumeProjectNames,
} from '@/data/portfolioContent';
import type { DomainCategory, Project } from '@/data/portfolioContent';

export const pdfDocuments = 'pdf-documents';

const fontDirectory = path.join(process.cwd(), 'public', 'fonts');

Font.register({
  family: 'NotoSansKR',
  fonts: [
    {
      src: path.join(fontDirectory, 'NotoSansCJKkr-Regular.otf'),
      fontWeight: 400,
    },
    {
      src: path.join(fontDirectory, 'NotoSansCJKkr-Bold.otf'),
      fontWeight: 700,
    },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

const colors = {
  paper: '#ffffff',
  paperSoft: '#f3f5f8',
  ink: '#202124',
  inkSoft: '#4a5058',
  inkMuted: '#7a828d',
  brand: '#157347',
  brandSoft: '#eaf8ef',
  brandSoftAlt: '#effbf2',
  line: '#e9edf2',
};

const portfolioDisplayTitles: Partial<Record<Project['name'], string>> = {
  '실시간 협업형 지식 공유 플랫폼 — Weekly Threads Study':
    'Weekly Threads Study',
  '도메인 주도 프론트엔드 구조와 AI Agent 개발 효율 실험':
    'AI Agent 개발 효율 및 프론트엔드 구조 실험',
};

const styles = StyleSheet.create({
  resumePage: {
    padding: 30,
    backgroundColor: colors.paper,
    color: colors.ink,
    fontFamily: 'NotoSansKR',
    fontSize: 9,
    lineHeight: 1.42,
  },
  portfolioPage: {
    padding: 36,
    backgroundColor: colors.paper,
    color: colors.ink,
    fontFamily: 'NotoSansKR',
    fontSize: 10,
    lineHeight: 1.46,
  },
  header: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  portfolioHeaderMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  contact: {
    width: 148,
    gap: 3,
    alignItems: 'flex-end',
  },
  eyebrow: {
    color: colors.brand,
    fontSize: 9.5,
    fontWeight: 700,
    marginBottom: 5,
  },
  title: {
    fontFamily: 'NotoSansKR',
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: -1,
  },
  projectTitle: {
    fontSize: 19,
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: -0.8,
  },
  portfolioPageMark: {
    color: colors.inkMuted,
    fontSize: 9,
    fontWeight: 700,
    lineHeight: 1.3,
    textAlign: 'right',
  },
  summary: {
    marginTop: 6,
    color: colors.inkSoft,
    fontSize: 9.2,
    lineHeight: 1.42,
  },
  contactText: {
    color: colors.inkMuted,
    fontSize: 8.4,
    lineHeight: 1.35,
    textAlign: 'right',
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    color: colors.ink,
    fontSize: 12.2,
    fontWeight: 700,
    marginBottom: 5,
  },
  grid: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  column: {
    flex: 1,
    gap: 7,
  },
  card: {
    padding: 11,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 12,
  },
  softCard: {
    padding: 11,
    borderRadius: 12,
    backgroundColor: colors.paperSoft,
  },
  cardTitle: {
    fontSize: 11.5,
    fontWeight: 700,
    lineHeight: 1.35,
  },
  meta: {
    marginTop: 3,
    color: colors.brand,
    fontSize: 9.4,
    fontWeight: 700,
    lineHeight: 1.35,
  },
  body: {
    marginTop: 3,
    color: colors.inkSoft,
    fontSize: 10,
    lineHeight: 1.43,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 6,
  },
  pill: {
    paddingHorizontal: 7,
    paddingVertical: 3.5,
    borderRadius: 999,
    backgroundColor: colors.brandSoft,
    color: colors.brand,
    fontSize: 8.8,
    fontWeight: 700,
    lineHeight: 1,
  },
  list: {
    gap: 2.5,
    marginTop: 4,
  },
  listItem: {
    flexDirection: 'row',
    gap: 4,
  },
  bullet: {
    width: 2.4,
    height: 2.4,
    marginTop: 4.2,
    borderRadius: 999,
    backgroundColor: colors.brand,
  },
  listText: {
    flex: 1,
    color: colors.inkSoft,
    fontSize: 7.1,
    lineHeight: 1.34,
  },
  twoColumnSection: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  resumeHeader: {
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  resumeNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 18,
  },
  resumeNameBlock: {
    flex: 1,
  },
  resumeBody: {
    flexDirection: 'row',
    gap: 14,
    marginTop: 11,
  },
  resumeMain: {
    flex: 1.76,
  },
  resumeAside: {
    flex: 0.96,
    paddingLeft: 11,
    borderLeftWidth: 1,
    borderLeftColor: colors.line,
  },
  resumeSectionTitle: {
    color: colors.brand,
    fontSize: 8.2,
    fontWeight: 700,
    marginBottom: 4.5,
    letterSpacing: -0.2,
  },
  resumeProject: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.line,
  },
  resumeProjectTitle: {
    fontSize: 7.6,
    fontWeight: 700,
    lineHeight: 1.2,
  },
  resumeProjectMeta: {
    marginTop: 1,
    color: colors.brand,
    fontSize: 6.6,
    fontWeight: 700,
    lineHeight: 1.18,
    opacity: 0.75,
  },
  resumeProjectSummary: {
    marginTop: 1.4,
    color: colors.inkSoft,
    fontSize: 6.6,
    lineHeight: 1.24,
  },
  resumeProjectStack: {
    marginTop: 1.2,
    color: colors.inkMuted,
    fontSize: 6.2,
    lineHeight: 1.18,
  },
  resumeAsideItem: {
    marginBottom: 6.5,
  },

  resumeAsideSection: {
    marginBottom: 9,
  },
  portfolioCard: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.paperSoft,
  },
  portfolioCardCenter: {
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: colors.paperSoft,
    justifyContent: 'center',
    minHeight: 96,
  },
  reportSectionFirst: {
    marginTop: 10,
  },
  reportSection: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  reportMetaSub: {
    color: colors.inkMuted,
    fontSize: 8.8,
    fontWeight: 700,
    marginBottom: 4,
  },
  reportIntro: {
    color: colors.inkSoft,
    fontSize: 9.8,
    lineHeight: 1.42,
    marginTop: 2,
  },
  reportContextRow: {
    flexDirection: 'row',
    gap: 10,
  },
  reportContextBlock: {
    flex: 1,
  },
  reportContextValue: {
    marginTop: 1,
    color: colors.ink,
    fontSize: 10.4,
    fontWeight: 700,
    lineHeight: 1.28,
  },
  reportMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  reportMetaBlock: {
    flex: 1,
  },
  reportLabel: {
    color: colors.brand,
    fontSize: 9.2,
    fontWeight: 700,
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  reportValue: {
    color: colors.ink,
    fontSize: 10.8,
    fontWeight: 700,
    lineHeight: 1.35,
  },
  reportSubValue: {
    marginTop: 6,
    color: colors.inkSoft,
    fontSize: 9.2,
    lineHeight: 1.42,
  },
  techStackText: {
    color: colors.ink,
    fontSize: 9.4,
    fontWeight: 600,
    lineHeight: 1.4,
    marginTop: 3,
  },
  reportStackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  reportStackPill: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    color: colors.inkSoft,
    fontSize: 9.4,
    fontWeight: 600,
    lineHeight: 1.3,
  },
  reportBulletList: {
    gap: 4,
    marginTop: 0,
  },
  reportBulletItem: {
    flexDirection: 'row',
    gap: 6,
  },
  reportBulletDot: {
    width: 3,
    height: 3,
    marginTop: 4.7,
    borderRadius: 999,
    backgroundColor: colors.brand,
  },
  reportBulletText: {
    flex: 1,
    color: colors.inkSoft,
    fontSize: 8.8,
    lineHeight: 1.32,
  },
  reportLinksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  reportLink: {
    color: colors.brand,
    fontSize: 9.4,
    fontWeight: 700,
    textDecoration: 'underline',
    lineHeight: 1.3,
  },
  reportLinkUrl: {
    color: colors.brand,
    fontSize: 8.2,
    textDecoration: 'underline',
  },
  reportEvidenceBlock: {
    flex: 1,
    flexDirection: 'column',
  },
  reportEvidenceTitle: {
    color: colors.inkSoft,
    fontSize: 8.8,
    lineHeight: 1.32,
  },
  reportEvidenceUrl: {
    color: colors.brand,
    fontSize: 7.8,
    lineHeight: 1.25,
    marginTop: 2,
    textDecoration: 'none',
  },
  resumeAsideTitle: {
    fontSize: 7.8,
    fontWeight: 700,
    lineHeight: 1.28,
  },
  resumeAsideMeta: {
    marginTop: 1.2,
    color: colors.inkMuted,
    fontSize: 6.9,
    lineHeight: 1.25,
  },
  resumeAsideText: {
    marginTop: 1.6,
    color: colors.inkSoft,
    fontSize: 7.1,
    lineHeight: 1.32,
  },
  resumeSkillLine: {
    marginTop: 4.5,
    color: colors.brand,
    fontSize: 7.4,
    fontWeight: 700,
    lineHeight: 1.26,
  },
  footer: {
    position: 'absolute',
    left: 36,
    right: 36,
    bottom: 18,
    color: colors.inkMuted,
    fontSize: 8.5,
    fontWeight: 700,
    textAlign: 'center',
  },

  // Category overview specific styles
  competencyBox: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.brandSoftAlt,
    borderWidth: 1,
    borderColor: colors.brandSoft,
    marginTop: 4,
  },
  competencyText: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.45,
  },
  csGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  csCategoryBlock: {
    width: '48%',
    padding: 8,
    borderRadius: 8,
    backgroundColor: colors.paperSoft,
    borderWidth: 1,
    borderColor: colors.line,
  },
  csCategoryTitle: {
    color: colors.brand,
    fontSize: 8.8,
    fontWeight: 700,
    marginBottom: 4,
  },
  csItemText: {
    flex: 1,
    color: colors.inkSoft,
    fontSize: 8,
    lineHeight: 1.3,
  },
});

function BulletList({ items, limit }: { items: string[]; limit?: number }) {
  return (
    <View style={styles.list}>
      {items.slice(0, limit ?? items.length).map((item) => (
        <View key={item} style={styles.listItem}>
          <View style={styles.bullet} />
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function ReportBulletList({
  items,
  limit,
}: {
  items: string[];
  limit?: number;
}) {
  return (
    <View style={styles.reportBulletList}>
      {items.slice(0, limit ?? items.length).map((item) => (
        <View key={item} style={styles.reportBulletItem}>
          <View style={styles.reportBulletDot} />
          <Text style={styles.reportBulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function getTimelineSortValue(date: string) {
  const matches = [...date.matchAll(/(\d{4})(?:\.(\d{2}))?/g)];
  const latest = matches.at(-1);

  if (!latest) return 0;

  const year = Number(latest[1]);
  const month = latest[2] ? Number(latest[2]) : 12;

  return year * 100 + month;
}

function sortTimelineByLatestDate(
  items: ProfileTimelineItem[]
): ProfileTimelineItem[] {
  return [...items].sort(
    (a, b) => getTimelineSortValue(b.date) - getTimelineSortValue(a.date)
  );
}

function ResumeDocument() {
  const education = sortTimelineByLatestDate(
    timelineItems.filter((item) => item.category === 'Education')
  );
  const recognitions = sortTimelineByLatestDate(
    timelineItems.filter((item) =>
      ['Award', 'Certificate'].includes(item.category)
    )
  );
  const activities = sortTimelineByLatestDate(
    timelineItems.filter((item) => item.category === 'Activity')
  );
  const website = profile.website ?? 'https://www.poly-journal.xyz';
  const resumeProjects = getProjectsInOrder(resumeProjectNames);

  return (
    <Document title={`${profile.name} Resume`} author="Poly Journal">
      <Page size="A4" style={styles.resumePage}>
        <View style={styles.resumeHeader}>
          <Text style={styles.eyebrow}>Resume</Text>
          <View style={styles.resumeNameRow}>
            <View style={styles.resumeNameBlock}>
              <Text style={styles.title}>{profile.name}</Text>
              <Text style={styles.summary}>{profile.summary}</Text>
              <Text style={styles.resumeSkillLine}>
                {profile.skills.join(' · ')}
              </Text>
            </View>
            <View style={styles.contact}>
              <Link src={`mailto:${profile.email}`} style={styles.contactText}>
                {profile.email}
              </Link>
              <Link src={website} style={styles.contactText}>
                {website.replace('https://', '')}
              </Link>
              <Link src={profile.github} style={styles.contactText}>
                {profile.github.replace('https://', '')}
              </Link>
            </View>
          </View>
        </View>

        <View style={styles.resumeBody}>
          <View style={styles.resumeMain}>
            <Text style={styles.resumeSectionTitle}>PROJECT EXPERIENCE</Text>
            {resumeProjects.map((project) => (
              <View key={project.name} style={styles.resumeProject}>
                <Text style={styles.resumeProjectTitle}>{project.name}</Text>
                <Text style={styles.resumeProjectMeta}>
                  {project.organization} · {project.role} · {project.period}
                </Text>
                <Text style={styles.resumeProjectSummary}>
                  {project.summary}
                </Text>
                <Text style={styles.resumeProjectStack}>
                  {project.techStack.slice(0, 5).join(' · ')}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.resumeAside}>
            <View style={styles.resumeAsideSection}>
              <Text style={styles.resumeSectionTitle}>WORK EXPERIENCE</Text>
              {workExperiences.map((experience) => (
                <View
                  key={`${experience.period}-${experience.organization}`}
                  style={styles.resumeAsideItem}
                >
                  <Text style={styles.resumeAsideTitle}>
                    {experience.organization}
                  </Text>
                  <Text style={styles.resumeAsideMeta}>
                    {experience.period} · {experience.role}
                  </Text>
                  <BulletList items={experience.items} />
                </View>
              ))}
            </View>

            <View style={styles.resumeAsideSection}>
              <Text style={styles.resumeSectionTitle}>EDUCATION</Text>
              {education.map((item) => (
                <View
                  key={`${item.date}-${item.title}`}
                  style={styles.resumeAsideItem}
                >
                  <Text style={styles.resumeAsideTitle}>{item.title}</Text>
                  <Text style={styles.resumeAsideMeta}>
                    {item.date}
                    {item.meta ? ` · ${item.meta}` : ''}
                  </Text>
                  <Text style={styles.resumeAsideText}>{item.items[0]}</Text>
                </View>
              ))}
            </View>

            <View style={styles.resumeAsideSection}>
              <Text style={styles.resumeSectionTitle}>
                AWARDS / CERTIFICATE
              </Text>
              {recognitions.map((item) => (
                <View
                  key={`${item.date}-${item.title}`}
                  style={styles.resumeAsideItem}
                >
                  <Text style={styles.resumeAsideTitle}>{item.title}</Text>
                  <Text style={styles.resumeAsideMeta}>
                    {item.date}
                    {item.meta ? ` · ${item.meta}` : ''}
                  </Text>
                  <Text style={styles.resumeAsideText}>{item.items[0]}</Text>
                </View>
              ))}
            </View>

            <View style={styles.resumeAsideSection}>
              <Text style={styles.resumeSectionTitle}>ACTIVITY</Text>
              {activities.map((item) => (
                <View
                  key={`${item.date}-${item.title}`}
                  style={styles.resumeAsideItem}
                >
                  <Text style={styles.resumeAsideTitle}>{item.title}</Text>
                  <Text style={styles.resumeAsideMeta}>{item.date}</Text>
                  <BulletList items={item.items} limit={1} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function CategoryPortfolioDocument({
  category,
}: {
  category: Exclude<DomainCategory, '전체'>;
}) {
  const meta = domainMetadata[category];
  const targetProjects = getProjectsInOrder(meta.representativeProjects);
  const website = profile.website ?? 'https://www.poly-journal.xyz';

  return (
    <Document title={`Poly ${meta.name} Portfolio`} author="Poly Journal">
      {targetProjects.map((project, index) => (
        <Page key={project.name} size="A4" style={styles.portfolioPage}>
          <View style={styles.header}>
            <Text style={styles.eyebrow}>
              {meta.name} Project {String(index + 1).padStart(2, '0')}
            </Text>
            <Text style={styles.projectTitle}>
              {portfolioDisplayTitles[project.name] ?? project.name}
            </Text>
          </View>

          <View style={styles.reportSectionFirst}>
            <Text style={styles.reportLabel}>PROJECT OVERVIEW</Text>
            <Text style={styles.reportMetaSub}>
              {project.organization} ({project.period})
            </Text>
            <Text style={styles.reportIntro}>{project.summary}</Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>ROLE / CONTRIBUTION</Text>
            <Text style={styles.reportValue}>{project.role}</Text>
            <Text style={styles.reportSubValue}>{project.contribution}</Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>TECH STACK</Text>
            <Text style={styles.techStackText}>
              {project.techStack.join('  ·  ')}
            </Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>CORE IMPLEMENTATION</Text>
            <ReportBulletList items={project.highlights} />
          </View>

          {('relatedPosts' in project && project.relatedPosts?.length) ||
          project.links?.length ? (
            <View style={styles.reportSection}>
              <Text style={styles.reportLabel}>EVIDENCE / RELATED WRITING</Text>
              <View style={styles.reportBulletList}>
                {'relatedPosts' in project
                  ? project.relatedPosts?.map((post) => {
                      const postUrl = `${website}/blog/${post.slug}`;
                      return (
                        <View key={post.slug} style={styles.reportBulletItem}>
                          <View style={styles.reportBulletDot} />
                          <View style={styles.reportEvidenceBlock}>
                            <Text style={styles.reportEvidenceTitle}>
                              {post.label}
                            </Text>
                            <Link
                              src={postUrl}
                              style={styles.reportEvidenceUrl}
                            >
                              {postUrl}
                            </Link>
                          </View>
                        </View>
                      );
                    })
                  : null}
                {project.links?.map((link) => (
                  <View key={link.url} style={styles.reportBulletItem}>
                    <View style={styles.reportBulletDot} />
                    <View style={styles.reportEvidenceBlock}>
                      <Text style={styles.reportEvidenceTitle}>
                        {link.label}
                      </Text>
                      <Link src={link.url} style={styles.reportEvidenceUrl}>
                        {link.url}
                      </Link>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          <Text style={styles.footer}>
            PAGE {String(index + 1).padStart(2, '0')}
          </Text>
        </Page>
      ))}
    </Document>
  );
}

function ProjectPortfolioDocument() {
  const portfolioProjects = getProjectsInOrder(portfolioProjectNames);
  const website = profile.website ?? 'https://www.poly-journal.xyz';

  return (
    <Document title="Poly Project Portfolio" author="Poly Journal">
      {portfolioProjects.map((project, index) => (
        <Page key={project.name} size="A4" style={styles.portfolioPage}>
          <View style={styles.header}>
            <Text style={styles.eyebrow}>
              Project Portfolio {String(index + 1).padStart(2, '0')}
            </Text>
            <Text style={styles.projectTitle}>
              {portfolioDisplayTitles[project.name] ?? project.name}
            </Text>
          </View>

          <View style={styles.reportSectionFirst}>
            <Text style={styles.reportLabel}>PROJECT OVERVIEW</Text>
            <Text style={styles.reportMetaSub}>
              {project.organization} ({project.period})
            </Text>
            <Text style={styles.reportIntro}>{project.summary}</Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>ROLE / CONTRIBUTION</Text>
            <Text style={styles.reportValue}>{project.role}</Text>
            <Text style={styles.reportSubValue}>{project.contribution}</Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>TECH STACK</Text>
            <Text style={styles.techStackText}>
              {project.techStack.join('  ·  ')}
            </Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>CORE IMPLEMENTATION</Text>
            <ReportBulletList items={project.highlights} />
          </View>

          {('relatedPosts' in project && project.relatedPosts?.length) ||
          project.links?.length ? (
            <View style={styles.reportSection}>
              <Text style={styles.reportLabel}>EVIDENCE / RELATED WRITING</Text>
              <View style={styles.reportBulletList}>
                {'relatedPosts' in project
                  ? project.relatedPosts?.map((post) => {
                      const postUrl = `${website}/blog/${post.slug}`;
                      return (
                        <View key={post.slug} style={styles.reportBulletItem}>
                          <View style={styles.reportBulletDot} />
                          <View style={styles.reportEvidenceBlock}>
                            <Text style={styles.reportEvidenceTitle}>
                              {post.label}
                            </Text>
                            <Link
                              src={postUrl}
                              style={styles.reportEvidenceUrl}
                            >
                              {postUrl}
                            </Link>
                          </View>
                        </View>
                      );
                    })
                  : null}
                {project.links?.map((link) => (
                  <View key={link.url} style={styles.reportBulletItem}>
                    <View style={styles.reportBulletDot} />
                    <View style={styles.reportEvidenceBlock}>
                      <Text style={styles.reportEvidenceTitle}>
                        {link.label}
                      </Text>
                      <Link src={link.url} style={styles.reportEvidenceUrl}>
                        {link.url}
                      </Link>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ) : null}

          <Text style={styles.footer}>
            PAGE {String(index + 1).padStart(2, '0')}
          </Text>
        </Page>
      ))}
    </Document>
  );
}

function getProjectsInOrder(names: readonly string[]) {
  const projectsByName = new Map(
    projects.map((project) => [project.name, project])
  );

  return names.flatMap((name) => {
    const project = projectsByName.get(name);
    return project ? [project] : [];
  });
}

async function renderPdfBuffer(
  document: Parameters<typeof pdf>[0]
): Promise<Buffer> {
  const stream = await pdf(document).toBuffer();
  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

export function renderResumePdf(): Promise<Buffer> {
  return renderPdfBuffer(<ResumeDocument />);
}

export function renderCategoryPortfolioPdf(
  category: Exclude<DomainCategory, '전체'>
): Promise<Buffer> {
  return renderPdfBuffer(<CategoryPortfolioDocument category={category} />);
}

export function renderProjectPortfolioPdf(
  categorySlug?: string
): Promise<Buffer> {
  if (categorySlug) {
    const matchedCategory = domainSlugToCategory[categorySlug.toLowerCase()];
    if (matchedCategory && matchedCategory !== '전체') {
      return renderCategoryPortfolioPdf(matchedCategory);
    }
  }

  return renderPdfBuffer(<ProjectPortfolioDocument />);
}

export function getPdfDownloadHeaders(filename: string): HeadersInit {
  const encodedFilename = encodeURIComponent(filename);

  return {
    'Content-Type': 'application/pdf',
    'Content-Disposition': `attachment; filename="${filename}"; filename*=UTF-8''${encodedFilename}`,
    'Cache-Control': 'public, max-age=0, must-revalidate',
  };
}
