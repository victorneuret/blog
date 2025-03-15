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
        "mt-12 font-sans scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
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
        "mt-10 font-sans scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
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
        "mt-8 font-sans scroll-m-20 text-2xl font-semibold tracking-tight",
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
        "mt-6 font-sans scroll-m-20 text-xl font-semibold tracking-tight",
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
  return <p className={cn("font-sans leading-7", className)}>{children}</p>;
}

export function TypographyLead({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <p className={cn("font-sans text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographyLarge({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <div className={cn("font-sans text-lg font-semibold", className)}>
      {children}
    </div>
  );
}

export function TypographySmall({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <small
      className={cn("font-sans text-sm font-medium leading-none", className)}
    >
      {children}
    </small>
  );
}

export function TypographyMuted({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <p className={cn("font-sans text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function TypographyA({
  className,
  children,
  ...props
}: React.ComponentProps<"a"> &
  PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <a
      {...props}
      className={cn(
        "font-medium text-primary underline underline-offset-4",
        className
      )}
    >
      {children}
    </a>
  );
}

export function TypographyList({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyBlockquote({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyCode({
  className,
  children,
}: PropsWithChildren<{ className?: ClassValue }>): JSX.Element {
  return <code className={cn("mt-2", className)}>{children}</code>;
}
