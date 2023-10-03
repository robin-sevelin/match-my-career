import{r as s,aG as l,aH as e,h as i,l as b,g as p}from"./index-cce72ce3.js";import{r as c}from"./randomIdGenerator.util-17972493-3e0a24fb.js";import{l as o}from"./logger.util-9b5aeb0e-eecc5f5e.js";const f=".digi--util--fs--xs.sc-digi-tools-feedback-banner{font-size:var(--digi--global--typography--font-size--small) !important}.digi--util--fs--s.sc-digi-tools-feedback-banner{font-size:calc(var(--digi--global--typography--font-size--small) + 1px) !important}.digi--util--fs--m.sc-digi-tools-feedback-banner{font-size:var(--digi--global--typography--font-size--base) !important}.digi--util--fs--l.sc-digi-tools-feedback-banner{font-size:var(--digi--global--typography--font-size--large) !important}.digi--util--fw--sb.sc-digi-tools-feedback-banner{font-weight:var(--digi--global--typography--font-weight--semibold) !important}.digi--util--pt--1.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--smallest-2) !important}.digi--util--pt--10.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--smallest) !important}.digi--util--pt--20.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--base) !important}.digi--util--pt--30.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-2) !important}.digi--util--pt--40.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-4) !important}.digi--util--pt--50.sc-digi-tools-feedback-banner{padding-top:2.5rem !important}.digi--util--pt--60.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-5) !important}.digi--util--pt--70.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-6) !important}.digi--util--pt--80.sc-digi-tools-feedback-banner{padding-top:4.5rem !important}.digi--util--pt--90.sc-digi-tools-feedback-banner{padding-top:5rem !important}.digi--util--pb--1.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--smallest-2) !important}.digi--util--pb--10.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--smallest) !important}.digi--util--pb--20.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--base) !important}.digi--util--pb--30.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--largest-2) !important}.digi--util--pb--40.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--largest-4) !important}.digi--util--pb--50.sc-digi-tools-feedback-banner{padding-bottom:2.5rem !important}.digi--util--pb--60.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--largest-5) !important}.digi--util--pb--70.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--global--spacing--largest-6) !important}.digi--util--pb--80.sc-digi-tools-feedback-banner{padding-bottom:4.5rem !important}.digi--util--pb--90.sc-digi-tools-feedback-banner{padding-bottom:5rem !important}.digi--util--p--1.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--smallest-2) !important}.digi--util--p--10.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--smallest) !important}.digi--util--p--20.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--base) !important}.digi--util--p--30.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--largest-2) !important}.digi--util--p--40.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--largest-4) !important}.digi--util--p--50.sc-digi-tools-feedback-banner{padding:2.5rem !important}.digi--util--p--60.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--largest-5) !important}.digi--util--p--70.sc-digi-tools-feedback-banner{padding:var(--digi--global--spacing--largest-6) !important}.digi--util--p--80.sc-digi-tools-feedback-banner{padding:4.5rem !important}.digi--util--p--90.sc-digi-tools-feedback-banner{padding:5rem !important}.digi--util--ptb--1.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--smallest-2) !important;padding-bottom:var(--digi--global--spacing--smallest-2) !important}.digi--util--ptb--10.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--smallest) !important;padding-bottom:var(--digi--global--spacing--smallest) !important}.digi--util--ptb--20.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--base) !important;padding-bottom:var(--digi--global--spacing--base) !important}.digi--util--ptb--30.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-2) !important;padding-bottom:var(--digi--global--spacing--largest-2) !important}.digi--util--ptb--40.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-4) !important;padding-bottom:var(--digi--global--spacing--largest-4) !important}.digi--util--ptb--50.sc-digi-tools-feedback-banner{padding-top:2.5rem !important;padding-bottom:2.5rem !important}.digi--util--ptb--60.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-5) !important;padding-bottom:var(--digi--global--spacing--largest-5) !important}.digi--util--ptb--70.sc-digi-tools-feedback-banner{padding-top:var(--digi--global--spacing--largest-6) !important;padding-bottom:var(--digi--global--spacing--largest-6) !important}.digi--util--ptb--80.sc-digi-tools-feedback-banner{padding-top:4.5rem !important;padding-bottom:4.5rem !important}.digi--util--ptb--90.sc-digi-tools-feedback-banner{padding-top:5rem !important;padding-bottom:5rem !important}.digi--util--plr--1.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--smallest-2) !important;padding-right:var(--digi--global--spacing--smallest-2) !important}.digi--util--plr--10.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--smallest) !important;padding-right:var(--digi--global--spacing--smallest) !important}.digi--util--plr--20.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--base) !important;padding-right:var(--digi--global--spacing--base) !important}.digi--util--plr--30.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--largest-2) !important;padding-right:var(--digi--global--spacing--largest-2) !important}.digi--util--plr--40.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--largest-4) !important;padding-right:var(--digi--global--spacing--largest-4) !important}.digi--util--plr--50.sc-digi-tools-feedback-banner{padding-left:2.5rem !important;padding-right:2.5rem !important}.digi--util--plr--60.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--largest-5) !important;padding-right:var(--digi--global--spacing--largest-5) !important}.digi--util--plr--70.sc-digi-tools-feedback-banner{padding-left:var(--digi--global--spacing--largest-6) !important;padding-right:var(--digi--global--spacing--largest-6) !important}.digi--util--plr--80.sc-digi-tools-feedback-banner{padding-left:4.5rem !important;padding-right:4.5rem !important}.digi--util--plr--90.sc-digi-tools-feedback-banner{padding-left:5rem !important;padding-right:5rem !important}.digi--util--sr-only.sc-digi-tools-feedback-banner{border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner.sc-digi-tools-feedback-banner{background-color:var(--digi--color--background--neutral-5)}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__heading.sc-digi-tools-feedback-banner{font-size:var(--digi--typography--heading-2--font-size--desktop);font-weight:var(--digi--typography--heading-2--font-weight--desktop);margin-top:0}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__heading.sc-digi-tools-feedback-banner{font-size:var(--digi--typography--heading-2--font-size--mobile);font-weight:var(--digi--typography--heading-2--font-weight--mobile)}}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner--grid.sc-digi-tools-feedback-banner{display:grid;padding-inline:var(--digi--padding--medium)}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner--grid.sc-digi-tools-feedback-banner{padding-inline:unset}}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__container.sc-digi-tools-feedback-banner{padding-top:var(--digi--padding--largest);padding-bottom:var(--digi--padding--largest-2)}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__container.sc-digi-tools-feedback-banner{padding:var(--digi--padding--large) var(--digi--padding--medium) var(--digi--padding--largest-2) var(--digi--padding--medium)}}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__illustration.sc-digi-tools-feedback-banner{flex-basis:4.25rem;padding-left:var(--digi--padding--large)}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__illustration.sc-digi-tools-feedback-banner{padding-left:var(--digi--padding--smaller)}}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__main-content.sc-digi-tools-feedback-banner{display:inline-flex;padding-bottom:var(--digi--padding--largest)}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__text-content.sc-digi-tools-feedback-banner{flex-basis:17.6875rem}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner__links.sc-digi-tools-feedback-banner{display:flex;flex-direction:column}}.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner.sc-digi-tools-feedback-banner digi-link-external.sc-digi-tools-feedback-banner{padding-right:var(--digi--padding--large)}@media (max-width: 36rem){.sc-digi-tools-feedback-banner-h .digi-tools-feedback-banner.sc-digi-tools-feedback-banner digi-link-external.sc-digi-tools-feedback-banner{padding-bottom:var(--digi--padding--smaller)}}",m=class{constructor(a){s(this,a),this.afHeading="Hjälp oss att bli bättre",this.afHeadingLevel=l.H2,this.afText="Skicka in dina synpunkter och förslag på förbättringar på (tjänst)",this.afType=e.FULLWIDTH,this.afId=c("digi-feedback-banner"),this.validLinks=!0,this.validContent=!0,this.linkItems=[]}validateHeading(){if(!this.afHeading||!this.afText)return o.warn("digi-feedback-banner must have a heading and text. Please add af-heading and af-text",this.hostElement),this.validContent=!1,!1}componentWillLoad(){this.validateLinks(),this.validateHeading()}componentWillUpdate(){this.validateLinks(!0),this.validateHeading()}validateLinks(a){let d=this.hostElement.children;if(d.length<1||d.length>3){o.warn("The slot contains no link elements or there are more than 3 links specified (only 3 can be showed)",this.hostElement);return}let n;a?n=this._observer.children:n=d,this.linkItems=[...n].filter(t=>t.tagName.toLowerCase()==="a").filter(t=>{const g=t.textContent,r=t.getAttribute("href");return!g||!r?(this.validLinks=!1,o.warn("No links in digi-feedback-banner are rendered because a specified <a>-element must have both a text and href",this.hostElement),!1):!0}).map(t=>({text:t.text,href:t.href}))}get cssModifiers(){return{"digi-tools-feedback-banner--fullwidth":this.afType===e.FULLWIDTH,"digi-tools-feedback-banner--grid":this.afType===e.GRID}}get icon(){return i("svg",{width:"70px",height:"55px",viewBox:"0 -1 70 57",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{id:"Artboard",transform:"translate(-1.000000, -1.000000)"},i("g",{id:"Illustration",transform:"translate(36.000000, 28.500000) scale(-1, 1) translate(-36.000000, -28.500000) translate(1.000000, 1.000000)"},i("path",{d:"M42.6854848,46.8545136 L52.1772369,46.8545136 L60.0989602,53.7853167 L60.0989602,46.8545136 L63.5554881,46.8545136 C66.2322456,46.8545136 68.4223676,44.6442917 68.4223676,41.9430542 L68.4223676,21.4518253 C68.4223676,18.7503271 66.2322456,16.5401053 63.5554881,16.5401053 L45.2209187,16.5401053 C45.2209187,16.5401053 45.2972177,30.5151432 45.2972177,32.3423051 C45.2972177,34.1692063 43.6708169,38.4874313 37.8183432,38.4874313 C37.7811114,41.1448606 37.8183432,41.9430542 37.8183432,41.9430542 C37.8183432,44.6442917 40.0084652,46.8545136 42.6854848,46.8545136 Z",id:"Fill-1",fill:"#DEE9B7"}),i("path",{d:"M46.0035734,16.5771857 L65.0615411,16.5771857 C67.777628,16.5771857 70,18.7874075 70,21.488645 L70,43.1577375 C70,45.858975 67.777628,48.0691969 65.0615411,48.0691969 L61.5544094,48.0691969 L61.5544094,55 L53.5160089,48.0691969 L43.8850309,48.0691969 C41.1686818,48.0691969 38.9463098,45.858975 38.9463098,43.1577375 L38.9463098,38.8848853",id:"Stroke-3",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("g",{id:"Group-8"},i("path",{d:"M46.0035734,16.5771857 L46.0035734,6.19362792 C46.0035734,2.81701593 43.2256083,0.0542385739 39.8304342,0.0542385739 L39.8579648,0 L6.17313916,0 C2.77796506,0 0,2.76277736 0,6.13938934 L0,32.7454959 C0,36.1221079 2.77796506,38.8848853 6.17313916,38.8848853 L11.926765,38.8848853 L11.926765,51.8799782 L24.212476,38.8848853 L39.8304342,38.8848853 C43.2256083,38.8848853 46.0035734,36.1221079 46.0035734,32.7454959 L46.0035734,16.5172103",id:"Fill-5",fill:"#FFFFFF"}),i("path",{d:"M46.0035734,16.5771857 L46.0035734,6.19362792 C46.0035734,2.81701593 43.2256083,0.0542385739 39.8304342,0.0542385739 L39.8579648,0 L6.17313916,0 C2.77796506,0 0,2.76277736 0,6.13938934 L0,32.7454959 C0,36.1221079 2.77796506,38.8848853 6.17313916,38.8848853 L11.926765,38.8848853 L11.926765,51.8799782 L24.212476,38.8848853 L39.8304342,38.8848853 C43.2256083,38.8848853 46.0035734,36.1221079 46.0035734,32.7454959 L46.0035734,16.5172103",id:"Stroke-7",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"})),i("line",{x1:"34.3569122",y1:"10.998957",x2:"11.7267882",y2:"10.998957",id:"Stroke-9",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"61.6306297",y1:"27.8791224",x2:"57.7779239",y2:"27.8791224",id:"Stroke-11",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"56.1242808",y1:"27.8791224",x2:"52.271575",y2:"27.8791224",id:"Stroke-13",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"50.6179582",y1:"27.8791224",x2:"46.7652523",y2:"27.8791224",id:"Stroke-15",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"61.6306297",y1:"33.1988052",x2:"56.1142912",y2:"33.1988052",id:"Stroke-17",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"52.1812485",y1:"33.1988052",x2:"46.4129397",y2:"33.1988052",id:"Stroke-19",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"34.3569122",y1:"16.6256614",x2:"11.7267882",y2:"16.6256614",id:"Stroke-21",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"34.3569122",y1:"22.2523919",x2:"11.7267882",y2:"22.2523919",id:"Stroke-23",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"}),i("line",{x1:"34.3569122",y1:"27.8791224",x2:"20.5357822",y2:"27.8791224",id:"Stroke-25",stroke:"#333333","stroke-width":"1.5552","stroke-linejoin":"round"})))))}get content(){return i("section",{class:"digi-tools-feedback-banner__container"},this.validContent&&i("div",{class:"digi-tools-feedback-banner__main-content"},i("div",{class:"digi-tools-feedback-banner__text-content"},i(this.afHeadingLevel,{class:"digi-tools-feedback-banner__heading",id:this.afId+"-heading"},this.afHeading),i("p",null,this.afText)),i("span",{class:"digi-tools-feedback-banner__illustration"},this.icon)),i("div",{class:"digi-tools-feedback-banner__links"},this.validLinks&&this.linkItems.map(a=>i("digi-link-external",{afHref:a.href,afTarget:"_blank",afVariation:"small",afDescribedby:this.afId+"-heading"},a.text)),i("div",{hidden:!0,class:"digi-tools-feedback-banner__slot"},i("digi-util-mutation-observer",{ref:a=>this._observer=a,onAfOnChange:()=>this.validateLinks()},i("slot",null)))))}render(){return i("div",{class:Object.assign({"digi-tools-feedback-banner":!0},this.cssModifiers)},this.afType===e.FULLWIDTH&&i("digi-layout-block",{afVariation:b.TRANSPARENT},this.content),this.afType!==e.FULLWIDTH&&this.content)}get hostElement(){return p(this)}static get watchers(){return{afHeading:["validateHeading"],afText:["validateHeading"]}}};m.style=f;export{m as digi_tools_feedback_banner};