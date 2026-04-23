
function IconDocument() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="7" y="4" width="24" height="32" rx="3" stroke="#1e2d3d" strokeWidth="1.6" fill="rgba(30,45,61,0.06)" />
      <path d="M25 4 L31 10 L25 10 Z" fill="rgba(30,45,61,0.18)" />
      <line x1="12" y1="18" x2="26" y2="18" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="12" y1="23" x2="26" y2="23" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="12" y1="28" x2="20" y2="28" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M22 38 L36 38 M29 32 L29 38 M29 32 L25 36 M29 32 L33 36" stroke="#c8960a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChip() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="13" y="13" width="18" height="18" rx="3" stroke="#1e2d3d" strokeWidth="1.6" fill="rgba(30,45,61,0.06)" />
      <line x1="18" y1="13" x2="18" y2="7" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="13" x2="22" y2="7" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="13" x2="26" y2="7" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="18" y1="31" x2="18" y2="37" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="22" y1="31" x2="22" y2="37" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="26" y1="31" x2="26" y2="37" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="13" y1="18" x2="7" y2="18" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="13" y1="22" x2="7" y2="22" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="13" y1="26" x2="7" y2="26" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="31" y1="18" x2="37" y2="18" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="31" y1="22" x2="37" y2="22" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="31" y1="26" x2="37" y2="26" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function IconStack() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect x="12" y="20" width="22" height="18" rx="2.5" stroke="#1e2d3d" strokeWidth="1.4" fill="rgba(30,45,61,0.04)" />
      <rect x="9" y="14" width="22" height="18" rx="2.5" stroke="#1e2d3d" strokeWidth="1.4" fill="rgba(30,45,61,0.05)" />
      <rect x="6" y="8" width="22" height="18" rx="2.5" stroke="#1e2d3d" strokeWidth="1.6" fill="#fafaf8" />
      <line x1="11" y1="15" x2="23" y2="15" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11" y1="20" x2="23" y2="20" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="11" y1="25" x2="18" y2="25" stroke="#1e2d3d" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function UDLogoMark() {
  return (
    <img
      src="/icons/ud-logo.svg"
      alt="Universal Document™ logo mark"
      width={220}
      height={286}
      className="w-full h-auto max-w-[220px]"
    />
  )
}

type CardProps = {
  icon: React.ReactNode
  title: string
  body: string
  links: { label: string; href: string }[]
}

function ServiceCard({ icon, title, body, links }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy/5 p-8 flex flex-col gap-5">
      <div>{icon}</div>
      <h3 className="font-playfair font-semibold text-navy text-xl leading-snug">{title}</h3>
      <p className="font-sans font-light text-navy/65 text-sm leading-relaxed flex-1">{body}</p>
      <div className="flex flex-col gap-2.5 pt-3 border-t border-navy/8">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-gold font-sans font-medium text-sm hover:underline underline-offset-2"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-screen bg-navy flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="font-playfair font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-tight mb-7">
          Universal Document™ Incorporated
        </h1>
        <p className="font-sans font-light text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          The Open Standard Transforming Global Document Workflows
        </p>
        <a
          href="https://ud.hive.baby"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-white font-sans font-medium text-base px-9 py-4 rounded hover:bg-[#b07a08] transition-colors"
        >
          Explore the Standard →
        </a>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-cream border border-navy/10 rounded-2xl aspect-square flex items-center justify-center p-16 order-1 md:order-none">
            <UDLogoMark />
          </div>
          <div>
            <h2 className="font-playfair font-semibold text-navy text-3xl md:text-4xl mb-8 leading-tight">
              What We Do
            </h2>
            <div className="font-sans font-light text-navy/70 text-base leading-relaxed space-y-5">
              <p>
                Universal Document™ Incorporated is the standards body behind Universal
                Document™ — an open, free, and AI-native document format designed as the
                modern successor to PDF, DOCX, and the image formats pressed into service
                as document delivery mechanisms.
              </p>
              <p>
                Our mission is public-good infrastructure: a document format free to use,
                free to implement, and built to serve governments, healthcare systems,
                enterprises, courts, and organizations worldwide. The specification is
                open. The tools are free. The iSDK carries no licensing cost, no royalty,
                and no attribution requirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solutions ────────────────────────────────────────── */}
      <section id="products" className="py-24 px-6 bg-smoke">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair font-semibold text-navy text-3xl md:text-4xl mb-16 text-center">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<IconDocument />}
              title="Universal Document™ Reader & Converter"
              body="Free, open-source tools for reading and converting Universal Document™ files. The UD Reader opens any .uds or .udr file. The UD Converter transforms PDF, DOCX, and other formats into Universal Document™ format."
              links={[
                { label: 'Open the Reader →', href: 'https://universaldocument.vercel.app' },
                { label: 'Convert a file →', href: 'https://converter.hive.baby' },
              ]}
            />
            <ServiceCard
              icon={<IconChip />}
              title="Infrastructure SDK"
              body="A free SDK for device manufacturers to integrate Universal Document™ support natively into any device, operating system, or browser. Under 400KB. No licensing cost. No royalty. No attribution requirement."
              links={[
                { label: 'iSDK enquiries →', href: 'mailto:press@universaldocument.solutions' },
              ]}
            />
            <ServiceCard
              icon={<IconStack />}
              title="White Papers & Resources"
              body="Authoritative guidance for governments, healthcare systems, enterprises, and courts. Implementation strategies, compliance frameworks, and sectoral adoption guidance for the Universal Document™ standard."
              links={[
                { label: 'Read the white paper →', href: 'https://ud.hive.baby/whitepaper' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair font-semibold text-navy text-3xl md:text-4xl mb-10">
            Contact
          </h2>
          <div className="font-sans font-light text-navy space-y-3 text-base">
            <p>
              For all enquiries:{' '}
              <a
                href="mailto:press@universaldocument.solutions"
                className="text-gold hover:underline underline-offset-2 font-normal"
              >
                press@universaldocument.solutions
              </a>
            </p>
            <p>
              <a href="tel:+18449091182" className="hover:text-gold transition-colors">
                +1 844-909-1182
              </a>
            </p>
            <p className="text-navy/50 text-sm pt-1">Enquiries responded to within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="bg-navy py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Identity block */}
          <div className="font-sans text-white/65 text-sm leading-loose space-y-0.5 mb-10">
            <p className="text-white font-normal text-base">Universal Document™ Incorporated</p>
            <p>
              <a href="mailto:press@universaldocument.solutions" className="hover:text-white/90 transition-colors">
                press@universaldocument.solutions
              </a>
            </p>
            <p>
              <a href="tel:+18449091182" className="hover:text-white/90 transition-colors">
                +1 844-909-1182
              </a>
            </p>
            <p>universaldocument.solutions</p>
          </div>

          {/* Gold divider */}
          <div className="border-t border-gold/60 pt-8">
            <div className="font-sans text-white/45 text-xs leading-relaxed space-y-2 mb-8 max-w-2xl">
              <p>
                Universal Document™ is a pending trademark (USPTO Serial No. 99774346).
                Specification released under CC BY 4.0. Use of the name &lsquo;Universal
                Document&rsquo; requires permission. Permission is free for compliant
                implementations.{' '}
                <a
                  href="https://ud.hive.baby/certified"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-white/80 transition-colors underline underline-offset-2"
                >
                  ud.hive.baby/certified
                </a>
              </p>
              <p>© 2026 Universal Document™ Incorporated</p>
            </div>

            {/* Planet link */}
            <a
              href="https://hive.baby"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/35 hover:text-white/65 transition-colors text-xs font-mono tracking-wide"
              title="Part of Hive"
            >
              <span aria-hidden="true">⬡</span>
              <span>hive.baby</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
