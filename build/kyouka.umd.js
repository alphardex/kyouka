!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).kyouka=t()}(this,(function(){"use strict";const e=(t,n=t.length,...r)=>n<=r.length?t(...r):e.bind(null,t,n,...r),t=e=>{if(null===e)return null;let n=Object.assign({},e);return Object.keys(n).forEach((r=>n[r]="object"==typeof e[r]?t(e[r]):e[r])),Array.isArray(e)&&e.length?(n.length=e.length)&&Array.from(n):Array.isArray(e)?Array.from(e):n},n=e=>180*e/Math.PI,r=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",o=e=>{e.preventDefault()},a=(e,t)=>{if(e===t)return!0;if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(!e||!t||"object"!=typeof e&&"object"!=typeof t)return e===t;if(e.prototype!==t.prototype)return!1;let n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>a(e[n],t[n])))},i=e=>e<0?(()=>{throw new TypeError("Negative numbers are not allowed!")})():e<=1?1:e*i(e-1),l=e=>e/window.innerWidth*100,s=(e=null,t="px")=>{const n={x:void 0!==(e=e||window).pageXOffset?e.pageXOffset:e.scrollLeft,y:void 0!==e.pageYOffset?e.pageYOffset:e.scrollTop};return"vw"===t&&(n.x=l(n.x),n.y=l(n.y)),n},c=(e,t)=>{const n=new FileReader;n.readAsDataURL(e),n.addEventListener("load",(()=>{const e=n.result;t(e)}))},d={getCenterPointPos:e=>{const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}},getMousePos:e=>({x:e.clientX,y:e.clientY}),getTimeFromDate:e=>e.toTimeString().slice(0,8).split(":").join(""),randomIntArrayInRange:(e,t,n=1)=>Array.from({length:n},(()=>Math.floor(Math.random()*(t-e+1))+e)),randomNumberInRange:(e,t)=>Math.random()*(t-e)+e,randomIntegerInRange:(e,t)=>Math.floor(Math.random()*(t-e+1))+e,requestInterval:(e,t)=>{let n=(new Date).getTime(),r={value:0},o=()=>{r.value=requestAnimationFrame(o),(new Date).getTime()-n>=t&&(e(),n=(new Date).getTime())};return r.value=requestAnimationFrame(o),r},sample:e=>e[Math.floor(Math.random()*e.length)],shuffle:([...e])=>{let t=e.length;for(;t;){const n=Math.floor(Math.random()*t--);[e[t],e[n]]=[e[n],e[t]]}return e},sleep:e=>new Promise((t=>setTimeout(t,e))),vw2px:e=>e*Math.min(window.innerWidth,document.documentElement.clientWidth)/100,sum:(...e)=>[...e].reduce(((e,t)=>e+t),0),formatDuration:e=>{e<0&&(e=-e);return{day:Math.floor(e/864e5),hour:Math.floor(e/36e5)%24,minute:Math.floor(e/6e4)%60,second:Math.floor(e/1e3)%60,millisecond:Math.floor(e)%1e3}},getTimeDeltaAsSeconds:(e,t)=>{const n=e instanceof Date?e.getTime():e,r=(t instanceof Date?t.getTime():t)-n;return Math.floor(r)},isPhoneNumber:e=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(e),isBottomVisible:(e=0)=>window.innerHeight+window.scrollY>=document.body.offsetHeight-e,getURLParameters:e=>(e.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce(((e,t)=>(e[t.slice(0,t.indexOf("="))]=t.slice(t.indexOf("=")+1),e)),{}),average:(...e)=>e.reduce(((e,t)=>e+t),0)/e.length,previewImage:(e,t,n)=>{e.addEventListener("change",(e=>{const r=e.target.files,o=r?r[0]:null;c(o,(e=>{e&&(t.src=e,n(e))}))}))},getScrollPosition:s,getScrollPositionAsVw:(e=null)=>s(e,"vw"),px2vw:l,initialize2DArray:(e,t,n=null)=>Array.from({length:t}).map((()=>Array.from({length:e}).fill(n))),deepClone:t,initializeArrayWithValues:(e,t=0)=>Array(e).fill(t),CSVToArray:(e,t=",",n=!1)=>e.slice(n?e.indexOf("\n")+1:0).split("\n").map((e=>e.split(t))),arrayToCSV:(e,t=",")=>e.map((e=>e.map((e=>isNaN(e)?`"${e.replace(/"/g,'""')}"`:e)).join(t))).join("\n"),JSONToCSV:(e,t,n=",")=>[t.join(n),...e.map((e=>t.reduce(((t,r)=>`${t}${t.length?n:""}"${e[r]?e[r]:""}"`),"")))].join("\n"),CSVToJSON:(e,t=",")=>{const n=e.slice(0,e.indexOf("\n")).split(t);return e.slice(e.indexOf("\n")+1).split("\n").map((e=>{const r=e.split(t);return n.reduce(((e,t,n)=>(e[t]=r[n],e)),{})}))},uniq:e=>[...new Set(e)],omit:(e,t)=>Object.keys(e).filter((e=>!t.includes(e))).reduce(((t,n)=>(t[n]=e[n],t)),{}),pick:(e,t)=>t.reduce(((t,n)=>(n in e&&(t[n]=e[n]),t)),{}),iosInputScrollFix:()=>{"Mobile"===r()&&document.querySelectorAll("input, select, textarea").forEach((e=>{e.addEventListener("blur",(()=>{window.scrollBy(0,-1)}))}))},mapObject:(e,t)=>e.reduce(((n,r,o)=>(n[r]=t(r,o,e),n)),{}),mapKeys:(e,t)=>Object.keys(e).reduce(((n,r)=>(n[t(e[r],r,e)]=e[r],n)),{}),mapValues:(e,t)=>Object.keys(e).reduce(((n,r)=>(n[r]=t(e[r],r,e),n)),{}),isEmpty:e=>null==e||!(Object.keys(e)||e).length,debounce:(e,t=0)=>{let n;return function(...r){clearTimeout(n),n=setTimeout((()=>e.apply(this,r)),t)}},throttle:(e,t)=>{let n,r,o;return function(){const a=this,i=arguments;n?(clearTimeout(r),r=setTimeout((function(){Date.now()-o>=t&&(e.apply(a,i),o=Date.now())}),Math.max(t-(Date.now()-o),0))):(e.apply(a,i),o=Date.now(),n=!0)}},partial:(e,...t)=>(...n)=>e(...t,...n),compose:(...e)=>e.reduce(((e,t)=>(...n)=>e(t(...n)))),curry:e,memorize:e=>{const t=new Map,n=function(n){return(t.has(n)||t.set(n,e.call(this,n)))&&t.get(n)};return n.cache=t,n},attempt:(e,...t)=>{try{return e(...t)}catch(e){return e instanceof Error?e:new Error(e)}},compact:e=>e.filter(Boolean),promisify:e=>(...t)=>new Promise(((n,r)=>e(...t,((e,t)=>e?r(e):n(t))))),distance:(e,t)=>Math.hypot(t.x-e.x,t.y-e.y),zip:(...e)=>{const t=Math.max(...e.map((e=>e.length)));return Array.from({length:t}).map(((t,n)=>Array.from({length:e.length},((t,r)=>e[r][n]))))},range:function*(e,t,n=1){let r=e;for(;r<t;)yield r,r+=n},unzip:e=>e.reduce(((e,t)=>(t.forEach(((t,n)=>e[n].push(t))),e)),Array.from({length:Math.max(...e.map((e=>e.length)))}).map((e=>[]))),union:(e,t)=>Array.from(new Set([...e,...t])),pluck:(e,t)=>e.map((e=>e[t])),mask:(e,t=4,n="*")=>`${e}`.slice(-t).padStart(`${e}`.length,n),intersection:(e,t)=>{const n=new Set(t);return[...new Set(e)].filter((e=>n.has(e)))},animateNumber:(e,t,n,r)=>{let o=null,a=i=>{o=o||i;let l=i-o,s=Math.min(l/r,1);e(t+s*(n-t)),s<1&&window.requestAnimationFrame(a)};window.requestAnimationFrame(a)},detectDeviceType:r,deg2rad:e=>e*Math.PI/180,factorial:i,equals:a,includesAll:(e,t)=>t.every((t=>e.includes(t))),includesAny:(e,t)=>t.some((t=>e.includes(t))),rad2deg:n,randomHexColorCode:()=>"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6),timeTaken:e=>{console.time("timeTaken");const t=e();return console.timeEnd("timeTaken"),t},sumPower:(e,t=2,n=1)=>Array(e+1-n).fill(0).map(((e,r)=>(r+n)**t)).reduce(((e,t)=>e+t),0),reverseString:e=>[...e].reverse().join(""),vh2px:e=>e*Math.min(window.innerHeight,document.documentElement.clientHeight)/100,px2vh:e=>e/window.innerHeight*100,loadImageAsBase64URL:c,sampleSize:([...e],t=1)=>{let n=e.length;for(;n;){const t=Math.floor(Math.random()*n--);[e[n],e[t]]=[e[t],e[n]]}return e.slice(0,t)},fromTimestamp:e=>new Date(1e3*e),getTimestamp:(e=new Date,t=!1)=>{const n=e.getTime()/1e3;return t?Math.floor(n):n},isOdd:e=>e%2==1,isEven:e=>e%2==0,copyToClipboard:e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))},yesNo:(e,t=!1)=>!!/^(y|yes)$/i.test(e)||!/^(n|no)$/i.test(e)&&t,loadVideoAsBlob:(e,t,n="mp4")=>{const r=new FileReader;r.readAsArrayBuffer(e),r.addEventListener("load",(()=>{const e=r.result,o=new Blob([new Uint8Array(e)],{type:`video/${n}`});t(o)}))},maxN:(e,t=1)=>[...e].sort(((e,t)=>t-e)).slice(0,t),minN:(e,t=1)=>[...e].sort(((e,t)=>e-t)).slice(0,t),padNumber:(e,t)=>`${e}`.padStart(t,"0"),addHoursToDate:(e,t)=>(e.setTime(e.getTime()+60*t*60*1e3),e),addMinutesToDate:(e,t)=>(e.setTime(e.getTime()+60*t*1e3),e),addSecondsToDate:(e,t)=>(e.setTime(e.getTime()+1e3*t),e),chunk:(e,t)=>Array.from({length:Math.ceil(e.length/t)},((n,r)=>e.slice(r*t,r*t+t))),isUrl:e=>/^http(s)?/.test(e),objectMap:(e,t)=>Object.fromEntries(Object.entries(e).map((([e,n],r)=>[e,t(n,e,r)]))),orderBy:(e,t,n)=>[...e].sort(((e,r)=>t.reduce(((t,o,a)=>{if(0===t){const[i,l]=n&&"desc"===n[a]?[r[o],e[o]]:[e[o],r[o]];t=i>l?1:i<l?-1:0}return t}),0))),head:e=>e&&e.length?e[0]:void 0,last:e=>e&&e.length?e[e.length-1]:void 0,objectToQueryString:e=>e?Object.entries(e).reduce(((e,[t,n])=>{const r=0===e.length?"?":"&";return e+="string"==typeof n?`${r}${t}=${n}`:""}),""):"",clamp:(e,t,n)=>Math.max(Math.min(Number(e),Math.max(t,n)),Math.min(t,n)),isElBottomVisible:(e,t=0)=>e.offsetHeight+e.scrollTop>=e.scrollHeight-t,isIdcard:e=>/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(e),lerp:(e,t,n)=>e+(t-e)*n,maxBy:(e,t)=>Math.max(...e.map("function"==typeof t?t:e=>e[t])),minBy:(e,t)=>Math.min(...e.map("function"==typeof t?t:e=>e[t])),reload:()=>location.reload(),repeatArray:(e,t)=>[].concat(...Array(t).fill(e)),degreesAngle:(e,t)=>n(Math.atan2(t.y-e.y,t.x-e.x)),radiansAngle:(e,t)=>Math.atan2(t.y-e.y,t.x-e.x),addDaysToDate:(e,t)=>(e.setTime(e.getTime()+60*t*60*1e3*24),e),addWeeksToDate:(e,t)=>(e.setTime(e.getTime()+60*t*60*1e3*24*7),e),groupBy:(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((t,n,r)=>(t[n]=(t[n]||[]).concat(e[r]),t)),{}),chunkMultiSize:(e,t)=>{const n=[];let r=0,o=0;for(;o<e.length;){const a=t[r];n.push(e.slice(o,o+a)),r=(r+1)%t.length,o+=a}return n},disableTouchMove:()=>{document.body.addEventListener("touchmove",o,{passive:!1})},enableTouchMove:()=>{document.body.removeEventListener("touchmove",o)},getNormalizedMousePos:e=>({x:e.clientX/window.innerWidth*2-1,y:-e.clientY/window.innerHeight*2+1}),dataURItoFile:(e,t="1.jpg")=>{let n=e.split(",")[0].split(":")[1].split(";")[0],r=atob(e.split(",")[1]),o=new ArrayBuffer(r.length),a=new Uint8Array(o);for(let e=0;e<r.length;e++)a[e]=r.charCodeAt(e);return new File([a],t,{type:n})},dateRange:function*(e,t,n=1){let r=e;for(;r<t;)yield new Date(r),r.setDate(r.getDate()+n)},frequencies:e=>e.reduce(((e,t)=>(e[t]=e[t]?e[t]+1:1,e)),{}),countOccurrences:(e,t)=>e.reduce(((e,n)=>n===t?e+1:e),0),loopSlice:(e,t,n)=>{const[r,o]=[t,n];return o>=r?e.slice(r,o):[...e.slice(r,e.length),...e.slice(0,o)]},castArray:e=>Array.isArray(e)?e:[e],compatibleDate:e=>e.replace(/\.|\-/g,"/"),toHttps:e=>e.replace(/^http:/,"https:"),cleanObject:e=>(Object.keys(e).forEach((t=>{e[t]||delete e[t]})),e),isToday:e=>{const t=new Date;return e.getDate()==t.getDate()&&e.getMonth()==t.getMonth()&&e.getFullYear()==t.getFullYear()},isNumber:e=>"number"==typeof e&&e==e,isNumeric:e=>!isNaN(e),isObject:e=>e===Object(e),convertLetterToNumber:e=>{e=e.toUpperCase();const t="A".charCodeAt(0);return e.charCodeAt(0)-t},convertNumberToLetter:e=>{const t=e+"A".charCodeAt(0);return String.fromCharCode(t)},toFixed0:e=>Number(e).toFixed(0),toFixed1:e=>Number(e).toFixed(1),toFixed2:e=>Number(e).toFixed(2),toFixed3:e=>Number(e).toFixed(3),setCharAt:(e,t,n)=>t>e.length-1?e:e.substring(0,t)+n+e.substring(t+1),remove:(e,t)=>Array.isArray(e)?e.filter(t).reduce(((t,n)=>(e.splice(e.indexOf(n),1),t.concat(n))),[]):[],isPositiveInteger:e=>/^[1-9]\d*$/.test(e),setInnerHTML:(e,t)=>{e.innerHTML=t,Array.from(e.querySelectorAll("script")).forEach((e=>{const t=document.createElement("script");Array.from(e.attributes).forEach((e=>t.setAttribute(e.name,e.value))),t.appendChild(document.createTextNode(e.innerHTML)),e.parentNode.replaceChild(t,e)}))},hexToRgb:e=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},getRandString:(e=10)=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length;for(let o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*r));return t}};return d}));
