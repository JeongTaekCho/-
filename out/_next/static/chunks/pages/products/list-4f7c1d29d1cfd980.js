(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{7690:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/list",function(){return c(7618)}])},7618:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return F}});var d=c(5893),e=c(5850),f=c(1163),g=c(982),h=c(6829);function i(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function j(){var a=i(["\n  width: 100%;\n  padding-top: 72px;\n"]);return j=function(){return a},a}function k(){var a=i(["\n  width: 980px;\n  margin: 0 auto;\n"]);return k=function(){return a},a}function l(){var a=i(["\n  font-size: 3.2rem;\n  font-weight: 600;\n  letter-spacing: -0.6px;\n  text-align: center;\n  color: #212529;\n  margin-bottom: 4rem;\n"]);return l=function(){return a},a}function m(){var a=i(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-bottom: 3rem;\n"]);return m=function(){return a},a}function n(){var a=i(["\n  width: 250px;\n  height: 40px;\n  padding: 12px 16px;\n  border-radius: 6px;\n  -webkit-border-radius: 6px;\n  -moz-border-radius: 6px;\n  border: solid 1px #e9ecef;\n  box-sizing: border-box;\n  font-size: 1.7rem;\n  letter-spacing: -0.6px;\n  outline: none;\n"]);return n=function(){return a},a}function o(){var a=i(["\n  width: 100%;\n  display: flex;\n  gap: 6rem 5.7%;\n  flex-wrap: wrap;\n"]);return o=function(){return a},a}function p(){var a=i(["\n  padding: 1rem 2rem;\n  border: none;\n  background-color: #ff6f0f;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n"]);return p=function(){return a},a}var q=h.Z.div(j()),r=h.Z.div(k()),s=h.Z.h2(l()),t=h.Z.div(m()),u=h.Z.input(n()),v=h.Z.div(o()),w=h.Z.button(p()),x=c(246),y=c.n(x),z=function(a){var b=a.data,c=a.infiniteFun,e=a.onClickToWrite;return(0,d.jsx)(q,{children:(0,d.jsxs)(r,{children:[(0,d.jsx)(s,{children:"중고거래 인기매물"}),(0,d.jsxs)(t,{children:[(0,d.jsx)(u,{type:"text",placeholder:"검색어를 입력해주세요."}),(0,d.jsx)(w,{onClick:e,children:"물품 등록하기"})]}),(0,d.jsx)(y(),{pageStart:0,loadMore:c,hasMore:!0,children:(0,d.jsx)(v,{children:null==b?void 0:b.fetchUseditems.map(function(a){return(0,d.jsx)(g.Z,{el:a},a._id)})})})]})})},A=c(6015);function B(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function C(a){return(function(a){if(Array.isArray(a))return B(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||D(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function D(a,b){if(a){if("string"==typeof a)return B(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return B(a,b)}}var E=function(){var a=(0,f.useRouter)(),b=(0,e.a)(A.z),c=b.data,g=b.fetchMore;return(0,d.jsx)(z,{data:c,infiniteFun:function(){void 0!==c&&g({variables:{page:Math.ceil(c.fetchUseditems.length/10)+1},updateQuery:function(a,b){var c=b.fetchMoreResult;return c.fetchUseditems?{fetchUseditems:C(a.fetchUseditems).concat(C(c.fetchUseditems))}:{fetchUseditems:C(a.fetchUseditems)}}})},onClickToWrite:function(){a.push("/products/write")}})},F=function(){return(0,d.jsx)(E,{})}},982:function(a,b,c){"use strict";var d=c(5893),e=c(6829),f=c(1664);function g(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function h(){var a=g(["\n  width: 20.7%;\n  cursor: pointer;\n"]);return h=function(){return a},a}function i(){var a=g(["\n  width: 100%;\n  padding-bottom: 100%;\n  border-radius: 12px;\n  border: 1px solid transparent;\n  background-position: center;\n  background-size: cover;\n  margin-bottom: 1rem;\n"]);return i=function(){return a},a}function j(){var a=g(["\n  font-size: 1.6rem;\n  letter-spacing: -0.02px;\n  color: #212529;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 0.4rem;\n  line-height: 1.5;\n  font-weight: 400;\n"]);return j=function(){return a},a}function k(){var a=g(["\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.5;\n  margin-bottom: 0.4rem;\n"]);return k=function(){return a},a}function l(){var a=g(["\n  font-size: 1.3rem;\n  color: #212529;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: 0.4rem;\n  line-height: 1.5;\n"]);return l=function(){return a},a}function m(){var a=g(["\n  color: #868e96;\n  font-size: 1.3rem;\n"]);return m=function(){return a},a}var n=e.Z.div(h()),o=e.Z.div(i()),p=e.Z.h3(j()),q=e.Z.p(k()),r=e.Z.p(l()),s=e.Z.p(m());b.Z=function(a){var b=a.el;return(0,d.jsx)(f.default,{href:"/products/".concat(b._id),children:(0,d.jsxs)(n,{className:"w-32",children:[(0,d.jsx)(o,{style:{backgroundImage:"url(https://storage.googleapis.com/".concat(b.images[0],")")}}),(0,d.jsx)(p,{children:b.name}),(0,d.jsxs)(q,{children:[String(b.price).replace(/\B(?=(\d{3})+(?!\d))/g,","),"원"]}),(0,d.jsx)(r,{children:b.createdAt}),(0,d.jsxs)(s,{children:["좋아요 ",b.pickedCount]})]})})}},6015:function(a,b,c){"use strict";c.d(b,{z:function(){return f}});var d=c(7283);function e(){var a,b,c=(a=["\n  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {\n    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {\n      _id\n      name\n      remarks\n      contents\n      price\n      images\n      pickedCount\n      seller {\n        _id\n        name\n      }\n      createdAt\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}var f=(0,d.Ps)(e())},2703:function(a,b,c){"use strict";var d=c(414);function e(){}function f(){}f.resetWarningCache=e,a.exports=function(){function a(a,b,c,e,f,g){if(g!==d){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function b(){return a}a.isRequired=a;var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:f,resetWarningCache:e};return c.PropTypes=c,c}},5697:function(a,b,c){a.exports=c(2703)()},414:function(a){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},7761:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=c(7294),f=h(e),g=h(c(5697));function h(a){return a&&a.__esModule?a:{default:a}}var i=function(a){function b(a){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,b);var c=function(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.scrollListener=c.scrollListener.bind(c),c.eventListenerOptions=c.eventListenerOptions.bind(c),c.mousewheelListener=c.mousewheelListener.bind(c),c}return!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}(b,a),d(b,[{key:"componentDidMount",value:function(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}},{key:"componentDidUpdate",value:function(){if(this.props.isReverse&&this.loadMore){var a=this.getParentElement(this.scrollComponent);a.scrollTop=a.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}},{key:"componentWillUnmount",value:function(){this.detachScrollListener(),this.detachMousewheelListener()}},{key:"isPassiveSupported",value:function(){var a=!1,b={get passive(){a=!0}};try{document.addEventListener("test",null,b),document.removeEventListener("test",null,b)}catch(c){}return a}},{key:"eventListenerOptions",value:function(){return this.props.useCapture,this.isPassiveSupported()?{useCapture:this.props.useCapture,passive:!0}:{passive:!1}}},{key:"setDefaultLoader",value:function(a){this.defaultLoader=a}},{key:"detachMousewheelListener",value:function(){var a=window;!1===this.props.useWindow&&(a=this.scrollComponent.parentNode),a.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}},{key:"detachScrollListener",value:function(){var a=window;!1===this.props.useWindow&&(a=this.getParentElement(this.scrollComponent)),a.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),a.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}},{key:"getParentElement",value:function(a){var b=this.props.getScrollParent&&this.props.getScrollParent();return null!=b?b:a&&a.parentNode}},{key:"filterProps",value:function(a){return a}},{key:"attachScrollListener",value:function(){var a=this.getParentElement(this.scrollComponent);if(this.props.hasMore&&a){var b=window;!1===this.props.useWindow&&(b=a),b.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),b.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),b.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}}},{key:"mousewheelListener",value:function(a){1!==a.deltaY||this.isPassiveSupported()||a.preventDefault()}},{key:"scrollListener",value:function(){var a=this.scrollComponent,b=window,c=this.getParentElement(a),d=void 0;if(this.props.useWindow){var e=document.documentElement||document.body.parentNode||document.body,f=void 0!==b.pageYOffset?b.pageYOffset:e.scrollTop;d=this.props.isReverse?f:this.calculateOffset(a,f)}else d=this.props.isReverse?c.scrollTop:a.scrollHeight-c.scrollTop-c.clientHeight;d<Number(this.props.threshold)&&a&&null!==a.offsetParent&&(this.detachScrollListener(),this.beforeScrollHeight=c.scrollHeight,this.beforeScrollTop=c.scrollTop,"function"==typeof this.props.loadMore&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}},{key:"calculateOffset",value:function(a,b){return a?this.calculateTopPosition(a)+(a.offsetHeight-b-window.innerHeight):0}},{key:"calculateTopPosition",value:function(a){return a?a.offsetTop+this.calculateTopPosition(a.offsetParent):0}},{key:"render",value:function(){var a=this,b=this.filterProps(this.props),c=b.children,d=b.element,e=b.hasMore,g=b.initialLoad,h=b.isReverse,i=b.loader,j=b.loadMore,k=b.pageStart,l=b.ref,m=b.threshold,n=b.useCapture,o=b.useWindow,p=b.getScrollParent,q=function(a,b){var c={};for(var d in a)!(b.indexOf(d)>=0)&&Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}(b,["children","element","hasMore","initialLoad","isReverse","loader","loadMore","pageStart","ref","threshold","useCapture","useWindow","getScrollParent"]);q.ref=function(b){a.scrollComponent=b,l&&l(b)};var r=[c];return e&&(i?h?r.unshift(i):r.push(i):this.defaultLoader&&(h?r.unshift(this.defaultLoader):r.push(this.defaultLoader))),f.default.createElement(d,q,r)}}]),b}(e.Component);i.propTypes={children:g.default.node.isRequired,element:g.default.node,hasMore:g.default.bool,initialLoad:g.default.bool,isReverse:g.default.bool,loader:g.default.node,loadMore:g.default.func.isRequired,pageStart:g.default.number,ref:g.default.func,getScrollParent:g.default.func,threshold:g.default.number,useCapture:g.default.bool,useWindow:g.default.bool},i.defaultProps={element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null},b.default=i,a.exports=b.default},246:function(a,b,c){a.exports=c(7761)}},function(a){a.O(0,[801,774,888,179],function(){return a(a.s=7690)}),_N_E=a.O()}])