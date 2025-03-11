import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";
import type { JSX, PropsWithChildren } from "react";

export function TypographyH1({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return <p className={cn("leading-7", className)}>{children}</p>;
}

export function TypographyLead({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
}

export function TypographyLarge({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
}

export function TypographySmall({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  );
}

export function TypographyMuted({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  );
}
