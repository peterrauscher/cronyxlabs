import { Container } from "../components/ui/Container.tsx";
import { Eyebrow } from "../components/ui/Eyebrow.tsx";
import { Button } from "../components/ui/Button.tsx";
import { ArrowIcon } from "../components/ui/ArrowIcon.tsx";
import { OrbitScene } from "../components/art/OrbitScene.tsx";
import { cn } from "../lib/cn.ts";

type ContactRailItem = {
  readonly index: string;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
};

const CONTACT_RAIL_ITEMS: readonly ContactRailItem[] = [
  {
    index: "01",
    title: "Build",
    subtitle: "Products & software",
    href: "#ventures",
  },
  {
    index: "02",
    title: "Partner",
    subtitle: "Technology & AI",
    href: "#ventures",
  },
  {
    index: "03",
    title: "Compound",
    subtitle: "Capital & growth",
    href: "#ventures",
  },
] as const;

/**
 * Contact band: the dark CTA sitting on `night-deep` at the foot of the page.
 * Displays the 3D-effect orbit scene on the left, headline + email CTA in the
 * center, and a 3-row navigation rail on the right leading into ventures.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="band-defer bg-night-deep py-12 text-night-text lg:py-14"
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[minmax(0,0.30fr)_minmax(0,0.38fr)_minmax(0,0.32fr)] lg:gap-10">
          {/* Column 1: Orbit planet illustration */}
          <div className="mx-auto aspect-square w-full max-w-[300px] pointer-events-none select-none lg:mx-0">
            <OrbitScene />
          </div>

          {/* Column 2: Headline, lead paragraph, and email button */}
          <div>
            <Eyebrow tone="light">LET’S BUILD WHAT’S NEXT</Eyebrow>
            <h2
              id="contact-title"
              className="display-4 mt-5 max-w-[370px] text-night-text"
            >
              Ideas, products, and businesses
              <span className="text-night-text/70">
                {" "}
                for a more capable future.
              </span>
            </h2>
            <p className="body-sm mt-5 max-w-[400px] text-night-muted">
              We’re always exploring new opportunities — from new products to
              strategic partnerships.
            </p>
            <Button
              href="mailto:hello@cronyxlabs.com"
              variant="light"
              className="mt-7"
            >
              Get in touch
            </Button>
          </div>

          {/* Column 3: 3-row ventures quick-rail */}
          <ul className="w-full lg:w-auto lg:pt-7">
            {CONTACT_RAIL_ITEMS.map((item, idx) => (
              <li key={item.index}>
                <a
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-7 py-3.5",
                    idx > 0 && "border-t border-night-line",
                  )}
                >
                  <span className="font-mono text-[0.875rem] text-night-faint">
                    {item.index}
                  </span>
                  <div className="flex-1">
                    <p className="text-[0.9375rem] font-medium text-night-text">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[0.8125rem] text-night-faint">
                      {item.subtitle}
                    </p>
                  </div>
                  <ArrowIcon className="text-night-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-night-text" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
