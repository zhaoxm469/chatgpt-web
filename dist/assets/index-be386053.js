import{r as S,af as pt,c as L,a as i,ag as I,ah as le,f as Ie,ai as mt,aj as gt,d as X,u as Ae,g as ue,ak as bt,b as yt,h as C,t as wt,e as xt,al as Me,W as be,am as kt,j as we,k as $t,l as xe,m as _,V as _t,n as Ct,an as St,p as zt,T as Ue,ao as re,ap as de,z as De,aq as Rt,ar as Tt,as as Vt,at as It,au as Mt,av as Dt,a0 as Bt,A as Nt,L as Pt,$ as Ee,B as O,G as Q,H as a,O as l,R as p,D as c,N as ce,S as k,aa as N,ab as P,Q as At,_ as W,aw as Ut,a7 as Et,a8 as Ht,ax as jt,M as K,ay as Ft,az as He,Y as Ot,C as ke,P as $e,aA as Lt,aB as Wt,aC as ye,aD as Gt}from"./index-33effb69.js";function Be(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Ne(){const n=S(new Map),o=f=>r=>{n.value.set(f,r)};return pt(()=>{n.value.clear()}),[n,o]}const Yt=L([i("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[I("reverse",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),I("vertical",[i("slider-handles",[i("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),i("slider-marks",[i("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),i("slider-dots",[i("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),I("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[i("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[i("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),i("slider-rail",`
 height: 100%;
 `,[le("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),I("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),i("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[i("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),i("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[i("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[i("slider-handle",`
 cursor: not-allowed;
 `)]),I("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),L("&:hover",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),I("active",[i("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[le("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),i("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),i("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[i("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),i("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[le("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),i("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[i("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[i("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[L("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),L("&:focus",[i("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[L("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),i("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[I("transition-disabled",[i("slider-dot","transition: none;")]),i("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[I("active","border: var(--n-dot-border-active);")])])]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ie()]),i("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[I("top",`
 margin-bottom: 12px;
 `),I("right",`
 margin-left: 12px;
 `),I("bottom",`
 margin-top: 12px;
 `),I("left",`
 margin-right: 12px;
 `),Ie()]),mt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-modal);")])),gt(i("slider",[i("slider-dot","background-color: var(--n-dot-color-popover);")]))]),Kt=0,Xt=Object.assign(Object.assign({},ue.props),{to:xe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Pe=X({name:"Slider",props:Xt,setup(n){const{mergedClsPrefixRef:o,namespaceRef:f,inlineThemeDisabled:r}=Ae(n),v=ue("Slider","-slider",Yt,bt,n,o),u=S(null),[d,y]=Ne(),[w,b]=Ne(),z=S(new Set),E=yt(n),{mergedDisabledRef:A}=E,H=C(()=>{const{step:e}=n;if(Number(e)<=0||e==="mark")return 0;const t=e.toString();let s=0;return t.includes(".")&&(s=t.length-t.indexOf(".")-1),s}),J=S(n.defaultValue),he=wt(n,"value"),q=xt(he,J),M=C(()=>{const{value:e}=q;return(n.range?e:[e]).map(ze)}),Z=C(()=>M.value.length>2),g=C(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),$=C(()=>{const{marks:e}=n;return e?Object.keys(e).map(parseFloat):null}),m=S(-1),j=S(-1),B=S(-1),D=S(!1),ee=S(!1),ve=C(()=>{const{vertical:e,reverse:t}=n;return e?t?"top":"bottom":t?"right":"left"}),je=C(()=>{if(Z.value)return;const e=M.value,t=te(n.range?Math.min(...e):n.min),s=te(n.range?Math.max(...e):e[0]),{value:h}=ve;return n.vertical?{[h]:`${t}%`,height:`${s-t}%`}:{[h]:`${t}%`,width:`${s-t}%`}}),Fe=C(()=>{const e=[],{marks:t}=n;if(t){const s=M.value.slice();s.sort((T,V)=>T-V);const{value:h}=ve,{value:x}=Z,{range:R}=n,U=x?()=>!1:T=>R?T>=s[0]&&T<=s[s.length-1]:T<=s[0];for(const T of Object.keys(t)){const V=Number(T);e.push({active:U(V),label:t[T],style:{[h]:`${te(V)}%`}})}}return e});function Oe(e,t){const s=te(e),{value:h}=ve;return{[h]:`${s}%`,zIndex:t===m.value?1:0}}function _e(e){return n.showTooltip||B.value===e||m.value===e&&D.value}function Le(e){return D.value?!(m.value===e&&j.value===e):!0}function We(e){var t;~e&&(m.value=e,(t=d.value.get(e))===null||t===void 0||t.focus())}function Ge(){w.value.forEach((e,t)=>{_e(t)&&e.syncPosition()})}function Ce(e){const{"onUpdate:value":t,onUpdateValue:s}=n,{nTriggerFormInput:h,nTriggerFormChange:x}=E;s&&De(s,e),t&&De(t,e),J.value=e,h(),x()}function Se(e){const{range:t}=n;if(t){if(Array.isArray(e)){const{value:s}=M;e.join()!==s.join()&&Ce(e)}}else Array.isArray(e)||M.value[0]!==e&&Ce(e)}function fe(e,t){if(n.range){const s=M.value.slice();s.splice(t,1,e),Se(s)}else Se(e)}function pe(e,t,s){const h=s!==void 0;s||(s=e-t>0?1:-1);const x=$.value||[],{step:R}=n;if(R==="mark"){const V=ne(e,x.concat(t),h?s:void 0);return V?V.value:t}if(R<=0)return t;const{value:U}=H;let T;if(h){const V=Number((t/R).toFixed(U)),F=Math.floor(V),me=V>F?F:F-1,ge=V<F?F:F+1;T=ne(t,[Number((me*R).toFixed(U)),Number((ge*R).toFixed(U)),...x],s)}else{const V=Ke(e);T=ne(e,[...x,V])}return T?ze(T.value):t}function ze(e){return Math.min(n.max,Math.max(n.min,e))}function te(e){const{max:t,min:s}=n;return(e-s)/(t-s)*100}function Ye(e){const{max:t,min:s}=n;return s+(t-s)*e}function Ke(e){const{step:t,min:s}=n;if(Number(t)<=0||t==="mark")return e;const h=Math.round((e-s)/t)*t+s;return Number(h.toFixed(H.value))}function ne(e,t=$.value,s){if(!(t!=null&&t.length))return null;let h=null,x=-1;for(;++x<t.length;){const R=t[x]-e,U=Math.abs(R);(s===void 0||R*s>0)&&(h===null||U<h.distance)&&(h={index:x,distance:U,value:t[x]})}return h}function Re(e){const t=u.value;if(!t)return;const s=Be(e)?e.touches[0]:e,h=t.getBoundingClientRect();let x;return n.vertical?x=(h.bottom-s.clientY)/h.height:x=(s.clientX-h.left)/h.width,n.reverse&&(x=1-x),Ye(x)}function Xe(e){if(A.value||!n.keyboard)return;const{vertical:t,reverse:s}=n;switch(e.key){case"ArrowUp":e.preventDefault(),se(t&&s?-1:1);break;case"ArrowRight":e.preventDefault(),se(!t&&s?-1:1);break;case"ArrowDown":e.preventDefault(),se(t&&s?1:-1);break;case"ArrowLeft":e.preventDefault(),se(!t&&s?1:-1);break}}function se(e){const t=m.value;if(t===-1)return;const{step:s}=n,h=M.value[t],x=Number(s)<=0||s==="mark"?h:h+s*e;fe(pe(x,h,e>0?1:-1),t)}function Je(e){var t,s;if(A.value||!Be(e)&&e.button!==Kt)return;const h=Re(e);if(h===void 0)return;const x=M.value.slice(),R=n.range?(s=(t=ne(h,x))===null||t===void 0?void 0:t.index)!==null&&s!==void 0?s:-1:0;R!==-1&&(e.preventDefault(),We(R),qe(),fe(pe(h,M.value[R]),R))}function qe(){D.value||(D.value=!0,re("touchend",document,ie),re("mouseup",document,ie),re("touchmove",document,ae),re("mousemove",document,ae))}function oe(){D.value&&(D.value=!1,de("touchend",document,ie),de("mouseup",document,ie),de("touchmove",document,ae),de("mousemove",document,ae))}function ae(e){const{value:t}=m;if(!D.value||t===-1){oe();return}const s=Re(e);fe(pe(s,M.value[t]),t)}function ie(){oe()}function Qe(e){m.value=e,A.value||(B.value=e)}function Ze(e){m.value===e&&(m.value=-1,oe()),B.value===e&&(B.value=-1)}function et(e){B.value=e}function tt(e){B.value===e&&(B.value=-1)}Me(m,(e,t)=>void be(()=>j.value=t)),Me(q,()=>{if(n.marks){if(ee.value)return;ee.value=!0,be(()=>{ee.value=!1})}be(Ge)}),kt(()=>{oe()});const Te=C(()=>{const{self:{markFontSize:e,railColor:t,railColorHover:s,fillColor:h,fillColorHover:x,handleColor:R,opacityDisabled:U,dotColor:T,dotColorModal:V,handleBoxShadow:F,handleBoxShadowHover:me,handleBoxShadowActive:ge,handleBoxShadowFocus:nt,dotBorder:st,dotBoxShadow:ot,railHeight:at,railWidthVertical:it,handleSize:lt,dotHeight:rt,dotWidth:dt,dotBorderRadius:ct,fontSize:ut,dotBorderActive:ht,dotColorPopover:vt},common:{cubicBezierEaseInOut:ft}}=v.value;return{"--n-bezier":ft,"--n-dot-border":st,"--n-dot-border-active":ht,"--n-dot-border-radius":ct,"--n-dot-box-shadow":ot,"--n-dot-color":T,"--n-dot-color-modal":V,"--n-dot-color-popover":vt,"--n-dot-height":rt,"--n-dot-width":dt,"--n-fill-color":h,"--n-fill-color-hover":x,"--n-font-size":ut,"--n-handle-box-shadow":F,"--n-handle-box-shadow-active":ge,"--n-handle-box-shadow-focus":nt,"--n-handle-box-shadow-hover":me,"--n-handle-color":R,"--n-handle-size":lt,"--n-opacity-disabled":U,"--n-rail-color":t,"--n-rail-color-hover":s,"--n-rail-height":at,"--n-rail-width-vertical":it,"--n-mark-font-size":e}}),G=r?we("slider",void 0,Te,n):void 0,Ve=C(()=>{const{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:s,indicatorTextColor:h,indicatorBorderRadius:x}}=v.value;return{"--n-font-size":e,"--n-indicator-border-radius":x,"--n-indicator-box-shadow":s,"--n-indicator-color":t,"--n-indicator-text-color":h}}),Y=r?we("slider-indicator",void 0,Ve,n):void 0;return{mergedClsPrefix:o,namespace:f,uncontrolledValue:J,mergedValue:q,mergedDisabled:A,mergedPlacement:g,isMounted:$t(),adjustedTo:xe(n),dotTransitionDisabled:ee,markInfos:Fe,isShowTooltip:_e,shouldKeepTooltipTransition:Le,handleRailRef:u,setHandleRefs:y,setFollowerRefs:b,fillStyle:je,getHandleStyle:Oe,activeIndex:m,arrifiedValues:M,followerEnabledIndexSet:z,handleRailMouseDown:Je,handleHandleFocus:Qe,handleHandleBlur:Ze,handleHandleMouseEnter:et,handleHandleMouseLeave:tt,handleRailKeyDown:Xe,indicatorCssVars:r?void 0:Ve,indicatorThemeClass:Y==null?void 0:Y.themeClass,indicatorOnRender:Y==null?void 0:Y.onRender,cssVars:r?void 0:Te,themeClass:G==null?void 0:G.themeClass,onRender:G==null?void 0:G.onRender}},render(){var n;const{mergedClsPrefix:o,themeClass:f,formatTooltip:r}=this;return(n=this.onRender)===null||n===void 0||n.call(this),_("div",{class:[`${o}-slider`,f,{[`${o}-slider--disabled`]:this.mergedDisabled,[`${o}-slider--active`]:this.activeIndex!==-1,[`${o}-slider--with-mark`]:this.marks,[`${o}-slider--vertical`]:this.vertical,[`${o}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},_("div",{class:`${o}-slider-rail`},_("div",{class:`${o}-slider-rail__fill`,style:this.fillStyle}),this.marks?_("div",{class:[`${o}-slider-dots`,this.dotTransitionDisabled&&`${o}-slider-dots--transition-disabled`]},this.markInfos.map(v=>_("div",{key:v.label,class:[`${o}-slider-dot`,{[`${o}-slider-dot--active`]:v.active}],style:v.style}))):null,_("div",{ref:"handleRailRef",class:`${o}-slider-handles`},this.arrifiedValues.map((v,u)=>{const d=this.isShowTooltip(u);return _(_t,null,{default:()=>[_(Ct,null,{default:()=>_("div",{ref:this.setHandleRefs(u),class:`${o}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(v,u),onFocus:()=>{this.handleHandleFocus(u)},onBlur:()=>{this.handleHandleBlur(u)},onMouseenter:()=>{this.handleHandleMouseEnter(u)},onMouseleave:()=>{this.handleHandleMouseLeave(u)}},St(this.$slots.thumb,()=>[_("div",{class:`${o}-slider-handle`})]))}),this.tooltip&&_(zt,{ref:this.setFollowerRefs(u),show:d,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(u),teleportDisabled:this.adjustedTo===xe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>_(Ue,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(u),onEnter:()=>{this.followerEnabledIndexSet.add(u)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(u)}},{default:()=>{var y;return d?((y=this.indicatorOnRender)===null||y===void 0||y.call(this),_("div",{class:[`${o}-slider-handle-indicator`,this.indicatorThemeClass,`${o}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof r=="function"?r(v):v)):null}})})]})})),this.marks?_("div",{class:`${o}-slider-marks`},this.markInfos.map(v=>_("div",{key:v.label,class:`${o}-slider-mark`,style:v.style},v.label))):null))}}),Jt=L([L("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),i("spin-container",{position:"relative"},[i("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Rt()])]),i("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),i("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[I("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),i("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),i("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[I("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),qt={small:20,medium:18,large:16},Qt=Object.assign(Object.assign({},ue.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),Zt=X({name:"Spin",props:Qt,setup(n){const{mergedClsPrefixRef:o,inlineThemeDisabled:f}=Ae(n),r=ue("Spin","-spin",Jt,Tt,n,o),v=C(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:y},self:w}=r.value,{opacitySpinning:b,color:z,textColor:E}=w,A=typeof d=="number"?Vt(d):w[It("size",d)];return{"--n-bezier":y,"--n-opacity-spinning":b,"--n-size":A,"--n-color":z,"--n-text-color":E}}),u=f?we("spin",C(()=>{const{size:d}=n;return typeof d=="number"?String(d):d[0]}),v,n):void 0;return{mergedClsPrefix:o,compitableShow:Mt(n,["spinning","show"]),mergedStrokeWidth:C(()=>{const{strokeWidth:d}=n;if(d!==void 0)return d;const{size:y}=n;return qt[typeof y=="number"?"medium":y]}),cssVars:f?void 0:v,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var n,o;const{$slots:f,mergedClsPrefix:r,description:v}=this,u=f.icon&&this.rotate,d=(v||f.description)&&_("div",{class:`${r}-spin-description`},v||((n=f.description)===null||n===void 0?void 0:n.call(f))),y=f.icon?_("div",{class:[`${r}-spin-body`,this.themeClass]},_("div",{class:[`${r}-spin`,u&&`${r}-spin--rotate`],style:f.default?"":this.cssVars},f.icon()),d):_("div",{class:[`${r}-spin-body`,this.themeClass]},_(Dt,{clsPrefix:r,style:f.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${r}-spin`}),d);return(o=this.onRender)===null||o===void 0||o.call(this),f.default?_("div",{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},_("div",{class:[`${r}-spin-content`,this.compitableShow&&`${r}-spin-content--spinning`]},f),_(Ue,{name:"fade-in-transition"},{default:()=>this.compitableShow?y:null})):y}});function en(){const n=new Date,o=n.getDate(),f=n.getMonth()+1;return`${n.getFullYear()}-${f}-${o}`}const tn={class:"p-4 space-y-5 min-h-[200px]"},nn={class:"space-y-6"},sn={class:"flex items-center space-x-4"},on={class:"flex-shrink-0 w-[100px]"},an={class:"flex-1"},ln={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"w-[200px]"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},hn={class:"flex-1"},vn={class:"flex-shrink-0 w-[100px]"},fn={class:"flex flex-wrap items-center gap-4"},pn={class:"flex items-center space-x-4"},mn={class:"flex-shrink-0 w-[100px]"},gn={class:"flex flex-wrap items-center gap-4"},bn={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[100px]"},wn={class:"flex flex-wrap items-center gap-4"},xn={class:"flex items-center space-x-4"},kn={class:"flex-shrink-0 w-[100px]"},$n=X({__name:"General",setup(n){const o=Bt(),f=Nt(),{isMobile:r}=Pt(),v=Ee(),u=C(()=>o.theme),d=C(()=>f.userInfo),y=S(d.value.avatar??""),w=S(d.value.name??""),b=S(d.value.description??""),z=C({get(){return o.language},set(g){o.setLanguage(g)}}),E=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],A=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"}];function H(g){f.updateUserInfo(g),v.success(K("common.success"))}function J(){f.resetUserInfo(),v.success(K("common.success")),window.location.reload()}function he(){const g=en(),$=localStorage.getItem("chatStorage")||"{}",m=JSON.stringify(JSON.parse($),null,2),j=new Blob([m],{type:"application/json"}),B=URL.createObjectURL(j),D=document.createElement("a");D.href=B,D.download=`chat-store_${g}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D)}function q(g){const $=g.target;if(!$||!$.files)return;const m=$.files[0];if(!m)return;const j=new FileReader;j.onload=()=>{try{const B=JSON.parse(j.result);localStorage.setItem("chatStorage",JSON.stringify(B)),v.success(K("common.success")),location.reload()}catch{v.error(K("common.invalidFileFormat"))}},j.readAsText(m)}function M(){localStorage.removeItem("chatStorage"),location.reload()}function Z(){const g=document.getElementById("fileInput");g&&g.click()}return(g,$)=>(O(),Q("div",tn,[a("div",nn,[a("div",sn,[a("span",on,l(g.$t("setting.avatarLink")),1),a("div",an,[p(c(ce),{value:y.value,"onUpdate:value":$[0]||($[0]=m=>y.value=m),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[1]||($[1]=m=>H({avatar:y.value}))},{default:k(()=>[N(l(g.$t("common.save")),1)]),_:1})]),a("div",ln,[a("span",rn,l(g.$t("setting.name")),1),a("div",dn,[p(c(ce),{value:w.value,"onUpdate:value":$[2]||($[2]=m=>w.value=m),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[3]||($[3]=m=>H({name:w.value}))},{default:k(()=>[N(l(g.$t("common.save")),1)]),_:1})]),a("div",cn,[a("span",un,l(g.$t("setting.description")),1),a("div",hn,[p(c(ce),{value:b.value,"onUpdate:value":$[4]||($[4]=m=>b.value=m),placeholder:""},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:$[5]||($[5]=m=>H({description:b.value}))},{default:k(()=>[N(l(g.$t("common.save")),1)]),_:1})]),a("div",{class:At(["flex items-center space-x-4",c(r)&&"items-start"])},[a("span",vn,l(g.$t("setting.chatHistory")),1),a("div",fn,[p(c(P),{size:"small",onClick:he},{icon:k(()=>[p(c(W),{icon:"ri:download-2-fill"})]),default:k(()=>[N(" "+l(g.$t("common.export")),1)]),_:1}),a("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:q},null,32),p(c(P),{size:"small",onClick:Z},{icon:k(()=>[p(c(W),{icon:"ri:upload-2-fill"})]),default:k(()=>[N(" "+l(g.$t("common.import")),1)]),_:1}),p(c(Ut),{placement:"bottom",onPositiveClick:M},{trigger:k(()=>[p(c(P),{size:"small"},{icon:k(()=>[p(c(W),{icon:"ri:close-circle-line"})]),default:k(()=>[N(" "+l(g.$t("common.clear")),1)]),_:1})]),default:k(()=>[N(" "+l(g.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),a("div",pn,[a("span",mn,l(g.$t("setting.theme")),1),a("div",gn,[(O(),Q(Et,null,Ht(E,m=>p(c(P),{key:m.key,size:"small",type:m.key===u.value?"primary":void 0,onClick:j=>c(o).setTheme(m.key)},{icon:k(()=>[p(c(W),{icon:m.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),a("div",bn,[a("span",yn,l(g.$t("setting.language")),1),a("div",wn,[p(c(jt),{style:{width:"140px"},value:z.value,options:A,onUpdateValue:$[6]||($[6]=m=>c(o).setLanguage(m))},null,8,["value"])])]),a("div",xn,[a("span",kn,l(g.$t("setting.resetUserInfo")),1),p(c(P),{size:"small",onClick:J},{default:k(()=>[N(l(g.$t("common.reset")),1)]),_:1})])])]))}}),_n={class:"p-4 space-y-5 min-h-[200px]"},Cn={class:"space-y-6"},Sn={class:"flex items-center space-x-4"},zn={class:"flex-shrink-0 w-[120px]"},Rn={class:"flex-1"},Tn={class:"flex items-center space-x-4"},Vn={class:"flex-shrink-0 w-[120px]"},In={class:"flex-1"},Mn={class:"flex items-center space-x-4"},Dn={class:"flex-shrink-0 w-[120px]"},Bn={class:"flex-1"},Nn={class:"flex items-center space-x-4"},Pn=a("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),An=X({__name:"Advanced",setup(n){const o=Ft(),f=Ee(),r=S(o.systemMessage??""),v=S(o.temperature??.5),u=S(o.top_p??1);function d(w){o.updateSetting(w),f.success(K("common.success"))}function y(){o.resetSetting(),f.success(K("common.success")),window.location.reload()}return(w,b)=>(O(),Q("div",_n,[a("div",Cn,[a("div",Sn,[a("span",zn,l(w.$t("setting.role")),1),a("div",Rn,[p(c(ce),{value:r.value,"onUpdate:value":b[0]||(b[0]=z=>r.value=z),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),p(c(P),{size:"tiny",text:"",type:"primary",onClick:b[1]||(b[1]=z=>d({systemMessage:r.value}))},{default:k(()=>[N(l(w.$t("common.save")),1)]),_:1})]),a("div",Tn,[a("span",Vn,l(w.$t("setting.temperature")),1),a("div",In,[p(c(Pe),{value:v.value,"onUpdate:value":b[2]||(b[2]=z=>v.value=z),max:1,min:0,step:.1},null,8,["value"])]),a("span",null,l(v.value),1),p(c(P),{size:"tiny",text:"",type:"primary",onClick:b[3]||(b[3]=z=>d({temperature:v.value}))},{default:k(()=>[N(l(w.$t("common.save")),1)]),_:1})]),a("div",Mn,[a("span",Dn,l(w.$t("setting.top_p")),1),a("div",Bn,[p(c(Pe),{value:u.value,"onUpdate:value":b[4]||(b[4]=z=>u.value=z),max:1,min:0,step:.1},null,8,["value"])]),a("span",null,l(u.value),1),p(c(P),{size:"tiny",text:"",type:"primary",onClick:b[5]||(b[5]=z=>d({top_p:u.value}))},{default:k(()=>[N(l(w.$t("common.save")),1)]),_:1})]),a("div",Nn,[Pn,p(c(P),{size:"small",onClick:y},{default:k(()=>[N(l(w.$t("common.reset")),1)]),_:1})])])]))}}),Un="chatgpt-web",En="2.10.9",Hn="ChatGPT Web",jn="ChenZhaoYu <chenzhaoyu1994@gmail.com>",Fn=["chatgpt-web","chatgpt","chatbot","vue"],On={dev:"vite",build:"run-p type-check build-only",preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --noEmit",lint:"eslint .","lint:fix":"eslint . --fix",bootstrap:"pnpm install && pnpm run common:prepare","common:cleanup":"rimraf node_modules && rimraf pnpm-lock.yaml","common:prepare":"husky install"},Ln={"@traptitech/markdown-it-katex":"^3.6.0","@vueuse/core":"^9.13.0","highlight.js":"^11.7.0",html2canvas:"^1.4.1",katex:"^0.16.4","markdown-it":"^13.0.1","naive-ui":"^2.34.3",pinia:"^2.0.33",vue:"^3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6"},Wn={"@antfu/eslint-config":"^0.35.3","@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/vue":"^4.1.0","@types/crypto-js":"^4.1.1","@types/katex":"^0.16.0","@types/markdown-it":"^12.2.3","@types/markdown-it-link-attributes":"^3.0.1","@types/node":"^18.14.6","@vitejs/plugin-vue":"^4.0.0",autoprefixer:"^10.4.13",axios:"^1.3.4","crypto-js":"^4.1.1",eslint:"^8.35.0",husky:"^8.0.3",less:"^4.1.3","lint-staged":"^13.1.2","markdown-it-link-attributes":"^4.0.1","npm-run-all":"^4.1.5",postcss:"^8.4.21",rimraf:"^4.2.0",tailwindcss:"^3.2.7",typescript:"~4.9.5",vite:"^4.2.0","vite-plugin-pwa":"^0.14.4","vue-tsc":"^1.2.0"},Gn={name:Un,version:En,private:!1,description:Hn,author:jn,keywords:Fn,scripts:On,dependencies:Ln,devDependencies:Wn,"lint-staged":{"*.{ts,tsx,vue}":["pnpm lint:fix"]}},Yn={class:"p-4 space-y-4"},Kn={class:"text-xl font-bold"},Xn={key:0},Jn={key:1},qn=X({__name:"About",setup(n){const o=He(),f=S(!1),r=S(),v=C(()=>!!o.isChatGPTAPI);async function u(){try{f.value=!0;const{data:d}=await Lt();r.value=d}finally{f.value=!1}}return Ot(()=>{u()}),(d,y)=>(O(),ke(c(Zt),{show:f.value},{default:k(()=>{var w,b,z,E,A,H;return[a("div",Yn,[a("h2",Kn," Version - "+l(c(Gn).version),1),a("p",null,l(d.$t("setting.api"))+"："+l(((w=r.value)==null?void 0:w.apiModel)??"-"),1),v.value?(O(),Q("p",Xn,l(d.$t("setting.monthlyUsage"))+"："+l(((b=r.value)==null?void 0:b.usage)??"-"),1)):$e("",!0),v.value?$e("",!0):(O(),Q("p",Jn,l(d.$t("setting.reverseProxy"))+"："+l(((z=r.value)==null?void 0:z.reverseProxy)??"-"),1)),a("p",null,l(d.$t("setting.timeout"))+"："+l(((E=r.value)==null?void 0:E.timeoutMs)??"-"),1),a("p",null,l(d.$t("setting.socks"))+"："+l(((A=r.value)==null?void 0:A.socksProxy)??"-"),1),a("p",null,l(d.$t("setting.httpsProxy"))+"："+l(((H=r.value)==null?void 0:H.httpsProxy)??"-"),1)])]}),_:1},8,["show"]))}}),Qn={class:"ml-2"},Zn={class:"min-h-[100px]"},es={class:"ml-2"},ts={class:"min-h-[100px]"},ns={class:"ml-2"},os=X({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(n,{emit:o}){const f=n,r=He(),v=C(()=>!!r.isChatGPTAPI),u=S("General"),d=C({get(){return f.visible},set(y){o("update:visible",y)}});return(y,w)=>(O(),ke(c(Gt),{show:d.value,"onUpdate:show":w[1]||(w[1]=b=>d.value=b),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:k(()=>[a("div",null,[p(c(Wt),{value:u.value,"onUpdate:value":w[0]||(w[0]=b=>u.value=b),type:"line",animated:""},{default:k(()=>[p(c(ye),{name:"General",tab:"General"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:file-user-line"}),a("span",Qn,l(y.$t("setting.general")),1)]),default:k(()=>[a("div",Zn,[p($n)])]),_:1}),v.value?(O(),ke(c(ye),{key:0,name:"Advanced",tab:"Advanced"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:equalizer-line"}),a("span",es,l(y.$t("setting.advanced")),1)]),default:k(()=>[a("div",ts,[p(An)])]),_:1})):$e("",!0),p(c(ye),{name:"Config",tab:"Config"},{tab:k(()=>[p(c(W),{class:"text-lg",icon:"ri:list-settings-line"}),a("span",ns,l(y.$t("setting.config")),1)]),default:k(()=>[p(qn)]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{os as default};
