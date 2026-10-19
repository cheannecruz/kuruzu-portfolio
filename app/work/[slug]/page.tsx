import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects from '../../content/projects.json';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: project ? `${project.name} — ${project.title}` : 'Project not found', description: project?.summary };
}
function Figure({ file, alt, caption, cover = false }: { file: string; alt: string; caption: string; cover?: boolean }) {
  return <figure style={{ margin: '0 0 36px' }}><a href={`/work/${file}`} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${alt}`}><img src={`/work/${file}`} alt={alt} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', maxHeight: cover ? 560 : undefined, objectFit: 'contain' }} /></a><figcaption className="muted" style={{ paddingTop: 12 }}>{caption}</figcaption></figure>;
}
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main id="main"><section className="page-heading"><Link className="text-link" href="/work">← All work</Link><p className="eyebrow case-label">{project.name.toUpperCase()} / {project.kind}</p><h1>{project.title}</h1><p className="intro">{project.summary}</p></section><section className="section case-study"><div className="case-meta"><div><span>MY ROLE</span><p>{project.role}</p></div><div><span>SCOPE</span><p>{project.scope}</p></div><div><span>TOOLS & METHODS</span><p>{project.tools}</p></div></div><div style={{marginTop:36}}><Figure {...project.cover} cover /></div>{project.sections.map((section, index) => <section key={section.title} aria-labelledby={`section-${index}`}><div className="story"><h2 id={`section-${index}`}>{section.title}</h2><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>{section.images.map(figure => <Figure key={figure.file} {...figure} />)}</section>)}</section><section className="contact-banner"><p className="eyebrow">EXPLORE ANOTHER PROJECT</p><h2>{next.name}<span className="pink">.</span></h2><Link className="button" href={`/work/${next.slug}`}>Read the case study ↗</Link></section></main>;
}
