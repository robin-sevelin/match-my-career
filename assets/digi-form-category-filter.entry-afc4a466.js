import{r as s,c as a,h as i,H as l,g as r}from"./index-cce72ce3.js";const o=".sc-digi-form-category-filter-h{--digi--form-category-filter--gap:var(--digi--padding--small)}.sc-digi-form-category-filter-h .digi-form-category-filter.sc-digi-form-category-filter{display:flex;flex-wrap:wrap;gap:var(--digi--form-category-filter--gap)}.sc-digi-form-category-filter-h .digi-form-category-filter--category.sc-digi-form-category-filter{--digi--button--icon--spacing:0px}.sc-digi-form-category-filter-h .digi-form-category-filter--category--not-selected.sc-digi-form-category-filter{--digi--button--color--background--primary--default:rgba(255, 255, 255, 0);--digi--button--color--text--primary--default:var(--digi--color--text--secondary);--digi--button--color--border--primary--default:rgba(255, 255, 255, 0)}.sc-digi-form-category-filter-h .digi-form-category-filter--category--thin-text.sc-digi-form-category-filter{font-weight:400}",g=class{constructor(e){s(this,e),this.afOnSelectedCategoryChange=a(this,"afOnSelectedCategoryChange",7),this.afCategories=[],this.afAllCategories=!0,this.afAllCategoriesSelected=!0,this.afAllCategoriesText="Alla kategorier",this.afVisibleCollapsed=5,this.afStartCollapsed=!0,this.afMultiselect=!0,this.selectedCategories=[],this.collapsed=!1}afCategoriesChangeHandler(){this.selectedCategories=this.afCategories.filter(e=>e.selected).map(e=>e.name),this.selectedCategories.length===0&&this.afAllCategories&&this.afAllCategoriesSelected&&(this.selectedCategories=[this.afAllCategoriesText])}componentWillLoad(){}componentDidLoad(){this.afCategoriesChangeHandler(),this.collapsed=this.afStartCollapsed}componentWillUpdate(){}displayCategories(){return this.afAllCategories?this.collapsed&&this.afCategories.length+1>this.afVisibleCollapsed?[{name:this.afAllCategoriesText},...this.afCategories.slice(0,this.afVisibleCollapsed-1)]:[{name:this.afAllCategoriesText},...this.afCategories]:this.collapsed&&this.afCategories.length>this.afVisibleCollapsed?this.afCategories.slice(0,this.afVisibleCollapsed):this.afCategories}toggleCategory(e){if(!this.afMultiselect){this.afAllCategories&&e.name===this.afAllCategoriesText&&(this.selectedCategories.includes(this.afAllCategoriesText)?(this.selectedCategories=[],this.afOnSelectedCategoryChange.emit([])):(this.selectedCategories=[this.afAllCategoriesText],this.afOnSelectedCategoryChange.emit(this.afCategories.map(t=>t.name)))),this.selectedCategories=[e.name],this.afOnSelectedCategoryChange.emit(this.selectedCategories);return}this.afAllCategories&&e.name===this.afAllCategoriesText?this.selectedCategories.includes(this.afAllCategoriesText)?(this.selectedCategories=[],this.afOnSelectedCategoryChange.emit([])):(this.selectedCategories=[this.afAllCategoriesText],this.afOnSelectedCategoryChange.emit(this.afCategories.map(t=>t.name))):(this.selectedCategories.findIndex(t=>t===e.name)>=0?this.selectedCategories=this.selectedCategories.filter(t=>t!==e.name):this.afAllCategories?this.selectedCategories=[...this.selectedCategories.filter(t=>t!==this.afAllCategoriesText),e.name]:this.selectedCategories=[...this.selectedCategories,e.name],this.afOnSelectedCategoryChange.emit(this.selectedCategories))}toggleCollapsed(){this.collapsed=!this.collapsed}render(){return i(l,null,i("div",{class:{"digi-form-category-filter":!0}},this.displayCategories().map(e=>i("digi-button",{class:{"digi-form-category-filter--category":!0,"digi-form-category-filter--category--not-selected":!this.selectedCategories.includes(e.name)},afVariation:"primary",afAriaPressed:this.selectedCategories.includes(e.name),onAfOnClick:()=>{this.toggleCategory(e)}},typeof e.hits>"u"&&e.name,typeof e.hits<"u"&&i("span",null,e.name," ",i("span",{class:"digi-form-category-filter--category--thin-text"},"(",e.hits,")")))),this.afCategories.length>this.afVisibleCollapsed&&i("div",null,i("digi-button",{afVariation:"function",afAriaExpanded:!this.collapsed,onClick:()=>{this.toggleCollapsed()}},this.collapsed?"Visa alla":"Visa färre",this.collapsed?i("digi-icon-plus",{slot:"icon","aria-hidden":"true"}):i("digi-icon-minus",{slot:"icon","aria-hidden":"true"})))))}get hostElement(){return r(this)}static get watchers(){return{afCategories:["afCategoriesChangeHandler"]}}};g.style=o;export{g as digi_form_category_filter};
