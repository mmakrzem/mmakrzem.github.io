import{h as d,g as c,o as g,s as S,G as b,a as p,b as w,f as u,c as l,d as k,i as f,C as E,e as L}from"./PayPal.11b9b7ea.js";const y="full",e={inCart:{els:new Map,ids:new Set,totalFee:0},isSignedIn:!1,orderItems:[],payPalTotalEl:void 0,purchaseContentEl:void 0,purchaseHistoryEl:void 0,storeContentEl:void 0,topSectionEl:void 0},A=d(u(),"getShopPricesAsync"),P=d(u(),"getShopPurchasesAsync"),x=d(u(),"purchaseShopItemsAsync"),T=d(u(),"handleShopOrderAsync");function q(){e.topSectionEl=c({query:"#topSection"}),e.payPalTotalEl=c({query:"#payPalTotal"}),e.purchaseHistoryEl=c({query:"#purchaseHistory"}),e.purchaseContentEl=c({query:"#purchaseContent"}),g(p(),async o=>{e.isSignedIn=o!==null,await H(),l({isVisible:!1,query:"#loading",root:e.topSectionEl}),l({isVisible:!e.isSignedIn,query:"button.signIn",root:e.topSectionEl}),l({isVisible:e.isSignedIn,query:"button.signOut",root:e.topSectionEl})}),c({query:"button.signIn",root:e.topSectionEl}).addEventListener("click",()=>S(p(),new b)),c({query:"button.signOut",root:e.topSectionEl}).addEventListener("click",()=>w(p()))}async function H(){e.storeContentEl===void 0&&(e.storeContentEl=c({query:"#storeContent"}),$()),e.isSignedIn?(e.storeItems===void 0&&(e.storeItems=await F(),O(),M(),await K()),await V(),D(),await N()):e.storeItems!==void 0&&window.location.reload(),B(),l({isVisible:e.isSignedIn&&e.storeItems!==void 0&&Object.keys(e.storeItems).length>0,query:"div.footer",root:e.storeContentEl})}function $(){const n=e.storeContentEl.querySelectorAll("label");for(const t of n){if(!(t instanceof HTMLLabelElement)){console.error(t," is not a label! Skipping it.");continue}t.addEventListener("click",()=>{e.isSignedIn||e.topSectionEl.scrollIntoView({behavior:"smooth"})})}}function M(){const n=e.storeContentEl.querySelectorAll('input[type="checkbox"]');for(const t of n){if(!(t instanceof HTMLInputElement)){console.error(t," is not a checkbox! Skipping it.");continue}t.addEventListener("click",()=>{if(!e.isSignedIn){t.checked=!t.checked;return}const o=t.value;t.checked&&!e.inCart.ids.has(o)?(e.inCart.ids.add(o),I()):!t.checked&&e.inCart.ids.has(o)&&(e.inCart.ids.delete(o),I())})}}function O(){for(const n in e.storeItems){const t=c({query:`p.price.inCart.${n}`,root:e.storeContentEl});e.inCart.els.set(n,t)}}function I(){if(e.storeItems!==void 0){e.inCart.totalFee=0;for(const n in e.storeItems){const t=e.storeItems[n];if(t===void 0){console.error(`no price found for ${n}`);continue}const o=e.inCart.els.get(n);if(o===void 0){console.error(`no inCartEl found for ${n}`);continue}const s=t.salePrice??t.price;e.inCart.ids.has(n)?(e.inCart.totalFee+=s,o.innerHTML=`$ ${s}`,o.classList.add(y)):(o.innerHTML="",o.classList.remove(y))}e.payPalTotalEl.innerHTML=`$ ${e.inCart.totalFee.toFixed(2)}`}}function B(){const n=e.storeContentEl.querySelectorAll('input[type="checkbox"]');for(const t of n){if(!(t instanceof HTMLInputElement)){console.error(t," is not a checkbox! Skipping it.");continue}t.style.visibility=e.isSignedIn?"visible":"hidden"}}async function F(){const n=e.storeContentEl.querySelectorAll('input[type="checkbox"]'),t=[];for(const r of n)t.push(r.id);let o=!1;const s={};try{const r=await A({itemIds:t});for(const i of t){const a=r.data.storeItems[i];a===void 0?(console.error("getShopPricesAsync missing storeItem for",i),h(i),o=!0):s[i]=a}}catch(r){alert(r);for(const i of t)h(i);o=!0,console.error("Is functions emulator running?")}return o&&v(),s}async function V(){try{const n=await P();e.purchasedItems=n.data.purchasedItems}catch(n){alert(n),console.error("Is functions emulator running?")}}function h(n){let t=e.storeContentEl.querySelector(`#storeContent #${n}`);t?.remove(),t=e.storeContentEl.querySelector(`label[for="${n}"]`),t?.remove();const o=e.storeContentEl.querySelectorAll(`p.${n}`);for(const s of o)s.remove();t=e.storeContentEl.querySelector(`div.rowBorder.${n}`),t?.remove()}function v(){const n=[...e.storeContentEl.querySelectorAll("div.header")];for(let t=n.length-1;t>=0;--t){const o=n[t],s=o?.nextElementSibling;s instanceof HTMLDivElement&&(s.classList.contains("header")||s.classList.contains("footer"))&&o?.remove()}if(e.storeContentEl.childElementCount===1){const t=e.storeContentEl.children[0];if(t instanceof HTMLDivElement&&t.classList.contains("footer")){t.style.display="none";const o=document.createElement("div");o.classList.add("soldOut"),o.textContent="Thank you for supporting this website! There are no new items to sell to you at this time.",e.storeContentEl.append(o)}}}function D(){if(e.storeItems===void 0)return;const n=Object.keys(e.storeItems);let t=!1;for(const o of n){if(_(o)){t=!0,delete e.storeItems[o];continue}const s=e.storeContentEl.querySelectorAll(`p.item.price.${o}`);for(const r of s){if(!(r instanceof HTMLParagraphElement)){console.error("unexpected p.price element ",r);continue}const i=e.storeItems[o];if(i===void 0){r.innerHTML="";continue}let a="";i.salePrice!==void 0&&(a=`<span class="sale">$ ${i.price.toFixed(2)}</span><br/>`);const C=i.salePrice??i.price;a+=`<span class="fee">$ ${C.toFixed(2)}</span>`,r.innerHTML=a}}t&&v()}function _(n){if(e.purchasedItems===void 0||Object.keys(e.purchasedItems).length===0)return!1;const t=e.purchasedItems[n]!==void 0;return t&&h(n),t}async function K(){try{const n=await k(),t=n.Buttons&&n.Buttons({createOrder:async()=>{const o=await x({isSandbox:f(),itemIds:[...e.inCart.ids]});return(o===void 0||o.data===void 0)&&alert(`Error creating order.  Please contact ${E} for help`),e.orderItems=o.data.items,o.data.id},onApprove:async(o,s)=>{(await T({isSandbox:f(),orderId:o.orderID,orderItems:e.orderItems})).data.isPurchased&&setTimeout(()=>window.location.reload(),2e3)},onError:o=>{alert(`Error processing order. Try again, or please contact ${E} for help`),console.error(o)},onInit:(o,s)=>{s.disable(),new MutationObserver(()=>{e.inCart.totalFee>0?s.enable():s.disable()}).observe(e.payPalTotalEl,{childList:!0})}});if(t===void 0)throw new Error("paypal.Buttons is undefined?");t.render("#payPalButton")}catch(n){console.error("failed to load the PayPal JS SDK script",n)}}async function N(){if(e.purchasedItems===void 0||Object.keys(e.purchasedItems).length===0){e.purchaseHistoryEl.style.display="none";return}const n=[],t=[],o=[];let s=!1;for(const r in e.purchasedItems){const i=e.purchasedItems[r];switch(i?.type){case"code":{n.push({...i,itemId:r}),s=!0;break}case"software":{t.push({...i,itemId:r}),s=!0;break}case"vmk":{o.push({...i,itemId:r}),s=!0;break}default:console.error("unhandled purchasedItem.type=",i?.type)}}e.purchaseContentEl.innerHTML="",await m({itemDetails:n,sectionName:"Source Code"}),await m({itemDetails:t,sectionName:"Software"}),await m({itemDetails:o,sectionName:"VMK Series"}),e.purchaseHistoryEl.style.display=s?"block":"none"}async function m(n){const{itemDetails:t,sectionName:o}=n;if(t.length!==0){e.purchaseContentEl.append(j(o));for(const s of t)e.purchaseContentEl.append(await R(s))}}function j(n){const t=document.createElement("div");return t.classList.add("header"),t.innerHTML=n,t}async function R(n){const t=document.createElement("div");t.classList.add("purchasedItem");const o=document.createElement("p");if(o.textContent=n.name,t.append(o),n.type==="vmk"){const s=document.createElement("a");s.href=`/marekKnows/${n.itemId}`,t.append(s),s.textContent="Access videos here";const r=document.createElement("img");r.classList.add("vmk"),r.src=`/images/marekKnows/shop/${n.itemId}.jpg`,r.width=100,s.prepend(r)}else{const s=document.createElement("div");s.classList.add("files");for(const r of n.files)s.append(await U(r));t.append(s)}return t}async function U(n){const t=document.createElement("div");t.classList.add("download");const o=document.createElement("p");if(o.textContent=n.name,t.append(o),n.isVideo){const s=document.createElement("a");s.href="#",s.addEventListener("click",()=>window.playYouTubeVideo(n.url)),t.append(s);const r=document.createElement("img");r.src="/images/marekKnows/shop/watch.svg",s.append(r);const i=document.createElement("div");i.textContent="Watch",s.append(i)}else{const s=document.createElement("a");s.href=await L(n.url),t.append(s);const r=document.createElement("img");r.src="/images/marekKnows/shop/download.png",s.append(r);const i=document.createElement("div");i.textContent="Download",s.append(i)}return t}q();