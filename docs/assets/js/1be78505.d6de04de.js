"use strict";(self.webpackChunknugetdefense_docs=self.webpackChunknugetdefense_docs||[]).push([[514,608],{1579:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),l=a(8790),r=a(2600),o=a(5979),i=a(6010),c=a(5537),s=a(7462);function d(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(5999),m="collapseSidebarButton_FykI",b="collapseSidebarButtonIcon_DTRl";function p(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",m),onClick:t},n.createElement(d,{className:b}))}var f=a(3366),v=a(9960),h=a(3919),E=a(541),g="menuHtmlItem_fVIQ",_="menuExternalLink_tcZa",k=a(2389),C=["item"],S=["item","onItemClick","activePath","level","index"],I=["item","onItemClick","activePath","level","index"];function N(e){var t=e.item,a=(0,f.Z)(e,C);switch(t.type){case"category":return n.createElement(Z,(0,s.Z)({item:t},a));case"html":return n.createElement(T,(0,s.Z)({item:t},a));default:return n.createElement(M,(0,s.Z)({item:t},a))}}function Z(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,c=e.index,d=(0,f.Z)(e,S),m=t.items,b=t.label,p=t.collapsible,h=t.className,E=t.href,g=function(e){var t=(0,k.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(t),_=(0,o._F)(t,l),C=(0,o.Mg)(E,l),I=(0,o.uR)({initialState:function(){return!!p&&(!_&&t.collapsed)}}),N=I.collapsed,Z=I.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,o.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:_,collapsed:N,setCollapsed:Z});var T=(0,o.fP)(),M=T.expandedItem,y=T.setExpandedItem;function L(e){void 0===e&&(e=!N),y(e?null:c),Z(e)}var A=(0,o.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){p&&M&&M!==c&&A&&Z(!0)}),[p,M,c,Z,A]),n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":N},h)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},n.createElement(v.Z,(0,s.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!E,"menu__link--active":_}),onClick:p?function(e){null==a||a(t),E?L(!1):(e.preventDefault(),L())}:function(){null==a||a(t)},"aria-current":C?"page":void 0,"aria-expanded":p?!N:void 0,href:p?null!=g?g:"#":g},d),b),E&&p&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),L()}})),n.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(x,{items:m,tabIndex:N?-1:0,onItemClick:a,activePath:l,level:r+1})))}function T(e){var t=e.item,a=e.level,l=e.index,r=t.value,c=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(a),c&&g+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,c=(e.index,(0,f.Z)(e,I)),d=t.href,u=t.label,m=t.className,b=(0,o._F)(t,l),p=(0,h.Z)(d);return n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:u},n.createElement(v.Z,(0,s.Z)({className:(0,i.Z)("menu__link",!p&&_,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:a?function(){return a(t)}:void 0},c),u,!p&&n.createElement(E.Z,null)))}var y=["items"];function L(e){var t=e.items,a=(0,f.Z)(e,y);return n.createElement(o.D_,null,t.map((function(e,t){return n.createElement(N,(0,s.Z)({key:t,item:e,index:t},a))})))}var x=(0,n.memo)(L),A="menu_izAj",F="menuWithAnnouncementBar_l2a_";function P(e){var t=e.path,a=e.sidebar,l=e.className,r=function(){var e=(0,o.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,o.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",A,r&&F,l)},n.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(x,{items:a,activePath:t,level:1})))}var w="sidebar_RiAD",B="sidebarWithHideableNavbar_d0QC",D="sidebarHidden_Lg_2",R="sidebarLogo_YUvz";function H(e){var t=e.path,a=e.sidebar,l=e.onCollapse,r=e.isHidden,s=(0,o.LU)(),d=s.navbar.hideOnScroll,u=s.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(w,d&&B,r&&D)},d&&n.createElement(c.Z,{tabIndex:-1,className:R}),n.createElement(P,{path:t,sidebar:a}),u&&n.createElement(p,{onClick:l}))}var W=n.memo(H),z=function(e){var t=e.sidebar,a=e.path,l=(0,o.el)();return n.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(x,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function Y(e){return n.createElement(o.Zo,{component:z,props:e})}var q=n.memo(Y);function U(e){var t=(0,o.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),l&&n.createElement(q,e))}var V=a(4608),G="backToTopButton_RiI4",K="backToTopButtonShow_ssHd";function Q(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function X(){var e=(0,n.useState)(!1),t=e[0],a=e[1],l=(0,n.useRef)(!1),r=Q(),c=r.smoothScrollTop,s=r.cancelScrollToTop;return(0,o.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(l.current)l.current=!1;else{var o=n<r;if(o||s(),n<300)a(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,o.SL)((function(e){e.location.hash&&(l.current=!0,a(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.kM.common.backToTopButton,G,t&&K),type:"button",onClick:function(){return c()}})}var j=a(6775),O={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},J=a(4739);function $(e){var t=e.currentDocRoute,a=e.versionMetadata,l=e.children,c=e.sidebarName,s=(0,o.Vq)(),m=a.pluginId,b=a.version,p=(0,n.useState)(!1),f=p[0],v=p[1],h=(0,n.useState)(!1),E=h[0],g=h[1],_=(0,n.useCallback)((function(){E&&g(!1),v((function(e){return!e}))}),[E]);return n.createElement(n.Fragment,null,n.createElement(J.Z,{version:b,tag:(0,o.os)(m,b)}),n.createElement(r.Z,null,n.createElement("div",{className:O.docPage},n.createElement(X,null),s&&n.createElement("aside",{className:(0,i.Z)(o.kM.docs.docSidebarContainer,O.docSidebarContainer,f&&O.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(O.docSidebarContainer)&&f&&g(!0)}},n.createElement(U,{key:c,sidebar:s,path:t.path,onCollapse:_,isHidden:E}),E&&n.createElement("div",{className:O.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(d,{className:O.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(O.docMainContainer,(f||!s)&&O.docMainContainerEnhanced)},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",O.docItemWrapper,f&&O.docItemWrapperEnhanced)},l)))))}function ee(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,j.LX)(r.pathname,e)}));if(!c)return n.createElement(V.default,null);var s=c.sidebar,d=s?a.docsSidebars[s]:null;return n.createElement(o.FG,{className:(0,i.Z)(o.kM.wrapper.docsPages,o.kM.page.docsDocPage,a.className)},n.createElement(o.qu,{version:a},n.createElement(o.bT,{sidebar:null!=d?d:null},n.createElement($,{currentDocRoute:c,versionMetadata:a,sidebarName:s},(0,l.H)(t,{versionMetadata:a})))))}},4608:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),l=a(2600),r=a(5999),o=a(5979);function i(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(l.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);