import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto max-w-3xl">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={20}
          priority
        />
        <p className="mb-4 text-sm uppercase tracking-widest text-slate-500">
          <br/>
          Hi, I'm Cheryl!
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          UX/UI Designer building thoughtful digital experiences.
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          I design accessible, scalable interfaces across product, design systems,
          and customer experience.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/work" className="rounded-full bg-slate-900 px-5 py-3 text-white">
            View work
          </a>
          <a href="/about" className="rounded-full border px-5 py-3">
            About me
          </a>
        </div>
      </section>
    </main>
  );
}