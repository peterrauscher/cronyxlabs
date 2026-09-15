import { Container } from "../components/ui/Container.tsx";
import { Eyebrow } from "../components/ui/Eyebrow.tsx";
import { ArrowLink } from "../components/ui/ArrowLink.tsx";
import { VentureArt } from "../components/art/VentureArt.tsx";
import { VENTURES } from "../data/ventures.ts";

export function Ventures() {
  return (
    <section id="ventures" aria-labelledby="ventures-title" className="band-defer bg-cream py-12 lg:py-14">
      <Container>
        <div className="flex items-baseline justify-between">
          <div>
            <Eyebrow>OUR VENTURES</Eyebrow>
            <h2 id="ventures-title" className="sr-only">
              Our ventures
            </h2>
          </div>
          <ArrowLink href="#ventures" className="hidden sm:inline-flex">
            Explore all ventures
          </ArrowLink>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VENTURES.map((v) => (
            <article
              key={v.key}
              className="group flex flex-col overflow-hidden rounded-[10px] border border-line bg-card transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(6,11,18,0.35)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#05070c]">
                <VentureArt variant={v.key} />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.25rem] font-medium text-ink">{v.name}</h3>
                <p className="eyebrow mt-2">{v.label}</p>
                <p className="body-sm mt-3.5 text-muted">{v.blurb}</p>

                <div className="mt-auto pt-5">
                  <ArrowLink href={v.href}>Learn more</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
