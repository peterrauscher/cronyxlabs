import { useEffect, useState } from "react";
import { Container } from "./ui/Container.tsx";
import { Logo } from "./Logo.tsx";
import { NAV_LINKS } from "../data/site.ts";
import { cn } from "../lib/cn.ts";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const threshold = 24;

    function onScroll() {
      const nextScrolled = window.scrollY > threshold;
      setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
    }

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header
        id="top"
        className={cn(
          "sticky top-0 z-50 h-20 w-full border-b transition-colors duration-300",
          isScrolled || isOpen
            ? "bg-cream/80 backdrop-blur-md border-line"
            : "bg-transparent border-transparent",
        )}
      >
        <Container className="flex h-full items-center justify-between">
          <Logo />

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.875rem] font-medium text-ink-soft transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors duration-200 hover:text-accent md:hidden"
          >
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </Container>
      </header>

      {/* Mobile nav panel */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-cream md:hidden"
        >
          <Container className="py-6">
            <nav aria-label="Mobile" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-line py-4 text-2xl font-medium text-ink transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </>
  );
}
