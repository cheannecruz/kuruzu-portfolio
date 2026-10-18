'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
export default function Nav(){const path=usePathname();const[open,setOpen]=useState(false);return <header className="header"><Link className="brand" href="/" aria-label="Kuruzu home"><img src="/logo.jpg" alt="" width="44" height="44"/><span>kuruzu<span className="brand-dot">.</span></span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">☰</span></button><nav id="navigation" className={open?'navigation open':'navigation'} aria-label="Main navigation">{[['/','Home'],['/work','Work'],['/about','About'],['/contact','Let’s talk ↗']].map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></header>}
