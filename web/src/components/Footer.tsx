import { Container } from "./ui/Container.tsx";
import { Logo } from "./Logo.tsx";
import { NAV_LINKS, SOCIAL_LINKS } from "../data/site.ts";

/**
 * Global footer: rests on the same `night-deep` surface as the contact section,
 * separated by a single hairline border. Includes light-tone brand mark,
 * primary section anchor links, external social profiles, and copyright notice.
 */
export function Footer() {
  return (
    <footer className="bg-night-deep">
      <Container>
        <div className="flex flex-col gap-8 border-t border-night-line py-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo tone="light" />

          <nav aria-label="Footer" className="flex flex-wrap gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.8125rem] text-night-muted transition-colors hover:text-night-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col lg:items-end">
            <div className="flex items-center gap-5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="text-night-muted transition-colors hover:text-night-text"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-2.5 text-[0.6875rem] text-night-faint">
              © 2026 Cronyx Labs. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
