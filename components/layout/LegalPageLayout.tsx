interface LegalPageLayoutProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  children: React.ReactNode
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Header */}
      <section className="bg-red-950 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-stone-300/60 text-xs tracking-[0.3em] uppercase font-light">
            {subtitle || 'Información Legal'}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-50 mt-4 leading-tight">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-stone-400/60 text-sm mt-6 font-light">
              Última actualización: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none 
            prose-headings:text-red-900 prose-headings:font-light
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:tracking-wide
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-red-950/70 prose-p:leading-relaxed prose-p:font-light
            prose-li:text-red-950/70 prose-li:font-light prose-li:leading-relaxed
            prose-strong:text-red-900 prose-strong:font-medium
            prose-a:text-red-800 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-red-600
            prose-ul:my-6 prose-ol:my-6
          ">
            {children}
          </div>
        </div>
      </section>

      {/* Decorative Bottom Line */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-16">
        <div className="border-t border-red-900/10 pt-8">
          <p className="text-sm text-red-900/40 font-light text-center">
            Si tiene alguna pregunta sobre este documento, no dude en{' '}
            <a href="#contacto" className="text-red-800 underline underline-offset-4 hover:text-red-600 transition-colors">
              contactarnos
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}
