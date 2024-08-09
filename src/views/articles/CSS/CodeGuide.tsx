import React, { useEffect } from "react";
import cover from "../../../img/cover/cover-css.webp";
// @ts-ignore
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

const CodeGuide = () => {
  useEffect(() => Prism.highlightAll(), []);

  return (
    <>
      <div className="cover-wrapper">
        <img src={cover} alt="css cover" className="cover" />
      </div>

      <article className="article article-content">
        <h1>Properties order</h1>
        <pre className="line-numbers language-js">
          <code>
{`const propertyGroups = [
 {
  /**
   * Compose rules from other selectors in CSS Modules.
   * @see https://github.com/css-modules/css-modules#composition
   */
  properties: ['composes'],
 },
 {
  // Must be first (unless using the above).
  properties: ['all'],
 },
 {
  // Position.
  properties: [
   'position',
   'inset',
   'inset-block',
   'inset-block-start',
   'inset-block-end',
   'inset-inline',
   'inset-inline-start',
   'inset-inline-end',
   'top',
   'right',
   'bottom',
   'left',
   'z-index',
  ],
 },
 {
  // Display mode.
  properties: ['box-sizing', 'display'],
 },
 {
  // Flexible boxes.
  properties: [
   'flex',
   'flex-basis',
   'flex-direction',
   'flex-flow',
   'flex-grow',
   'flex-shrink',
   'flex-wrap',
  ],
 },
 {
  // Grid layout.
  properties: [
   'grid',
   'grid-area',
   'grid-template',
   'grid-template-areas',
   'grid-template-rows',
   'grid-template-columns',
   'grid-row',
   'grid-row-start',
   'grid-row-end',
   'grid-column',
   'grid-column-start',
   'grid-column-end',
   'grid-auto-rows',
   'grid-auto-columns',
   'grid-auto-flow',
   'grid-gap',
   'grid-row-gap',
   'grid-column-gap',
  ],
 },
 {
  // Gap.
  properties: ['gap', 'row-gap', 'column-gap'],
 },
 {
  // Layout alignment.
  properties: [
   'place-content',
   'place-items',
   'place-self',
   'align-content',
   'align-items',
   'align-self',
   'justify-content',
   'justify-items',
   'justify-self',
  ],
 },
 {
  // Order.
  properties: ['order'],
 },
 {
  // Box model.
  properties: [
   'float',
   'inline-size',
   'min-inline-size',
   'max-inline-size',
   'width',
   'min-width',
   'max-width',
   'block-size',
   'min-block-size',
   'max-block-size',
   'height',
   'min-height',
   'max-height',
   'aspect-ratio',
   'padding',
   'padding-block',
   'padding-block-start',
   'padding-block-end',
   'padding-inline',
   'padding-inline-start',
   'padding-inline-end',
   'padding-top',
   'padding-right',
   'padding-bottom',
   'padding-left',
   'margin',
   'margin-block',
   'margin-block-start',
   'margin-block-end',
   'margin-inline',
   'margin-inline-start',
   'margin-inline-end',
   'margin-top',
   'margin-right',
   'margin-bottom',
   'margin-left',
   'overflow',
   'overflow-block',
   'overflow-inline',
   'overflow-x',
   'overflow-y',
   '-webkit-overflow-scrolling',
   '-ms-overflow-x',
   '-ms-overflow-y',
   '-ms-overflow-style',
   'overscroll-behavior',
   'overscroll-behavior-inline',
   'overscroll-behavior-block',
   'overscroll-behavior-x',
   'overscroll-behavior-y',
   'clip',
   'clip-path',
   'clear',
  ],
 },
 {
  // Typography.
  properties: [
   'font',
   'font-family',
   'font-size',
   'font-variation-settings',
   'font-style',
   'font-weight',
   'font-feature-settings',
   'font-optical-sizing',
   'font-kerning',
   'font-variant',
   'font-variant-ligatures',
   'font-variant-caps',
   'font-variant-alternates',
   'font-variant-numeric',
   'font-variant-east-asian',
   'font-variant-position',
   'font-size-adjust',
   'font-stretch',
   'font-effect',
   'font-emphasize',
   'font-emphasize-position',
   'font-emphasize-style',
   '-webkit-font-smoothing',
   '-moz-osx-font-smoothing',
   'font-smooth',
   'hyphens',
   'line-height',
   'color',
   'text-align',
   'text-align-last',
   'text-emphasis',
   'text-emphasis-color',
   'text-emphasis-style',
   'text-emphasis-position',
   'text-decoration',
   'text-decoration-line',
   'text-decoration-thickness',
   'text-decoration-style',
   'text-decoration-color',
   'text-underline-position',
   'text-underline-offset',
   'text-indent',
   'text-justify',
   'text-outline',
   '-ms-text-overflow',
   'text-overflow',
   'text-overflow-ellipsis',
   'text-overflow-mode',
   'text-shadow',
   'text-transform',
   'text-wrap',
   '-webkit-text-size-adjust',
   '-ms-text-size-adjust',
   'letter-spacing',
   'word-break',
   'word-spacing',
   'word-wrap', // Legacy name for \`overflow-wrap\`
   'overflow-wrap',
   'tab-size',
   'white-space',
   'vertical-align',

   'list-style',
   'list-style-position',
   'list-style-type',
   'list-style-image',

   'src',
   'font-display',
   'unicode-range',
   'size-adjust',
   'ascent-override',
   'descent-override',
   'line-gap-override',
  ],
 },
 {
  // Accessibility & Interactions.
  properties: [
   'appearance',
   'accent-color',
   'color-scheme',
   'pointer-events',
   '-ms-touch-action',
   'touch-action',
   'cursor',
   'caret-color',
   'visibility',
   'zoom',
   'table-layout',
   'empty-cells',
   'caption-side',
   'border-spacing',
   'border-collapse',
   'content',
   'quotes',
   'counter-reset',
   'counter-set',
   'counter-increment',
   'resize',
   'user-select',
   'nav-index',
   'nav-up',
   'nav-right',
   'nav-down',
   'nav-left',
  ],
 },
 {
  // Images, backgrounds, & borders.
  properties: [
   'object-fit',
   'object-position',
   '-ms-interpolation-mode',
   'image-orientation',
   'image-rendering',
   'image-resolution',

   'background',
   'background-color',
   'background-image',
   "-ms-filter:\\\\'progid:DXImageTransform.Microsoft.gradient",
   'filter:progid:DXImageTransform.Microsoft.gradient',
   'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
   'filter',
   'background-repeat',
   'background-attachment',
   'background-position',
   'background-position-x',
   'background-position-y',
   'background-clip',
   'background-origin',
   'background-size',
   'background-blend-mode',
   'isolation',
   'backdrop-filter',
   'border',
   'border-color',
   'border-style',
   'border-width',
   'border-block',
   'border-block-start',
   'border-block-start-color',
   'border-block-start-style',
   'border-block-start-width',
   'border-block-end',
   'border-block-end-color',
   'border-block-end-style',
   'border-block-end-width',
   'border-inline',
   'border-inline-start',
   'border-inline-start-color',
   'border-inline-start-style',
   'border-inline-start-width',
   'border-inline-end',
   'border-inline-end-color',
   'border-inline-end-style',
   'border-inline-end-width',
   'border-top',
   'border-top-color',
   'border-top-style',
   'border-top-width',
   'border-right',
   'border-right-color',
   'border-right-style',
   'border-right-width',
   'border-bottom',
   'border-bottom-color',
   'border-bottom-style',
   'border-bottom-width',
   'border-left',
   'border-left-color',
   'border-left-style',
   'border-left-width',
   'border-radius',
   'border-start-start-radius',
   'border-start-end-radius',
   'border-end-start-radius',
   'border-end-end-radius',
   'border-top-left-radius',
   'border-top-right-radius',
   'border-bottom-right-radius',
   'border-bottom-left-radius',
   'border-image',
   'border-image-source',
   'border-image-slice',
   'border-image-width',
   'border-image-outset',
   'border-image-repeat',
   'outline',
   'outline-width',
   'outline-style',
   'outline-color',
   'outline-offset',
   'box-shadow',
   'mix-blend-mode',
   'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
   "-ms-filter:\\\\'progid:DXImageTransform.Microsoft.Alpha",
   'opacity',
  ],
 },
 {
  // Masking.
  properties: [
   'mask-border',
   'mask-border-source',
   'mask-border-slice',
   'mask-border-width',
   'mask-border-outset',
   'mask-border-repeat',
   'mask-border-mode',
   'mask',
   'mask-image',
   'mask-mode',
   'mask-repeat',
   'mask-position',
   'mask-clip',
   'mask-origin',
   'mask-size',
   'mask-composite',
  ],
 },
 {
  // SVG Presentation Attributes.
  properties: [
   'alignment-baseline',
   'baseline-shift',
   'dominant-baseline',
   'text-anchor',
   'word-spacing',
   'writing-mode',

   'fill',
   'fill-opacity',
   'fill-rule',
   'stroke',
   'stroke-dasharray',
   'stroke-dashoffset',
   'stroke-linecap',
   'stroke-linejoin',
   'stroke-miterlimit',
   'stroke-opacity',
   'stroke-width',

   'color-interpolation',
   'color-interpolation-filters',
   'color-profile',
   'color-rendering',
   'flood-color',
   'flood-opacity',
   'lighting-color',
   'marker-start',
   'marker-mid',
   'marker-end',
   'shape-rendering',
   'stop-color',
   'stop-opacity',
  ],
 },
 {
  // Transitions & Animation.
  properties: [
   'transition',
   'transition-delay',
   'transition-timing-function',
   'transition-duration',
   'transition-property',
   'transform',
   'transform-origin',
   'rotate',
   'scale',
   'translate',
   'perspective',
   'perspective-origin',
   'animation',
   'animation-name',
   'animation-duration',
   'animation-play-state',
   'animation-timing-function',
   'animation-delay',
   'animation-iteration-count',
   'animation-direction',
   'will-change',
  ],
 },
]`}
          </code>
        </pre>

        <h4>Źródło:</h4>
        <a
          href="https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js"
          className="article-link"
        >
          https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js
        </a>

        <h1>css property order</h1>
        <p>Related property declarations should be grouped together following the order:</p>
        <ol>
          <li>
            Positioning
          </li>
          <ul>
            <li>position</li>
            <li>top</li>
            <li>right</li>
            <li>bottom</li>
            <li>left</li>
            <li>z-index</li>
          </ul>

          <li>
            Box model
          </li>
          <ul>
            <li>display</li>
            <li>float</li>
            <li>width</li>
            <li>height</li>
            <li>max-width</li>
            <li>max-height</li>
            <li>min-width</li>
            <li>min-height</li>
            <li>padding</li>
            <li>padding-top</li>
            <li>padding-right</li>
            <li>padding-bottom</li>
            <li>padding-left</li>
            <li>margin</li>
            <li>margin-top</li>
            <li>margin-right</li>
            <li>margin-bottom</li>
            <li>margin-left</li>
            <li>margin-collapse</li>
            <li>margin-top-collapse</li>
            <li>margin-right-collapse</li>
            <li>margin-bottom-collapse</li>
            <li>margin-left-collapse</li>
            <li>overflow</li>
            <li>overflow-x</li>
            <li>overflow-y</li>
            <li>clip</li>
            <li>clear</li>
          </ul>

          <li>
            Typographic
          </li>
          <ul>
            <li>font</li>
            <li>font-family</li>
            <li>font-size</li>
            <li>font-smoothing</li>
            <li>osx-font-smoothing</li>
            <li>font-style</li>
            <li>font-weight</li>
            <li>hyphens</li>
            <li>src</li>
            <li>line-height</li>
            <li>letter-spacing</li>
            <li>word-spacing</li>
            <li>color</li>
            <li>text-align</li>
            <li>text-decoration</li>
            <li>text-indent</li>
            <li>text-overflow</li>
            <li>text-rendering</li>
            <li>text-size-adjust</li>
            <li>text-shadow</li>
            <li>text-transform</li>
            <li>word-break</li>
            <li>word-wrap</li>
            <li>white-space</li>
            <li>vertical-align</li>
            <li>list-style</li>
            <li>list-style-type</li>
            <li>list-style-position</li>
            <li>list-style-image</li>
            <li>pointer-events</li>
            <li>cursor</li>
          </ul>

          <li>
            Visual
          </li>
          <ul>
            <li>background</li>
            <li>background-attachment</li>
            <li>background-color</li>
            <li>background-image</li>
            <li>background-position</li>
            <li>background-repeat</li>
            <li>background-size</li>
            <li>border</li>
            <li>border-collapse</li>
            <li>border-top</li>
            <li>border-right</li>
            <li>border-bottom</li>
            <li>border-left</li>
            <li>border-color</li>
            <li>border-image</li>
            <li>border-top-color</li>
            <li>border-right-color</li>
            <li>border-bottom-color</li>
            <li>border-left-color</li>
            <li>border-spacing</li>
            <li>border-style</li>
            <li>border-top-style</li>
            <li>border-right-style</li>
            <li>border-bottom-style</li>
            <li>border-left-style</li>
            <li>border-width</li>
            <li>border-top-width</li>
            <li>border-right-width</li>
            <li>border-bottom-width</li>
            <li>border-left-width</li>
            <li>border-radius</li>
            <li>border-top-right-radius</li>
            <li>border-bottom-right-radius</li>
            <li>border-bottom-left-radius</li>
            <li>border-top-left-radius</li>
            <li>border-radius-topright</li>
            <li>border-radius-bottomright</li>
            <li>border-radius-bottomleft</li>
            <li>border-radius-topleft</li>
            <li>content</li>
            <li>quotes</li>
            <li>outline</li>
            <li>outline-offset</li>
            <li>opacity</li>
            <li>filter</li>
            <li>visibility</li>
            <li>size</li>
            <li>zoom</li>
            <li>transform</li>
            <li>box-align</li>
            <li>box-flex</li>
            <li>box-orient</li>
            <li>box-pack</li>
            <li>box-shadow</li>
            <li>box-sizing</li>
            <li>table-layout</li>
            <li>animation</li>
            <li>animation-delay</li>
            <li>animation-duration</li>
            <li>animation-iteration-count</li>
            <li>animation-name</li>
            <li>animation-play-state</li>
            <li>animation-timing-function</li>
            <li>animation-fill-mode</li>
            <li>transition</li>
            <li>transition-delay</li>
            <li>transition-duration</li>
            <li>transition-property</li>
            <li>transition-timing-function</li>
            <li>background-clip</li>
            <li>backface-visibility</li>
            <li>resize</li>
            <li>appearance</li>
            <li>user-select</li>
            <li>interpolation-mode</li>
            <li>direction</li>
            <li>marks</li>
            <li>page</li>
            <li>set-link-source</li>
            <li>unicode-bidi</li>
            <li>speak</li>
          </ul>
        </ol>

        <h4>Źródło:</h4>
        <a href="https://gist.github.com/awkale/ad46e2ade70e833fa178" className="article-link">
          https://gist.github.com/awkale/ad46e2ade70e833fa178
        </a>
      </article>
    </>
  );
};

export default CodeGuide;
