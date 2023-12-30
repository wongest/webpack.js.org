"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4168],{4168:function(e,a,n){n.r(a),n(7378);var t=n(2682);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",s({components:a},n),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"本指南继续沿用 ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("a",{href:"/guides/getting-started/",parentName:"strong"},"起步"))," 中的代码示例。")),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://www.typescriptlang.org",parentName:"p"},"TypeScript")," 是 JavaScript 的超集，为其增加了类型系统。TypeScript 可以被编译为普通的 JavaScript 代码。这篇指南将会介绍如何在 webpack 中集成 TypeScript。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"basic-setup",parentName:"h2"}),"基础配置",(0,t.kt)("a",{href:"#basic-setup","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"首先，执行以下命令安装 TypeScript 编译器和 loader："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,t.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev typescript ts-loader")),(0,t.kt)("p",null,"现在，我们将修改目录结构和配置文件："),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"project")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," webpack-demo\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- package.json\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- package-lock.json\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- tsconfig.json\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- webpack.config.js\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- /dist\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   |- bundle.js\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   |- index.html\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- /src\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   |- index.js\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"   |- index.ts\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," |- /node_modules")))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"tsconfig.json")),(0,t.kt)("p",null,"这里我们添加一个基本的配置以支持 JSX，并将 TypeScript 编译到 ES5……"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-json",parentName:"pre"},(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"compilerOptions"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"outDir"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"./dist/"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"noImplicitAny"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"module"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"es6"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"target"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"es5"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"jsx"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"react"'),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"allowJs"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token property",parentName:"code"},'"moduleResolution"'),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},'"node"'),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("p",null,"参阅 ",(0,t.kt)("a",{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",parentName:"p"},"TypeScript 官方文档")," 了解更多关于 ",(0,t.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," 配置选项的信息。"),(0,t.kt)("p",null,"参阅 ",(0,t.kt)("a",{href:"/concepts/configuration/",parentName:"p"},"配置")," 了解更多关于 webpack 配置的信息。"),(0,t.kt)("p",null,"现在，配置 webpack 处理 TypeScript："),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," path ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'path'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'./src/index.ts'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  module",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    rules",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        test",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/\\.tsx?$/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        use",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'ts-loader'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n        exclude",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token regex",parentName:"code"},"/node_modules/"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  resolve",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    extensions",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,t.kt)("span",{className:"token string",parentName:"code"},"'.tsx'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'.ts'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'bundle.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    path",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," path",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"__dirname",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'dist'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"上面的配置将会指定 ",(0,t.kt)("inlineCode",{parentName:"p"},"./src/index.ts")," 为入口文件，并通过 ",(0,t.kt)("inlineCode",{parentName:"p"},"ts-loader")," 加载所有 ",(0,t.kt)("inlineCode",{parentName:"p"},".ts")," 和 ",(0,t.kt)("inlineCode",{parentName:"p"},".tsx")," 文件，并在当前目录 ",(0,t.kt)("strong",{parentName:"p"},"输出")," 一个 ",(0,t.kt)("inlineCode",{parentName:"p"},"bundle.js")," 文件。"),(0,t.kt)("p",null,"由于 ",(0,t.kt)("inlineCode",{parentName:"p"},"lodash")," 没有默认导出，因此现在需要修改 ",(0,t.kt)("inlineCode",{parentName:"p"},"lodash")," 在 ",(0,t.kt)("inlineCode",{parentName:"p"},"./index.ts")," 文件中的引入。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"./index.ts")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"}," import _ from 'lodash';\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"}," import * as _ from 'lodash';\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," function component() {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   const element = document.createElement('div');\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   return element;\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," }\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," document.body.appendChild(component());")))),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"如果想在 TypeScript 中继续使用像 ",(0,t.kt)("inlineCode",{parentName:"p"},"import _ from 'lodash';")," 的语法，让它被作为一种默认的导入方式，需要在 ",(0,t.kt)("strong",{parentName:"p"},"tsconfig.json")," 中设置 ",(0,t.kt)("inlineCode",{parentName:"p"},'"allowSyntheticDefaultImports" : true')," 和 ",(0,t.kt)("inlineCode",{parentName:"p"},'"esModuleInterop" : true'),"。这是与 TypeScript 相关的配置，在本文档中提及仅供参考。")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"loader",parentName:"h2"}),"loader",(0,t.kt)("a",{href:"#loader","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("a",{href:"https://github.com/TypeStrong/ts-loader",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"ts-loader"))),(0,t.kt)("p",null,"在本指南中，我们使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"ts-loader"),"，因为它能够很方便地启用额外的 webpack 功能，例如将其他 web 资源导入到项目中。"),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{className:"warning__prefix",parentName:"aside"},"警告"),(0,t.kt)("p",{parentName:"aside"},(0,t.kt)("inlineCode",{parentName:"p"},"ts-loader")," 使用 TypeScript 编译器 ",(0,t.kt)("inlineCode",{parentName:"p"},"tsc"),"，并依赖于 ",(0,t.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," 配置。请确保避免将 ",(0,t.kt)("a",{href:"https://www.typescriptlang.org/tsconfig#module",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"module"))," 设置为 ",(0,t.kt)("inlineCode",{parentName:"p"},'"CommonJS"'),"，否则 webpack 将无法对代码进行 ",(0,t.kt)("a",{href:"/guides/tree-shaking",parentName:"p"},"tree shaking"),"。")),(0,t.kt)("p",null,"请注意，如果已经使用 ",(0,t.kt)("a",{href:"https://github.com/babel/babel-loader",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"babel-loader"))," 转译代码，可以使用 ",(0,t.kt)("a",{href:"https://babeljs.io/docs/en/babel-preset-typescript",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"@babel/preset-typescript"))," 以让 Babel 处理 JavaScript 和 TypeScript 文件，而不需要额外使用 loader。请记住，与 ",(0,t.kt)("inlineCode",{parentName:"p"},"ts-loader")," 相反，底层的 ",(0,t.kt)("a",{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"@babel/plugin-transform-typescript"))," 插件不执行任何类型检查。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"source-maps",parentName:"h2"}),"source map",(0,t.kt)("a",{href:"#source-maps","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"参阅 ",(0,t.kt)("a",{href:"/guides/development",parentName:"p"},"开发环境")," 指南了解更多关于 source map 的信息。"),(0,t.kt)("p",null,"我们需要对 TypeScript 进行配置以启用 source map，从而实现将内联的 source map 输出到编译后的 JavaScript 文件。必须在 TypeScript 配置中添加下面这行："),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"tsconfig.json")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'   "compilerOptions": {\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "outDir": "./dist/",\n')),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "sourceMap": true,\n')),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "noImplicitAny": true,\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "module": "commonjs",\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "target": "es5",\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "jsx": "react",\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "allowJs": true,\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},'     "moduleResolution": "node",\n'),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   }\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," }")))),(0,t.kt)("p",null,"现在，我们需要告诉 webpack 提取这些 source map，并内联到最终的 bundle 中。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," const path = require('path');\n")),"\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," module.exports = {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   entry: './src/index.ts',\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"   devtool: 'inline-source-map',\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   module: {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     rules: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"       {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"         test: /\\.tsx?$/,\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"         use: 'ts-loader',\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"         exclude: /node_modules/,\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"       },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     ],\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   resolve: {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     extensions: [ '.tsx', '.ts', '.js' ],\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   output: {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     filename: 'bundle.js',\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     path: path.resolve(__dirname, 'dist'),\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   },\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," };")))),(0,t.kt)("p",null,"查看 ",(0,t.kt)("a",{href:"/configuration/devtool/",parentName:"p"},"devtool")," 文档以了解更多信息。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"client-types",parentName:"h2"}),"客户端类型",(0,t.kt)("a",{href:"#client-types","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"你可以在 TypeScript 代码中使用 webpack 特定的特性，比如 ",(0,t.kt)("a",{href:"/api/module-variables/#importmetawebpack",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"import.meta.webpack")),"。只需要添加 TypeScript ",(0,t.kt)("a",{href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"reference"))," 声明，webpack 便会为它们提供类型支持："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token comment",parentName:"code"},'/// <reference types="webpack/module" />'),"\n",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"console"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"meta",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")," ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// 没有上面的声明的话，TypeScript 会抛出一个错误"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"using-third-party-libraries",parentName:"h2"}),"使用第三方库",(0,t.kt)("a",{href:"#using-third-party-libraries","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在从 npm 安装第三方库时，一定要记得同时安装此库的类型声明文件。你可以从 ",(0,t.kt)("a",{href:"https://microsoft.github.io/TypeSearch/",parentName:"p"},"TypeSearch")," 中找到并安装这些第三方库的类型声明文件。"),(0,t.kt)("p",null,"举个例子，如果想安装 lodash 类型声明文件，可以运行下面的命令："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,t.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev @types/lodash")),(0,t.kt)("p",null,"参与 ",(0,t.kt)("a",{href:"https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/",parentName:"p"},"这篇文章")," 以了解更多。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"importing-other-assets",parentName:"h2"}),"导入其他资源",(0,t.kt)("a",{href:"#importing-other-assets","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"想要在 TypeScript 中使用非代码资源，需要告诉 TypeScript 推断导入资源的类型。在项目里创建一个 ",(0,t.kt)("inlineCode",{parentName:"p"},"custom.d.ts")," 文件，这个文件用来表示项目中 TypeScript 的自定义类型声明。我们为 ",(0,t.kt)("inlineCode",{parentName:"p"},".svg")," 文件设置一个声明："),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"custom.d.ts")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-typescript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"declare")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"module")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'*.svg'")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," content",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"any"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"export")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"default")," content",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("p",null,"在这里我们通过指定任何以 ",(0,t.kt)("inlineCode",{parentName:"p"},".svg")," 结尾的导入，将 SVG 声明为一个新的模块，并将模块的 ",(0,t.kt)("inlineCode",{parentName:"p"},"content")," 定义为 ",(0,t.kt)("inlineCode",{parentName:"p"},"any"),"。我们可以通过将类型定义为字符串，来更加显式地将它声明为一个 url。同样的概念适用于其他资源，包括 CSS，SCSS，以及 JSON 等。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"build-performance",parentName:"h2"}),"构建性能",(0,t.kt)("a",{href:"#build-performance","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("aside",{className:"warning"},(0,t.kt)("h6",{className:"warning__prefix",parentName:"aside"},"警告"),(0,t.kt)("p",{parentName:"aside"},"这么做可能会降低构建性能。")),(0,t.kt)("p",null,"参阅 ",(0,t.kt)("a",{href:"/guides/build-performance/",parentName:"p"},"构建性能")," 以了解更多关于构建性能的信息。"))}p.isMDXComponent=!0,a.default=p}}]);