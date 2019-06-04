(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(n,t,e){"use strict";e.r(t);var r=e(143),i=e.n(r),a=e(0),o=e.n(a),u=e(142),s=e(157),c=e.n(s),l=e(155),d=e(156),h=(e(220),e(7)),f=e.n(h),p=(e(167),function(n){function t(){return n.apply(this,arguments)||this}f()(t,n);var e=t.prototype;return e.componentDidMount=function(){var n=this.refs.canvas;m(n)},e.render=function(){return o.a.createElement("canvas",{ref:"canvas",width:this.props.width,height:this.props.height,className:this.props.className})},t}(o.a.Component)),m=function(n){var t={x:0,y:0};if(n.getContext)var e=n.getContext("2d");window.addEventListener("load",a,!1),window.addEventListener("mousemove",c,!1),window.addEventListener("touchmove",c,!1);var r=null,i=null;function a(){var t=void 0,e=Math.floor(n.width*n.height/3e3);(t=new o).populate(e),i=window.requestAnimationFrame(function n(e){t.update();t.draw();t.connect(120);i=window.requestAnimationFrame(n)})}window.addEventListener("resize",function(){clearTimeout(r),window.cancelAnimationFrame(i),r=setTimeout(a,500)},!1);var o=function(){function r(){this.nodes=[],this.length=void 0}var i=r.prototype;return i.populate=function(t){this.length=t;for(var e=0;e<t;e++){var r=Math.floor(s(0,n.width)),i=Math.floor(s(0,n.height));this.nodes.push(new u(r,i))}},i.update=function(){for(var n=0;n<this.length;n++)this.nodes[n].update()},i.draw=function(){e.fillStyle="rgba(0,0,0,1)",e.fillRect(0,0,n.width,n.height);for(var t=0;t<this.length;t++)this.nodes[t].draw()},i.connect=function(n){for(var r=0;r<this.length-1;r++){this.nodes[r].connections=[];for(var i=0;i<this.length-1;i++){var a=this.nodes[i].x-this.nodes[r].x,o=this.nodes[i].y-this.nodes[r].y,u=Math.sqrt(a*a+o*o),s=this.nodes[i].x-t.x,c=this.nodes[i].y-t.y;this.nodes[r].dToMouse=Math.floor(Math.sqrt(s*s+c*c));var l=n/this.nodes[r].dToMouse*200;n/this.nodes[r].dToMouse*200>n&&(l=n),i>r&&u<l&&this.nodes[r].connections.push(i)}for(var d=0;d<this.nodes[r].connections.length;d++)e.beginPath(),e.moveTo(this.nodes[r].x,this.nodes[r].y),e.lineTo(this.nodes[this.nodes[r].connections[d]].x,this.nodes[this.nodes[r].connections[d]].y),e.strokeStyle="rgba(255,255,255,"+this.nodes[r].depth/4+")",e.stroke()}},r}(),u=function(){function t(n,t){this.x=n,this.y=t,this.radius=2,this.depth=Math.floor(s(1,10))/10}var r=t.prototype;return r.update=function(){var t=(1-this.depth)/5;this.x=this.x+t,(this.x>n.width||this.x<0)&&(this.x=0)},r.draw=function(){var n=1-this.depth;this.x<100&&(n=this.x/10*.05),e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),e.fillStyle="rgba(255, 255, 255,"+n+")",e.fill()},t}();function s(n,t){return Math.random()*(t-n)+n}function c(e){var r=function(n,t){var e=n.getBoundingClientRect(),r=n.width/e.width,i=n.height/e.height;return{x:(t.clientX-e.left)*r,y:(t.clientY-e.top)*i}}(n,e);t=r}requestAnimationFrame(function n(){requestAnimationFrame(n)})};var v=e(144),g=e(145),y=e(168);function b(){var n=i()(["height: 50%;"]);return b=function(){return n},n}function w(){var n=i()(["width: 50%;"]);return w=function(){return n},n}function x(){var n=i()(["\n    position: absolute !important;\n    right: 0px;\n    bottom: 0px;\n    z-index: 1;\n    transform: scaleX(-1);\n\n    width: 100%;\n    ","\n    ","\n"]);return x=function(){return n},n}function k(){var n=i()(["display: block;"]);return k=function(){return n},n}function E(){var n=i()(["\n    display: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    ","\n"]);return E=function(){return n},n}function S(){var n=i()(["background: linear-gradient(to right, "," 0%,rgba(0,0,0,1) 50%);"]);return S=function(){return n},n}function M(){var n=i()(["\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    background: linear-gradient("," 0%,rgba(0,0,0,1) 70%);\n\n    ","\n"]);return M=function(){return n},n}e.d(t,"query",function(){return O});t.default=function(n){return o.a.createElement(l.a,null,o.a.createElement(q,{id:"container"},o.a.createElement(d.a,{theme:g.b,title:"April Gray",subtitles:["Mobile/Web/Software","Developer"]}),o.a.createElement(C,{fluid:n.data.wolf.childImageSharp.fluid}),o.a.createElement(j,{width:window.innerWidth/2,height:window.innerHeight}),o.a.createElement(y.a,{href:"https://unsplash.com/photos/wK_DZlAJJ_Q",author:"Grégoire Bertaud"})))};var O="2722132331",q=u.default.div(M(),g.a.primary,v.b.desktop(S(),g.a.primary)),j=Object(u.default)(p)(E(),v.b.desktop(k())),C=Object(u.default)(c.a)(x(),v.b.desktop(w()),v.c.desktop(b()))},144:function(n,t,e){"use strict";e.d(t,"d",function(){return f}),e.d(t,"a",function(){return m}),e.d(t,"b",function(){return v}),e.d(t,"c",function(){return g});var r=e(143),i=e.n(r),a=(e(75),e(50),e(160),e(49),e(0)),o=e.n(a),u=e(161),s=e.n(u),c=e(142);function l(){var n=i()(["\n      @media (min-height: ","px) {\n        ","\n      }\n    "]);return l=function(){return n},n}function d(){var n=i()(["\n      @media (max-width: ","em) {\n        ","\n      }\n    "]);return d=function(){return n},n}function h(){var n=i()(["\n    @media (min-width: ","em){\n      ","\n    }\n  "]);return h=function(){return n},n}var f={giant:1170,desktop:992,tablet:768,phone_landscape:600,phone:300},p={giant:2e3,desktop:770,tablet:700,phone:450,phone_landscape:300},m=function(n){return o.a.createElement(s.a,{minDeviceWidth:f.desktop},n.children)},v=Object.keys(f).reduce(function(n,t){var e=f[t]/16;return n[t]=function(){return Object(c.css)(h(),e,c.css.apply(void 0,arguments)).join("")},n},{}),g=Object.keys(f).reduce(function(n,t){var e=f[t]/16;return n[t]=function(){return Object(c.css)(d(),e,c.css.apply(void 0,arguments)).join("")},n},{});Object.keys(p).reduce(function(n,t){var e=p[t];return n[t]=function(){return Object(c.css)(l(),e,c.css.apply(void 0,arguments)).join("")},n},{})},145:function(n,t,e){"use strict";e.d(t,"a",function(){return r});e(33);var r={primary:"#49bece",secondary:"#727675",accent:"#c2496a",primary_dark:"#2e6171",primary_light:"#556f7a",menu:"#232a2f"};t.b={fontSizes:[.75,1,2,3,4,5,6],colors:Object.assign({},r),space:[0,4,8,16,32,64,128,256],fonts:{sans:"system-ui, sans-serif",mono:"Oxygen Mono, monospace",cursive:"Sacramento, cursive"},shadows:{small:"0 0 4px rgba(0, 0, 0, .125)",large:"0 0 24px rgba(0, 0, 0, .125)"}}},146:function(n,t,e){var r;n.exports=(r=e(150))&&r.default||r},147:function(n,t,e){"use strict";e.r(t),e.d(t,"graphql",function(){return p}),e.d(t,"StaticQueryContext",function(){return h}),e.d(t,"StaticQuery",function(){return f});var r=e(0),i=e.n(r),a=e(4),o=e.n(a),u=e(141),s=e.n(u);e.d(t,"Link",function(){return s.a}),e.d(t,"withPrefix",function(){return u.withPrefix}),e.d(t,"navigate",function(){return u.navigate}),e.d(t,"push",function(){return u.push}),e.d(t,"replace",function(){return u.replace}),e.d(t,"navigateTo",function(){return u.navigateTo});var c=e(146),l=e.n(c);e.d(t,"PageRenderer",function(){return l.a});var d=e(34);e.d(t,"parsePath",function(){return d.a});var h=i.a.createContext({}),f=function(n){return i.a.createElement(h.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(n){n.exports={data:{site:{siteMetadata:{title:"April Gray | Portfolio | Web & Software Developer"}}}}},150:function(n,t,e){"use strict";e.r(t);e(33);var r=e(0),i=e.n(r),a=e(4),o=e.n(a),u=e(51),s=e(2),c=function(n){var t=n.location,e=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,Object.assign({location:t,pageResources:e},e.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(n,t,e){},153:function(n,t,e){},155:function(n,t,e){"use strict";var r=e(149),i=e(0),a=e.n(i),o=e(4),u=e.n(o),s=e(158),c=e.n(s),l=e(147),d=e(143),h=e.n(d),f=(e(33),e(48),e(7)),p=e.n(f),m=e(159),v=e(144),g=(e(151),e(162)),y=e(163),b=e(164),w=e(165),x=e(166),k=e.n(x),E=e(142),S=e(145);function M(){var n=h()(["\n    list-style: none;\n    bottom: 20px;\n    padding: 0;\n    text-align: center;\n\n    & li {\n        margin-top: 10px;\n        cursor: pointer;\n\n        & a {\n            color: ",";\n        }\n\n        &:hover {\n            color: ",";\n        }\n    }\n"]);return M=function(){return n},n}var O=[w.linkedin,b.github,g.twitter,y.envelope],q=["https://www.linkedin.com/in/aprgray5/","https://github.com/agray5","https://twitter.com/aprgray5","mailto:aprgray5@gmail.com"],j=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))||this).state={isOpen:!1},t}p()(t,n);var e=t.prototype;return e.componentDidMount=function(){this.state.setState({isOpen:window.innerWidth>v.d.phone})},e.handleStateChange=function(n){this.setState({isOpen:n.isOpen})},e.render=function(){var n=this;return a.a.createElement(m.slide,Object.assign({className:"sideBar"},this.props,{onStateChange:function(t){return n.handleStateChange(t)},isOpen:this.state.isOpen,noOverlay:!0,width:100}),a.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),a.a.createElement("a",{id:"about",className:"menu-item",href:"/about"},"About"),a.a.createElement("a",{id:"portfolio",className:"menu-item",href:"/portfolio"},"Works"),a.a.createElement("a",{id:"contact",className:"menu-item",href:"/contact"},"Contact"),a.a.createElement(C,{theme:S.b},O.map(function(n,t){return a.a.createElement("li",{key:t},a.a.createElement("a",{href:q[t],target:"_blank"},a.a.createElement(k.a,{icon:n,size:24})))})))},t}(i.Component),C=E.default.ul(M(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.accent}),A=j,T=(e(153),function(n){var t=n.children;return a.a.createElement(l.StaticQuery,{query:"755544856",render:function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:n.site.siteMetadata.title,meta:[{charset:"utf-8",content:"text/html"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},{name:"description",content:"Hi, I'm April Gray. I build applications for web, mobile, and desktop use."}]},a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Oxygen+Mono|Sacramento",rel:"stylesheet"}),a.a.createElement("html",{lang:"en"})),a.a.createElement(A,{siteTitle:n.site.siteMetadata.title}),t)},data:r})});T.propTypes={children:u.a.node.isRequired};t.a=T},156:function(n,t,e){"use strict";var r=e(143),i=e.n(r),a=(e(48),e(7)),o=e.n(a),u=e(0),s=e.n(u),c=e(169),l=e(142),d=e(144),h=e(167),f=e.n(h);function p(){var n=i()(["font-size: ","rem;"]);return p=function(){return n},n}function m(){var n=i()(["\n  font-family: ",";\n  color: ",";\n  text-align: center;\n  z-index: 2;\n\n  ","\n"]);return m=function(){return n},n}function v(){var n=i()(["font-size: ","rem;"]);return v=function(){return n},n}function g(){var n=i()(["\n  font-family: ",";\n  color: ",";\n  text-align: center;\n  z-index: 2;\n\n  ","\n"]);return g=function(){return n},n}function y(){var n=i()(["margin-top: 5%;"]);return y=function(){return n},n}function b(){var n=i()(["margin-top: 20%;"]);return b=function(){return n},n}function w(){var n=i()(["width: 55%;transform: translatey(50%);"]);return w=function(){return n},n}function x(){var n=i()(["\n    margin-top: 5%;\n    "," \n    ","\n    ","\n"]);return x=function(){return n},n}var k=function(n){function t(){return n.apply(this,arguments)||this}return o()(t,n),t.prototype.render=function(){var n=this;return s.a.createElement(E,{flexDirection:"column",className:"titleContainer"},s.a.createElement(S,{theme:this.props.theme},this.props.title),this.props.subtitles&&this.props.subtitles.map(function(t,e){return s.a.createElement(M,{theme:n.props.theme,key:e}," ",t," ")}))},t}(s.a.Component);t.a=k;var E=Object(l.default)(c.Flex)(x(),d.b.desktop(w()),d.b.phone(b()),d.b.desktop(y())),S=l.default.h1(g(),function(n){return n.theme.fonts.cursive},function(n){return n.theme.colors.primary},function(n){return d.b.tablet(v(),n.theme.fontSizes[6])}),M=l.default.h2(m(),function(n){return n.theme.fonts.mono},function(n){return f()(n.theme.colors.primary)},function(n){return d.b.tablet(p(),n.theme.fontSizes[2])})},168:function(n,t,e){"use strict";var r=e(143),i=e.n(r),a=e(7),o=e.n(a),u=e(0),s=e.n(u),c=e(142),l=e(145);function d(){var n=i()(["\n    z-index: 100;\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    \n    background-color: ","\n    color: ",";\n    text-decoration:none;\n    padding:4px 6px;\n    font-family:-apple-system, BlinkMacSystemFont, 'San Francisco', \n                'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, \n                'Segoe UI', Arial, sans-serif;\n    font-size:12px;\n    font-weight:bold;\n    line-height:1.2;\n    display:inline-block;\n    border-radius:3px\n\n    & span {\n        display:inline-block;\n        padding:2px 3px;\n\n    }\n"]);return d=function(){return n},n}var h=function(n){function t(){return n.apply(this,arguments)||this}return o()(t,n),t.prototype.render=function(){return s.a.createElement(f,{href:this.props.href,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",null," Art by ",this.props.author))},t}(s.a.Component),f=c.default.a(d(),l.a.menu,l.a.primary);t.a=h},220:function(n,t,e){var r=e(6);r(r.P,"Array",{fill:e(221)}),e(53)("fill")},221:function(n,t,e){"use strict";var r=e(25),i=e(76),a=e(26);n.exports=function(n){for(var t=r(this),e=a(t.length),o=arguments.length,u=i(o>1?arguments[1]:void 0,e),s=o>2?arguments[2]:void 0,c=void 0===s?e:i(s,e);c>u;)t[u++]=n;return t}}}]);
//# sourceMappingURL=component---src-pages-index-js-0a76bdcc9cae0acea6da.js.map