/*
 * Generic Image React Component
 */
export default function Image({
    src,                // (string) The URL of the image to display. Required.
    alt = '',           // (string) Alternative text for accessibility and SEO.
    width,              // (string | number) CSS width (e.g. '100px', '50%', or 100 → '100px').
    height,             // (string | number) CSS height (e.g. '100px', '50%', or 100 → '100px').
    className = '',     // (string) One or more CSS class names to apply.
    style = {},         // (object) Any inline‐style overrides (e.g. { objectFit: 'cover' }).
    loading = 'lazy',   // (string) 'lazy' defers offscreen loading, 'eager' loads immediately.
    srcSet,             // (string) Comma-separated list of “url widthDescriptor” entries for responsive images.
    sizes,              // (string) A media query list telling the browser which srcSet to choose.
    decoding = 'async', // (string) 'async' lets the browser decode the image without blocking rendering.
    fallbackSrc,        // (string) A backup URL if the primary `src` fails to load.
    ...props            // (any) Any other valid <img> attributes (e.g. `title`, `aria-*`, `ref`, etc.).
}) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            style={style}
            loading={loading}
            srcSet={srcSet}
            sizes={sizes}
            decoding={decoding}
            onError={e => fallbackSrc && (e.currentTarget.src = fallbackSrc)}
            {...props}
        />
    );
}