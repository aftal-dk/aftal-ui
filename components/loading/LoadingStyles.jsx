import React from 'react';

// The one place the loading primitives keep their CSS. Rendered by every
// loading component; React 19 hoists a <style href precedence> into <head>
// once and dedupes it, so consumers need no global stylesheet for these to
// work (the intranet does not import @aftal/ui/styles.css yet).
//
// Rules encoded here (DESIGN.md "Loading"):
//  - everything waits --aftal-loading-delay (200ms) before it appears, so a
//    fast response never flickers
//  - the spinner is the only rotating element in the system
//  - under prefers-reduced-motion the spinner is a static arc and the bar
//    stops pulsing; the delay still applies
const CSS = `
@keyframes aftal-appear{from{opacity:0}to{opacity:1}}
@keyframes aftal-spin{to{transform:rotate(360deg)}}
@keyframes aftal-bar{0%,100%{opacity:.35}50%{opacity:1}}
.aftal-loading{animation:aftal-appear 1ms linear var(--aftal-loading-delay,200ms) both}
.aftal-spinner__ring{animation:aftal-spin .8s linear infinite;transform-origin:center}
.aftal-skeleton{background:rgba(127,127,127,.16);background:color-mix(in srgb,currentColor 9%,transparent)}
.aftal-loading-bar{animation:aftal-appear 1ms linear var(--aftal-loading-delay,200ms) both,aftal-bar 1.2s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){
  .aftal-spinner__ring{animation:none}
  .aftal-loading-bar{animation:aftal-appear 1ms linear var(--aftal-loading-delay,200ms) both}
}
`;

export function LoadingStyles() {
  return <style href="aftal-ui-loading" precedence="aftal-ui">{CSS}</style>;
}

/** Visually hidden but read by screen readers. */
export const SR_ONLY = {
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
  overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
};
