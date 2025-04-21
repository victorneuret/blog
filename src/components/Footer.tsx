import { cn } from "@/lib/utils";
import siteConfig from "../site-config";

export default function Footer() {
  return (
    <footer>
      <div className="my-10 border-t border-border w-full" />
      <div className="flex justify-start items-center gap-4">
        {siteConfig.footerNavLinks.map((link) => (
          <a
            href={link.href}
            key={link.text}
            className={cn("nav-link text-primary")}
          >
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  );
}
