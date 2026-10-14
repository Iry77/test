/** Tiny className joiner — avoids pulling in clsx for a one-liner. */
export const cn = (...classes: Array<string | false | null | undefined>): string => classes.filter(Boolean).join(' ');
