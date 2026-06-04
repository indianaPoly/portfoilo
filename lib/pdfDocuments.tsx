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
import { projects } from '@/data/portfolioContent';

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

const resumeHiddenProjectNames = new Set([
  '숭실대학교 인공지능 프로젝트 — TSP 최적화',
  '숭실대학교 운영체제 과제 — xv6 커널 수정',
]);

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
  },
  headerMain: {
    flexGrow: 1,
    flexBasis: 390,
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
    fontSize: 21,
    fontWeight: 700,
    lineHeight: 1.18,
    letterSpacing: -1.1,
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
    gap: 4,
    marginTop: 4,
  },
  pill: {
    paddingHorizontal: 6,
    paddingVertical: 3,
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
    paddingTop: 5.5,
    paddingBottom: 5.5,
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.line,
  },
  resumeProjectTitle: {
    fontSize: 8.1,
    fontWeight: 700,
    lineHeight: 1.24,
  },
  resumeProjectMeta: {
    marginTop: 1.3,
    color: colors.brand,
    fontSize: 7.1,
    fontWeight: 700,
    lineHeight: 1.22,
    opacity: 0.75,
  },
  resumeProjectSummary: {
    marginTop: 2,
    color: colors.inkSoft,
    fontSize: 7.1,
    lineHeight: 1.3,
  },
  resumeProjectStack: {
    marginTop: 1.7,
    color: colors.inkMuted,
    fontSize: 6.8,
    lineHeight: 1.24,
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
  reportSection: {
    marginTop: 16,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  reportIntro: {
    color: colors.inkSoft,
    fontSize: 10.4,
    lineHeight: 1.5,
    marginTop: 3,
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
    fontSize: 11.3,
    fontWeight: 700,
    lineHeight: 1.3,
  },
  reportSubValue: {
    marginTop: 2,
    color: colors.inkSoft,
    fontSize: 9.2,
    lineHeight: 1.32,
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
    gap: 6,
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
    fontSize: 9.3,
    lineHeight: 1.38,
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
    left: 30,
    right: 30,
    bottom: 18,
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: colors.line,
    color: colors.inkMuted,
    fontSize: 7.2,
  },
  footerPageNumber: {
    position: 'absolute',
    right: 28,
    bottom: 18,
    paddingTop: 5,
    color: colors.inkMuted,
    fontSize: 7,
    textAlign: 'right',
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

function ResumeDocument() {
  const education = timelineItems.filter(
    (item) => item.category === 'Education'
  );
  const recognitions = timelineItems.filter((item) =>
    ['Award', 'Certificate'].includes(item.category)
  );
  const activities = timelineItems.filter(
    (item) => item.category === 'Activity'
  );
  const website = profile.website ?? 'https://www.poly-journal.xyz';
  const resumeProjects = projects.filter(
    (project) => !resumeHiddenProjectNames.has(project.name)
  );

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

function ProjectPortfolioDocument() {
  return (
    <Document title="Poly Project Portfolio" author="Poly Journal">
      {projects.map((project, index) => (
        <Page key={project.name} size="A4" style={styles.portfolioPage}>
          <View style={styles.header}>
            <View style={styles.headerMain}>
              <Text style={styles.eyebrow}>
                Project Portfolio {String(index + 1).padStart(2, '0')} · Poly
              </Text>
              <Text style={styles.projectTitle}>{project.name}</Text>
            </View>
            <Text style={styles.portfolioPageMark}>
              PAGE {String(index + 1).padStart(2, '0')}
            </Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>PROJECT DESCRIPTION</Text>
            <Text style={styles.reportIntro}>{project.summary}</Text>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>PROJECT CONTEXT</Text>
            <View style={styles.reportContextRow}>
              <View style={styles.reportContextBlock}>
                <Text style={styles.reportLabel}>TYPE</Text>
                <Text style={styles.reportContextValue}>
                  {project.category}
                </Text>
              </View>
              <View style={styles.reportContextBlock}>
                <Text style={styles.reportLabel}>PERIOD</Text>
                <Text style={styles.reportContextValue}>{project.period}</Text>
              </View>
              <View style={styles.reportContextBlock}>
                <Text style={styles.reportLabel}>ORGANIZATION</Text>
                <Text style={styles.reportContextValue}>
                  {project.organization}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.reportSection}>
            <View style={styles.reportMetaRow}>
              <View style={styles.reportMetaBlock}>
                <Text style={styles.reportLabel}>ROLE</Text>
                <Text style={styles.reportValue}>{project.role}</Text>
                <Text style={styles.reportSubValue}>
                  {project.organization}에서 담당한 역할과 범위를 간결하게
                  정리했습니다.
                </Text>
              </View>

              <View style={styles.reportMetaBlock}>
                <Text style={styles.reportLabel}>TECH STACK</Text>
                <View style={styles.reportStackRow}>
                  {project.techStack.map((stack) => (
                    <Text key={stack} style={styles.reportStackPill}>
                      {stack}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.reportSection}>
            <Text style={styles.reportLabel}>HIGHLIGHTS</Text>
            <ReportBulletList items={project.highlights} />
          </View>

          {project.links?.length ? (
            <View style={styles.reportSection}>
              <Text style={styles.reportLabel}>LINKS</Text>
              <View style={styles.reportLinksRow}>
                {project.links.map((link) => (
                  <Link key={link.url} src={link.url} style={styles.reportLink}>
                    {link.label}
                  </Link>
                ))}
              </View>
            </View>
          ) : null}

          <Text style={styles.footer}>
            Poly Journal의 공통 프로젝트 포트폴리오 템플릿으로 생성된 1-page
            문서입니다.
          </Text>
          <Text
            style={styles.footerPageNumber}
            render={({ pageNumber, totalPages }) =>
              `Page ${String(pageNumber).padStart(2, '0')} / ${String(
                totalPages
              ).padStart(2, '0')}`
            }
          />
        </Page>
      ))}
    </Document>
  );
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

export function renderProjectPortfolioPdf(): Promise<Buffer> {
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
