import type {Metadata} from 'next';
import Project from '../components/project';
export const metadata:Metadata={title:'Work'};
export default function Work(){return <main id="main"><section className="page-heading"><p className="eyebrow">DESIGN MEETS DEVELOPMENT</p><h1>A little of<br/><span className="gradient">what I make.</span></h1><p className="intro">A growing collection of interfaces, ideas, and thoughtful details.</p></section><section className="section work-section"><Project/><div className="coming"><span className="spark">✳</span><h2>More stories to come.</h2><p>This portfolio is growing. For now, explore the thinking behind Kuruzu.</p></div></section></main>}
