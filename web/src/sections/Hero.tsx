import { Container } from "../components/ui/Container.tsx";
import { Button } from "../components/ui/Button.tsx";
import { HeroScene } from "../components/art/HeroScene.tsx";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-[600px] sm:min-h-[700px] overflow-hidden"
    >
      {/* Background vector scene */}
      <HeroScene className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none" />

      {/* Legibility scrims: top-to-bottom on mobile, left-to-right on desktop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 select-none bg-gradient-to-b from-cream/95 via-cream/85 to-cream/40 md:hidden"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 -z-10 hidden w-[55%] select-none bg-gradient-to-r from-cream via-cream/70 to-transparent md:block lg:w-[46%]"
        aria-hidden="true"
      />

      {/* Copy column */}
      <Container>
        <div className="animate-rise max-w-[640px] pt-[118px] pb-[132px] lg:pt-[128px]">
          <h1 id="hero-title" className="display-1 text-ink">
            We build <br className="hidden lg:block" />
            technology with <br className="hidden lg:block" />
            a long horizon.
          </h1>

          <p className="body-lg mt-7 max-w-[400px] text-muted">
            Cronyx Labs is an independent technology holding company. We architect,
            acquire, and compound category-defining software and intelligent systems
            engineered to outlast market cycles.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="#ventures">Our portfolio</Button>
            <Button href="#mission" variant="outline">
              Our philosophy
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
