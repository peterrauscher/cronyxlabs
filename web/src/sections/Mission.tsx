import { Container } from "../components/ui/Container.tsx";
import { Eyebrow } from "../components/ui/Eyebrow.tsx";
import { ArrowLink } from "../components/ui/ArrowLink.tsx";
import { SummitScene } from "../components/art/SummitScene.tsx";

/**
 * Mission band: "Build useful things that outlast us."
 * Features a split layout between mission philosophy and the wide summit artwork card.
 */
export function Mission() {
  return (
    <section id="mission" aria-labelledby="mission-title" className="band-defer bg-cream py-16 lg:py-18">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
          {/* Left column: Philosophy & story link */}
          <div>
            <Eyebrow>OUR MISSION</Eyebrow>

            <h2 id="mission-title" className="display-3 mt-6 text-ink">
              Build useful things
              <br />
              that <span className="text-accent">outlast us.</span>
            </h2>

            <p className="body-sm mt-6 max-w-[405px] text-muted">
              Software should be built as enduring architecture, not disposable ephemera.
              We exist to design, acquire, and compound technology that solves fundamental
              problems with permanence—aligning patient capital, rigorous engineering,
              and generational stewardship.
            </p>

            <div className="mt-12 w-24 border-t border-line" />

            <ArrowLink href="#contact" className="mt-6">
              Our story
            </ArrowLink>
          </div>

          {/* Right column: Summit artwork card with overlaid motto */}
          <div>
            <div className="relative aspect-[12/5] overflow-hidden rounded-[10px]">
              <SummitScene />

              {/* Top scrim so the white motto stays legible against the bright sky */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/25 to-transparent"
                aria-hidden="true"
              />

              {/* Right-aligned mono motto */}
              <div className="absolute right-7 top-7 text-right">
                <p className="eyebrow tracking-[0.18em] text-white/90">
                  ENGINEERED TO ENDURE.
                  <br />
                  COMPOUNDED OVER TIME.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
