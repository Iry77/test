import { useState, type ImgHTMLAttributes, type ReactNode } from 'react';

type SmartImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'onError'> & {
  src: string | undefined;
  /** Rendered when `src` is missing or fails to load. */
  fallback: ReactNode;
};

/** `<img>` that swaps to a designed placeholder instead of showing a broken image icon. */
export function SmartImage({ src, fallback, alt = '', loading = 'lazy', decoding = 'async', ...rest }: SmartImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  if (!src || failedSrc === src) return <>{fallback}</>;
  return <img src={src} alt={alt} loading={loading} decoding={decoding} onError={() => setFailedSrc(src)} {...rest} />;
}
