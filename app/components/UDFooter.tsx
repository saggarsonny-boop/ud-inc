'use client'

const NAV_LINKS = [
  { label: 'Reader',      href: 'https://reader.hive.baby' },
  { label: 'Converter',   href: 'https://converter.hive.baby' },
  { label: 'Creator',     href: 'https://creator.hive.baby' },
  { label: 'Validator',   href: 'https://validator.hive.baby' },
  { label: 'Utilities',   href: 'https://utilities.hive.baby' },
  { label: 'White Paper', href: 'https://universaldocument.hive.baby' },
  { label: 'Certified',   href: 'https://universaldocument.hive.baby/certified' },
]

export default function UDFooter() {
  return (
    <footer className="border-t border-navy/10 bg-smoke mt-auto" style={{ padding: '40px 24px 32px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          {NAV_LINKS.map(t => (
            <a key={t.href} href={t.href}
              className="font-mono text-navy/50 hover:text-navy transition-colors"
              style={{ fontSize: 13, fontWeight: 500, textDecoration: 'none' }}
            >{t.label}</a>
          ))}
        </div>
        <p className="font-mono text-navy/50" style={{ fontSize: 13, marginBottom: 10 }}>
          <a href="mailto:hive@hive.baby" className="hover:text-navy transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>hive@hive.baby</a>
          {' · '}
          <a href="https://universaldocument.hive.baby" className="hover:text-navy transition-colors" style={{ textDecoration: 'none', color: 'inherit' }}>universaldocument.hive.baby</a>
        </p>
        <p className="font-mono text-navy/30" style={{ fontSize: 13, marginBottom: 4 }}>
          Universal Document™ is a pending trademark (USPTO Serial No. 99774346)
        </p>
        <p className="font-mono text-navy/30" style={{ fontSize: 13, marginBottom: 16 }}>
          © 2026 Universal Document Incorporated
        </p>
        <a href="https://hive.baby" style={{ fontSize: 18, textDecoration: 'none', opacity: 0.4, display: 'inline-block' }}
          className="hover:opacity-100 transition-opacity" title="Back to Hive">🌍</a>
      </div>
    </footer>
  )
}
