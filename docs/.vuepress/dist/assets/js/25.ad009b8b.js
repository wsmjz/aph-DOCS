(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{516:function(t,a,s){"use strict";s.r(a);var e=s(58),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("设计思想不同：vue追求的是开发的简单，而react更在乎方式是否正确,合理"),s("br")]),t._v(" "),s("li",[t._v("对数据的感知不同：vue(Know)双向this.a = 0, react(Do not Know)单向this.setState({a: 0})"),s("br"),t._v("\nreact 与 vue 都是一种解决方案而已，各有所长，不存在于好坏，"),s("strong",[t._v("提升核心竞争力")])])])]),t._v(" "),s("ul",[s("li",[t._v("react是单向数据流，vue双向数据流v-module（props,$emit的语法糖，其实也是子组件@emit触发父组件的方法，react回调函数向父组件传值）")]),t._v(" "),s("li",[t._v("react与vue中的computed，Watcher\n"),s("ul",[s("li",[t._v("react的数据是不是可变的；")]),t._v(" "),s("li",[t._v("vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom")])])]),t._v(" "),s("li",[t._v("react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推崇结合immutable来实现数据不可变。react在setState之后会重新走渲染的流程，如果shouldComponentUpdate返回的是true，就继续渲染，如果返回了false，就不会重新渲染，PureComponent就是重写了shouldComponentUpdate，然后在里面作了props和state的浅层对比。")]),t._v(" "),s("li",[t._v("react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些， 比如 redux的combineReducer就对应vuex的modules， 比如reselect就对应vuex的getter和vue组件的computed， vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要")]),t._v(" "),s("li",[t._v("react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，"),s("strong",[t._v("更加可控")]),t._v("。")]),t._v(" "),s("li",[t._v("react对比vue\n"),s("ul",[s("li",[t._v("react更加底层，偏原生 如map; vue封装了api以提供v-for，v-if; 在 React 中写组件就是在写函数，函数拥有的功能组件都有。而 Vue 更像是高度封装的函数，在更高的层面 Vue 能够让你轻松的完成一些事情；与高度的封装相对的就是损失一定的灵活，你需要按照一定规则才能使系统更好的运行")]),t._v(" "),s("li",[t._v("vue能保证最低代码规范，质量；react也是因为其灵活（渲染h1-h5, vue也提供了高阶渲染函数render的使用），自由，生态也灵活，vue所有生态工具都集成到他的实例上；所以由于开发者水平不一样react容易导致项目架构杂论，混乱")]),t._v(" "),s("li",[t._v("喜欢 react 带来的自由编码体验; vue的有效利用模板机制 回归了html的本质,且生态更明朗")])])]),t._v(" "),s("li",[t._v("react是"),s("strong",[t._v("类式的写法")]),t._v("，api很少")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("vue是"),s("strong",[t._v("声明式的写法")]),t._v("，通过传入各种options，api和参数都很多。所以"),s("code",[t._v("react结合typescript更容易一起写")]),t._v("，vue稍微复杂;vue结合vue-class-component也可以实现类式的写法，但是还是需要通过decorator来添加声明，并不纯粹")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    watch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("react可以通过高阶组件（Higher Order Components--HOC）来扩展，而"),s("strong",[t._v("vue需要通过mixins")]),t._v("来扩展；Vue也不是不能实现高阶组件，只是特别麻烦，因为Vue对与组件的option做了各种处理，想实现高阶组件就要知道每一个option是怎么处理的，然后正确的设置。"),s("a",{attrs:{href:"http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("react中相对于vue的计算属性可用"),s("code",[t._v("get拦截")]),t._v("实现, (没有缓存特性，可借助第三方插件"),s("code",[t._v("memoize-one")]),t._v("来实现)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小怂'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我被调用了'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("vue核心：响应式数据系统，组件系统\n"),s("ul",[s("li",[t._v("实例中的data与其渲染的DOM元素的内容保持一致，通过设置属性访问器实现")])])]),t._v(" "),s("li",[t._v("react没有vue中的watch；通常情况下，React 的状态都是手动 setState 变化的，React 不监听数据变化；；在实践中可以尝试在 state 里放一个定义了 getter 和 setter 的对象，在 setter 里来发这个请求，响应后再 setState 回去。。。"),s("code",[t._v("watch-props 库，提供类似于 vue watch 这样的能力")]),t._v("(做业务-监听"),s("a",{attrs:{href:"https://www.jb51.net/article/147331.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("弹框"),s("OutboundLink")],1),t._v("，都是通过生命周期监听 props变化 ，这样bug 会很多,容易导致死循环等问题，"),s("code",[t._v("watch-props")]),t._v("目的就是减少使用一些 react 生命周期。)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prevState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件"}},[t._v("#")]),t._v(" 中间件")]),t._v(" "),s("blockquote",[s("p",[t._v("redux默认只处理同步，应用中间件处理异步=》就是对action,dispatch之前，之后做一些事情"),s("br"),t._v("\nvuex自带提供了异步处理")])]),t._v(" "),s("ul",[s("li",[t._v("就是做了一个函数切片(重写dispatch)，相当于vue中对数组方法的重写")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch\nstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("dispatch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据状态更新前'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据状态更新前'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("日志中间件")]),t._v(" "),s("li",[t._v("错误中间件")])]),t._v(" "),s("h2",{attrs:{id:"setstate-是同步的还是异步的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate-是同步的还是异步的"}},[t._v("#")]),t._v(" setState 是同步的还是异步的")]),t._v(" "),s("ul",[s("li",[t._v("放入setTimeout中会 同步执行")]),t._v(" "),s("li",[t._v("直接调用会有一个队列机制 异步执行\n"),s("ul",[s("li",[t._v("源码体现")])]),t._v(" "),s("blockquote",[s("p",[t._v("会有一个队列机制"),s("br"),t._v("\n是否批次 "),s("code",[t._v("变量isBatchingUpdates = false")]),t._v(" 控制同步更新还是异步更新，batchedUpdates函数会修改"),s("code",[t._v("isBatchingUpdates = true")])])])])]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("ul",[s("li",[t._v("PureComponent组件实现")]),t._v(" "),s("li",[t._v("为什么子组件的props就能拿到父组件传递的属性呢")])]),t._v(" "),s("h2",{attrs:{id:"与vue的性能对比优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与vue的性能对比优化"}},[t._v("#")]),t._v(" 与vue的性能对比优化")]),t._v(" "),s("ul",[s("li",[t._v("react改进了fibe, 分片渲染Dom")]),t._v(" "),s("li",[t._v("vue使用Proxy")]),t._v(" "),s("li",[t._v("ast语法树描述的只能是Dom属性")]),t._v(" "),s("li",[t._v("虚拟Dom可以加入自定义属性")])]),t._v(" "),s("comment-comment"),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);