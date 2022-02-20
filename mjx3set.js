window.MathJax = {
  tex: {
    inlineMath: [ ['$','$'], ['`','`'], ["\\(","\\)"] ],
    processEscapes: true,
    tags: "ams",
    macros: {
      mbb: '\\mathbb',
      riff: '\\implies',
      liff: '\\impliedby',
      abs: ['\\left\\lvert #1\\right\\rvert', 1],
      rmd: '\\mathop{}\\!\\mathrm{d}',
      vv: '\\overrightarrow',
      sslash: '\\mathrel{/\\mkern-5mu/}',
      px: '\\mathrel{/\\mkern-5mu/}',
      pqd: '\\stackrel{\\smash[b]{/\\!/}}{\\raise-.3ex{=}}',
      veps: '\\varepsilon',
      du: '^\\circ',
      bsb: '\\boldsymbol',
      bm: '\\boldsymbol',
      kongji: '\\varnothing',
      buji: '\\complement',
      S: ['S_{\\triangle #1}', 1],
      led: '\\left\\{\\begin{aligned}',
      endled: '\\end{aligned}\\right.',
      edr: '\\left.\\begin{aligned}',
      endedr: '\\end{aligned}\\right\\}',
      an: '\\{a_n\\}',
      bn: '\\{b_n\\}',
      cn: '\\{c_n\\}',
      xn: '\\{x_n\\}',
      Sn: '\\{S_n\\}',
      inR: '\\in\\mbb R',
      inN: '\\in\\mbb N',
      inZ: '\\in\\mbb Z',
      inC: '\\in\\mbb C',
      inQ: '\\in\\mbb Q',
      Rtt: '\\text{Rt}\\triangle',
      LHS: '\\text{LHS}',
      RHS: '\\text{RHS}',
      arccot: '\\operatorname{arccot}',
      arcsinh: '\\operatorname{arcsinh}',
      arccosh: '\\operatorname{arccosh}',
      arctanh: '\\operatorname{arctanh}',
      arccoth: '\\operatorname{arccoth}',
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
  //chtml: {
  //  scale: 0.9
  //},
  loader: {
    load: ['[tex]/noerrors']
  },
  svg: {
    scale: 0.9,
    fontCache: 'global'
  }
};
