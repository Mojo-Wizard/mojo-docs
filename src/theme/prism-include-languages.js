import siteConfig from '@generated/docusaurus.config';

export default function prismIncludeLanguages(PrismObject) {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages = []} = prism ?? {};

  globalThis.Prism = PrismObject;
  PrismObject.languages.mojo = PrismObject.languages.mojo || {
    comment: /#.*/,
    keyword:
      /\b(fn|def|struct|trait|impl|let|var|from|import|return|if|else|match|while|for|in|owned|borrowed|mut|inout|defer|with)\b/,
    builtin: /\b(Int|Float|Bool|String|List|Tuple|Range|LayoutTensor)\b/,
    number: /\b\d+(?:\.\d+)?\b/,
    string: {
      pattern: /(["'])(?:\\.|(?!\1)[^\\])*\1/,
      greedy: true,
    },
    function: /\b[a-zA-Z_]\w*(?=\s*\()/,
    operator: /[-+*/=<>!%]+/,
    punctuation: /[{}[\]().,:]/,
  };

  additionalLanguages.forEach((lang) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    require(`prismjs/components/prism-${lang}`);
  });
  delete globalThis.Prism;
}
