(this.webpackJsonpterminal=this.webpackJsonpterminal||[]).push([[0],{1:function(e,t,n){e.exports={container:"ConsoleTest_container__10tZG",terminal:"ConsoleTest_terminal__2OiKZ",titlebar:"ConsoleTest_titlebar__1Dfwu",light:"ConsoleTest_light__n5_sY",tabs:"ConsoleTest_tabs__1dGGo",radio:"ConsoleTest_radio__KFNgZ",tab:"ConsoleTest_tab__2D6xA",active:"ConsoleTest_active__oI03b",code:"ConsoleTest_code__3aQid"}},13:function(e,t,n){e.exports={matrix:"ColourTest_matrix__3x6Lm",cell:"ColourTest_cell__opYFy"}},14:function(e,t,n){e.exports={container:"ThemeSelect_container__27kX6",select:"ThemeSelect_select__fVlm5"}},19:function(e,t,n){e.exports={container:"PreviewChoice_container__2q45T"}},2:function(e,t,n){e.exports={container:"ThemePreview_container__2JwIk",name:"ThemePreview_name__1s4Gg",button:"ThemePreview_button__3TR7c",copied:"ThemePreview_copied__1nI60",mymove:"ThemePreview_mymove__31ZFe",loading:"ThemePreview_loading__1o8br",share:"ThemePreview_share__2OTNE"}},24:function(e,t,n){e.exports={container:"ShadeChoice_container__10lHy"}},27:function(e,t,n){e.exports=n(45)},32:function(e,t,n){},4:function(e,t,n){e.exports={title:"Header_title__3pnEU",paragraph:"Header_paragraph__3hwbP",download:"Header_download__3dqhv"}},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),i=n.n(o),c=(n(32),n(11)),l=n.n(c),h=n(18),s=n(3),m=n(9),u=n(12),d=n(13),g=n.n(d),b=n(10),p=["background","black","red","green","yellow","blue","purple","cyan","white","background"],f=["black","brightBlack","red","brightRed","green","brightGreen","yellow","brightYellow","blue","brightBlue","purple","brightPurple","cyan","brightCyan","white","brightWhite"],w=["name","black","red","green","yellow","blue","purple","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightPurple","brightCyan","brightWhite","background","foreground"],y={name:"",black:"",red:"",green:"",yellow:"",blue:"",purple:"",cyan:"",white:"",brightBlack:"",brightRed:"",brightGreen:"",brightYellow:"",brightBlue:"",brightPurple:"",brightCyan:"",brightWhite:"",background:"",foreground:""},v=function(e){return a.a.createElement("section",{className:g.a.matrix,"data-testid":"colourtest"},f.map((function(t,n){return p.map((function(r,o){return a.a.createElement("div",{key:n+" "+o,className:g.a.cell,style:{background:e.theme?e.theme[r]:"",color:e.theme?e.theme[t]:""}},"gYw")}))})))},k=n(1),_=n.n(k),T=[{id:"cra/compiled",name:"CRA - compiled",markup:"<green>Compiled successfully!</green>\n\nYou can now view <brightWhite>terminal</brightWhite> in the browser. \n\n  <brightWhite>Local:</brightWhite>           http://localhost:<brightWhite>3000</brightWhite>/themes\n  <brightWhite>On Your Network:</brightWhite> http://192.168.86.37:<brightWhite>3000</brightWhite>/themes \n  \nNote that the development build is not\noptimized. \nTo create a production build, use <cyan>yarn build</cyan>.",defaultColour:"foreground"},{id:"cypress/run",name:"Cypress - run",markup:"<foreground>Running:</foreground>  <brightBlack>themes.spec.js                            (1 of 1)</brightBlack>\n\n<foreground>Windows Terminal Themes - big screen</foreground>\n<cyan>- should download all themes using download button</cyan>\n<green>\u221a</green> should show dark theme by default <red>(705ms)</red>\n    \n<green>(</green><brightGreen>Results</brightGreen><green>)</green>\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Tests:        <green>18</green>                                         \u2502\n\u2502 Duration:     <green>10 seconds</green>                                 \u2502\n\u2502 Spec Ran:     <green>themes.spec.js</green>                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n",defaultColour:"brightBlack"},{id:"jest/failed",name:"Jest - failed",markup:"<foreground:brightRed> FAIL </foreground:brightRed> src/components/Home/Home.test.js (<white:red>17.523s</white:red>)\n  <red>\u25cf should return theme name from search params</red>\n  \n  expect(<red>received</red>).toBe(<green>expected</green>) // Object.is equality\n  \n    Expected: <green>\"synthwave-everything</green><background:brightGreen>error\"</background:brightGreen>\n    Received: <red>\"synthwave-everything\"</red>\n    \n        218 |\n        219 | it(<green>'should return theme name from search params'</green>, () <yellow>=></yellow> {\n      > 220 |   expect(returnInitialTheme(<brightGreen>'?theme=synthwave-everything'</brightGreen>)).toBe(\n            |                                                             ^\n        221 |     <green>'synthwave-everythingerror'</green>\n        222 |   );\n        223 |   expect(returnInitialTheme(<green>'?wrong=synthwave-everything'</green>)).toBe(<cyan>null</cyan>);\n        \n        at Object.toBe (<cyan>src/components/Home/Home.test.js</cyan>:220:61)\n  \n<brightWhite>Test Suites:</brightWhite> <brightRed>1 failed</brightRed>, <brightGreen>1 passed</brightGreen>, 2 total\n<brightWhite>Tests:</brightWhite>       <brightRed>1 failed</brightRed>, <brightYellow>4 skipped</brightYellow>, <brightGreen>2 passed</brightGreen>, 7 total\n<brightWhite>Snapshots:</brightWhite>   0 total\n<brightWhite>Time:</brightWhite>        <brightYellow>22.5s</brightYellow>\nRan all test suites.\n\nWatch Usage: Press w to show more.\n    ",defaultColour:"white"},{id:"jest/runnning",name:"Jest - running",markup:"<brightBlack:brightYellow>  RUNS  </brightBlack:brightYellow> src/components/Home/<brightWhite>Home.test.js</brightWhite>\n<brightBlack:brightYellow>  RUNS  </brightBlack:brightYellow> src/<brightWhite>App.test.tsx</brightWhite>\n    \n<brightWhite>Test Suites:</brightWhite> 0 of 2 total\n<brightWhite>Tests:</brightWhite>       0 total\n<brightWhite>Snapshots:</brightWhite>   0 total\n<brightWhite>Time:</brightWhite>        4s\n\n<background:green>         </background:green><background:foreground>                             </background:foreground>\n\n    ",defaultColour:"foreground"}],E=n(25),C={defaultColour:"foreground",markup:"",id:"default",name:"default"},S=function(e){var t,n,o=Object(r.useState)(T[0].id),i=Object(s.a)(o,2),c=i[0],l=i[1],h=null!==(t=T.find((function(e){return e.id===c})))&&void 0!==t?t:C;return a.a.createElement("section",{className:_.a.container,"data-testid":"consoletest"},a.a.createElement("div",{className:_.a.terminal},a.a.createElement("div",{className:"".concat(_.a.titlebar," ").concat(e.theme.isDark?"":_.a.light)},a.a.createElement("div",{className:_.a.tabs},T.map((function(e){return a.a.createElement("div",{key:e.id,className:"".concat(_.a.tab," ").concat(c===e.id?_.a.active:"")},a.a.createElement("input",{className:_.a.radio,id:e.id,name:"tab",type:"radio",value:e.id,checked:e.id===h.id,onChange:function(){l(e.id)}}),a.a.createElement("label",{htmlFor:e.id},a.a.createElement("span",null,e.name)))})))),a.a.createElement("code",{"data-testid":"markup",className:_.a.code,style:{color:e.theme[(e.theme,h.defaultColour)]}},(n=e.theme,h.markup.split(/(<[^/>]+?>[^<]+<[^>]+?>)/g).map((function(e,t){var r=Object(E.a)(e.matchAll(/<(.+?)>(.+)<\/(.+)>/g))[0];if(null!=r){var o=r[1].split(":"),i=o[0],c=o.length>0?o[1]:null,l=r[2];return a.a.createElement("span",{key:t,style:{color:n[i],background:c?n[c]:void 0}},l)}return e}),[])))))},W=n(2),N=n.n(W),j=function(e){var t=Object(r.useState)(!1),n=Object(s.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(!1),l=Object(s.a)(c,2),h=l[0],d=l[1];return e.theme?a.a.createElement("section",{className:N.a.container,style:{background:e.backgroundColour}},a.a.createElement("h2",{"data-testid":"selected-title",className:N.a.name,style:{color:e.primaryColour}},e.theme.name),"colour"===e.previewType?a.a.createElement(v,{theme:e.theme}):a.a.createElement(S,{theme:e.theme}),a.a.createElement("div",{className:N.a.buttons},a.a.createElement("button",{"data-text":o?"Copied!":"Copy Theme",className:"".concat(N.a.button).concat(o?" ".concat(N.a.copied):""),style:{color:e.theme.background,background:e.primaryColour},onClick:function(){var t;!o&&e.theme&&(i(!0),u.a(JSON.stringify((t=e.theme,w.reduce((function(e,n){return Object(m.a)({},e,{},Object(b.a)({},n,t[n]))}),y)),null,2)),setTimeout((function(){i(!1)}),500))}},"Copy Theme"),a.a.createElement("button",{"data-text":h?"Copied!":"Share Theme",className:"".concat(N.a.button," ").concat(N.a.share," ").concat(h?" ".concat(N.a.copied):""),style:{color:e.primaryColour,borderColor:e.primaryColour,background:e.theme.background},onClick:function(){h||(d(!0),setTimeout((function(){null!=e.theme&&u.a("".concat(window.location.origin).concat(window.location.pathname,"?theme=").concat(encodeURIComponent(e.theme.name))),d(!1)}),500))}},"Share theme"))):a.a.createElement("div",{style:{background:e.backgroundColour,color:e.primaryColour},className:N.a.loading},"Loading...")},O=n(19),R=n.n(O),x=function(e){return a.a.createElement("section",{className:R.a.container},"Choose preview:",a.a.createElement("label",{htmlFor:"console"},a.a.createElement("input",{name:"preview",type:"radio",id:"console",value:"console",checked:"console"===e.previewType,onChange:function(){e.dispatch({type:"PREVIEW",previewType:"console"})}}),"Console"),a.a.createElement("label",{htmlFor:"colour"},a.a.createElement("input",{name:"preview",type:"radio",id:"colour",value:"colour",checked:"colour"===e.previewType,onChange:function(){e.dispatch({type:"PREVIEW",previewType:"colour"})}}),"Colours"))},H=n(7),B=n.n(H),D=function(e){var t=e.scrollToLabel;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement("fieldset",{className:B.a.container,name:"theme","data-testid":"theme-list"},e.themeNames.map((function(t){return a.a.createElement("div",{key:t,style:{color:t===e.activeTheme?e.backgroundColour:"",background:t===e.activeTheme?e.primaryColour:""},className:"".concat(B.a.theme)},a.a.createElement("input",{type:"radio",id:t,name:"theme",value:t,checked:t===e.activeTheme,onChange:function(){e.dispatch({type:"SET",theme:t})}}),a.a.createElement("label",{className:B.a.label,htmlFor:t},a.a.createElement("span",{className:B.a.tabbed},t)))})))},G=n(14),P=n.n(G),I=function(e){return a.a.createElement("label",{className:P.a.container,htmlFor:"theme-select"},"Change theme:"," ",a.a.createElement("select",{id:"theme-select",className:P.a.select,value:e.activeTheme,onChange:function(t){t.preventDefault(),t.target&&e.dispatch({type:"SET",theme:t.target.value})}},e.themeNames.map((function(e){return a.a.createElement("option",{value:e,key:e},e)}))))},L=n(26),Y=n(20),A=n(4),F=n.n(A),U=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"/themes",className:F.a.title},a.a.createElement("h1",{style:{color:e.primaryColour}},"Windows Terminal Themes")),a.a.createElement("p",{className:F.a.paragraph},"Themes for"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.microsoft.com/en-us/p/windows-terminal-preview/9n0dx20hk701"},"Windows Terminal (Preview)")),a.a.createElement("p",{className:F.a.paragraph},"For how to use the themes see the"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/atomcorp/themes#how-to-use-the-themes"},"help section on GitHub")),a.a.createElement("p",{className:F.a.paragraph},"The themes come from"," ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mbadolato/iTerm2-Color-Schemes"},"iTerm2 Color Schemes"),", so thanks to them."),a.a.createElement("p",{className:F.a.paragraph},a.a.createElement("button",{className:F.a.download,onClick:function(){var t=new Blob([JSON.stringify(e.themes.map((function(e){e.isDark;return Object(L.a)(e,["isDark"])})),null,2)],{type:"application/json"});Object(Y.saveAs)(t,"windows-terminal-themes.json",{autoBom:!0})}},"Download all the themes")," | ",a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/atomcorp/themes"},"Github page")))},z=n(21),J=n.n(z),Z=n(22),K=n(23),V=["black","red","green","yellow","blue","purple","cyan","white"],q=function(e){if(null==e)return"";var t=V.sort((function(){return Math.random()-.5})).find((function(t){return J.a.ratio(e[t],e.background)>4.5}));return null!=t?e[t]:e[V[0]]},Q="LIGHT",M="DARK",X={themes:[],filteredThemes:[],activeTheme:"",isSmallScreenSize:window.innerWidth<768,themeShade:M,primaryColour:"#fded02",backgroundColour:"#090300",previewType:"console"},$=function(e,t){return Object(K.a)(e,(function(n){var r;switch(t.type){case"LOAD":if(n.themes=t.themes,null!=t.initialTheme){var a=t.themes.find((function(e){return e.name===t.initialTheme}));if(null!=a){n.filteredThemes=t.themes.filter((function(e){return e.isDark===a.isDark})),n.activeTheme=a.name,n.themeShade=a.isDark?"DARK":"LIGHT",n.primaryColour=q(a),n.backgroundColour=a.background;break}}n.filteredThemes=t.themes.filter((function(e){return e.isDark})),n.activeTheme=n.filteredThemes[0].name;break;case"SET":n.activeTheme=t.theme,(r=e.themes.find((function(e){return e.name===t.theme})))&&(n.primaryColour=q(r),n.backgroundColour=r.background);break;case"SIZE":n.isSmallScreenSize=t.isSmallScreenSize;break;case"SHADE":n.themeShade=t.themeShade,n.themeShade===M&&(n.filteredThemes=e.themes.filter((function(e){return e.isDark}))),n.themeShade===Q&&(n.filteredThemes=e.themes.filter((function(e){return!e.isDark}))),n.activeTheme=n.filteredThemes[0].name,(r=e.themes.find((function(e){return e.name===n.filteredThemes[0].name})))&&(n.primaryColour=q(r),n.backgroundColour=r.background);break;case"PREVIEW":n.previewType=t.previewType}}))},ee=n(24),te=n.n(ee),ne=function(e){return a.a.createElement("section",{className:te.a.container},"Choose type:",a.a.createElement("label",{htmlFor:"dark"},a.a.createElement("input",{name:"shade",type:"radio",id:"dark",value:M,checked:M===e.themeShade,onChange:function(){e.dispatch({type:"SHADE",themeShade:M})}}),"Dark"),a.a.createElement("label",{htmlFor:"light"},a.a.createElement("input",{name:"shade",type:"radio",id:"light",value:Q,checked:Q===e.themeShade,onChange:function(){e.dispatch({type:"SHADE",themeShade:Q})}}),"Light"))},re=n(5),ae=n.n(re),oe=function(e){var t=Object(r.useRef)(null),n=Object(r.useReducer)($,Object(m.a)({},X,{},{isSmallScreenSize:window.innerWidth<768})),o=Object(s.a)(n,2),i=o[0],c=o[1],l=function(e){if(e.length>0){var t=new URLSearchParams(e).get("theme");if(null!=t)return t}return null}(window.location.search),h=Object(r.useCallback)((function(){if(null!=l&&window.innerWidth>=768&&null!=t.current){var e=t.current.querySelector('[for="'.concat(l,'"]'));if(null!=e){var n=e.getBoundingClientRect(),r=t.current.offsetHeight,a=t.current.scrollHeight;t.current.scrollTop=n.top>a-r?n.top:n.top-r/2}}}),[l]);Object(r.useEffect)((function(){c({type:"LOAD",themes:e.themes,initialTheme:l});var t=function(e){return new Z.a((function(t){var n=t[0].contentRect.width;n>768?e({type:"SIZE",isSmallScreenSize:!1}):n<768&&e({type:"SIZE",isSmallScreenSize:!0})}))}(c);return t.observe(document.body),function(){t.unobserve(document.body)}}),[e.themes,l]);var u=i.themes.find((function(e){return e.name===i.activeTheme})),d=i.filteredThemes.map((function(e){return e.name}));return a.a.createElement("section",{className:ae.a.container},a.a.createElement("aside",{ref:t,style:{background:i.backgroundColour},className:"".concat(ae.a.sidebar," ").concat(i.themeShade===M?ae.a.dark:ae.a.light)},a.a.createElement(U,{primaryColour:i.primaryColour,themes:i.themes}),a.a.createElement(x,{dispatch:c,previewType:i.previewType}),a.a.createElement(ne,{dispatch:c,themeShade:i.themeShade}),i.isSmallScreenSize?a.a.createElement(I,{themeNames:d,activeTheme:i.activeTheme,dispatch:c}):d.length>0&&a.a.createElement(D,{themeNames:d,activeTheme:i.activeTheme,dispatch:c,primaryColour:i.primaryColour,backgroundColour:i.backgroundColour,scrollToLabel:h})),a.a.createElement("section",{className:ae.a.content},a.a.createElement(j,{previewType:i.previewType,theme:u,primaryColour:i.primaryColour,backgroundColour:i.backgroundColour})))},ie=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.atomcorp.dev","/api/v1/themes"),{});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.length<1?a.a.createElement("div",null,"Loading"):a.a.createElement(oe,{themes:n})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports={container:"Home_container__nWlbU",sidebar:"Home_sidebar__2ovA5",content:"Home_content__1T6Qf",light:"Home_light__2G6mS",dark:"Home_dark__3UboT"}},7:function(e,t,n){e.exports={container:"ThemeList_container__uUIR5",theme:"ThemeList_theme__32ST6",label:"ThemeList_label__UKr3W",active:"ThemeList_active__1cVNb"}}},[[27,1,2]]]);
//# sourceMappingURL=main.89b8917b.chunk.js.map