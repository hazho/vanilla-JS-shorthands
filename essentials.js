const wndw=window, w=wndw, doc=document;
w.debg=console.log,w.info=console.info,w.warn=console.warn,w.err=console.error,w.lS=localStorage;
Object.assign(Window.prototype,{mean_val(a,b){return (a+b)/2}, toggleAtt(el,a){el.hasAttribute(a)?el.removeAttribute(a):el.setAttribute(a,'')}, rmAtt(el,a){el.removeAttribute(a)}, addAtt(el,a,v){if(!el.hasAttribute(a))el.setAttribute(a,v)}, on(evt,fn){this.addEventListener(evt,fn)}});
String.prototype.capitalize=function(){return this.split(/[_-]/).map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ')};
const att=(el,a)=>{return el.getAttribute(a)}, hasAtt=(el,a)=>{return el.hasAttribute(a)}, updateAtts=(el,nAtts)=>{for(var [a,v] of Object.entries(nAtts))el.setAttribute(a,v)}, findEls=(el,s)=>{return typeof el==='string'?doc.querySelectorAll(el):el.querySelectorAll(s)}, findEl=(el,s)=>{return typeof el==='string'?doc.querySelector(el):el.querySelector(s)}, setAtt=(el,a,v)=>{return el.setAttribute(a,v)}, on=(el,evt,fn)=>{typeof el==='string'?w.addEventListener(evt,fn):el?.addEventListener(evt,fn);if(el&&typeof el.setAttribute==='function'){el.setAttribute('data-has-listener', '1')}}, createEl=a=>{return doc.createElement(a)};
(()=>{cCS=(prf='')=>{let css='';for(let i=0.5;i<=12;i+=0.5){css+=`.${prf+'col'+i.toFixed(1).replace('.0','').replace(/\./g,'\\.')}{width:${(i/12)* 100}%}`}return css};cS=createEl('style');cS.textContent=`${cCS()}@media (min-width:481px) and (max-width:992px){${cCS('tab_')}}@media (max-width:480px){${cCS('mob_')}}`;cS.id='cols_styles';doc.head.appendChild(cS)})();
