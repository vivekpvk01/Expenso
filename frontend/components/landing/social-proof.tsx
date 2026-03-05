const logos = [
  "Acme Corp",
  "Globex Inc",
  "Initech",
  "Hooli",
  "Piedmont",
  "Nucleus",
  "Raviga",
  "Endframe",
]

export function SocialProof() {
  return (
    <section className="border-y border-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by thousands of professionals and teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((name) => (
            <div
              key={name}
              className="text-base font-semibold tracking-tight text-muted-foreground/40"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
