import{r as a,c as i,h as r,g as c}from"./index-cce72ce3.js";import{r as n}from"./randomIdGenerator.util-17972493-3e0a24fb.js";import{d as l}from"./detectClickOutside.util-2e9cc8d8-d666b039.js";import"./detectClosest.util-903e8234-8e14c786.js";const h=class{constructor(t){a(this,t),this.afOnClickOutside=i(this,"afOnClickOutside",7),this.afOnClickInside=i(this,"afOnClickInside",7),this.afDataIdentifier=n("data-digi-util-detect-click-outside")}componentWillLoad(){this.$el.setAttribute(this.afDataIdentifier,"")}clickHandler(t){const e=t.target,s=`[${this.afDataIdentifier}]`;l(e,s)?this.afOnClickOutside.emit(t):this.afOnClickInside.emit(t)}render(){return r("slot",null)}get $el(){return c(this)}};export{h as digi_util_detect_click_outside};
