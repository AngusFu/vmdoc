!function(){var routes=[{path:"/",redirect:"/intro/index"},{path:"/intro/index",component:function(){var t,s=null;return function(){"use strict";var a={metaInfo:function(){return{title:"Introduction"}},components:{},render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"markdown-body"},[a("h1",[t._v("Introduction to md2vue")]),t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. —— "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Markdown",target:"_blank"}},[t._v("wikipedia")])])]),t._v(" "),a("h2",[t._v("Inspiration")]),t._m(1),t._v(" "),a("h2",[t._v("Dev Dependencies")]),t._m(2),t._v(" "),a("h2",[t._v("Typography & UI")]),t._m(3)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can get raw text of this document "),s("strong",[s("a",{attrs:{href:"/AngusFu/md2vue/blob/master/test/common.md"}},[this._v("here")])]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Inspired by "),s("a",{attrs:{href:"https://nuxtjs.org"}},[this._v("nuxt")]),this._v(", "),s("a",{attrs:{href:"https://github.com/AngusFu/md2vue",target:"_blank"}},[this._v("md2vue")]),this._v(" was initially aimed at transforming markdown texts in our Vue project, which were used both for documentation and demostration.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"/chjj/marked"}},[t._v("marked")]),t._v(": A markdown parser and compiler. Built for speed.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/isagalaev/highlight.js",target:"_blank"}},[t._v("highlight.js")]),t._v(": Javascript syntax highlighter.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PrismJS/prism",target:"_blank"}},[t._v("prism")]),t._v(": Javascript syntax highlighter.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vueify",target:"_blank"}},[t._v("vueify")]),t._v(": Browserify transform for single-file Vue components")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/rollup/rollup",target:"_blank"}},[t._v("rollup")]),t._v(": Next-generation ES6 module bundler.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://buble.surge.sh/",target:"_blank"}},[t._v("buble")]),t._v(": The blazing fast, batteries-included ES2015 compiler.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/github-markdown-css",target:"_blank"}},[t._v("github-markdown-css")]),t._v(": The minimal amount of CSS to replicate the GitHub Markdown style.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/isagalaev/highlight.js",target:"_blank"}},[t._v("highlight.js")]),t._v(": Code highlighting.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PrismJS/prism",target:"_blank"}},[t._v("prism")]),t._v(": Code highlighting.")])])}],name:"intro-index",created:function(){},destroyed:function(){this.____&&this.____()},install:function(t){t.component(a.name,a)}};t=a,s=a}.call(this),s}()},{path:"/usage/api",component:function(){var t,s=null;return function(){"use strict";var a={metaInfo:function(){return{title:"How to use"}},components:{},render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",{staticClass:"markdown-body"},[a("h1",[t._v("How to use")]),a("p",[t._v("API is simple, so just see the code below: ")]),t._v(" "),a("pre",{pre:!0,attrs:{class:"lang-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" md2vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'md2vue'")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// your markdown text")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sourceCode "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`...`")])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// configuration object")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  target"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  componentName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'common-comp'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  highlight"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'prism'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  customMarkups"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  documentInfo\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// returns a promise")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// the resolved value would be a string")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("md2vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sourceCode"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h2",[t._v("Explaination on config object")]),a("p",[t._v("Referring to "),a("a",{attrs:{href:"./build-doc.js"}},[t._v("build-doc.js")]),t._v(" or "),a("a",{attrs:{href:"./test/md2vue.spec.js"}},[t._v("spec file")]),t._v(" is suggested.")]),t._v(" "),a("h3",[a("code",[t._v(".target")]),t._v(": String")]),a("p",[t._v("Unless you specify this property to "),a("code",[t._v("js")]),t._v(", any other value will be treated as "),a("code",[t._v("vue")]),t._v(".")]),t._v(" "),a("p",[t._v("With this property beening "),a("code",[t._v("vue")]),t._v(', it means you will get .vue styled result. You can write the result to a single file with ".vue" extension for later use.')]),t._v(" "),a("p",[t._v("With this property beening "),a("code",[t._v("js")]),t._v(', you\'ll get a precompiled JavaScript result. You can write it to a ".js" file, and then do something like this:')]),t._v(" "),a("pre",{pre:!0,attrs:{class:"lang-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'common-comp.js'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<common-comp />'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h3",[a("code",[t._v(".componentName")]),t._v(": String")]),a("p",[t._v('This property is required when the target is "js".')]),t._v(" "),a("h3",[a("code",[t._v(".highlight")]),t._v(": String | Function")]),a("p",[t._v("You can specify this property to 'highlight.js' or 'prism'.")]),t._v(" "),a("p",[t._v("A function which accepts 2 arguments "),a("code",[t._v("code")]),t._v(" and "),a("code",[t._v("language")]),t._v(" is also accepted.")]),t._v(" "),a("h3",[a("code",[t._v(".customMarkups")]),t._v(": String | Function")]),a("p",[t._v("Some custom markups you want to inject between the App block and source code block.")]),t._v(" "),a("h3",[a("code",[t._v(".documentInfo")]),t._v(": Object")]),a("p",[t._v("Any stuff you want to provide for your vue component.")])])}],name:"usage-api",created:function(){},destroyed:function(){this.____&&this.____()},install:function(t){t.component(a.name,a)}};t=a,s=a}.call(this),s}()},{path:"/usage/demo",component:function(){var t,s=null;return function(){"use strict";var a=this,n={metaInfo:function(){return{title:"Demo"}},components:{md2vuedemo0:{data:function(){return{count:0}},methods:{incr:function(t){this.count+=t}},render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"vue-demo"},[a("div",{staticClass:"wrapper"},[a("button",{on:{click:function(s){t.incr(-1)}}},[t._v("-")]),t._v(" "),a("input",{attrs:{type:"text",readonly:""},domProps:{value:t.count}}),t._v(" "),a("button",{on:{click:function(s){t.incr(1)}}},[t._v("+")])])])},staticRenderFns:[],_scopeId:"data-v-029571ac"},md2vuedemo1:{methods:{click:function(){a.alert("clicked!")}},render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-demo"},[s("button",{on:{click:this.click}},[this._v("click me!")])])},staticRenderFns:[],_scopeId:"data-v-029571ad"},md2vuedemo2:{methods:{click:function(){a.alert("clicked!")}},render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"vue-demo"},[s("button",{on:{click:this.click}},[this._v("click me!")])])},staticRenderFns:[],_scopeId:"data-v-029571ae"}},render:function(){var t=this.$createElement,s=this._self._c||t;return s("article",{staticClass:"markdown-body"},[s("h1",[this._v("Demo")]),this._m(0),this._v(" "),this._m(1),this._v(" "),s("p",[this._v("The following code in vue can be rendered into an real tiny vue app:")]),this._v(" "),s("div",{staticClass:"vue-demo-block"},[s("md2vuedemo0"),this._v(" "),s("input",{attrs:{id:"UsageDemo-0",type:"checkbox"}}),s("label",{attrs:{for:"UsageDemo-0"}}),this._v(" "),this._m(2)],1),this._v(" "),this._m(3),this._v(" "),s("div",{staticClass:"vue-demo-block"},[s("md2vuedemo1"),this._v(" "),s("input",{attrs:{id:"UsageDemo-1",type:"checkbox"}}),s("label",{attrs:{for:"UsageDemo-1"}}),this._v(" "),this._m(4)],1),this._v(" "),s("p",[this._v("What if you only want the app without source code? Follow the code:")]),this._v(" "),this._m(5),this._m(6),this._v(" "),s("div",{staticClass:"vue-demo-block vue-demo-block-demo-only"},[s("md2vuedemo2")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All code blocks with language specified to "),s("code",[this._v("html")]),this._v(" or "),s("code",[this._v("vue")]),this._v(" are treated as Vue apps.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But What if you want to demonstrate that code block just for its sake? Simply specify the language to "),s("code",[this._v("xml")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"lang-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[this._v("\n  "),s("span",{attrs:{class:"token selector"}},[this._v(".wrapper input")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    "),s("span",{attrs:{class:"token property"}},[this._v("width")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 50px"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n    "),s("span",{attrs:{class:"token property"}},[this._v("text-align")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" center"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("template")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("div")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("wrapper"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("button")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("incr(-1)"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("-"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("button")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("input")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("text"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("readonly")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v(":value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("count"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("button")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("incr(+1)"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("+"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("button")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("div")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("template")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[this._v("\n  "),s("span",{attrs:{class:"token keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"token keyword"}},[this._v("default")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    "),s("span",{attrs:{class:"token function"}},[this._v("data")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n      "),s("span",{attrs:{class:"token keyword"}},[this._v("return")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n        count"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token number"}},[this._v("0")]),this._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),s("span",{attrs:{class:"token punctuation"}},[this._v(",")]),this._v("\n    methods"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n      "),s("span",{attrs:{class:"token function"}},[this._v("incr")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("delta"),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n        "),s("span",{attrs:{class:"token keyword"}},[this._v("this")]),s("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("count "),s("span",{attrs:{class:"token operator"}},[this._v("+=")]),this._v(" delta\n      "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can also leave out "),s("code",[this._v("<template>")]),this._v(" tags, just like this:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"lang-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[this._v("\n  "),s("span",{attrs:{class:"token selector"}},[this._v("button")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    "),s("span",{attrs:{class:"token property"}},[this._v("font-size")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 14px"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("button")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("click"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("click me!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("button")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[this._v("\n  "),s("span",{attrs:{class:"token keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"token keyword"}},[this._v("default")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    methods"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n      "),s("span",{attrs:{class:"token function"}},[this._v("click")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n        "),s("span",{attrs:{class:"token function"}},[this._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("'clicked!'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"lang-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[this._v("\n  "),s("span",{attrs:{class:"token selector"}},[this._v("button")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    "),s("span",{attrs:{class:"token property"}},[this._v("font-size")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 14px"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("style")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("template")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("demo-only")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("button")]),this._v(" "),s("span",{attrs:{class:"token attr-name"}},[this._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("=")]),s("span",{attrs:{class:"token punctuation"}},[this._v('"')]),this._v("click"),s("span",{attrs:{class:"token punctuation"}},[this._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("click me!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("button")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("template")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("<")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[this._v("\n  "),s("span",{attrs:{class:"token keyword"}},[this._v("export")]),this._v(" "),s("span",{attrs:{class:"token keyword"}},[this._v("default")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n    methods"),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n      "),s("span",{attrs:{class:"token function"}},[this._v("click")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v(" "),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("\n        "),s("span",{attrs:{class:"token function"}},[this._v("alert")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{attrs:{class:"token string"}},[this._v("'clicked!'")]),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[this._v("</")]),this._v("script")]),s("span",{attrs:{class:"token punctuation"}},[this._v(">")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Noticed the difference? Hmm, just wrap your template, append a "),s("code",[this._v("demo-only")]),this._v(" attribute to it. So let's take a look:")])}],name:"usage-demo",created:function(){var t=".wrapper input[data-v-029571ac] {     width: 50px;     text-align: center;   } button[data-v-029571ad] {     font-size: 14px;   } button[data-v-029571ae] {     font-size: 14px;   }";this.____=function(t){if(void 0!==a.document){var s=a.document.createElement("style");s.setAttribute("type","text/css"),"textContent"in s?s.textContent=t:s.styleSheet.cssText=t;var n=a.document.getElementsByTagName("head")[0];return n.appendChild(s),function(){n.removeChild(s)}}}(t)},destroyed:function(){this.____&&this.____()},install:function(t){t.component(n.name,n)}};t=n,s=n}.call(this),s}()},{path:"*",redirect:"/"}];createApp({el:"#app",mode:"history",routes:routes,render:function(){with(this)return _c("div",{attrs:{id:"app"}},[_c("nav",{staticClass:"navbar"},[_c("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[_c("icon",{attrs:{type:"layers"}}),_v(" "),_c("span",{staticClass:"name"},[_v("md2vue")])],1),_v(" "),_c("ul",{staticClass:"navbar-nav"},_l(links,function(t){return _c("li",{key:t.url},[_c("a",{attrs:{href:t.url,target:t.target||"_blank"}},[_v(_s(t.text))])])})),_v(" "),_m(0)]),_v(" "),_c("div",{staticClass:"container"},[_c("div",{staticClass:"sidebar"},[_c("ul",{staticClass:"group"},_l(groups,function(t){return t.pages.length?_c("li",{key:t.text,staticClass:"group-item"},[_c("p",{staticClass:"group-title"},[_c("icon",{attrs:{type:"layers"}}),_v("\n            "+_s(t.text)+"\n          ")],1),_v(" "),_c("ul",{staticClass:"doc"},_l(t.pages,function(t){return _c("li",{key:t.title,staticClass:"doc-item"},[_c("router-link",{attrs:{to:t.path}},[_v(_s(t.title))])],1)}))]):_e()}))]),_v(" "),_c("div",{staticClass:"content"},[_c("transition",{attrs:{name:"fade"}},[_c("router-view")],1)],1)])])},staticRenderFns:[function(){with(this)return _c("a",{staticClass:"toggle-btn"},[_c("div")])}],data:{links:[{text:"Home",url:"/"},{text:"GitHub",url:"//github.com/AngusFu/md2vu"},{text:"Issue",url:"//github.com/AngusFu/md2vu/issues"}],groups:[{text:"简介",pages:[{title:"Introduction",path:"/intro/index"}]},{text:"使用方法",pages:[{title:"How to use",path:"/usage/api"},{title:"Demo",path:"/usage/demo"}]}]}})}();