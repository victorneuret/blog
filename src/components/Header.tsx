import { TypographyH2 } from "@/components/typography/typography";
import siteConfig from "../site-config";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Rss } from "lucide-react";

export default function Header({ pathname }: { pathname: string }) {
  return (
    <header className="flex justify-between items-center">
      <a href="/" className="nav-link">
        <TypographyH2 className="border-none p-0">
          Complexity Downward
        </TypographyH2>
      </a>
      <div className="flex items-center gap-4">
        <nav>
          {siteConfig.headerNavLinks.map((link) => (
            <a
              href={link.href}
              key={link.text}
              className={cn("nav-link font-semibold", {
                "text-primary": pathname.includes(link.href),
              })}
            >
              {link.text}
            </a>
          ))}
        </nav>
        <Button variant="ghost" size="icon" asChild>
          <a href="/rss.xml">
            <Rss />
          </a>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
