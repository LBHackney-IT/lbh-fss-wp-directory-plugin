(this["webpackJsonplbh-fss-public-frontend"]=this["webpackJsonplbh-fss-public-frontend"]||[]).push([[0],{107:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-700.e5111cab.ttf"},108:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-700.1f85e92d.woff"},109:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-700.0edb7628.woff2"},110:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-regular.049a929c.ttf"},111:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-regular.de0869e3.woff"},112:function(e,n,t){e.exports=t.p+"static/media/open-sans-v17-latin-regular.33543c5c.woff2"},115:function(e,n,t){e.exports=t(312)},312:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(103),o=t.n(c),i=t(3),l=t.n(i),u=t(5),s=t(4),d=t(2),f=t(15),p=t.n(f),m=t(137),b=t(197),g=(t(219),{retrieveServices:function(e){return Object(u.a)(l.a.mark((function n(){var t,r,a,c,o,i,u,s,d,f,m;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.sort,r=void 0===t?"name":t,a=e.direction,c=void 0===a?"asc":a,o=e.offset,i=void 0===o?0:o,u=e.limit,s=void 0===u?10:u,d=e.search,f=void 0===d?"":d,n.prev=1,n.next=4,p.a.get("http://localhost:9000/api/services",{params:{sort:r,direction:c,offset:i,limit:s,search:f}});case 4:return m=n.sent,n.abrupt("return",m.data.entries);case 8:return n.prev=8,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},retrieveServicesByCategory:function(e){return Object(u.a)(l.a.mark((function n(){var t,r,a,c,o,i,u,s,d,f,g,h,v,x,E,O;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.sort,r=void 0===t?"name":t,a=e.direction,c=void 0===a?"asc":a,o=e.offset,i=void 0===o?0:o,u=e.taxonomyId,s=void 0===u?"":u,d=e.limit,f=void 0===d?151:d,g=e.search,h=void 0===g?"":g,n.prev=1,n.next=4,p.a.get("http://localhost:9000/api/services",{params:{sort:r,direction:c,offset:i,taxonomyId:s,limit:f,search:h}});case 4:return v=n.sent,x=null,s?(E=function(e){return m(e,{id:s})},O=b(v.data.entries,(function(e){return e.categories.some(E)})),console.log("allServices"),console.log(O),x=O):x=v.data.entries,n.abrupt("return",x);case 10:return n.prev=10,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},getService:function(e){return Object(u.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.get("http://localhost:9000/api/services/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:return n.prev=7,n.t0=n.catch(0),console.error(n.t0),n.abrupt("return",!1);case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}),h={retrieveCategories:function(e){return Object(u.a)(l.a.mark((function n(){var t,r,a,c,o,i,u,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.sort,r=void 0===t?"weight":t,a=e.direction,c=void 0===a?"asc":a,o=e.id,i=void 0===o?"":o,n.prev=1,n.next=4,p.a.get("http://localhost:9000/api/taxonomy/category",{params:{sort:r,direction:c,id:i}});case 4:return u=n.sent,s=null,s=i?u.data.entries.filter((function(e){return e.id===i})):u.data.entries,n.abrupt("return",s);case 10:return n.prev=10,n.t0=n.catch(1),console.error(n.t0),n.abrupt("return",!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()}},v=t(1),x=t(6);function E(){var e=Object(d.a)(["\n        padding: 30px 15px 260px;\n        overflow-y: scroll;\n        height: 100vh;\n    "]);return E=function(){return e},e}function O(){var e=Object(d.a)(["\n    padding: 30px 15px 0;\n    ","\n"]);return O=function(){return e},e}var j=v.d.div(O(),Object(x.a)("md")(E())),y=t(52),w="#025EA6",k="#00664F",F="#DF1995",S="#ffffff",C=t(51),A=t.n(C);function N(){var e=Object(d.a)(["\n    background: #F8F8F8;\n    border: 1px solid #DEE0E2;\n    box-sizing: border-box;\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);\n    border-radius: 3px;\n    margin-bottom: 10px;\n    cursor: pointer;\n\n    .card--container {\n        padding: 15px 10px;\n    }\n    h1, h2, h3, h4 {\n        margin-top: 0;\n        font-weight: normal;\n        font-size: 19px;\n        margin-bottom: 5px;\n        font-size: 19px;\n    }\n    p {\n        margin-top: 0;\n        margin-bottom: 0;\n        font-size: 14px;\n        color: #525A5B;\n    }\n\n    ",";\n"]);return N=function(){return e},e}var L={categoryCard:function(){return'\n        [data-category-icon="loneliness-or-isolation"] {\n            i {\n                background-color: #DF1995;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="anxiety-or-mental-health"] {\n            i {\n                background-color: #FF6A13;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="safe-and-healthy-body"] {\n            i {\n                background-color: #84BD00;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="exercise-and-wellbeing"] {\n            i {\n                background-color: #E03C31;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="arts-and-creativity"] {\n            i {\n                background-color: #025EA6;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="food-or-shopping"] {\n            i {\n                background-color: #328472;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="faith-led-activities"] {\n            i {\n                background-color: #0085CA;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="money-advice"] {\n            i {\n                background-color: #81312F;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="employment-advice"] {\n            i {\n                background-color: #8031A7;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="housing-advice"] {\n            i {\n                background-color: #2B8CC4;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n        [data-category-icon="immigration-advice"] {\n            i {\n                background-color: #00664F;\n                &::before {\n                    content: "\f007";\n                }\n            }\n        }\n\n        i {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: '.concat(F,';\n            height: 50px;\n            width: 50px;\n            padding: 5px;\n            border-radius: 100%;\n            margin-right: 10px;\n            opacity: 0.75;\n            &::before {\n                font-family: "Font Awesome 5 Free";\n                content: "\f007";\n                font-size: 30px;\n                color: #fff;\n            }\n        }\n        .hideVisually {\n            border: 0;\n            clip: rect(0 0 0 0);\n            height: 1px;\n            margin: -1px;\n            overflow: hidden;\n            padding: 0;\n            position: absolute;\n            whiteSpace: nowrap;\n            width: 1px;\n        }\n        .card--container {\n            display: flex;\n            flex-direction: row;\n            &::after {\n                content: url(').concat(A.a,");\n                align-self: center;\n                margin-left: auto;\n            }\n        }\n        .card--content {\n            margin-right: 10px;\n        }\n    ")},serviceCard:function(){return"\n        h1, h2, h3, h4 {\n            font-size: 24px;\n            font-weight: bold;\n            margin-bottom: 10px;\n        }\n        p {\n            font-size: 16px;\n        }\n        .service--distance {\n            margin-top: 15px;\n            color: #000;\n        }\n        img {\n            width: 100%;\n            height: auto;\n        }\n    "}},_=v.d.div(N(),Object(y.applyStyleModifiers)(L)),z=function(e){var n=e.service,t=e.onClick,r="";n.images&&n.images.medium.length&&(r=n.images.medium);return a.a.createElement(_,{modifiers:"serviceCard",id:n.id,className:"card",onClick:function(e){t(n.id)}},r.length?a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:r,alt:n.name})):"",a.a.createElement("div",{className:"card--container"},a.a.createElement("h4",null,n.name),a.a.createElement("p",null,n.description),a.a.createElement("p",{className:"service--distance"},"Distance: ",a.a.createElement("a",{href:"#"},"TBC"))))},P=Object(r.createContext)(null),D=function(e){var n=e.category,t=e.onClick,c=Object(r.useContext)(P),o=c.urlParams,i=(c.setUrlParams,Object.entries(o)),l=n.name.replaceAll(" ","-").toLowerCase();return a.a.createElement(_,{modifiers:"categoryCard",id:n.id,className:"card",onClick:function(e){void 0!==i[0]&&"category_explorer"==i[0][0]&&""!==i[0][1]?e.preventDefault():t(n.id)}},a.a.createElement("div",{className:"card--container","data-category-icon":l},a.a.createElement("div",{className:"icon-container"},a.a.createElement("i",null),a.a.createElement("span",{className:"hideVisually"},"Icon for ".concat(n.name," "))),a.a.createElement("div",{className:"card--content"},a.a.createElement("h4",null,n.name),a.a.createElement("p",null,n.description))))};function B(){var e=Object(d.a)(['\n    border: 0;\n    padding: 10px 15px;\n    background: transparent;\n    color: #fff;\n    font-size: 24px;\n    cursor: pointer;\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\f007";\n        margin-right: 10px;\n    }\n'],['\n    border: 0;\n    padding: 10px 15px;\n    background: transparent;\n    color: #fff;\n    font-size: 24px;\n    cursor: pointer;\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\\f007";\n        margin-right: 10px;\n    }\n']);return B=function(){return e},e}var I=v.d.button(B()),M=function(){return a.a.createElement(I,null,"Back")};function q(){var e=Object(d.a)(['\n    background: #005E48;\n    color: #fff;\n    border: 0;\n    padding: 10px 15px;\n    cursor: pointer;\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\f007";\n        margin-right: 10px;\n    }\n'],['\n    background: #005E48;\n    color: #fff;\n    border: 0;\n    padding: 10px 15px;\n    cursor: pointer;\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\\f007";\n        margin-right: 10px;\n    }\n']);return q=function(){return e},e}var R=v.d.button(q()),U=function(){return a.a.createElement(R,null,"Postcode")};function V(){var e=Object(d.a)(["\n    display: flex;\n    background: #00664F;\n    justify-content: space-between;\n    border-bottom: 1px solid #7FB2A7;\n"]);return V=function(){return e},e}var T=v.d.div(V()),W=function(){return a.a.createElement(T,null,a.a.createElement(M,null),a.a.createElement(U,null))},Z='"Open Sans", monospace',J=t(8);function $(){var e=Object(d.a)(["\n  display: block;\n  margin-bottom: 30px;\n  color: ",";\n  background-color: ",";\n  border: none;\n  padding: 13px 57px;\n  font-size: 19px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return $=function(){return e},e}var H=v.d.button($(),S,k,Object(J.a)(.1,k)),Y=function(e){var n=e.type,t=e.label,r=e.disabled,c=e.onClick,o=void 0===c?function(){}:c,i=e.className;return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{type:n,disabled:r,onClick:o,className:i},a.a.createElement("span",null,t)))};function G(){var e=Object(d.a)(["\n    background: #00664F;\n    border: 1px solid #BFC1C3;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n    margin-left: 10px;\n    margin-bottom: 0;\n    padding: 10px 5px;\n    color: #fff;\n    &:hover {\n        background-color: ",';\n    }\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\f007";\n    }\n'],["\n    background: #00664F;\n    border: 1px solid #BFC1C3;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n    margin-left: 10px;\n    margin-bottom: 0;\n    padding: 10px 5px;\n    color: #fff;\n    &:hover {\n        background-color: ",';\n    }\n    &::before {\n        font-family: "Font Awesome 5 Free";\n        font-weight: 900;\n        content: "\\f007";\n    }\n']);return G=function(){return e},e}function K(){var e=Object(d.a)(["\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n    aside {\n        font-size: 14px;\n    }\n    div {\n        display: flex;\n    }\n"]);return K=function(){return e},e}var Q=v.d.div(K()),X=Object(v.d)(Y)(G(),Object(J.a)(.1,"#A4D65E")),ee=function(){return a.a.createElement(Q,null,a.a.createElement("aside",null,"View as:"),a.a.createElement("div",null,a.a.createElement(X,{type:"button",label:"List"}),a.a.createElement(X,{type:"button",label:"Map"})))};function ne(){var e=Object(d.a)(["\n  .card {\n    box-shadow: none;\n    border: 0;\n    cursor: auto;\n    .card--container {\n      &::after {\n          content: none;\n      }\n    }\n    .card--content {\n      margin-right: 0;\n    }\n  }\n"]);return ne=function(){return e},e}var te=v.d.div(ne()),re=function(e){e.category;var n=e.onClick,t=Object(r.useState)([]),c=Object(s.a)(t,2),o=c[0],i=c[1],d=Object(r.useState)([]),f=Object(s.a)(d,2),p=f[0],m=f[1],b=Object(r.useState)(!0),v=Object(s.a)(b,2),x=v[0],E=v[1],O=Object(r.useContext)(P).urlParams;if(Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n,t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",Object.entries(O)[0]&&"category_explorer"==Object.entries(O)[0][0]&&""!==Object.entries(O)[0][1]&&(n=parseInt(Object.entries(O)[0][1])),e.next=4,g.retrieveServicesByCategory({taxonomyId:n});case 4:return t=e.sent,i(t||[]),e.next=8,h.retrieveCategories({id:n});case 8:r=e.sent,m(r||[]),E(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,m,E]),x)return a.a.createElement("span",null,"Loading");var y=function(e){n(e)};return a.a.createElement("div",null,o.length?a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(W,null)),a.a.createElement("div",null,"{Filters}"),a.a.createElement(te,null,a.a.createElement(D,{key:p[0].id,category:p[0]})),a.a.createElement(j,null,a.a.createElement(ee,null),o.map((function(e){return a.a.createElement("div",null,a.a.createElement(z,{service:e,onClick:y}))})))):a.a.createElement("h2",null,"No data Found"))},ae=function(e){e.categories;var n=e.onClick,t=Object(r.useState)([]),c=Object(s.a)(t,2),o=c[0],i=c[1],d=Object(r.useState)(!0),f=Object(s.a)(d,2),p=f[0],m=f[1];if(Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.retrieveServices({});case 2:n=e.sent,i(n||[]),m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,m]),p)return a.a.createElement("span",null,"Loading");var b=function(e){n(e)};return a.a.createElement("div",null,o.length?a.a.createElement("div",null,a.a.createElement(W,null),a.a.createElement("div",null,"{Categories | Filters}"),a.a.createElement(j,null,a.a.createElement("div",null,"View as: ","{List | Map}"),o.map((function(e){return a.a.createElement("div",null,a.a.createElement(z,{service:e,onClick:b}))})))):a.a.createElement("h2",null,"No data Found"))},ce=function(){return a.a.createElement("div",null,"Loading")};function oe(){var e=Object(d.a)(["\n        \n    "]);return oe=function(){return e},e}function ie(){var e=Object(d.a)(["\n    padding: 20px 15px;\n    ","\n"]);return ie=function(){return e},e}var le=v.d.div(ie(),Object(x.a)("md")(oe()));function ue(){var e=Object(d.a)(["\n    background: #F8F8F8;\n"]);return ue=function(){return e},e}function se(){var e=Object(d.a)(["\n        padding-bottom: 40px;\n        overflow-y: scroll;\n        height: 100vh;\n    "]);return se=function(){return e},e}function de(){var e=Object(d.a)(["\n    ","\n    .image-container {\n        img {\n            width: 100%;\n            height: auto;\n        }\n    }\n    .link-button {\n        background: #00664F;\n        border-radius: 3px;\n        padding: 15px 30px;\n        display: inline-block;\n        color: #fff;\n        text-decoration: none;\n        &:hover {\n            background-color: ",";\n        }\n    }\n"]);return de=function(){return e},e}var fe=v.d.div(de(),Object(x.a)("md")(se()),Object(J.a)(.1,"#00664F")),pe=Object(v.d)(le)(ue()),me=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(!0),i=Object(s.a)(o,2),d=i[0],f=i[1],p=Object(r.useContext)(P).urlParams;Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",Object.entries(p)[0]&&"service"==Object.entries(p)[0][0]&&""!==Object.entries(p)[0][1]&&(n=parseInt(Object.entries(p)[0][1])),e.next=4,g.getService(n);case 4:t=e.sent,c(t||[]),f(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,f]);var m="";return t.images&&t.images.medium.length&&(m=t.images.medium),console.log(t),d?a.a.createElement(ce,null):a.a.createElement(fe,null,m.length?a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:m,alt:t.name})):"",a.a.createElement(pe,{className:"info"},a.a.createElement("h2",null,t.name),a.a.createElement("p",null,t.description),a.a.createElement("h3",null,"This is for:"),a.a.createElement("div",null,t.demographic.map((function(e){return e.name})).reduce((function(e,n){return[e,", ",n]})))),a.a.createElement(le,null,a.a.createElement("div",null,a.a.createElement("h3",null,"We can help with:"),"<Open all>"),"{data.categories}"),a.a.createElement(le,null,a.a.createElement("h3",null,"Contact us"),a.a.createElement("ul",{className:"ul-no-style"},a.a.createElement("li",null,a.a.createElement("a",{className:"link-button",href:t.contact.website,target:"_blank"},"Visit website")),a.a.createElement("li",null,a.a.createElement("a",{href:"tel://".concat(t.contact.telephone)},t.contact.telephone)),a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:".concat(t.contact.email)},t.contact.email)))),a.a.createElement(le,null,a.a.createElement("h3",null,"Referral details"),a.a.createElement("ul",{className:"ul-no-style"},a.a.createElement("li",null,a.a.createElement("a",{href:t.referral.website,target:"_blank"},"Visit website")),a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:".concat(t.referral.email)},t.referral.email)))),a.a.createElement(le,null,a.a.createElement("h3",null,"Address"),a.a.createElement("ul",{className:"ul-no-style"},t.locations.map((function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:"geo:".concat(e.latitude,",").concat(e.longitude),target:"_blank"},e.address1,a.a.createElement("br",null),e.address2,", ",e.city,", ",e.stateProvince,", ",e.postalCode))})))),a.a.createElement("div",null,"<Map>"),a.a.createElement(pe,null,a.a.createElement("ul",{className:"ul-no-style"},a.a.createElement("li",null,"<Share>"),a.a.createElement("li",null,"<Print>"))),a.a.createElement(le,null,a.a.createElement("h3",null,"Follow ",t.name),a.a.createElement("ul",{className:"ul-no-style"},a.a.createElement("li",null,a.a.createElement("a",{href:t.social.facebook,target:"_blank"},"Facebook")),a.a.createElement("li",null,a.a.createElement("a",{href:t.social.twitter,target:"_blank"},"Twitter")),a.a.createElement("li",null,a.a.createElement("a",{href:t.social.instagram,target:"_blank"},"Instagram")),a.a.createElement("li",null,a.a.createElement("a",{href:t.social.linkedin,target:"_blank"},"LinkedIn")))))},be=Object(r.createContext)(null),ge=function(e){e.categories;var n=e.onClick,t=Object(r.useState)([]),c=Object(s.a)(t,2),o=c[0],i=c[1],d=Object(r.useState)(!0),f=Object(s.a)(d,2),p=f[0],m=f[1];if(Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.retrieveCategories({});case 2:n=e.sent,i(n||[]),m(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,m]),p)return a.a.createElement("span",null,"Loading");var b=function(e){n(e)};return a.a.createElement("div",null,o.length?a.a.createElement(j,null,a.a.createElement("h3",null,"Explore categories"),o.map((function(e){return a.a.createElement("div",null,a.a.createElement(D,{key:e.id,category:e,onClick:b}))}))):a.a.createElement("h2",null,"No data Found"))};function he(){var e=Object(d.a)(["\n  display: block;\n  margin-bottom: 20px;\n"]);return he=function(){return e},e}var ve=v.d.span(he()),xe=function(e){var n=e.error;return a.a.createElement(ve,{role:"alert"},n)};function Ee(){var e=Object(d.a)(["\n        max-width: 438px;\n\n    "]);return Ee=function(){return e},e}function Oe(){var e=Object(d.a)(["\n    display: block;\n    margin-bottom: 15px;\n    width: 100%;\n    height: 50px;\n    border: 0;\n    padding: 15px;\n    border-radius: 3px;\n    ","\n"]);return Oe=function(){return e},e}var je=v.d.input(Oe(),Object(x.a)("md")(Ee()));function ye(){var e=Object(d.a)([""]);return ye=function(){return e},e}function we(){var e=Object(d.a)(["\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    whiteSpace: nowrap;\n    width: 1px;\n"]);return we=function(){return e},e}var ke=v.d.label(we()),Fe=v.d.p(ye()),Se=function(e){var n=e.type,t=e.name,r=e.label,c=e.placeholder,o=e.register,i=e.required,l=e.maxLength,u=e.minLength,s=e.error,d=e.inputRef,f=e.validate,p=e.help;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ke,{htmlFor:t},r),p?a.a.createElement(Fe,null,p):"",a.a.createElement(je,{"aria-label":t,name:t,placeholder:c,type:n,ref:function(e){o(e,{required:i,minLength:u,maxLength:l,validate:f}),d&&(d.current=e)},"aria-invalid":s?"true":"false"}),s&&"required"===s.type&&a.a.createElement(xe,{error:"".concat(r," is required.")}),s&&"maxLength"===s.type&&a.a.createElement(xe,{error:"Max length exceeded."}),s&&"minLength"===s.type&&a.a.createElement(xe,{error:"".concat(r," must be at least ").concat(u," ").concat("number"===n?"digits":"characters",".")}),s&&s.message&&a.a.createElement(xe,{error:s.message}))};function Ce(){var e=Object(d.a)(["\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    whiteSpace: nowrap;\n    width: 1px;\n"]);return Ce=function(){return e},e}var Ae=v.d.label(Ce());function Ne(){var e=Object(d.a)([""]);return Ne=function(){return e},e}function Le(){var e=Object(d.a)(["\n  background: #A4D65E;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border-radius: 2px;\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  &:hover {\n    background-color: ",';\n  }\n\n  &::before {\n    font-family: "Font Awesome 5 Free";\n    font-weight: 900;\n    content: "\f007";\n  }\n\n  span {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    whiteSpace: nowrap;\n    width: 1px;\n  }\n'],["\n  background: #A4D65E;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border-radius: 2px;\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  margin: 0;\n  &:hover {\n    background-color: ",';\n  }\n\n  &::before {\n    font-family: "Font Awesome 5 Free";\n    font-weight: 900;\n    content: "\\f007";\n  }\n\n  span {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    whiteSpace: nowrap;\n    width: 1px;\n  }\n']);return Le=function(){return e},e}function _e(){var e=Object(d.a)(["\n  position: relative;\n"]);return _e=function(){return e},e}var ze=v.d.div(_e()),Pe=Object(v.d)(Y)(Le(),Object(J.a)(.1,"#A4D65E")),De=v.d.p(Ne()),Be=function(e){var n=e.type,t=e.name,r=e.label,c=e.placeholder,o=e.register,i=e.required,l=e.maxLength,u=e.minLength,s=e.error,d=e.inputRef,f=e.validate,p=e.help;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ae,{htmlFor:t},r),p?a.a.createElement(De,null,p):"",a.a.createElement(ze,null,a.a.createElement(je,{"aria-label":t,name:t,placeholder:c,type:n,ref:function(e){o(e,{required:i,minLength:u,maxLength:l,validate:f}),d&&(d.current=e)},"aria-invalid":s?"true":"false"}),a.a.createElement(Pe,{type:"submit",label:"Submit"})),s&&"required"===s.type&&a.a.createElement(xe,{error:"".concat(r," is required.")}),s&&"maxLength"===s.type&&a.a.createElement(xe,{error:"Max length exceeded."}),s&&"minLength"===s.type&&a.a.createElement(xe,{error:"".concat(r," must be at least ").concat(u," ").concat("number"===n?"digits":"characters",".")}),s&&s.message&&a.a.createElement(xe,{error:s.message}))},Ie=t(113),Me=t(12);function qe(){var e=Object(d.a)(["\n    padding: 25px 15px 10px;\n    background: #00664F;\n    h2 {\n        color: #fff;\n        font-weight: normal;\n        font-size: 36px;\n        letter-spacing: -0.0175em;\n        margin-bottom: 15px;\n    }\n"]);return qe=function(){return e},e}var Re=v.d.div(qe()),Ue=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=(n[0],n[1]),c=Object(r.useContext)(P),o=(c.urlParams,c.setUrlParams),i=Object(Me.c)({category_explorer:Me.a}),d=Object(s.a)(i,2),f=d[0].category_explorer,p=d[1],m=Object(r.useState)(!0),b=Object(s.a)(m,2),g=b[0],h=b[1],v=["category_explorer","postcode","service_search","service"],x=Object(Ie.a)(),E=x.register,O=x.handleSubmit;x.errors,x.reset;Object(r.useEffect)((function(){h(!1)}),[h]);function j(){return(j=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.email,n.password,!g){e.next=3;break}return e.abrupt("return");case 3:h(!0),h(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(f),g?a.a.createElement(ce,null):a.a.createElement("div",{className:"Home"},a.a.createElement(Re,null,a.a.createElement("h2",null,"Find support services"),a.a.createElement("form",{onSubmit:O((function(e){return j.apply(this,arguments)})),"data-testid":"form"},a.a.createElement(Se,{label:"Enter a postcode",placeholder:"Set your postcode e.g E8 1DY",name:"postcode",register:E,required:!0,validate:{pattern:function(e){return e.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)||"Enter a valid e-mail address"}}}),a.a.createElement(Be,{label:"Search for a service",placeholder:"Search...",name:"service_search",type:"text",register:E}))),a.a.createElement(ge,{onClick:function(e){p({category_explorer:~~e},"pushIn"),function(e){var n={},r=window.location.search;if(r){t(r);for(var a=r.substring(1).split(/[&;]/g),c=a.length,i=0;i<c;i++){var l=a[i].split("=");v.includes(l[0])&&l[1]&&(n[l[0]]=l[1])}o(n)}h(!1)}()}}))},Ve=t(114),Te=Object(Ve.a)(),We=function(e){var n=Object(r.useContext)(be),t=n.url,c=n.setUrl,o=Object(r.useContext)(P),i=o.urlParams,d=o.setUrlParams,f=Object(r.useState)(!0),p=Object(s.a)(f,2),m=p[0],b=p[1],g=Object(r.useState)(null),h=Object(s.a)(g,2),v=h[0],x=h[1],E=Object(Me.c)({service:Me.a}),O=Object(s.a)(E,2),j=O[0].service,y=(O[1],["category_explorer","postcode","service_search"]);Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n,t,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=0,t=Object.entries(i);n<t.length;n++)r=Object(s.a)(t[n],2),a=r[0],c=r[1],"category_explorer"==a&&""!==c?(console.log("CategoryExplorer"),x("CategoryExplorer")):"service"==a&&""!==c?(console.log("ServiceDetail"),x("ServiceDetail")):("postcode"==a&&""!==c||"service_search"==a&&""!==c)&&(console.log("ListServices"),x("ListServices"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),b(!1)}),[x,b]);var w=function(e){for(var n=[],r=t.substring(1).split(/[&;]/g),a=0,o=Object.entries(i);a<o.length;a++){var l=Object(s.a)(o[a],2),u=l[0],f=l[1];if(y.includes(u))if(f){var p=u+"="+f;n.push(p)}else{var m=u;n.push(m)}}var b=r.filter((function(e){return!n.includes(e)})).join("&");""!==b&&(b="&"+b);var g="?service="+e+b;Te.push(g),c(g),x("ServiceDetail"),d({service:e.toString()})};return m?a.a.createElement(ce,null):"CategoryExplorer"==v?a.a.createElement(re,{onClick:w}):"ServiceDetail"==v?a.a.createElement(me,{service:j}):"ListServices"==v?a.a.createElement(ae,{onClick:w}):a.a.createElement(Ue,null)},Ze=t(107),Je=t.n(Ze),$e=t(108),He=t.n($e),Ye=t(109),Ge=t.n(Ye),Ke=t(110),Qe=t.n(Ke),Xe=t(111),en=t.n(Xe),nn=t(112),tn=t.n(nn);function rn(){var e=Object(d.a)(["\n    padding: 20px;\n  "]);return rn=function(){return e},e}function an(){var e=Object(d.a)(["\n      \n  "]);return an=function(){return e},e}function cn(){var e=Object(d.a)(["\n","\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: ",";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  overflow-x: hidden;\n}\n\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(",") format('woff2'),\n    url(",") format('woff'),\n    url(",") format('truetype');\n}\n\n@font-face {\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'),\n    url(",") format('woff2'),\n    url(",") format('woff'),\n    url(",") format('truetype');\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n}\n\na {\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n}\n\nul.ul-no-style {\n  list-style: none;\n  padding-left: 0;\n  li {\n    + li {\n      margin-top: 15px;\n    }\n  }\n}\n\nhr {\n  border: 2px solid #000000;\n  margin: 30px 0;\n}\n\n.App {\n  position: relative;\n  ","\n  ","\n}\n\n"]);return cn=function(){return e},e}var on=Object(v.b)(cn(),Object(J.b)(),Z,tn.a,en.a,Qe.a,Ge.a,He.a,Je.a,w,Object(J.a)(.1,w),Object(x.a)("sm")(an()),Object(x.a)("md")(rn()));function ln(){var e=Object(d.a)(["\n            width: 75%;\n        "]);return ln=function(){return e},e}function un(){var e=Object(d.a)(["\n            width: 100%;\n        "]);return un=function(){return e},e}function sn(){var e=Object(d.a)(["\n        padding: 40px 0;\n    "]);return sn=function(){return e},e}function dn(){var e=Object(d.a)(["\n    padding: 40px 15px;\n    ","\n\n    div {\n        ","\n        ","\n    }\n    h3 {\n        font-size: 27px;\n    }\n    h4 {\n        font-size: 24px;\n    }\n    h3, h4 {\n        margin-bottom: 20px;\n    }\n    hr {\n        margin-top: 50px;\n    }\n"]);return dn=function(){return e},e}v.d.footer(dn(),Object(x.a)("md")(sn()),Object(x.a)("sm")(un()),Object(x.a)("md")(ln()));function fn(){var e=Object(d.a)(["\n    position: absolute;\n    top: -20px;\n    left: -20px;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    img {\n        width: auto;\n        height: calc(100vh + 20px);\n    }\n"]);return fn=function(){return e},e}var pn=v.d.div(fn()),mn=function(){return a.a.createElement(pn,null,a.a.createElement("img",{src:"http://placehold.jp/24/cccccc/ffffff/1200x600.png?text=Map%20placeholder",alt:"Map placeholder"}))};function bn(){var e=Object(d.a)(["\n            overflow: hidden;\n            height: calc(100vh - 40px);\n        "]);return bn=function(){return e},e}function gn(){var e=Object(d.a)(["\n        max-width: 375px;\n        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05);\n        ","\n    "]);return gn=function(){return e},e}function hn(){var e=Object(d.a)(["\n    background: #fff;\n    border-radius: 3px;\n    width: 100%;\n    ","\n"]);return hn=function(){return e},e}var vn=v.d.div(hn(),Object(x.a)("md")(gn(),Object(x.a)("md")(bn())));var xn=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useMemo)((function(){return{url:t,setUrl:c}}),[t,c]),i=Object(r.useState)({}),d=Object(s.a)(i,2),f=d[0],p=d[1],m=Object(r.useMemo)((function(){return{urlParams:f,setUrlParams:p}}),[f,p]),b=Object(r.useState)(!0),g=Object(s.a)(b,2),h=g[0],x=g[1],E=["category_explorer","postcode","service_search","service"];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var n,t,r,a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},t=window.location.search){for(c(t),r=t.substring(1).split(/[&;]/g),a=r.length,o=0;o<a;o++)i=r[o].split("="),E.includes(i[0])&&(n[i[0]]=i[1]);p(n)}x(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c,p,x]),console.log(t),console.log("urlParams"),console.log(f),h?a.a.createElement(ce,null):a.a.createElement("div",{className:"App"},a.a.createElement(v.a,{theme:{breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200}}},a.a.createElement(P.Provider,{value:m},a.a.createElement(be.Provider,{value:o},a.a.createElement(vn,null,0!==Object.keys(m.urlParams).length?a.a.createElement(We,null):a.a.createElement(Ue,null)),a.a.createElement(mn,null),a.a.createElement(on,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var En=document.getElementById("erw-root");En&&o.a.render(a.a.createElement(Me.b,{history:Te},a.a.createElement(xn,null)),En),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,n,t){e.exports=t.p+"static/media/arrow-right.7c57f75a.svg"}},[[115,1,2]]]);
//# sourceMappingURL=main.be792b6f.chunk.js.map