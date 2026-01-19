import { css } from '@emotion/react'
import { black, Poppins } from '../abstracts/colors'

export const normalize = css`
  :root {
    font-size: 1rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    margin: 0;
    direction: rtl;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Poppins};
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1rem;
  }

  a {
    background-color: transparent;
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1rem;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    display: block;
    border: none;
    outline: none;
    max-width: 100%;
    height: auto;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    outline: none;
  }

  button,
  input {
    overflow: visible;
  }

  input[type='text'],
  textarea {
    font-size: 14px;
  }

  /* Target iOS devices only*/
  @supports (-webkit-touch-callout: none) {
    input[type='text'],
    textarea {
      font-size: 16px !important;
    }
  }
  @supports (-webkit-transform-style: preserve-3d) and (user-agent: AppleWebKit) {
    input[type='text'],
    textarea {
      font-size: 16px !important;
    }
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    --webkit-appearance: button;
    appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  input,
  button {
    outline: 0px;
    border: none;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'],
  [type='date'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    --webkit-appearance: textfield;
    appearance: textfield;
    outline-offset: -2px;

    &::-webkit-search-cancel-button {
      --webkit-appearance: none;
    }
  }

  [type='search']::-webkit-search-decoration {
    --webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    --webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Remove default margin */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  p {
    font-family: ${Poppins};
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    font-family: ${Poppins};
  }

  /* Remove list styles on ul, ol */
  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  button:focus,
  button:hover {
    outline: none;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  //scrollbar
  @-moz-document url-prefix() {
    body {
      scrollbar-width: thin !important;
      scrollbar-color: #f48322 #d9d9d9;
    }
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #d9d9d9;
  }

  ::-webkit-scrollbar-thumb {
    height: 42px;
    width: 0px;
    background-color: ${black};
  }

  ::-webkit-scrollbar-thumb:horizontal {
    width: 0px;
    height: 0px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:horizontal {
    background-color: transparent;
  }

  ::-webkit-scrollbar:horizontal {
    width: 0px;
  }

 `;