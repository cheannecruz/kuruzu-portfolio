import type {Metadata} from 'next';
import Link from 'next/link';
import Nav from './components/nav';
import './globals.css';
export const metadata:Metadata={title:{default:'Kuruzu — Cheryl Anne Cruz',template:'%s | Kuruzu'},description:'Cheryl Anne Cruz — UX/UI designer and front-end developer. Thoughtful digital experiences with a playful spirit.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><div className="site"><Nav/>{children}<footer><Link className="footer-brand" href="/">Thoughtfully made.<br/><span>With a little curiosity.</span></Link><div><a href="https://github.com/cheannecruz" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:cheannecruz@gmail.com">Email ↗</a><small>© {new Date().getFullYear()} Cheryl Anne Cruz</small></div><a className="top" href="#main" aria-label="Back to top">↑</a></footer></div></body></html>}
