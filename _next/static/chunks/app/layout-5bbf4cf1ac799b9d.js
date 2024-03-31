(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8656:function(e,n,t){Promise.resolve().then(t.bind(t,7864))},7864:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return RootLayout}});var o=t(7437);t(2853);var r=t(2265),s=t(4815),i=t(5887),a=t(8409),c=t(9181),l=t(3404);let StarBackground=e=>{let n=(0,r.useRef)(),[t]=(0,r.useState)(()=>l.Qm(new Float32Array(5e3),{radius:1.2}));return(0,s.C)((e,t)=>{n.current.rotation.x-=t/10,n.current.rotation.y-=t/15}),(0,o.jsx)("group",{rotation:[0,0,Math.PI/4],children:(0,o.jsx)(a.wo,{ref:n,positions:t,stride:3,frustumCulled:!0,...e,children:(0,o.jsx)(c.C,{transparent:!0,color:"$fff",size:.002,sizeAttenuation:!0,dethWrite:!1})})})};var main_StarBackground=()=>(0,o.jsx)("div",{className:"w-full h-auto fixed inset-0 z-[20]",children:(0,o.jsx)(i.Xz,{camera:{position:[0,0,1]},children:(0,o.jsx)(r.Suspense,{fallback:null,children:(0,o.jsx)(StarBackground,{})})})});let u=[{name:"LinkedIn",src:"/linkedin.svg",link:"https://www.linkedin.com/company/ba3-co/"},{name:"github",src:"/github.svg",link:"https://github.com/ba3co"},{name:"Facebook",src:"/facebook.svg",link:"https://www.facebook.com/profile.php?id=61551187917374"},{name:"Instagram",src:"/instagram.svg",link:"https://www.instagram.com/ba3.co/"}];var d=t(9962),h=t(8142),m=t(6538),p=t(859),main_Navbar=()=>{let{cursorType:e,cursorChangeHandler:n}=(0,r.useContext)(d.m),{isEncryption:t,encryptionChangeHandler:s}=(0,r.useContext)(h.E),{languageType:i,LanguageChangeHandler:a}=(0,r.useContext)(m.A);return(0,o.jsx)("div",{style:{direction:"ar"==i?"rtl":"ltr"},className:"w-full h-[65px] fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10",children:(0,o.jsxs)("div",{className:"w-full h-full flex flex-row items-center justify-between m-auto px-[10px]",children:[(0,o.jsx)("a",{className:"h-auto w-auto flex flex-row items-center",children:(0,o.jsx)("span",{className:"w-[120px] font-bold ml-[10px] text-gray-300",children:(0,p.Z)("BA3")})}),(0,o.jsxs)("div",{className:"flex flex-row gap-4 items-center justify-between",children:[(0,o.jsx)("a",{onMouseEnter:()=>n("cursor-hover"),onMouseLeave:()=>n("cursor"),onMouseDown:()=>a("ar"),className:"cursor-pointer text-white hover:text-purple-500",children:"en"==i?"عربي":"english"}),u.map(e=>(0,o.jsx)("a",{onMouseEnter:()=>n("cursor-hover"),onMouseLeave:()=>n("cursor"),href:e.link,className:"cursor-pointer px-[5px] ",target:"_blank"},e.name))]})]})})},f=t(9844),components_HideOnTouchscreen=()=>{let{cursorType:e,cursorChangeHandler:n}=(0,r.useContext)(d.m),[t,s]=(0,r.useState)({x:0,y:0}),[i,a]=(0,r.useState)("default");(0,r.useEffect)(()=>{let mouseMove=e=>{s({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",mouseMove),()=>{window.removeEventListener("mousemove",mouseMove)}},[]);let c={default:{x:t.x-16,y:t.y-16}},[l,u]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let checkTouchscreen=()=>{u("ontouchstart"in window||0!=navigator.maxTouchPoints)};return checkTouchscreen(),window.addEventListener("touchstart",checkTouchscreen),window.addEventListener("mousedown",checkTouchscreen),()=>{window.removeEventListener("touchstart",checkTouchscreen),window.removeEventListener("mousedown",checkTouchscreen)}},[]),(0,o.jsx)("div",{children:!l&&(0,o.jsx)(f.E.img,{src:e+".png",className:"cursor",style:{zIndex:100},variants:c,animate:i})})};function RootLayout(e){let{children:n}=e;(0,r.useEffect)(()=>{window.addEventListener("resize",()=>{s(window.innerWidth)})});let[t,s]=(0,r.useState)(window.innerWidth);return(0,o.jsxs)("html",{lang:"en",children:[(0,o.jsxs)("head",{children:[(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,o.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#da532c"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,o.jsx)("body",{className:" bg-[#030014] overflow-y-scroll overflow-x-hidden",children:(0,o.jsx)(r.StrictMode,{children:(0,o.jsx)(h.Z,{children:(0,o.jsx)(m.Z,{children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(main_StarBackground,{}),(0,o.jsx)(main_Navbar,{}),n,(0,o.jsx)(components_HideOnTouchscreen,{})]})})})})})]})}},8142:function(e,n,t){"use strict";t.d(n,{E:function(){return i}});var o=t(7437),r=t(2265),s=t(6538);let i=(0,r.createContext)({isEncryption:!1,encryptionChangeHandler:e=>{console.log(e)}});n.Z=e=>{let[n,t]=(0,r.useState)(!1),{languageType:a,LanguageChangeHandler:c}=(0,r.useContext)(s.A);return(0,o.jsx)(i.Provider,{value:{isEncryption:n,encryptionChangeHandler:e=>{console.log(a),e?document.documentElement.style.setProperty("font-family","Flow Rounded"):"ar"==a?document.documentElement.style.setProperty("font-family","Noto Sans Arabic"):document.documentElement.style.setProperty("font-family","Varela Round"),t(e)}},children:e.children})}},6538:function(e,n,t){"use strict";t.d(n,{A:function(){return i}});var o=t(7437),r=t(2265),s=t(8142);let i=(0,r.createContext)({languageType:"en",LanguageChangeHandler:e=>{console.log(e)}});n.Z=e=>{let[n,t]=(0,r.useState)("en"),{isEncryption:a,encryptionChangeHandler:c}=(0,r.useContext)(s.E);return(0,o.jsx)(i.Provider,{value:{languageType:n,LanguageChangeHandler:()=>{console.log("isEncryption "+a),console.log("languageType "+n),console.log("_"),a?(document.documentElement.style.setProperty("font-family","Flow Rounded"),"ar"==n?t("en"):t("ar")):"ar"==n?(document.documentElement.style.setProperty("font-family","Varela Round"),t("en")):(document.documentElement.style.setProperty("font-family","Noto Sans Arabic"),t("ar")),console.log("isEncryption "+a),console.log("languageType "+n),console.log("+++")}},children:e.children})}},9962:function(e,n,t){"use strict";t.d(n,{m:function(){return s}});var o=t(7437),r=t(2265);let s=(0,r.createContext)({cursorType:"cursor",cursorChangeHandler:e=>{console.log(e)}});n.Z=e=>{let[n,t]=(0,r.useState)("cursor");return(0,o.jsx)(s.Provider,{value:{cursorType:n,cursorChangeHandler:e=>{t(e)}},children:e.children})}},859:function(e,n,t){"use strict";var o=t(2265),r=t(8142),s=t(6538);n.Z=(e,n)=>{let t={"Easiest way to Build Applications":"اسهل طريق لبناء مشروعك",Providing:"نقدم","the best":"الافضل","in security, development and innovation.":"في الحماية و التطوير و الابتكار.",addad:"تمكين مشروعك بحلول إبداعية,مختصون ببناء تطبيقات الجوال و الويب, ضمان تجارب مستخدم سلسة. خدماتنا الأمنية تحمي أصولك الرقمية,بينما تعمل مقاطع الفيديو الجذابة لدينا على تثقيف المستخدمين حول الممارسات الآمنة.","Diving in our Space!":"غُص في فضائنا",BA3:"BA3","About us":"من نحن","Our Space":"فضائنا","Our Projects":"مشاريعنا",ooo:"ooo","Think better with Ba3":"فكر جيدا مع ba3","Making apps with modern technologies":"نصنع تطبيقاتنا ب احدث التقنيات","Never miss a task, deadline or idea":"٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫٫","DIVING IN OUR SPACE!":"غص في فضائنا",Performance:"الاداء","&":"&",Security:"الحماية","Hardened security":"اقوىىىىىىىى حماية",encrypt_des:"بيانات تطبيق محمية بتشفير الطرف للطرف لايمكن لأحد ان يقرأها","(not even us).":"(ولا حتى نحن)",Rights_Reserved:"\xa9 حقوق الطبع والنشر 2024، جميع الحقوق محفوظة.","\uD83D\uDC9C":"\uD83D\uDC9C","Made with":"صنع","by BA3.co":"بواسطة BA3.co",Encryption:"الحماية","":"","":"","":"","":"","":"","":""},{isEncryption:i,encryptionChangeHandler:a}=(0,o.useContext)(r.E),{languageType:c,LanguageChangeHandler:l}=(0,o.useContext)(s.A);return(null==n?void 0:n.withTranslate)!=null&&(null==n?void 0:n.withTranslate)==!1?e:"en"==c?({"Easiest way to Build Applications":"Easiest way to Build Applications",Providing:"Providing","the best":"the best","in security, development and innovation.":"in security, development and innovation.",addad:"Empowering businesses with innovative solutions, we specialize in mobile app and web development, ensuring seamless user experiences. Our cybersecurity services protect your digital assets, while our engaging videos educate users on secure practices.","Diving in our Space!":"Diving in our Space!",BA3:"BA3","About us":"About us","Our Space":"Our Space","Our Projects":"Our Projects",ooo:"ooo","Think better with Ba3":"ooo","Making apps with modern technologies":"Making apps with modern technologies","Never miss a task, deadline or idea":"Never miss a task, deadline or idea","DIVING IN OUR SPACE!":"DIVING IN OUR SPACE!",Performance:"Performance","&":"&",Security:"Security","Hardened security":"Hardened security",encrypt_des:"The contents of your applications are end-to-end encrypted. No one else can read them,","(not even us).":"(not even us).",Rights_Reserved:"\xa9 Copyright 2024, All Rights Reserved.","\uD83D\uDC9C":"\uD83D\uDC9C","Made with":"Made with","by BA3.co":"by BA3.co",Encryption:"Encryption","":"","":"","":"","":"","":"","":"","":""})[e]:i?function(e){var n="";for(var t in e)" "==e[t]?n+=" ":n+="a";return n}(t[e]):t[e]}},2853:function(){}},function(e){e.O(0,[689,102,362,971,472,744],function(){return e(e.s=8656)}),_N_E=e.O()}]);