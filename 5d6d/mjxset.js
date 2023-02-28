window.MathJax = {
  tex: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    processEscapes: true,
    tags: "ams",
    macros: {
      mbb: '\\mathbb',
      riff: '\\implies',
      liff: '\\impliedby',
      abs: ['\\left\\lvert #1\\right\\rvert', 1],
      rmd: '\\mathop{}\\!\\mathrm{d}',
      vv: '\\overrightarrow',
      sslash: '\\mathrel{/\\!/}',
      pqd: '\\stackrel{\\,\\sslash}{\\raise-.5ex{=\\!\\!\\!\\!=}}',
      veps: '\\varepsilon',
      du: '^\\circ'
    },
    autoload: {
      color: [],
      colorv2: ['color']
    },
    packages: {'[+]': ['noerrors']}
  },
  options: {
    ignoreHtmlClass: 'blockcode',
    menuOptions: {
      settings: {
        zoom: "DoubleClick"
      }
    },
    processHtmlClass: 'tex2jax_process',
    renderActions: {
      assistiveMml: []
    }
  },
  loader: {
    load: ['[tex]/noerrors']
  },
  svg: {
    //scale: 0.9,
    fontCache: 'global'
  }
};