'use client'

const TOOLS = [
  { label: 'Reader',      href: 'https://reader.hive.baby' },
  { label: 'Converter',   href: 'https://converter.hive.baby' },
  { label: 'Creator',     href: 'https://creator.hive.baby' },
  { label: 'Validator',   href: 'https://validator.hive.baby' },
  { label: 'Utilities',   href: 'https://utilities.hive.baby' },
  { label: 'White Paper', href: 'https://universaldocument.hive.baby' },
]

export default function UDNav() {
  return (
    <header style={{
      height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px',
      background: '#1e2d3d',
      position: 'sticky', top: 0, zIndex: 50,
      boxShadow: '0 1px 0 rgba(0,0,0,0.25)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="https://hive.baby" style={{ textDecoration: 'none', fontSize: 18, lineHeight: '1' }}>🌍</a>
        <a href="https://universaldocument.hive.baby" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
          <img src="/icons/ud-mark-uds.png" width={32} height={32} alt="Universal Document" style={{ borderRadius: 5, flexShrink: 0 }} />
          <span style={{
            fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, fontSize: 17,
            color: '#ffffff', letterSpacing: '-0.01em',
          }}>Universal Document™</span>
        </a>
      </div>
      <nav style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
        {TOOLS.map(t => (
          <a key={t.href} href={t.href} style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 12,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >{t.label}</a>
        ))}
      </nav>
    </header>
  )
}
