(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="153",op=0,eu=1,lp=2,eh=1,cp=2,gi=3,Zi=0,dn=1,Mi=2,Xi=0,fs=1,Nl=2,tu=3,nu=4,up=5,is=100,fp=101,hp=102,iu=103,ru=104,dp=200,pp=201,mp=202,_p=203,th=204,nh=205,gp=206,vp=207,xp=208,Mp=209,Sp=210,yp=0,Ep=1,Tp=2,Ol=3,bp=4,Ap=5,wp=6,Rp=7,ih=0,Cp=1,Pp=2,bi=0,Lp=1,Dp=2,Up=3,Ip=4,Np=5,rh=300,xs=301,Ms=302,Fl=303,Bl=304,Do=306,zl=1e3,Qn=1001,kl=1002,sn=1003,su=1004,Vo=1005,Fn=1006,Op=1007,oa=1008,Yi=1009,Fp=1010,Bp=1011,xc=1012,sh=1013,Fi=1014,Bi=1015,la=1016,ah=1017,oh=1018,gr=1020,zp=1021,ei=1023,kp=1024,Gp=1025,vr=1026,Ss=1027,Hp=1028,lh=1029,Vp=1030,ch=1031,uh=1033,Wo=33776,Xo=33777,Yo=33778,qo=33779,au=35840,ou=35841,lu=35842,cu=35843,Wp=36196,uu=37492,fu=37496,hu=37808,du=37809,pu=37810,mu=37811,_u=37812,gu=37813,vu=37814,xu=37815,Mu=37816,Su=37817,yu=37818,Eu=37819,Tu=37820,bu=37821,$o=36492,Xp=36283,Au=36284,wu=36285,Ru=36286,fh=3e3,xr=3001,Yp=3200,qp=3201,$p=0,Kp=1,Mr="",We="srgb",ni="srgb-linear",hh="display-p3",Ko=7680,Zp=519,jp=512,Jp=513,Qp=514,em=515,tm=516,nm=517,im=518,rm=519,Cu=35044,Pu="300 es",Gl=1035,yi=2e3,go=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zo=Math.PI/180,Hl=180/Math.PI;function ga(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[r&255]+Xt[r>>8&255]+Xt[r>>16&255]+Xt[r>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function fn(r,e,t){return Math.max(e,Math.min(t,r))}function sm(r,e){return(r%e+e)%e}function jo(r,e,t){return(1-t)*r+t*e}function Lu(r){return(r&r-1)===0&&r!==0}function Vl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ea(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,i,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],x=i[4],M=i[7],E=i[2],w=i[5],A=i[8];return s[0]=a*_+o*S+l*E,s[3]=a*m+o*x+l*w,s[6]=a*p+o*M+l*A,s[1]=c*_+u*S+h*E,s[4]=c*m+u*x+h*w,s[7]=c*p+u*M+h*A,s[2]=f*_+d*S+g*E,s[5]=f*m+d*x+g*w,s[8]=f*p+d*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new je;function dh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Du={};function Ks(r){r in Du||(Du[r]=!0,console.warn(r))}function hs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const am=new je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),om=new je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lm(r){return r.convertSRGBToLinear().applyMatrix3(om)}function cm(r){return r.applyMatrix3(am).convertLinearToSRGB()}const um={[ni]:r=>r,[We]:r=>r.convertSRGBToLinear(),[hh]:lm},fm={[ni]:r=>r,[We]:r=>r.convertLinearToSRGB(),[hh]:cm},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return ni},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=um[e],i=fm[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Br;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=vo("canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=hs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(el(i[a].image)):s.push(el(i[a]))}else s=el(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function el(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ph.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dm=0;class Cn extends Ps{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,n=Qn,i=Qn,s=Fn,a=oa,o=ei,l=Yi,c=Cn.DEFAULT_ANISOTROPY,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ga(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===xr?We:Mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zl:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zl:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?xr:fh}set encoding(e){Ks("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?We:Mr}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=rh;Cn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,i=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(d+1)/2,E=(p+1)/2,w=(u+f)/4,A=(h+_)/4,L=(g+m)/4;return x>M&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=A/n):M>E?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=L/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=L/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cr extends Ps{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ks("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?We:Mr),this.texture=new Cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _h extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pm extends Cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,p*S);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const M=o*S;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new q,Uu=new va;class xa{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)hi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(hi)}else i.boundingBox===null&&i.computeBoundingBox(),zr.copy(i.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ta.subVectors(this.max,Us),kr.subVectors(e.a,Us),Gr.subVectors(e.b,Us),Hr.subVectors(e.c,Us),Li.subVectors(Gr,kr),Di.subVectors(Hr,Gr),ir.subVectors(kr,Hr);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ir.z,ir.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ir.z,0,-ir.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ir.y,ir.x,0];return!nl(t,kr,Gr,Hr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,kr,Gr,Hr,Ta))?!1:(ba.crossVectors(Li,Di),t=[ba.x,ba.y,ba.z],nl(t,kr,Gr,Hr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new q,new q,new q,new q,new q,new q,new q,new q],hi=new q,zr=new xa,kr=new q,Gr=new q,Hr=new q,Li=new q,Di=new q,ir=new q,Us=new q,Ta=new q,ba=new q,rr=new q;function nl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);const o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mm=new xa,Is=new q,il=new q;class Uo{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(il)),this.expandByPoint(Is.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new q,rl=new q,Aa=new q,Ui=new q,sl=new q,wa=new q,al=new q;class gh{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(rl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Ui.dot(this.direction),l=-Ui.dot(Aa),c=Ui.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(rl).addScaledVector(Aa,f),d}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),i=di.dot(di)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,s){sl.subVectors(t,e),wa.subVectors(n,e),al.crossVectors(sl,wa);let a=this.direction.dot(al),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const l=o*this.direction.dot(wa.crossVectors(Ui,wa));if(l<0)return null;const c=o*this.direction.dot(sl.cross(Ui));if(c<0||l+c>a)return null;const u=-o*Ui.dot(al);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,gm)}lookAt(e,t,n){const i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ii.crossVectors(n,Sn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ii.crossVectors(n,Sn)),Ii.normalize(),Ra.crossVectors(Sn,Ii),i[0]=Ii.x,i[4]=Ra.x,i[8]=Sn.x,i[1]=Ii.y,i[5]=Ra.y,i[9]=Sn.y,i[2]=Ii.z,i[6]=Ra.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],x=n[7],M=n[11],E=n[15],w=i[0],A=i[4],L=i[8],v=i[12],b=i[1],H=i[5],k=i[9],U=i[13],N=i[2],O=i[6],Z=i[10],I=i[14],X=i[3],j=i[7],R=i[11],le=i[15];return s[0]=a*w+o*b+l*N+c*X,s[4]=a*A+o*H+l*O+c*j,s[8]=a*L+o*k+l*Z+c*R,s[12]=a*v+o*U+l*I+c*le,s[1]=u*w+h*b+f*N+d*X,s[5]=u*A+h*H+f*O+d*j,s[9]=u*L+h*k+f*Z+d*R,s[13]=u*v+h*U+f*I+d*le,s[2]=g*w+_*b+m*N+p*X,s[6]=g*A+_*H+m*O+p*j,s[10]=g*L+_*k+m*Z+p*R,s[14]=g*v+_*U+m*I+p*le,s[3]=S*w+x*b+M*N+E*X,s[7]=S*A+x*H+M*O+E*j,s[11]=S*L+x*k+M*Z+E*R,s[15]=S*v+x*U+M*I+E*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,x=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,M=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,E=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*S+n*x+i*M+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=S*A,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*A,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*A,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*A,e[8]=M*A,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*A,e[12]=E*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,_=a*u,m=a*h,p=o*h,S=l*c,x=l*u,M=l*h,E=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*E,i[1]=(d+M)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(d-M)*w,i[5]=(1-(f+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(g+x)*A,i[9]=(m-S)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/s,u=1/a,h=1/o;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===yi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===go)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=yi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(o===yi)g=(a+s)*h,_=-2*h;else if(o===go)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new q,qn=new Bt,_m=new q(0,0,0),gm=new q(1,1,1),Ii=new q,Ra=new q,Sn=new q,Iu=new Bt,Nu=new va;class Io{constructor(e=0,t=0,n=0,i=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nu.setFromEuler(this),this.setFromQuaternion(Nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vm=0;const Ou=new q,Wr=new va,pi=new Bt,Ca=new q,Ns=new q,xm=new q,Mm=new va,Fu=new q(1,0,0),Bu=new q(0,1,0),zu=new q(0,0,1),Sm={type:"added"},ku={type:"removed"};class pn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new q,t=new Io,n=new va,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new je}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ns,Ca,this.up):pi.lookAt(Ca,Ns,this.up),this.quaternion.setFromRotationMatrix(pi),i&&(pi.extractRotation(i.matrixWorld),Wr.setFromRotationMatrix(pi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ku)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pn.DEFAULT_UP=new q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new q,mi=new q,ol=new q,_i=new q,Xr=new q,Yr=new q,Gu=new q,ll=new q,cl=new q,ul=new q;let Pa=!1;class jn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$n.subVectors(e,t),i.cross($n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){$n.subVectors(i,t),mi.subVectors(n,t),ol.subVectors(e,t);const a=$n.dot($n),o=$n.dot(mi),l=$n.dot(ol),c=mi.dot(mi),u=mi.dot(ol),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i),_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getUV(e,t,n,i,s,a,o,l){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,_i),l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l}static isFrontFacing(e,t,n,i){return $n.subVectors(n,t),mi.subVectors(e,t),$n.cross(mi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),$n.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Xr.subVectors(i,n),Yr.subVectors(s,n),ll.subVectors(e,n);const l=Xr.dot(ll),c=Yr.dot(ll);if(l<=0&&c<=0)return t.copy(n);cl.subVectors(e,i);const u=Xr.dot(cl),h=Yr.dot(cl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Xr,a);ul.subVectors(e,s);const d=Xr.dot(ul),g=Yr.dot(ul);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yr,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Gu.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Gu,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Xr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ym=0;class Ma extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=fs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:FB0296,orange:FB0296,orangered:FB0296,orchid:FB0296,palegoldenrod:15657130,palegreen:FB0296,paleturquoise:FB0296,palevioletred:FB0296,papayawhip:FB0296,peachpuff:FB0296,peru:FB0296,pink:FB0296,plum:FB0296,powderblue:FB0296,purple:FB0296,rebeccapurple:6697881,red:FB0296,rosybrown:FB0296,royalblue:FB0296,saddlebrown:FB0296,salmon:FB0296,sandybrown:FB0296,seagreen:FB0296,seashell:FB0296,sienna:FB0296,silver:FB0296,skyblue:FB0296,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},La={h:0,s:0,l:0};function fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=In.workingColorSpace){return this.r=e,this.g=t,this.b=n,In.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=In.workingColorSpace){if(e=sm(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return In.toWorkingColorSpace(this,i),this}setStyle(e,t=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return In.fromWorkingColorSpace(Yt.copy(this),e),Math.round(fn(Yt.r*255,0,255))*65536+Math.round(fn(Yt.g*255,0,255))*256+Math.round(fn(Yt.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=In.workingColorSpace){In.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=In.workingColorSpace){return In.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=We){In.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==We?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Kn),Kn.h+=e,Kn.s+=t,Kn.l+=n,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(La);const n=jo(Kn.h,La.h,t),i=jo(Kn.s,La.s,t),s=jo(Kn.l,La.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new lt;lt.NAMES=xh;class Mh extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new q,Da=new ht;class Wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this.updateRange={offset:0,count:-1},this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),i=Mn(i,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sh extends Wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yh extends Wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sr extends Wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Em=0;const Un=new Bt,hl=new pn,qr=new q,yn=new xa,Os=new xa,Nt=new q;class Ci extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?yh:Sh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(yn.min,Os.min),yn.expandByPoint(Nt),Nt.addVectors(yn.max,Os.max),yn.expandByPoint(Nt)):(yn.expandByPoint(Os.min),yn.expandByPoint(Os.max))}yn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Nt.add(qr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new q,u[b]=new q;const h=new q,f=new q,d=new q,g=new ht,_=new ht,m=new ht,p=new q,S=new q;function x(b,H,k){h.fromArray(i,b*3),f.fromArray(i,H*3),d.fromArray(i,k*3),g.fromArray(a,b*2),_.fromArray(a,H*2),m.fromArray(a,k*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(U),S.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(U),c[b].add(p),c[H].add(p),c[k].add(p),u[b].add(S),u[H].add(S),u[k].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,H=M.length;b<H;++b){const k=M[b],U=k.start,N=k.count;for(let O=U,Z=U+N;O<Z;O+=3)x(n[O+0],n[O+1],n[O+2])}const E=new q,w=new q,A=new q,L=new q;function v(b){A.fromArray(s,b*3),L.copy(A);const H=c[b];E.copy(H),E.sub(A.multiplyScalar(A.dot(H))).normalize(),w.crossVectors(L,H);const U=w.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=U}for(let b=0,H=M.length;b<H;++b){const k=M[b],U=k.start,N=k.count;for(let O=U,Z=U+N;O<Z;O+=3)v(n[O+0]),v(n[O+1]),v(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Wn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ci,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new Bt,sr=new gh,Ua=new Uo,Vu=new q,$r=new q,Kr=new q,Zr=new q,dl=new q,Ia=new q,Na=new ht,Oa=new ht,Fa=new ht,Wu=new q,Xu=new q,Yu=new q,Ba=new q,za=new q;class zi extends pn{constructor(e=new Ci,t=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(dl.fromBufferAttribute(h,e),a?Ia.addScaledVector(dl,u):Ia.addScaledVector(dl.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Ua.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ua,Vu)===null||sr.origin.distanceToSquared(Vu)>(e.far-e.near)**2))&&(Hu.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const w=o.getX(M),A=o.getX(M+1),L=o.getX(M+2);i=ka(this,p,e,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);i=ka(this,a,e,n,c,u,h,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,E=x;M<E;M+=3){const w=M,A=M+1,L=M+2;i=ka(this,p,e,n,c,u,h,w,A,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,x=m+1,M=m+2;i=ka(this,a,e,n,c,u,h,S,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Tm(r,e,t,n,i,s,a,o){let l;if(e.side===dn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Zi,o),l===null)return null;za.copy(o),za.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:r}}function ka(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,$r),r.getVertexPosition(l,Kr),r.getVertexPosition(c,Zr);const u=Tm(r,e,t,n,$r,Kr,Zr,Ba);if(u){i&&(Na.fromBufferAttribute(i,o),Oa.fromBufferAttribute(i,l),Fa.fromBufferAttribute(i,c),u.uv=jn.getInterpolation(Ba,$r,Kr,Zr,Na,Oa,Fa,new ht)),s&&(Na.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,l),Fa.fromBufferAttribute(s,c),u.uv1=jn.getInterpolation(Ba,$r,Kr,Zr,Na,Oa,Fa,new ht),u.uv2=u.uv1),a&&(Wu.fromBufferAttribute(a,o),Xu.fromBufferAttribute(a,l),Yu.fromBufferAttribute(a,c),u.normal=jn.getInterpolation(Ba,$r,Kr,Zr,Wu,Xu,Yu,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};jn.getNormal($r,Kr,Zr,h.normal),u.face=h}return u}class Sa extends Ci{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Sr(c,3)),this.setAttribute("normal",new Sr(u,3)),this.setAttribute("uv",new Sr(h,2));function g(_,m,p,S,x,M,E,w,A,L,v){const b=M/A,H=E/L,k=M/2,U=E/2,N=w/2,O=A+1,Z=L+1;let I=0,X=0;const j=new q;for(let R=0;R<Z;R++){const le=R*H-U;for(let z=0;z<O;z++){const ee=z*b-k;j[_]=ee*S,j[m]=le*x,j[p]=N,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(z/A),h.push(1-R/L),I+=1}}for(let R=0;R<L;R++)for(let le=0;le<A;le++){const z=f+le+O*R,ee=f+le+O*(R+1),J=f+(le+1)+O*(R+1),se=f+(le+1)+O*R;l.push(z,ee,se),l.push(ee,J,se),X+=6}o.addGroup(d,X,v),d+=X,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(r){const e={};for(let t=0;t<r.length;t++){const n=ys(r[t]);for(const i in n)e[i]=n[i]}return e}function bm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Eh(r){return r.getRenderTarget()===null?r.outputColorSpace:ni}const Am={clone:ys,merge:tn};var wm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wm,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Th extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bn extends Th{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Jr=1;class Cm extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Bn(jr,Jr,e,t);i.layers=this.layers,this.add(i);const s=new Bn(jr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new Bn(jr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new Bn(jr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new Bn(jr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new Bn(jr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=bi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class bh extends Cn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ks("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===xr?We:Mr),this.texture=new bh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sa(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Xi});s.uniforms.tEquirect.value=t;const a=new zi(i,s),o=t.minFilter;return t.minFilter===oa&&(t.minFilter=Fn),new Cm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const pl=new q,Lm=new q,Dm=new je;class cr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pl.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dm.getNormalMatrix(e),i=this.coplanarPoint(pl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Uo,Ga=new q;class Ah{constructor(e=new cr,t=new cr,n=new cr,i=new cr,s=new cr,a=new cr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,m-d,M-p).normalize(),n[1].setComponents(l+s,f+c,m+d,M+p).normalize(),n[2].setComponents(l+a,f+u,m+g,M+S).normalize(),n[3].setComponents(l-a,f-u,m-g,M-S).normalize(),n[4].setComponents(l-o,f-h,m-_,M-x).normalize(),t===yi)n[5].setComponents(l+o,f+h,m+_,M+x).normalize();else if(t===go)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ga.x=i.normal.x>0?e.max.x:e.min.x,Ga.y=i.normal.y>0?e.max.y:e.min.y,Ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Um(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Mc extends Ci{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,M=S+c*(p+1),E=S+1+c*(p+1),w=S+1+c*p;d.push(x,M,w),d.push(M,E,w)}this.setIndex(d),this.setAttribute("position",new Sr(g,3)),this.setAttribute("normal",new Sr(_,3)),this.setAttribute("uv",new Sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km="vec3 transformed = vec3( position );",Gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,E_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,U_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,O_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,F_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,X_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,q_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bg=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ag=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ng=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:Im,alphamap_pars_fragment:Nm,alphatest_fragment:Om,alphatest_pars_fragment:Fm,aomap_fragment:Bm,aomap_pars_fragment:zm,begin_vertex:km,beginnormal_vertex:Gm,bsdfs:Hm,iridescence_fragment:Vm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:qm,clipping_planes_vertex:$m,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:jm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:e_,defaultnormal_vertex:t_,displacementmap_pars_vertex:n_,displacementmap_vertex:i_,emissivemap_fragment:r_,emissivemap_pars_fragment:s_,encodings_fragment:a_,encodings_pars_fragment:o_,envmap_fragment:l_,envmap_common_pars_fragment:c_,envmap_pars_fragment:u_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:E_,envmap_vertex:h_,fog_vertex:d_,fog_pars_vertex:p_,fog_fragment:m_,fog_pars_fragment:__,gradientmap_pars_fragment:g_,lightmap_fragment:v_,lightmap_pars_fragment:x_,lights_lambert_fragment:M_,lights_lambert_pars_fragment:S_,lights_pars_begin:y_,lights_toon_fragment:T_,lights_toon_pars_fragment:b_,lights_phong_fragment:A_,lights_phong_pars_fragment:w_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:L_,lights_fragment_end:D_,logdepthbuf_fragment:U_,logdepthbuf_pars_fragment:I_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:O_,map_fragment:F_,map_pars_fragment:B_,map_particle_fragment:z_,map_particle_pars_fragment:k_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:H_,morphcolor_vertex:V_,morphnormal_vertex:W_,morphtarget_pars_vertex:X_,morphtarget_vertex:Y_,normal_fragment_begin:q_,normal_fragment_maps:$_,normal_pars_fragment:K_,normal_pars_vertex:Z_,normal_vertex:j_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Q_,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,output_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:lg,roughnessmap_fragment:cg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:_g,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:yg,transmission_fragment:Eg,transmission_pars_fragment:Tg,uv_pars_fragment:bg,uv_pars_vertex:Ag,uv_vertex:wg,worldpos_vertex:Rg,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Lg,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:Ig,depth_vert:Ng,depth_frag:Og,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:zg,equirect_frag:kg,linedashed_vert:Gg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:Xg,meshlambert_frag:Yg,meshmatcap_vert:qg,meshmatcap_frag:$g,meshnormal_vert:Kg,meshnormal_frag:Zg,meshphong_vert:jg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:r0,shadow_vert:s0,shadow_frag:a0,sprite_vert:o0,sprite_frag:l0},fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ri={basic:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:tn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:tn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:tn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:tn([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:tn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:tn([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:tn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:tn([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:tn([fe.common,fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:tn([fe.lights,fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ri.physical={uniforms:tn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ha={r:0,b:0,g:0};function c0(r,e,t,n,i,s,a){const o=new lt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let S=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),S=!0),r.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Do)?(u===void 0&&(u=new zi(new Sa(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:ys(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==We,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zi(new Mc(2,2),new Pr({name:"BackgroundMaterial",uniforms:ys(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==We,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ha,Eh(r)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function u0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(N,O,Z,I,X){let j=!1;if(a){const R=_(I,Z,O);c!==R&&(c=R,d(c.object)),j=p(N,I,Z,X),j&&S(N,I,Z,X)}else{const R=O.wireframe===!0;(c.geometry!==I.id||c.program!==Z.id||c.wireframe!==R)&&(c.geometry=I.id,c.program=Z.id,c.wireframe=R,j=!0)}X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,L(N,O,Z,I),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,O,Z){const I=Z.wireframe===!0;let X=o[N.id];X===void 0&&(X={},o[N.id]=X);let j=X[O.id];j===void 0&&(j={},X[O.id]=j);let R=j[I];return R===void 0&&(R=m(f()),j[I]=R),R}function m(N){const O=[],Z=[],I=[];for(let X=0;X<i;X++)O[X]=0,Z[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:I,object:N,attributes:{},index:null}}function p(N,O,Z,I){const X=c.attributes,j=O.attributes;let R=0;const le=Z.getAttributes();for(const z in le)if(le[z].location>=0){const J=X[z];let se=j[z];if(se===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(se=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(se=N.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;R++}return c.attributesNum!==R||c.index!==I}function S(N,O,Z,I){const X={},j=O.attributes;let R=0;const le=Z.getAttributes();for(const z in le)if(le[z].location>=0){let J=j[z];J===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),X[z]=se,R++}c.attributes=X,c.attributesNum=R,c.index=I}function x(){const N=c.newAttributes;for(let O=0,Z=N.length;O<Z;O++)N[O]=0}function M(N){E(N,0)}function E(N,O){const Z=c.newAttributes,I=c.enabledAttributes,X=c.attributeDivisors;Z[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),X[N]!==O&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),X[N]=O)}function w(){const N=c.newAttributes,O=c.enabledAttributes;for(let Z=0,I=O.length;Z<I;Z++)O[Z]!==N[Z]&&(r.disableVertexAttribArray(Z),O[Z]=0)}function A(N,O,Z,I,X,j,R){R===!0?r.vertexAttribIPointer(N,O,Z,X,j):r.vertexAttribPointer(N,O,Z,I,X,j)}function L(N,O,Z,I){if(n.isWebGL2===!1&&(N.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=I.attributes,j=Z.getAttributes(),R=O.defaultAttributeValues;for(const le in j){const z=j[le];if(z.location>=0){let ee=X[le];if(ee===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const J=ee.normalized,se=ee.itemSize,ce=t.get(ee);if(ce===void 0)continue;const de=ce.buffer,Ce=ce.type,Ee=ce.bytesPerElement,ct=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||ee.gpuType===sh);if(ee.isInterleavedBufferAttribute){const Oe=ee.data,F=Oe.stride,De=ee.offset;if(Oe.isInstancedInterleavedBuffer){for(let pe=0;pe<z.locationSize;pe++)E(z.location+pe,Oe.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let pe=0;pe<z.locationSize;pe++)M(z.location+pe);r.bindBuffer(r.ARRAY_BUFFER,de);for(let pe=0;pe<z.locationSize;pe++)A(z.location+pe,se/z.locationSize,Ce,J,F*Ee,(De+se/z.locationSize*pe)*Ee,ct)}else{if(ee.isInstancedBufferAttribute){for(let Oe=0;Oe<z.locationSize;Oe++)E(z.location+Oe,ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)M(z.location+Oe);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Oe=0;Oe<z.locationSize;Oe++)A(z.location+Oe,se/z.locationSize,Ce,J,se*Ee,se/z.locationSize*Oe*Ee,ct)}}else if(R!==void 0){const J=R[le];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(z.location,J);break;case 3:r.vertexAttrib3fv(z.location,J);break;case 4:r.vertexAttrib4fv(z.location,J);break;default:r.vertexAttrib1fv(z.location,J)}}}}w()}function v(){k();for(const N in o){const O=o[N];for(const Z in O){const I=O[Z];for(const X in I)g(I[X].object),delete I[X];delete O[Z]}delete o[N]}}function b(N){if(o[N.id]===void 0)return;const O=o[N.id];for(const Z in O){const I=O[Z];for(const X in I)g(I[X].object),delete I[X];delete O[Z]}delete o[N.id]}function H(N){for(const O in o){const Z=o[O];if(Z[N.id]===void 0)continue;const I=Z[N.id];for(const X in I)g(I[X].object),delete I[X];delete Z[N.id]}}function k(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function f0(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function h0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||e.has("OES_texture_float"),E=x&&M,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:E,maxSamples:w}}function d0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new cr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let M=p.clippingState||null;l.value=M,M=u(g,f,x,d);for(let E=0;E!==x;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function p0(r){let e=new WeakMap;function t(a,o){return o===Fl?a.mapping=xs:o===Bl&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Fl||o===Bl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pm(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class m0 extends Th{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const as=4,qu=[.125,.215,.35,.446,.526,.582],pr=20,ml=new m0,$u=new lt;let _l=null;const ur=(1+Math.sqrt(5))/2,Qr=1/ur,Ku=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,ur,Qr),new q(0,ur,-Qr),new q(Qr,0,ur),new q(-Qr,0,ur),new q(ur,Qr,0),new q(-ur,Qr,0)];class Zu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_l=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l),e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:la,format:ei,colorSpace:ni,depthBuffer:!1},i=ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(s)),this._blurMaterial=g0(s,e,t)}return i}_compileMaterial(e){const t=new zi(this._lodPlanes[0],e);this._renderer.compile(t,ml)}_sceneToCubeUV(e,t,n,i){const o=new Bn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($u),u.toneMapping=bi,u.autoClear=!1;const d=new Mh({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new zi(new Sa,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy($u),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Va(i,S*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xs||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ju());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new zi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ku[(i-1)%Ku.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zi(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*pr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const p=[];let S=0;for(let A=0;A<pr;++A){const L=A/_,v=Math.exp(-L*L/2);p.push(v),A===0?S+=v:A<m&&(S+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],E=3*M*(i>x-as?i-x+as:0),w=4*(this._cubeSize-M);Va(t,E,w,3*M,2*M),l.setRenderTarget(t),l.render(h,ml)}}function _0(r){const e=[],t=[],n=[];let i=r;const s=r-as+1+qu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-as?l=qu[a-r+as-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,L=w>2?0:-1,v=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];S.set(v,_*g*w),x.set(f,m*g*w);const b=[w,w,w,w,w,w];M.set(b,p*g*w)}const E=new Ci;E.setAttribute("position",new Wn(S,_)),E.setAttribute("uv",new Wn(x,m)),E.setAttribute("faceIndex",new Wn(M,p)),e.push(E),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ju(r,e,t){const n=new Cr(r,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function g0(r,e,t){const n=new Float32Array(pr),i=new q(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ju(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Qu(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fl||l===Bl,u=l===xs||l===Ms;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Zu(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Zu(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function x0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function M0(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let x=0,M=S.length;x<M;x+=3){const E=S[x+0],w=S[x+1],A=S[x+2];f.push(E,w,w,A,A,E)}}else{const S=g.array;_=g.version;for(let x=0,M=S.length/3-1;x<M;x+=3){const E=x+0,w=x+1,A=x+2;f.push(E,w,w,A,A,E)}}const m=new(dh(f)?yh:Sh)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function S0(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function y0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function E0(r,e){return r[0]-e[0]}function T0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function b0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let O=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",O)};var d=O;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),E===!0&&(v=3);let b=u.attributes.position.count*v,H=1;b>e.maxTextureSize&&(H=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*H*4*_),U=new _h(k,b,H,_);U.type=Bi,U.needsUpdate=!0;const N=v*4;for(let Z=0;Z<_;Z++){const I=w[Z],X=A[Z],j=L[Z],R=b*H*4*Z;for(let le=0;le<I.count;le++){const z=le*N;x===!0&&(a.fromBufferAttribute(I,le),k[R+z+0]=a.x,k[R+z+1]=a.y,k[R+z+2]=a.z,k[R+z+3]=0),M===!0&&(a.fromBufferAttribute(X,le),k[R+z+4]=a.x,k[R+z+5]=a.y,k[R+z+6]=a.z,k[R+z+7]=0),E===!0&&(a.fromBufferAttribute(j,le),k[R+z+8]=a.x,k[R+z+9]=a.y,k[R+z+10]=a.z,k[R+z+11]=j.itemSize===4?a.w:1)}}m={count:_,texture:U,size:new ht(b,H)},s.set(u,m),u.addEventListener("dispose",O)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const E=_[M];E[0]=M,E[1]=f[M]}_.sort(T0);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(E0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const E=o[M],w=E[0],A=E[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+M)!==m[w]&&u.setAttribute("morphTarget"+M,m[w]),p&&u.getAttribute("morphNormal"+M)!==p[w]&&u.setAttribute("morphNormal"+M,p[w]),i[M]=A,S+=A):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function A0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Rh=new Cn,Ch=new _h,Ph=new pm,Lh=new bh,ef=[],tf=[],nf=new Float32Array(16),rf=new Float32Array(9),sf=new Float32Array(4);function Ls(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ef[i];if(s===void 0&&(s=new Float32Array(i),ef[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ut(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function No(r,e){let t=tf[e];t===void 0&&(t=new Int32Array(e),tf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function w0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function R0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function P0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function L0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;sf.set(n),r.uniformMatrix2fv(this.addr,!1,sf),It(t,n)}}function D0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;rf.set(n),r.uniformMatrix3fv(this.addr,!1,rf),It(t,n)}}function U0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ut(t,n))return;nf.set(n),r.uniformMatrix4fv(this.addr,!1,nf),It(t,n)}}function I0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function N0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function F0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function B0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function H0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Rh,i)}function V0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ph,i)}function W0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lh,i)}function X0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ch,i)}function Y0(r){switch(r){case 5126:return w0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function q0(r,e){r.uniform1fv(this.addr,e)}function $0(r,e){const t=Ls(e,this.size,2);r.uniform2fv(this.addr,t)}function K0(r,e){const t=Ls(e,this.size,3);r.uniform3fv(this.addr,t)}function Z0(r,e){const t=Ls(e,this.size,4);r.uniform4fv(this.addr,t)}function j0(r,e){const t=Ls(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function J0(r,e){const t=Ls(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Q0(r,e){const t=Ls(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ev(r,e){r.uniform1iv(this.addr,e)}function tv(r,e){r.uniform2iv(this.addr,e)}function nv(r,e){r.uniform3iv(this.addr,e)}function iv(r,e){r.uniform4iv(this.addr,e)}function rv(r,e){r.uniform1uiv(this.addr,e)}function sv(r,e){r.uniform2uiv(this.addr,e)}function av(r,e){r.uniform3uiv(this.addr,e)}function ov(r,e){r.uniform4uiv(this.addr,e)}function lv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rh,s[a])}function cv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ph,s[a])}function uv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Lh,s[a])}function fv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);Ut(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ch,s[a])}function hv(r){switch(r){case 5126:return q0;case 35664:return $0;case 35665:return K0;case 35666:return Z0;case 35674:return j0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return uv;case 36289:case 36303:case 36311:case 36292:return fv}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Y0(t.type)}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=hv(t.type)}}class mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function af(r,e){r.seq.push(e),r.map[e.id]=e}function _v(r,e,t){const n=r.name,i=n.length;for(gl.lastIndex=0;;){const s=gl.exec(n),a=gl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){af(t,c===void 0?new dv(o,r,e):new pv(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new mv(o),af(t,h)),t=h}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);_v(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function of(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let gv=0;function vv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function xv(r){switch(r){case ni:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function lf(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+vv(r.getShaderSource(e),a)}else return i}function Mv(r,e){const t=xv(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sv(r,e){let t;switch(e){case Lp:t="Linear";break;case Dp:t="Reinhard";break;case Up:t="OptimizedCineon";break;case Ip:t="ACESFilmic";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function Ev(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Gs(r){return r!==""}function cf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uf(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(r){return r.replace(bv,Av)}function Av(r,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wl(t)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(r){return r.replace(wv,Rv)}function Rv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hf(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Cv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xs:case Ms:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Dv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Pp:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Iv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Cv(t),c=Pv(t),u=Lv(t),h=Dv(t),f=Uv(t),d=t.isWebGL2?"":yv(t),g=Ev(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[d,hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==bi?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,Mv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Wl(a),a=cf(a,t),a=uf(a,t),o=Wl(o),o=cf(o,t),o=uf(o,t),a=ff(a),o=ff(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,M=S+p+o,E=of(i,i.VERTEX_SHADER,x),w=of(i,i.FRAGMENT_SHADER,M);if(i.attachShader(_,E),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const v=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(E).trim(),H=i.getShaderInfoLog(w).trim();let k=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,w);else{const N=lf(i,E,"vertex"),O=lf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+N+`
`+O)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(b===""||H==="")&&(U=!1);U&&(this.diagnostics={runnable:k,programLog:v,vertexShader:{log:b,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(E),i.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new so(i,_)),A};let L;return this.getAttributes=function(){return L===void 0&&(L=Tv(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let Nv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fv(e),t.set(e,n)),n}}class Fv{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}}function Bv(r,e,t,n,i,s,a){const o=new vh,l=new Ov,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,b,H,k,U){const N=k.fog,O=U.geometry,Z=v.isMeshStandardMaterial?k.environment:null,I=(v.isMeshStandardMaterial?t:e).get(v.envMap||Z),X=I&&I.mapping===Do?I.image.height:null,j=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=R!==void 0?R.length:0;let z=0;O.morphAttributes.position!==void 0&&(z=1),O.morphAttributes.normal!==void 0&&(z=2),O.morphAttributes.color!==void 0&&(z=3);let ee,J,se,ce;if(j){const at=ri[j];ee=at.vertexShader,J=at.fragmentShader}else ee=v.vertexShader,J=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),ce=l.getFragmentShaderID(v);const de=r.getRenderTarget(),Ce=U.isInstancedMesh===!0,Ee=!!v.map,ct=!!v.matcap,Oe=!!I,F=!!v.aoMap,De=!!v.lightMap,pe=!!v.bumpMap,Pe=!!v.normalMap,Ae=!!v.displacementMap,G=!!v.emissiveMap,Ue=!!v.metalnessMap,Ie=!!v.roughnessMap,tt=v.anisotropy>0,qe=v.clearcoat>0,gt=v.iridescence>0,C=v.sheen>0,T=v.transmission>0,Y=tt&&!!v.anisotropyMap,Q=qe&&!!v.clearcoatMap,te=qe&&!!v.clearcoatNormalMap,ie=qe&&!!v.clearcoatRoughnessMap,Se=gt&&!!v.iridescenceMap,ae=gt&&!!v.iridescenceThicknessMap,K=C&&!!v.sheenColorMap,xe=C&&!!v.sheenRoughnessMap,we=!!v.specularMap,Re=!!v.specularColorMap,ve=!!v.specularIntensityMap,me=T&&!!v.transmissionMap,Be=T&&!!v.thicknessMap,nt=!!v.gradientMap,P=!!v.alphaMap,oe=v.alphaTest>0,V=!!v.extensions,ne=!!O.attributes.uv1,re=!!O.attributes.uv2,He=!!O.attributes.uv3;return{isWebGL2:u,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ee,fragmentShader:J,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ni,map:Ee,matcap:ct,envMap:Oe,envMapMode:Oe&&I.mapping,envMapCubeUVHeight:X,aoMap:F,lightMap:De,bumpMap:pe,normalMap:Pe,displacementMap:f&&Ae,emissiveMap:G,normalMapObjectSpace:Pe&&v.normalMapType===Kp,normalMapTangentSpace:Pe&&v.normalMapType===$p,metalnessMap:Ue,roughnessMap:Ie,anisotropy:tt,anisotropyMap:Y,clearcoat:qe,clearcoatMap:Q,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:gt,iridescenceMap:Se,iridescenceThicknessMap:ae,sheen:C,sheenColorMap:K,sheenRoughnessMap:xe,specularMap:we,specularColorMap:Re,specularIntensityMap:ve,transmission:T,transmissionMap:me,thicknessMap:Be,gradientMap:nt,opaque:v.transparent===!1&&v.blending===fs,alphaMap:P,alphaTest:oe,combine:v.combine,mapUv:Ee&&_(v.map.channel),aoMapUv:F&&_(v.aoMap.channel),lightMapUv:De&&_(v.lightMap.channel),bumpMapUv:pe&&_(v.bumpMap.channel),normalMapUv:Pe&&_(v.normalMap.channel),displacementMapUv:Ae&&_(v.displacementMap.channel),emissiveMapUv:G&&_(v.emissiveMap.channel),metalnessMapUv:Ue&&_(v.metalnessMap.channel),roughnessMapUv:Ie&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:Q&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(v.sheenRoughnessMap.channel),specularMapUv:we&&_(v.specularMap.channel),specularColorMapUv:Re&&_(v.specularColorMap.channel),specularIntensityMapUv:ve&&_(v.specularIntensityMap.channel),transmissionMapUv:me&&_(v.transmissionMap.channel),thicknessMapUv:Be&&_(v.thicknessMap.channel),alphaMapUv:P&&_(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||tt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:re,vertexUv3s:He,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Ee||P),fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:bi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:V&&v.extensions.derivatives===!0,extensionFragDepth:V&&v.extensions.fragDepth===!0,extensionDrawBuffers:V&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)b.push(H),b.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(S(b,v),x(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function S(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function x(v,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),v.push(o.mask)}function M(v){const b=g[v.type];let H;if(b){const k=ri[b];H=Am.clone(k.uniforms)}else H=v.uniforms;return H}function E(v,b){let H;for(let k=0,U=c.length;k<U;k++){const N=c[k];if(N.cacheKey===b){H=N,++H.usedTimes;break}}return H===void 0&&(H=new Iv(r,b,v,s),c.push(H)),H}function w(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:L}}function zv(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function kv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function df(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||kv),n.length>1&&n.sort(f||df),i.length>1&&i.sort(f||df)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Gv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new pf,r.set(n,[a])):i>=s.length?(a=new pf,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Hv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new lt};break;case"SpotLight":t={position:new q,direction:new q,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function Vv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Wv=0;function Xv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Yv(r,e){const t=new Hv,n=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new q);const s=new q,a=new Bt,o=new Bt;function l(u,h){let f=0,d=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let _=0,m=0,p=0,S=0,x=0,M=0,E=0,w=0,A=0,L=0;u.sort(Xv);const v=h===!0?Math.PI:1;for(let H=0,k=u.length;H<k;H++){const U=u[H],N=U.color,O=U.intensity,Z=U.distance,I=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*O*v,d+=N.g*O*v,g+=N.b*O*v;else if(U.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],O);else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const j=U.shadow,R=n.get(U);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=I,i.directionalShadowMatrix[_]=U.shadow.matrix,M++}i.directional[_]=X,_++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(N).multiplyScalar(O*v),X.distance=Z,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[p]=X;const j=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,j.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[p]=j.matrix,U.castShadow){const R=n.get(U);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=I,w++}p++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=X,S++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*v),X.distance=U.distance,X.decay=U.decay,U.castShadow){const j=U.shadow,R=n.get(U);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,R.shadowCameraNear=j.camera.near,R.shadowCameraFar=j.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=I,i.pointShadowMatrix[m]=U.shadow.matrix,E++}i.point[m]=X,m++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(O*v),X.groundColor.copy(U.groundColor).multiplyScalar(O*v),i.hemi[x]=X,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==S||b.hemiLength!==x||b.numDirectionalShadows!==M||b.numPointShadows!==E||b.numSpotShadows!==w||b.numSpotMaps!==A)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+A-L,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=L,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=S,b.hemiLength=x,b.numDirectionalShadows=M,b.numPointShadows=E,b.numSpotShadows=w,b.numSpotMaps=A,i.version=Wv++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const M=u[S];if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(M.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function mf(r,e){const t=new Yv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function qv(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new mf(r,e),t.set(s,[l])):a>=o.length?(l=new mf(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $v extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kv extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jv(r,e,t){let n=new Ah;const i=new ht,s=new ht,a=new Vt,o=new $v({depthPacking:qp}),l=new Kv,c={},u=t.maxTextureSize,h={[Zi]:dn,[dn]:Zi,[Mi]:Mi},f=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Zv,fragmentShader:jv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ci;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let p=this.type;this.render=function(E,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Xi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==gi&&this.type===gi,U=p===gi&&this.type!==gi;for(let N=0,O=E.length;N<O;N++){const Z=E[N],I=Z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const X=I.getFrameExtents();if(i.multiply(X),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/X.x),i.x=s.x*X.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/X.y),i.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null||k===!0||U===!0){const R=this.type!==gi?{minFilter:sn,magFilter:sn}:{};I.map!==null&&I.map.dispose(),I.map=new Cr(i.x,i.y,R),I.map.texture.name=Z.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const j=I.getViewportCount();for(let R=0;R<j;R++){const le=I.getViewport(R);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),H.viewport(a),I.updateMatrices(Z,R),n=I.getFrustum(),M(w,A,I.camera,Z,this.type)}I.isPointLightShadow!==!0&&this.type===gi&&S(I,A),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(L,v,b)};function S(E,w){const A=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,A,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,A,d,_,null)}function x(E,w,A,L){let v=null;const b=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)v=b;else if(v=A.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=v.uuid,k=w.uuid;let U=c[H];U===void 0&&(U={},c[H]=U);let N=U[k];N===void 0&&(N=v.clone(),U[k]=N),v=N}if(v.visible=w.visible,v.wireframe=w.wireframe,L===gi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=r.properties.get(v);H.light=A}return v}function M(E,w,A,L,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const k=e.update(E),U=E.material;if(Array.isArray(U)){const N=k.groups;for(let O=0,Z=N.length;O<Z;O++){const I=N[O],X=U[I.materialIndex];if(X&&X.visible){const j=x(E,X,L,v);r.renderBufferDirect(A,null,k,j,E,I)}}}else if(U.visible){const N=x(E,U,L,v);r.renderBufferDirect(A,null,k,N,E,null)}}const H=E.children;for(let k=0,U=H.length;k<U;k++)M(H[k],w,A,L,v)}}function Qv(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const oe=new Vt;let V=null;const ne=new Vt(0,0,0,0);return{setMask:function(re){V!==re&&!P&&(r.colorMask(re,re,re,re),V=re)},setLocked:function(re){P=re},setClear:function(re,He,ot,at,Ne){Ne===!0&&(re*=at,He*=at,ot*=at),oe.set(re,He,ot,at),ne.equals(oe)===!1&&(r.clearColor(re,He,ot,at),ne.copy(oe))},reset:function(){P=!1,V=null,ne.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,V=null,ne=null;return{setTest:function(re){re?de(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(re){oe!==re&&!P&&(r.depthMask(re),oe=re)},setFunc:function(re){if(V!==re){switch(re){case yp:r.depthFunc(r.NEVER);break;case Ep:r.depthFunc(r.ALWAYS);break;case Tp:r.depthFunc(r.LESS);break;case Ol:r.depthFunc(r.LEQUAL);break;case bp:r.depthFunc(r.EQUAL);break;case Ap:r.depthFunc(r.GEQUAL);break;case wp:r.depthFunc(r.GREATER);break;case Rp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=re}},setLocked:function(re){P=re},setClear:function(re){ne!==re&&(r.clearDepth(re),ne=re)},reset:function(){P=!1,oe=null,V=null,ne=null}}}function a(){let P=!1,oe=null,V=null,ne=null,re=null,He=null,ot=null,at=null,Ne=null;return{setTest:function(he){P||(he?de(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(he){oe!==he&&!P&&(r.stencilMask(he),oe=he)},setFunc:function(he,ze,$e){(V!==he||ne!==ze||re!==$e)&&(r.stencilFunc(he,ze,$e),V=he,ne=ze,re=$e)},setOp:function(he,ze,$e){(He!==he||ot!==ze||at!==$e)&&(r.stencilOp(he,ze,$e),He=he,ot=ze,at=$e)},setLocked:function(he){P=he},setClear:function(he){Ne!==he&&(r.clearStencil(he),Ne=he)},reset:function(){P=!1,oe=null,V=null,ne=null,re=null,He=null,ot=null,at=null,Ne=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,E=null,w=null,A=null,L=null,v=!1,b=null,H=null,k=null,U=null,N=null;const O=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,I=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=I>=1):X.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=I>=2);let j=null,R={};const le=r.getParameter(r.SCISSOR_BOX),z=r.getParameter(r.VIEWPORT),ee=new Vt().fromArray(le),J=new Vt().fromArray(z);function se(P,oe,V,ne){const re=new Uint8Array(4),He=r.createTexture();r.bindTexture(P,He),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<V;ot++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(oe,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(oe+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return He}const ce={};ce[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),ce[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ce[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ce[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),de(r.DEPTH_TEST),l.setFunc(Ol),Ae(!1),G(eu),de(r.CULL_FACE),pe(Xi);function de(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function Ce(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Ee(P,oe){return d[P]!==oe?(r.bindFramebuffer(P,oe),d[P]=oe,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=oe),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=oe)),!0):!1}function ct(P,oe){let V=_,ne=!1;if(P)if(V=g.get(oe),V===void 0&&(V=[],g.set(oe,V)),P.isWebGLMultipleRenderTargets){const re=P.texture;if(V.length!==re.length||V[0]!==r.COLOR_ATTACHMENT0){for(let He=0,ot=re.length;He<ot;He++)V[He]=r.COLOR_ATTACHMENT0+He;V.length=re.length,ne=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,ne=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,ne=!0);ne&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Oe(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const F={[is]:r.FUNC_ADD,[fp]:r.FUNC_SUBTRACT,[hp]:r.FUNC_REVERSE_SUBTRACT};if(n)F[iu]=r.MIN,F[ru]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(F[iu]=P.MIN_EXT,F[ru]=P.MAX_EXT)}const De={[dp]:r.ZERO,[pp]:r.ONE,[mp]:r.SRC_COLOR,[th]:r.SRC_ALPHA,[Sp]:r.SRC_ALPHA_SATURATE,[xp]:r.DST_COLOR,[gp]:r.DST_ALPHA,[_p]:r.ONE_MINUS_SRC_COLOR,[nh]:r.ONE_MINUS_SRC_ALPHA,[Mp]:r.ONE_MINUS_DST_COLOR,[vp]:r.ONE_MINUS_DST_ALPHA};function pe(P,oe,V,ne,re,He,ot,at){if(P===Xi){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(de(r.BLEND),p=!0),P!==up){if(P!==S||at!==v){if((x!==is||w!==is)&&(r.blendEquation(r.FUNC_ADD),x=is,w=is),at)switch(P){case fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFunc(r.ONE,r.ONE);break;case tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Nl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case tu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,E=null,A=null,L=null,S=P,v=at}return}re=re||oe,He=He||V,ot=ot||ne,(oe!==x||re!==w)&&(r.blendEquationSeparate(F[oe],F[re]),x=oe,w=re),(V!==M||ne!==E||He!==A||ot!==L)&&(r.blendFuncSeparate(De[V],De[ne],De[He],De[ot]),M=V,E=ne,A=He,L=ot),S=P,v=!1}function Pe(P,oe){P.side===Mi?Ce(r.CULL_FACE):de(r.CULL_FACE);let V=P.side===dn;oe&&(V=!V),Ae(V),P.blending===fs&&P.transparent===!1?pe(Xi):pe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ne=P.stencilWrite;c.setTest(ne),ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function G(P){P!==op?(de(r.CULL_FACE),P!==H&&(P===eu?r.cullFace(r.BACK):P===lp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),H=P}function Ue(P){P!==k&&(Z&&r.lineWidth(P),k=P)}function Ie(P,oe,V){P?(de(r.POLYGON_OFFSET_FILL),(U!==oe||N!==V)&&(r.polygonOffset(oe,V),U=oe,N=V)):Ce(r.POLYGON_OFFSET_FILL)}function tt(P){P?de(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function qe(P){P===void 0&&(P=r.TEXTURE0+O-1),j!==P&&(r.activeTexture(P),j=P)}function gt(P,oe,V){V===void 0&&(j===null?V=r.TEXTURE0+O-1:V=j);let ne=R[V];ne===void 0&&(ne={type:void 0,texture:void 0},R[V]=ne),(ne.type!==P||ne.texture!==oe)&&(j!==V&&(r.activeTexture(V),j=V),r.bindTexture(P,oe||ce[P]),ne.type=P,ne.texture=oe)}function C(){const P=R[j];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(P){ee.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function ve(P){J.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),J.copy(P))}function me(P,oe){let V=h.get(oe);V===void 0&&(V=new WeakMap,h.set(oe,V));let ne=V.get(P);ne===void 0&&(ne=r.getUniformBlockIndex(oe,P.name),V.set(P,ne))}function Be(P,oe){const ne=h.get(oe).get(P);u.get(oe)!==ne&&(r.uniformBlockBinding(oe,ne,P.__bindingPointIndex),u.set(oe,ne))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},j=null,R={},d={},g=new WeakMap,_=[],m=null,p=!1,S=null,x=null,M=null,E=null,w=null,A=null,L=null,v=!1,b=null,H=null,k=null,U=null,N=null,ee.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:de,disable:Ce,bindFramebuffer:Ee,drawBuffers:ct,useProgram:Oe,setBlending:pe,setMaterial:Pe,setFlipSided:Ae,setCullFace:G,setLineWidth:Ue,setPolygonOffset:Ie,setScissorTest:tt,activeTexture:qe,bindTexture:gt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:xe,texImage3D:we,updateUBOMapping:me,uniformBlockBinding:Be,texStorage2D:ae,texStorage3D:K,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:ie,compressedTexSubImage3D:Se,scissor:Re,viewport:ve,reset:nt}}function ex(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,T){return p?new OffscreenCanvas(C,T):vo("canvas")}function x(C,T,Y,Q){let te=1;if((C.width>Q||C.height>Q)&&(te=Q/Math.max(C.width,C.height)),te<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=T?Vl:Math.floor,Se=ie(te*C.width),ae=ie(te*C.height);_===void 0&&(_=S(Se,ae));const K=Y?S(Se,ae):_;return K.width=Se,K.height=ae,K.getContext("2d").drawImage(C,0,0,Se,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+ae+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return Lu(C.width)&&Lu(C.height)}function E(C){return o?!1:C.wrapS!==Qn||C.wrapT!==Qn||C.minFilter!==sn&&C.minFilter!==Fn}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==sn&&C.minFilter!==Fn}function A(C){r.generateMipmap(C)}function L(C,T,Y,Q,te=!1){if(o===!1)return T;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=T;return T===r.RED&&(Y===r.FLOAT&&(ie=r.R32F),Y===r.HALF_FLOAT&&(ie=r.R16F),Y===r.UNSIGNED_BYTE&&(ie=r.R8)),T===r.RG&&(Y===r.FLOAT&&(ie=r.RG32F),Y===r.HALF_FLOAT&&(ie=r.RG16F),Y===r.UNSIGNED_BYTE&&(ie=r.RG8)),T===r.RGBA&&(Y===r.FLOAT&&(ie=r.RGBA32F),Y===r.HALF_FLOAT&&(ie=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ie=Q===We&&te===!1?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)),(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(C,T,Y){return w(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==sn&&C.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===sn||C===su||C===Vo?r.NEAREST:r.LINEAR}function H(C){const T=C.target;T.removeEventListener("dispose",H),U(T),T.isVideoTexture&&g.delete(T)}function k(C){const T=C.target;T.removeEventListener("dispose",k),O(T)}function U(C){const T=n.get(C);if(T.__webglInit===void 0)return;const Y=C.source,Q=m.get(Y);if(Q){const te=Q[T.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(C),Object.keys(Q).length===0&&m.delete(Y)}n.remove(C)}function N(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const Y=C.source,Q=m.get(Y);delete Q[T.__cacheKey],a.memory.textures--}function O(C){const T=C.texture,Y=n.get(C),Q=n.get(T);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(Y.__webglFramebuffer[te]),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let te=0;te<Y.__webglColorRenderbuffer.length;te++)Y.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[te]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ie=T.length;te<ie;te++){const Se=n.get(T[te]);Se.__webglTexture&&(r.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(T[te])}n.remove(T),n.remove(C)}let Z=0;function I(){Z=0}function X(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function j(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function R(C,T){const Y=n.get(C);if(C.isVideoTexture&&qe(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Y,C,T);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function le(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Ee(Y,C,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function z(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){Ee(Y,C,T);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function ee(C,T){const Y=n.get(C);if(C.version>0&&Y.__version!==C.version){ct(Y,C,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}const J={[zl]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[kl]:r.MIRRORED_REPEAT},se={[sn]:r.NEAREST,[su]:r.NEAREST_MIPMAP_NEAREST,[Vo]:r.NEAREST_MIPMAP_LINEAR,[Fn]:r.LINEAR,[Op]:r.LINEAR_MIPMAP_NEAREST,[oa]:r.LINEAR_MIPMAP_LINEAR},ce={[jp]:r.NEVER,[rm]:r.ALWAYS,[Jp]:r.LESS,[em]:r.LEQUAL,[Qp]:r.EQUAL,[im]:r.GEQUAL,[tm]:r.GREATER,[nm]:r.NOTEQUAL};function de(C,T,Y){if(Y?(r.texParameteri(C,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,J[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,se[T.minFilter])):(r.texParameteri(C,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(C,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==Qn||T.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,r.TEXTURE_MAG_FILTER,b(T.magFilter)),r.texParameteri(C,r.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==sn&&T.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===sn||T.minFilter!==Vo&&T.minFilter!==oa||T.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===la&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ce(C,T){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",H));const Q=T.source;let te=m.get(Q);te===void 0&&(te={},m.set(Q,te));const ie=j(T);if(ie!==C.__cacheKey){te[ie]===void 0&&(te[ie]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),te[ie].usedTimes++;const Se=te[C.__cacheKey];Se!==void 0&&(te[C.__cacheKey].usedTimes--,Se.usedTimes===0&&N(T)),C.__cacheKey=ie,C.__webglTexture=te[ie].texture}return Y}function Ee(C,T,Y){let Q=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=r.TEXTURE_3D);const te=Ce(C,T),ie=T.source;t.bindTexture(Q,C.__webglTexture,r.TEXTURE0+Y);const Se=n.get(ie);if(ie.version!==Se.__version||te===!0){t.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ae=E(T)&&M(T.image)===!1;let K=x(T.image,ae,!1,u);K=gt(T,K);const xe=M(K)||o,we=s.convert(T.format,T.colorSpace);let Re=s.convert(T.type),ve=L(T.internalFormat,we,Re,T.colorSpace);de(Q,T,xe);let me;const Be=T.mipmaps,nt=o&&T.isVideoTexture!==!0,P=Se.__version===void 0||te===!0,oe=v(T,K,xe);if(T.isDepthTexture)ve=r.DEPTH_COMPONENT,o?T.type===Bi?ve=r.DEPTH_COMPONENT32F:T.type===Fi?ve=r.DEPTH_COMPONENT24:T.type===gr?ve=r.DEPTH24_STENCIL8:ve=r.DEPTH_COMPONENT16:T.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===vr&&ve===r.DEPTH_COMPONENT&&T.type!==xc&&T.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Fi,Re=s.convert(T.type)),T.format===Ss&&ve===r.DEPTH_COMPONENT&&(ve=r.DEPTH_STENCIL,T.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=gr,Re=s.convert(T.type))),P&&(nt?t.texStorage2D(r.TEXTURE_2D,1,ve,K.width,K.height):t.texImage2D(r.TEXTURE_2D,0,ve,K.width,K.height,0,we,Re,null));else if(T.isDataTexture)if(Be.length>0&&xe){nt&&P&&t.texStorage2D(r.TEXTURE_2D,oe,ve,Be[0].width,Be[0].height);for(let V=0,ne=Be.length;V<ne;V++)me=Be[V],nt?t.texSubImage2D(r.TEXTURE_2D,V,0,0,me.width,me.height,we,Re,me.data):t.texImage2D(r.TEXTURE_2D,V,ve,me.width,me.height,0,we,Re,me.data);T.generateMipmaps=!1}else nt?(P&&t.texStorage2D(r.TEXTURE_2D,oe,ve,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,K.width,K.height,we,Re,K.data)):t.texImage2D(r.TEXTURE_2D,0,ve,K.width,K.height,0,we,Re,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,ve,Be[0].width,Be[0].height,K.depth);for(let V=0,ne=Be.length;V<ne;V++)me=Be[V],T.format!==ei?we!==null?nt?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,K.depth,we,me.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,ve,me.width,me.height,K.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,me.width,me.height,K.depth,we,Re,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,V,ve,me.width,me.height,K.depth,0,we,Re,me.data)}else{nt&&P&&t.texStorage2D(r.TEXTURE_2D,oe,ve,Be[0].width,Be[0].height);for(let V=0,ne=Be.length;V<ne;V++)me=Be[V],T.format!==ei?we!==null?nt?t.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,me.width,me.height,we,me.data):t.compressedTexImage2D(r.TEXTURE_2D,V,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(r.TEXTURE_2D,V,0,0,me.width,me.height,we,Re,me.data):t.texImage2D(r.TEXTURE_2D,V,ve,me.width,me.height,0,we,Re,me.data)}else if(T.isDataArrayTexture)nt?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,ve,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,we,Re,K.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,K.width,K.height,K.depth,0,we,Re,K.data);else if(T.isData3DTexture)nt?(P&&t.texStorage3D(r.TEXTURE_3D,oe,ve,K.width,K.height,K.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,we,Re,K.data)):t.texImage3D(r.TEXTURE_3D,0,ve,K.width,K.height,K.depth,0,we,Re,K.data);else if(T.isFramebufferTexture){if(P)if(nt)t.texStorage2D(r.TEXTURE_2D,oe,ve,K.width,K.height);else{let V=K.width,ne=K.height;for(let re=0;re<oe;re++)t.texImage2D(r.TEXTURE_2D,re,ve,V,ne,0,we,Re,null),V>>=1,ne>>=1}}else if(Be.length>0&&xe){nt&&P&&t.texStorage2D(r.TEXTURE_2D,oe,ve,Be[0].width,Be[0].height);for(let V=0,ne=Be.length;V<ne;V++)me=Be[V],nt?t.texSubImage2D(r.TEXTURE_2D,V,0,0,we,Re,me):t.texImage2D(r.TEXTURE_2D,V,ve,we,Re,me);T.generateMipmaps=!1}else nt?(P&&t.texStorage2D(r.TEXTURE_2D,oe,ve,K.width,K.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Re,K)):t.texImage2D(r.TEXTURE_2D,0,ve,we,Re,K);w(T,xe)&&A(Q),Se.__version=ie.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ct(C,T,Y){if(T.image.length!==6)return;const Q=Ce(C,T),te=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+Y);const ie=n.get(te);if(te.version!==ie.__version||Q===!0){t.activeTexture(r.TEXTURE0+Y),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,K=[];for(let V=0;V<6;V++)!Se&&!ae?K[V]=x(T.image[V],!1,!0,c):K[V]=ae?T.image[V].image:T.image[V],K[V]=gt(T,K[V]);const xe=K[0],we=M(xe)||o,Re=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),me=L(T.internalFormat,Re,ve,T.colorSpace),Be=o&&T.isVideoTexture!==!0,nt=ie.__version===void 0||Q===!0;let P=v(T,xe,we);de(r.TEXTURE_CUBE_MAP,T,we);let oe;if(Se){Be&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,me,xe.width,xe.height);for(let V=0;V<6;V++){oe=K[V].mipmaps;for(let ne=0;ne<oe.length;ne++){const re=oe[ne];T.format!==ei?Re!==null?Be?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,me,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,0,0,re.width,re.height,Re,ve,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne,me,re.width,re.height,0,Re,ve,re.data)}}}else{oe=T.mipmaps,Be&&nt&&(oe.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,me,K[0].width,K[0].height));for(let V=0;V<6;V++)if(ae){Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,K[V].width,K[V].height,Re,ve,K[V].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,me,K[V].width,K[V].height,0,Re,ve,K[V].data);for(let ne=0;ne<oe.length;ne++){const He=oe[ne].image[V].image;Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,He.width,He.height,Re,ve,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,me,He.width,He.height,0,Re,ve,He.data)}}else{Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Re,ve,K[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,me,Re,ve,K[V]);for(let ne=0;ne<oe.length;ne++){const re=oe[ne];Be?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,0,0,Re,ve,re.image[V]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+V,ne+1,me,Re,ve,re.image[V])}}}w(T,we)&&A(r.TEXTURE_CUBE_MAP),ie.__version=te.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Oe(C,T,Y,Q,te){const ie=s.convert(Y.format,Y.colorSpace),Se=s.convert(Y.type),ae=L(Y.internalFormat,ie,Se,Y.colorSpace);n.get(T).__hasExternalTextures||(te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,0,ae,T.width,T.height,T.depth,0,ie,Se,null):t.texImage2D(te,0,ae,T.width,T.height,0,ie,Se,null)),t.bindFramebuffer(r.FRAMEBUFFER,C),tt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,te,n.get(Y).__webglTexture,0,Ie(T)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,te,n.get(Y).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(C,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let Q=r.DEPTH_COMPONENT16;if(Y||tt(T)){const te=T.depthTexture;te&&te.isDepthTexture&&(te.type===Bi?Q=r.DEPTH_COMPONENT32F:te.type===Fi&&(Q=r.DEPTH_COMPONENT24));const ie=Ie(T);tt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Q,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Q,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const Q=Ie(T);Y&&tt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,T.width,T.height):tt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,C)}else{const Q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0;te<Q.length;te++){const ie=Q[te],Se=s.convert(ie.format,ie.colorSpace),ae=s.convert(ie.type),K=L(ie.internalFormat,Se,ae,ie.colorSpace),xe=Ie(T);Y&&tt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,K,T.width,T.height):tt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);const Q=n.get(T.depthTexture).__webglTexture,te=Ie(T);if(T.depthTexture.format===vr)tt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Ss)tt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,te):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(C){const T=n.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,C)}else if(Y){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=r.createRenderbuffer(),F(T.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),F(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(C,T,Y){const Q=n.get(C);T!==void 0&&Oe(Q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),Y!==void 0&&pe(C)}function Ae(C){const T=C.texture,Y=n.get(C),Q=n.get(T);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=T.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,Se=M(C)||o;if(te){Y.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)Y.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(Y.__webglFramebuffer=r.createFramebuffer(),ie)if(i.drawBuffers){const ae=C.texture;for(let K=0,xe=ae.length;K<xe;K++){const we=n.get(ae[K]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&tt(C)===!1){const ae=ie?T:[T];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<ae.length;K++){const xe=ae[K];Y.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);const we=s.convert(xe.format,xe.colorSpace),Re=s.convert(xe.type),ve=L(xe.internalFormat,we,Re,xe.colorSpace,C.isXRRenderTarget===!0),me=Ie(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,ve,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),F(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),de(r.TEXTURE_CUBE_MAP,T,Se);for(let ae=0;ae<6;ae++)Oe(Y.__webglFramebuffer[ae],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae);w(T,Se)&&A(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ae=C.texture;for(let K=0,xe=ae.length;K<xe;K++){const we=ae[K],Re=n.get(we);t.bindTexture(r.TEXTURE_2D,Re.__webglTexture),de(r.TEXTURE_2D,we,Se),Oe(Y.__webglFramebuffer,C,we,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D),w(we,Se)&&A(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Q.__webglTexture),de(ae,T,Se),Oe(Y.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,ae),w(T,Se)&&A(ae),t.unbindTexture()}C.depthBuffer&&pe(C)}function G(C){const T=M(C)||o,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,te=Y.length;Q<te;Q++){const ie=Y[Q];if(w(ie,T)){const Se=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ae=n.get(ie).__webglTexture;t.bindTexture(Se,ae),A(Se),t.unbindTexture()}}}function Ue(C){if(o&&C.samples>0&&tt(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,Q=C.height;let te=r.COLOR_BUFFER_BIT;const ie=[],Se=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let xe=0;xe<T.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let xe=0;xe<T.length;xe++){ie.push(r.COLOR_ATTACHMENT0+xe),C.depthBuffer&&ie.push(Se);const we=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),K&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]),we===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Se]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Se])),K){const Re=n.get(T[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Re,0)}r.blitFramebuffer(0,0,Y,Q,0,0,Y,Q,te,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let xe=0;xe<T.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[xe]);const we=n.get(T[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,we,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ie(C){return Math.min(h,C.samples)}function tt(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(C){const T=a.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function gt(C,T){const Y=C.colorSpace,Q=C.format,te=C.type;return C.isCompressedTexture===!0||C.format===Gl||Y!==ni&&Y!==Mr&&(Y===We?o===!1?e.has("EXT_sRGB")===!0&&Q===ei?(C.format=Gl,C.minFilter=Fn,C.generateMipmaps=!1):T=ph.sRGBToLinear(T):(Q!==ei||te!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=X,this.resetTextureUnits=I,this.setTexture2D=R,this.setTexture2DArray=le,this.setTexture3D=z,this.setTextureCube=ee,this.rebindTextures=Pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=tt}function tx(r,e,t){const n=t.isWebGL2;function i(s,a=Mr){let o;if(s===Yi)return r.UNSIGNED_BYTE;if(s===ah)return r.UNSIGNED_SHORT_4_4_4_4;if(s===oh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fp)return r.BYTE;if(s===Bp)return r.SHORT;if(s===xc)return r.UNSIGNED_SHORT;if(s===sh)return r.INT;if(s===Fi)return r.UNSIGNED_INT;if(s===Bi)return r.FLOAT;if(s===la)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zp)return r.ALPHA;if(s===ei)return r.RGBA;if(s===kp)return r.LUMINANCE;if(s===Gp)return r.LUMINANCE_ALPHA;if(s===vr)return r.DEPTH_COMPONENT;if(s===Ss)return r.DEPTH_STENCIL;if(s===Gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Hp)return r.RED;if(s===lh)return r.RED_INTEGER;if(s===Vp)return r.RG;if(s===ch)return r.RG_INTEGER;if(s===uh)return r.RGBA_INTEGER;if(s===Wo||s===Xo||s===Yo||s===qo)if(a===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===au||s===ou||s===lu||s===cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===au)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ou)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Wp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===uu||s===fu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===uu)return a===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hu||s===du||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===Mu||s===Su||s===yu||s===Eu||s===Tu||s===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===du)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_u)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Su)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Eu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bu)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$o)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===$o)return a===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xp||s===Au||s===wu||s===Ru)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ru)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===gr?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class nx extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hs extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ix={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rx extends Cn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:vr,u!==vr&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vr&&(n=Fi),n===void 0&&u===Ss&&(n=gr),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sx extends Ps{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],x=[];let M=null;const E=new Bn;E.layers.enable(1),E.viewport=new Vt;const w=new Bn;w.layers.enable(2),w.viewport=new Vt;const A=[E,w],L=new nx;L.layers.enable(1),L.layers.enable(2);let v=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(z){M=z},this.getController=function(z){let ee=S[z];return ee===void 0&&(ee=new vl,S[z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(z){let ee=S[z];return ee===void 0&&(ee=new vl,S[z]=ee),ee.getGripSpace()},this.getHand=function(z){let ee=S[z];return ee===void 0&&(ee=new vl,S[z]=ee),ee.getHandSpace()};function H(z){const ee=x.indexOf(z.inputSource);if(ee===-1)return;const J=S[ee];J!==void 0&&(J.update(z.inputSource,z.frame,c||a),J.dispatchEvent({type:z.type,data:z.inputSource}))}function k(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",U);for(let z=0;z<S.length;z++){const ee=x[z];ee!==null&&(x[z]=null,S[z].disconnect(ee))}v=null,b=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,le.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",k),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),p=new Cr(d.framebufferWidth,d.framebufferHeight,{format:ei,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,J=null,se=null;_.depth&&(se=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?Ss:vr,J=_.stencil?gr:Fi);const ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ce),i.updateRenderState({layers:[f]}),p=new Cr(f.textureWidth,f.textureHeight,{format:ei,type:Yi,depthTexture:new rx(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const de=e.properties.get(p);de.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(z){for(let ee=0;ee<z.removed.length;ee++){const J=z.removed[ee],se=x.indexOf(J);se>=0&&(x[se]=null,S[se].disconnect(J))}for(let ee=0;ee<z.added.length;ee++){const J=z.added[ee];let se=x.indexOf(J);if(se===-1){for(let de=0;de<S.length;de++)if(de>=x.length){x.push(J),se=de;break}else if(x[de]===null){x[de]=J,se=de;break}if(se===-1)break}const ce=S[se];ce&&ce.connect(J)}}const N=new q,O=new q;function Z(z,ee,J){N.setFromMatrixPosition(ee.matrixWorld),O.setFromMatrixPosition(J.matrixWorld);const se=N.distanceTo(O),ce=ee.projectionMatrix.elements,de=J.projectionMatrix.elements,Ce=ce[14]/(ce[10]-1),Ee=ce[14]/(ce[10]+1),ct=(ce[9]+1)/ce[5],Oe=(ce[9]-1)/ce[5],F=(ce[8]-1)/ce[0],De=(de[8]+1)/de[0],pe=Ce*F,Pe=Ce*De,Ae=se/(-F+De),G=Ae*-F;ee.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(G),z.translateZ(Ae),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ue=Ce+Ae,Ie=Ee+Ae,tt=pe-G,qe=Pe+(se-G),gt=ct*Ee/Ie*Ue,C=Oe*Ee/Ie*Ue;z.projectionMatrix.makePerspective(tt,qe,gt,C,Ue,Ie),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function I(z,ee){ee===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ee.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCameraXR=function(z){if(i===null)return z;M&&(z=M),L.near=w.near=E.near=z.near,L.far=w.far=E.far=z.far,(v!==L.near||b!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),v=L.near,b=L.far);const ee=z.parent,J=L.cameras;I(L,ee);for(let se=0;se<J.length;se++)I(J[se],ee);return J.length===2?Z(L,E,w):L.projectionMatrix.copy(E.projectionMatrix),M&&X(L,ee),L};function X(z,ee){const J=M;ee===null?J.matrix.copy(z.matrixWorld):(J.matrix.copy(ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(z.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0);const se=J.children;for(let ce=0,de=se.length;ce<de;ce++)se[ce].updateMatrixWorld(!0);J.projectionMatrix.copy(z.projectionMatrix),J.projectionMatrixInverse.copy(z.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let j=null;function R(z,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const J=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let se=!1;J.length!==L.cameras.length&&(L.cameras.length=0,se=!0);for(let ce=0;ce<J.length;ce++){const de=J[ce];let Ce=null;if(d!==null)Ce=d.getViewport(de);else{const ct=h.getViewSubImage(f,de);Ce=ct.viewport,ce===0&&(e.setRenderTargetTextures(p,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(p))}let Ee=A[ce];Ee===void 0&&(Ee=new Bn,Ee.layers.enable(ce),Ee.viewport=new Vt,A[ce]=Ee),Ee.matrix.fromArray(de.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(de.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ce===0&&(L.matrix.copy(Ee.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),se===!0&&L.cameras.push(Ee)}}for(let J=0;J<S.length;J++){const se=x[J],ce=S[J];se!==null&&ce!==void 0&&ce.update(se,ee,c||a)}j&&j(z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const le=new wh;le.setAnimationLoop(R),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function ax(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Eh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){const M=x.program;n.uniformBlockBinding(S,M)}function c(S,x){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(S,E);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const x=h();S.__bindingPointIndex=x;const M=r.createBuffer(),E=S.__size,w=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],M=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,A=M.length;w<A;w++){const L=M[w];if(d(L,w,E)===!0){const v=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let k=0;k<b.length;k++){const U=b[k],N=_(U);typeof U=="number"?(L.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,v+H,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=U.elements[0],L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=U.elements[0],L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=U.elements[0]):(U.toArray(L.__data,H),H+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,M){const E=S.value;if(M[x]===void 0){if(typeof E=="number")M[x]=E;else{const w=Array.isArray(E)?E:[E],A=[];for(let L=0;L<w.length;L++)A.push(w[L].clone());M[x]=A}return!0}else if(typeof E=="number"){if(M[x]!==E)return M[x]=E,!0}else{const w=Array.isArray(M[x])?M[x]:[M[x]],A=Array.isArray(E)?E:[E];for(let L=0;L<w.length;L++){const v=w[L];if(v.equals(A[L])===!1)return v.copy(A[L]),!0}}return!1}function g(S){const x=S.uniforms;let M=0;const E=16;let w=0;for(let A=0,L=x.length;A<L;A++){const v=x[A],b={boundary:0,storage:0},H=Array.isArray(v.value)?v.value:[v.value];for(let k=0,U=H.length;k<U;k++){const N=H[k],O=_(N);b.boundary+=O.boundary,b.storage+=O.storage}if(v.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,A>0){w=M%E;const k=E-w;w!==0&&k-b.boundary<0&&(M+=E-w,v.__offset=M)}M+=b.storage}return w=M%E,w>0&&(M+=E-w),S.__size=M,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}function lx(){const r=vo("canvas");return r.style.display="block",r}class Dh{constructor(e={}){const{canvas:t=lx(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this.useLegacyLights=!0,this.toneMapping=bi,this.toneMappingExposure=1;const x=this;let M=!1,E=0,w=0,A=null,L=-1,v=null;const b=new Vt,H=new Vt;let k=null;const U=new lt(0);let N=0,O=t.width,Z=t.height,I=1,X=null,j=null;const R=new Vt(0,0,O,Z),le=new Vt(0,0,O,Z);let z=!1;const ee=new Ah;let J=!1,se=!1,ce=null;const de=new Bt,Ce=new ht,Ee=new q,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return A===null?I:1}let F=n;function De(y,B){for(let W=0;W<y.length;W++){const D=y[W],$=t.getContext(D,B);if($!==null)return $}return null}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",ne,!1),F===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),F=De(B,y),F===null)throw De(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let pe,Pe,Ae,G,Ue,Ie,tt,qe,gt,C,T,Y,Q,te,ie,Se,ae,K,xe,we,Re,ve,me,Be;function nt(){pe=new x0(F),Pe=new h0(F,pe,e),pe.init(Pe),ve=new tx(F,pe,Pe),Ae=new Qv(F,pe,Pe),G=new y0(F),Ue=new zv,Ie=new ex(F,pe,Ae,Ue,Pe,ve,G),tt=new p0(x),qe=new v0(x),gt=new Um(F,Pe),me=new u0(F,pe,gt,Pe),C=new M0(F,gt,G,me),T=new A0(F,C,gt,G),xe=new b0(F,Pe,Ie),Se=new d0(Ue),Y=new Bv(x,tt,qe,pe,Pe,me,Se),Q=new ax(x,Ue),te=new Gv,ie=new qv(pe,Pe),K=new c0(x,tt,qe,Ae,T,f,l),ae=new Jv(x,T,Pe),Be=new ox(F,G,Pe,Ae),we=new f0(F,pe,G,Pe),Re=new S0(F,pe,G,Pe),G.programs=Y.programs,x.capabilities=Pe,x.extensions=pe,x.properties=Ue,x.renderLists=te,x.shadowMap=ae,x.state=Ae,x.info=G}nt();const P=new sx(x,F);this.xr=P,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=pe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=pe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(y){y!==void 0&&(I=y,this.setSize(O,Z,!1))},this.getSize=function(y){return y.set(O,Z)},this.setSize=function(y,B,W=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,Z=B,t.width=Math.floor(y*I),t.height=Math.floor(B*I),W===!0&&(t.style.width=y+"px",t.style.height=B+"px"),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(O*I,Z*I).floor()},this.setDrawingBufferSize=function(y,B,W){O=y,Z=B,I=W,t.width=Math.floor(y*W),t.height=Math.floor(B*W),this.setViewport(0,0,y,B)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(R)},this.setViewport=function(y,B,W,D){y.isVector4?R.set(y.x,y.y,y.z,y.w):R.set(y,B,W,D),Ae.viewport(b.copy(R).multiplyScalar(I).floor())},this.getScissor=function(y){return y.copy(le)},this.setScissor=function(y,B,W,D){y.isVector4?le.set(y.x,y.y,y.z,y.w):le.set(y,B,W,D),Ae.scissor(H.copy(le).multiplyScalar(I).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(y){Ae.setScissorTest(z=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(y=!0,B=!0,W=!0){let D=0;if(y){let $=!1;if(A!==null){const ue=A.texture.format;$=ue===uh||ue===ch||ue===lh}if($){const ue=A.texture.type,ge=ue===Yi||ue===Fi||ue===xc||ue===gr||ue===ah||ue===oh,ye=K.getClearColor(),Le=K.getClearAlpha(),Ge=ye.r,be=ye.g,Te=ye.b,et=Ue.get(A).__webglFramebuffer;ge?(d[0]=Ge,d[1]=be,d[2]=Te,d[3]=Le,F.clearBufferuiv(F.COLOR,et,d)):(g[0]=Ge,g[1]=be,g[2]=Te,g[3]=Le,F.clearBufferiv(F.COLOR,et,g))}else D|=F.COLOR_BUFFER_BIT}B&&(D|=F.DEPTH_BUFFER_BIT),W&&(D|=F.STENCIL_BUFFER_BIT),F.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),ie.dispose(),Ue.dispose(),tt.dispose(),qe.dispose(),T.dispose(),me.dispose(),Be.dispose(),Y.dispose(),P.dispose(),P.removeEventListener("sessionstart",he),P.removeEventListener("sessionend",ze),ce&&(ce.dispose(),ce=null),$e.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=G.autoReset,B=ae.enabled,W=ae.autoUpdate,D=ae.needsUpdate,$=ae.type;nt(),G.autoReset=y,ae.enabled=B,ae.autoUpdate=W,ae.needsUpdate=D,ae.type=$}function ne(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){const B=y.target;B.removeEventListener("dispose",re),He(B)}function He(y){ot(y),Ue.remove(y)}function ot(y){const B=Ue.get(y).programs;B!==void 0&&(B.forEach(function(W){Y.releaseProgram(W)}),y.isShaderMaterial&&Y.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,W,D,$,ue){B===null&&(B=ct);const ge=$.isMesh&&$.matrixWorld.determinant()<0,ye=kt(y,B,W,D,$);Ae.setMaterial(D,ge);let Le=W.index,Ge=1;D.wireframe===!0&&(Le=C.getWireframeAttribute(W),Ge=2);const be=W.drawRange,Te=W.attributes.position;let et=be.start*Ge,pt=(be.start+be.count)*Ge;ue!==null&&(et=Math.max(et,ue.start*Ge),pt=Math.min(pt,(ue.start+ue.count)*Ge)),Le!==null?(et=Math.max(et,0),pt=Math.min(pt,Le.count)):Te!=null&&(et=Math.max(et,0),pt=Math.min(pt,Te.count));const cn=pt-et;if(cn<0||cn===1/0)return;me.setup($,D,ye,W,Le);let jt,st=we;if(Le!==null&&(jt=gt.get(Le),st=Re,st.setIndex(jt)),$.isMesh)D.wireframe===!0?(Ae.setLineWidth(D.wireframeLinewidth*Oe()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if($.isLine){let Ve=D.linewidth;Ve===void 0&&(Ve=1),Ae.setLineWidth(Ve*Oe()),$.isLineSegments?st.setMode(F.LINES):$.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else $.isPoints?st.setMode(F.POINTS):$.isSprite&&st.setMode(F.TRIANGLES);if($.isInstancedMesh)st.renderInstances(et,cn,$.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pi=Math.min(W.instanceCount,Ve);st.renderInstances(et,cn,Pi)}else st.render(et,cn)},this.compile=function(y,B){function W(D,$,ue){D.transparent===!0&&D.side===Mi&&D.forceSinglePass===!1?(D.side=dn,D.needsUpdate=!0,Ke(D,$,ue),D.side=Zi,D.needsUpdate=!0,Ke(D,$,ue),D.side=Mi):Ke(D,$,ue)}m=ie.get(y),m.init(),S.push(m),y.traverseVisible(function(D){D.isLight&&D.layers.test(B.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(x.useLegacyLights),y.traverse(function(D){const $=D.material;if($)if(Array.isArray($))for(let ue=0;ue<$.length;ue++){const ge=$[ue];W(ge,y,D)}else W($,y,D)}),S.pop(),m=null};let at=null;function Ne(y){at&&at(y)}function he(){$e.stop()}function ze(){$e.start()}const $e=new wh;$e.setAnimationLoop(Ne),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(y){at=y,P.setAnimationLoop(y),y===null?$e.stop():$e.start()},P.addEventListener("sessionstart",he),P.addEventListener("sessionend",ze),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(B=P.updateCameraXR(B)),y.isScene===!0&&y.onBeforeRender(x,y,B,A),m=ie.get(y,S.length),m.init(),S.push(m),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ee.setFromProjectionMatrix(de),se=this.localClippingEnabled,J=Se.init(this.clippingPlanes,se),_=te.get(y,p.length),_.init(),p.push(_),_e(y,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,j),J===!0&&Se.beginShadows();const W=m.state.shadowsArray;if(ae.render(W,y,B),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,K.render(_,y),m.setupLights(x.useLegacyLights),B.isArrayCamera){const D=B.cameras;for(let $=0,ue=D.length;$<ue;$++){const ge=D[$];Je(_,y,ge,ge.viewport)}}else Je(_,y,B);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(x,y,B),me.resetDefaultState(),L=-1,v=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function _e(y,B,W,D){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ee.intersectsSprite(y)){D&&Ee.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);const ge=T.update(y),ye=y.material;ye.visible&&_.push(y,ge,ye,W,Ee.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ee.intersectsObject(y))){y.isSkinnedMesh&&y.skeleton.frame!==G.render.frame&&(y.skeleton.update(),y.skeleton.frame=G.render.frame);const ge=T.update(y),ye=y.material;if(D&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ee.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ee.copy(ge.boundingSphere.center)),Ee.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const Le=ge.groups;for(let Ge=0,be=Le.length;Ge<be;Ge++){const Te=Le[Ge],et=ye[Te.materialIndex];et&&et.visible&&_.push(y,ge,et,W,Ee.z,Te)}}else ye.visible&&_.push(y,ge,ye,W,Ee.z,null)}}const ue=y.children;for(let ge=0,ye=ue.length;ge<ye;ge++)_e(ue[ge],B,W,D)}function Je(y,B,W,D){const $=y.opaque,ue=y.transmissive,ge=y.transparent;m.setupLightsView(W),J===!0&&Se.setGlobalState(x.clippingPlanes,W),ue.length>0&&Fe($,ue,B,W),D&&Ae.viewport(b.copy(D)),$.length>0&&ke($,B,W),ue.length>0&&ke(ue,B,W),ge.length>0&&ke(ge,B,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Fe(y,B,W,D){const $=Pe.isWebGL2;ce===null&&(ce=new Cr(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?la:Yi,minFilter:oa,samples:$&&o===!0?4:0})),x.getDrawingBufferSize(Ce),$?ce.setSize(Ce.x,Ce.y):ce.setSize(Vl(Ce.x),Vl(Ce.y));const ue=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(U),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const ge=x.toneMapping;x.toneMapping=bi,ke(y,W,D),Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce);let ye=!1;for(let Le=0,Ge=B.length;Le<Ge;Le++){const be=B[Le],Te=be.object,et=be.geometry,pt=be.material,cn=be.group;if(pt.side===Mi&&Te.layers.test(D.layers)){const jt=pt.side;pt.side=dn,pt.needsUpdate=!0,bt(Te,W,D,et,pt,cn),pt.side=jt,pt.needsUpdate=!0,ye=!0}}ye===!0&&(Ie.updateMultisampleRenderTarget(ce),Ie.updateRenderTargetMipmap(ce)),x.setRenderTarget(ue),x.setClearColor(U,N),x.toneMapping=ge}function ke(y,B,W){const D=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ue=y.length;$<ue;$++){const ge=y[$],ye=ge.object,Le=ge.geometry,Ge=D===null?ge.material:D,be=ge.group;ye.layers.test(W.layers)&&bt(ye,B,W,Le,Ge,be)}}function bt(y,B,W,D,$,ue){y.onBeforeRender(x,B,W,D,$,ue),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(x,B,W,D,y,ue),$.transparent===!0&&$.side===Mi&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,x.renderBufferDirect(W,B,D,$,y,ue),$.side=Zi,$.needsUpdate=!0,x.renderBufferDirect(W,B,D,$,y,ue),$.side=Mi):x.renderBufferDirect(W,B,D,$,y,ue),y.onAfterRender(x,B,W,D,$,ue)}function Ke(y,B,W){B.isScene!==!0&&(B=ct);const D=Ue.get(y),$=m.state.lights,ue=m.state.shadowsArray,ge=$.state.version,ye=Y.getParameters(y,$.state,ue,B,W),Le=Y.getProgramCacheKey(ye);let Ge=D.programs;D.environment=y.isMeshStandardMaterial?B.environment:null,D.fog=B.fog,D.envMap=(y.isMeshStandardMaterial?qe:tt).get(y.envMap||D.environment),Ge===void 0&&(y.addEventListener("dispose",re),Ge=new Map,D.programs=Ge);let be=Ge.get(Le);if(be!==void 0){if(D.currentProgram===be&&D.lightsStateVersion===ge)return vt(y,ye),be}else ye.uniforms=Y.getUniforms(y),y.onBuild(W,ye,x),y.onBeforeCompile(ye,x),be=Y.acquireProgram(ye,Le),Ge.set(Le,be),D.uniforms=ye.uniforms;const Te=D.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=Se.uniform),vt(y,ye),D.needsLights=dt(y),D.lightsStateVersion=ge,D.needsLights&&(Te.ambientLightColor.value=$.state.ambient,Te.lightProbe.value=$.state.probe,Te.directionalLights.value=$.state.directional,Te.directionalLightShadows.value=$.state.directionalShadow,Te.spotLights.value=$.state.spot,Te.spotLightShadows.value=$.state.spotShadow,Te.rectAreaLights.value=$.state.rectArea,Te.ltc_1.value=$.state.rectAreaLTC1,Te.ltc_2.value=$.state.rectAreaLTC2,Te.pointLights.value=$.state.point,Te.pointLightShadows.value=$.state.pointShadow,Te.hemisphereLights.value=$.state.hemi,Te.directionalShadowMap.value=$.state.directionalShadowMap,Te.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Te.spotShadowMap.value=$.state.spotShadowMap,Te.spotLightMatrix.value=$.state.spotLightMatrix,Te.spotLightMap.value=$.state.spotLightMap,Te.pointShadowMap.value=$.state.pointShadowMap,Te.pointShadowMatrix.value=$.state.pointShadowMatrix);const et=be.getUniforms(),pt=so.seqWithValue(et.seq,Te);return D.currentProgram=be,D.uniformsList=pt,be}function vt(y,B){const W=Ue.get(y);W.outputColorSpace=B.outputColorSpace,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function kt(y,B,W,D,$){B.isScene!==!0&&(B=ct),Ie.resetTextureUnits();const ue=B.fog,ge=D.isMeshStandardMaterial?B.environment:null,ye=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ni,Le=(D.isMeshStandardMaterial?qe:tt).get(D.envMap||ge),Ge=D.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,be=!!W.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Te=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,pt=!!W.morphAttributes.color,cn=D.toneMapped?x.toneMapping:bi,jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=jt!==void 0?jt.length:0,Ve=Ue.get(D),Pi=m.state.lights;if(J===!0&&(se===!0||y!==v)){const xn=y===v&&D.id===L;Se.setState(D,y,xn)}let xt=!1;D.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Pi.state.version||Ve.outputColorSpace!==ye||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Le||D.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Se.numPlanes||Ve.numIntersection!==Se.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==be||Ve.morphTargets!==Te||Ve.morphNormals!==et||Ve.morphColors!==pt||Ve.toneMapping!==cn||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==st)&&(xt=!0):(xt=!0,Ve.__version=D.version);let tr=Ve.currentProgram;xt===!0&&(tr=Ke(D,B,$));let Jc=!1,Ds=!1,ko=!1;const Jt=tr.getUniforms(),nr=Ve.uniforms;if(Ae.useProgram(tr.program)&&(Jc=!0,Ds=!0,ko=!0),D.id!==L&&(L=D.id,Ds=!0),Jc||v!==y){if(Jt.setValue(F,"projectionMatrix",y.projectionMatrix),Pe.logarithmicDepthBuffer&&Jt.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),v!==y&&(v=y,Ds=!0,ko=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const xn=Jt.map.cameraPosition;xn!==void 0&&xn.setValue(F,Ee.setFromMatrixPosition(y.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Jt.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||$.isSkinnedMesh)&&Jt.setValue(F,"viewMatrix",y.matrixWorldInverse)}if($.isSkinnedMesh){Jt.setOptional(F,$,"bindMatrix"),Jt.setOptional(F,$,"bindMatrixInverse");const xn=$.skeleton;xn&&(Pe.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Jt.setValue(F,"boneTexture",xn.boneTexture,Ie),Jt.setValue(F,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Go=W.morphAttributes;if((Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0&&Pe.isWebGL2===!0)&&xe.update($,W,tr),(Ds||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Jt.setValue(F,"receiveShadow",$.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(nr.envMap.value=Le,nr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Ds&&(Jt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Lt(nr,ko),ue&&D.fog===!0&&Q.refreshFogUniforms(nr,ue),Q.refreshMaterialUniforms(nr,D,I,Z,ce),so.upload(F,Ve.uniformsList,nr,Ie)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(so.upload(F,Ve.uniformsList,nr,Ie),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Jt.setValue(F,"center",$.center),Jt.setValue(F,"modelViewMatrix",$.modelViewMatrix),Jt.setValue(F,"normalMatrix",$.normalMatrix),Jt.setValue(F,"modelMatrix",$.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const xn=D.uniformsGroups;for(let Ho=0,ap=xn.length;Ho<ap;Ho++)if(Pe.isWebGL2){const Qc=xn[Ho];Be.update(Qc,tr),Be.bind(Qc,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function Lt(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function dt(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,B,W){Ue.get(y.texture).__webglTexture=B,Ue.get(y.depthTexture).__webglTexture=W;const D=Ue.get(y);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=W===void 0,D.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,B){const W=Ue.get(y);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,W=0){A=y,E=B,w=W;let D=!0,$=null,ue=!1,ge=!1;if(y){const Le=Ue.get(y);Le.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(F.FRAMEBUFFER,null),D=!1):Le.__webglFramebuffer===void 0?Ie.setupRenderTarget(y):Le.__hasExternalTextures&&Ie.rebindTextures(y,Ue.get(y.texture).__webglTexture,Ue.get(y.depthTexture).__webglTexture);const Ge=y.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ge=!0);const be=Ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?($=be[B],ue=!0):Pe.isWebGL2&&y.samples>0&&Ie.useMultisampledRTT(y)===!1?$=Ue.get(y).__webglMultisampledFramebuffer:$=be,b.copy(y.viewport),H.copy(y.scissor),k=y.scissorTest}else b.copy(R).multiplyScalar(I).floor(),H.copy(le).multiplyScalar(I).floor(),k=z;if(Ae.bindFramebuffer(F.FRAMEBUFFER,$)&&Pe.drawBuffers&&D&&Ae.drawBuffers(y,$),Ae.viewport(b),Ae.scissor(H),Ae.setScissorTest(k),ue){const Le=Ue.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,W)}else if(ge){const Le=Ue.get(y.texture),Ge=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,Ge)}L=-1},this.readRenderTargetPixels=function(y,B,W,D,$,ue,ge){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){Ae.bindFramebuffer(F.FRAMEBUFFER,ye);try{const Le=y.texture,Ge=Le.format,be=Le.type;if(Ge!==ei&&ve.convert(Ge)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Te=be===la&&(pe.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&pe.has("EXT_color_buffer_float"));if(be!==Yi&&ve.convert(be)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===Bi&&(Pe.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-D&&W>=0&&W<=y.height-$&&F.readPixels(B,W,D,$,ve.convert(Ge),ve.convert(be),ue)}finally{const Le=A!==null?Ue.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(y,B,W=0){const D=Math.pow(2,-W),$=Math.floor(B.image.width*D),ue=Math.floor(B.image.height*D);Ie.setTexture2D(B,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,y.x,y.y,$,ue),Ae.unbindTexture()},this.copyTextureToTexture=function(y,B,W,D=0){const $=B.image.width,ue=B.image.height,ge=ve.convert(W.format),ye=ve.convert(W.type);Ie.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),B.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,D,y.x,y.y,$,ue,ge,ye,B.image.data):B.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,D,y.x,y.y,B.mipmaps[0].width,B.mipmaps[0].height,ge,B.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,D,y.x,y.y,ge,ye,B.image),D===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(y,B,W,D,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=y.max.x-y.min.x+1,ge=y.max.y-y.min.y+1,ye=y.max.z-y.min.z+1,Le=ve.convert(D.format),Ge=ve.convert(D.type);let be;if(D.isData3DTexture)Ie.setTexture3D(D,0),be=F.TEXTURE_3D;else if(D.isDataArrayTexture)Ie.setTexture2DArray(D,0),be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Te=F.getParameter(F.UNPACK_ROW_LENGTH),et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pt=F.getParameter(F.UNPACK_SKIP_PIXELS),cn=F.getParameter(F.UNPACK_SKIP_ROWS),jt=F.getParameter(F.UNPACK_SKIP_IMAGES),st=W.isCompressedTexture?W.mipmaps[0]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,st.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(be,$,B.x,B.y,B.z,ue,ge,ye,Le,Ge,st.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(be,$,B.x,B.y,B.z,ue,ge,ye,Le,st.data)):F.texSubImage3D(be,$,B.x,B.y,B.z,ue,ge,ye,Le,Ge,st),F.pixelStorei(F.UNPACK_ROW_LENGTH,Te),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,cn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt),$===0&&D.generateMipmaps&&F.generateMipmap(be),Ae.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ie.setTextureCube(y,0):y.isData3DTexture?Ie.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ie.setTexture2DArray(y,0):Ie.setTexture2D(y,0),Ae.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,Ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?xr:fh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?We:ni}}class cx extends Dh{}cx.prototype.isWebGL1Renderer=!0;class ux extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Uh extends Ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _f=new Bt,Xl=new gh,Wa=new Uo,Xa=new q;class fx extends pn{constructor(e=new Ci,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;_f.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(_f);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Xa.fromBufferAttribute(h,m),gf(Xa,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Xa.fromBufferAttribute(h,g),gf(Xa,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gf(r,e,t,n,i,s,a){const o=Xl.distanceSqToPoint(r);if(o<t){const l=new q;Xl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class hx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vf(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);function vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ih(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Es={duration:.5,overwrite:!1,delay:0},yc,Kt,Et,Gn=1e8,ft=1/Gn,Yl=Math.PI*2,dx=Yl/4,px=0,Nh=Math.sqrt,mx=Math.cos,_x=Math.sin,zt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},Ec=function(e){return typeof e>"u"},ui=function(e){return typeof e=="object"},mn=function(e){return e!==!1},Tc=function(){return typeof window<"u"},Ya=function(e){return Tt(e)||zt(e)},Oh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,ql=/(?:-?\.?\d|\.)+/gi,Fh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bh=/[+-]=-?[.\d]+/,zh=/[^,'"\[\]\s]+/gi,gx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,St,On,$l,bc,Ln={},xo={},kh,Gh=function(e){return(xo=Lr(e,Ln))&&vn},Ac=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mo=function(e,t){return!t&&console.warn(e)},Hh=function(e,t){return e&&(Ln[e]=t)&&xo&&(xo[e]=t)||Ln},ca=function(){return 0},vx={suppressEvents:!0,isStart:!0,kill:!1},ao={suppressEvents:!0,kill:!1},xx={suppressEvents:!0},wc={},qi=[],Kl={},Vh,An={},Ml={},xf=30,oo=[],Rc="",Cc=function(e){var t=e[0],n,i;if(ui(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oo.length;i--&&!oo[i].targetTest(t););n=oo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dd(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||Cc(Hn(e))[0]._gsap},Wh=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Ec(n)&&e.getAttribute&&e.getAttribute(t)||n},_n=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Mx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},So=function(){var e=qi.length,t=qi.slice(0),n,i;for(Kl={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Xh=function(e,t,n,i){qi.length&&!Kt&&So(),e.render(t,n,i||Kt&&t<0&&(e._initted||e._startAt)),qi.length&&!Kt&&So()},Yh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(zh).length<2?t:zt(e)?e.trim():e},qh=function(e){return e},Yn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Sx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lr=function(e,t){for(var n in t)e[n]=t[n];return e},Mf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ui(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Zs=function(e){var t=e.parent||St,n=e.keyframes?Sx(Zt(e.keyframes)):Yn;if(mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$h=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Oo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Er=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ex=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zl=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(ao):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Tx=function r(e){return!e||e._ts&&r(e.parent)},Sf=function(e){return e._repeat?Ts(e._tTime,e=e.duration()+e._rDelay)*e:0},Ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Eo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fo=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},Bo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fo(e),n._dirty||Er(n,e)),e},Kh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Eo(e.rawTime(),t),(!t._dur||ya(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Er(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},ai=function(e,t,n,i){return t.parent&&ji(t),t._start=Ht((wi(n)?n:n||e!==St?Nn(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$h(e,t,"_first","_last",e._sort?"_start":0),jl(t)||(e._recent=t),i||Kh(e,t),e._ts<0&&Bo(e,e._tTime),e},Zh=function(e,t){return(Ln.ScrollTrigger||Ac("scrollTrigger",t))&&Ln.ScrollTrigger.create(t,e)},jh=function(e,t,n,i,s){if(Lc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vh!==wn.frame)return qi.push(e),e._lazy=[s,i],1},bx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ax=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&bx(e)&&!(!e._initted&&jl(e))||(e._ts<0||e._dp._ts<0)&&!jl(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ya(0,e._tDur,t),u=Ts(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ts(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Kt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&jh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Zl(e,t,n,!0),e._onUpdate&&!n&&Vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ji(e,1),!n&&!Kt&&(Vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bs=function(e,t,n,i){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Bo(e,e._tTime=e._tDur*o),e.parent&&Fo(e),n||Er(e.parent,e),e},yf=function(e){return e instanceof hn?Er(e):bs(e,e._dur)},Rx={_start:0,endTime:ca,totalDuration:ca},Nn=function r(e,t,n){var i=e.labels,s=e._recent||Rx,a=e.duration()>=Gn?s.endTime(!1):e._dur,o,l,c;return zt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Zt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},js=function(e,t,n){var i=wi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;a.immediateRender=mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ct(t[0],a,t[s+1])},er=function(e,t){return e||e===0?t(e):t},ya=function(e,t,n){return n<e?e:n>t?t:n},$t=function(e,t){return!zt(e)||!(t=gx.exec(e))?"":t[1]},Cx=function(e,t,n){return er(n,function(i){return ya(e,t,i)})},Jl=[].slice,Jh=function(e,t){return e&&ui(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ui(e[0]))&&!e.nodeType&&e!==On},Px=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return zt(i)&&!t||Jh(i,1)?(s=n).push.apply(s,Hn(i)):n.push(i)})||n},Hn=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):zt(e)&&!n&&($l||!As())?Jl.call((t||bc).querySelectorAll(e),0):Zt(e)?Px(e,n):Jh(e)?Jl.call(e,0):e?[e]:[]},Ql=function(e){return e=Hn(e)[0]||Mo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hn(t,n.querySelectorAll?n:n===e?Mo("Invalid scope")||bc.createElement("div"):e)}},Qh=function(e){return e.sort(function(){return .5-Math.random()})},ed=function(e){if(Tt(e))return e;var t=ui(e)?e:{each:e},n=Tr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return zt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,S,x,M,E,w,A,L,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Gn])[1],!v){for(A=-Gn;A<(A=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(m=a[_]=[],p=l?Math.min(v,_)*u-.5:i%v,S=v===Gn?0:l?_*h/v-.5:i/v|0,A=0,L=Gn,w=0;w<_;w++)x=w%v-p,M=S-(w/v|0),m[w]=E=c?Math.abs(c==="y"?M:x):Nh(x*x+M*M),E>A&&(A=E),E<L&&(L=E);i==="random"&&Qh(m),m.max=A-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=$t(t.amount||t.each)||0,n=n&&_<0?ud(n):n}return _=(m[f]-m.min)/m.max||0,Ht(m.b+(n?n(_):_)*m.v)+m.u}},ec=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:$t(n))}},td=function(e,t){var n=Zt(e),i,s;return!n&&ui(e)&&(i=n=e.radius||Gn,e.values?(e=Hn(e.values),(s=!wi(e[0]))&&(i*=i)):e=ec(e.increment)),er(t,n?Tt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Gn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||wi(a)?u:u+$t(a)}:ec(e))},nd=function(e,t,n,i){return er(Zt(e)?!t:n===!0?!!(n=0):!i,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Lx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Dx=function(e,t){return function(n){return e(parseFloat(n))+(t||$t(n))}},Ux=function(e,t,n){return rd(e,t,0,1,n)},id=function(e,t,n){return er(n,function(i){return e[~~t(i)]})},Ix=function r(e,t,n){var i=t-e;return Zt(e)?id(e,r(0,e.length),t):er(n,function(s){return(i+(s-e)%i)%i+e})},Nx=function r(e,t,n){var i=t-e,s=i*2;return Zt(e)?id(e,r(0,e.length-1),t):er(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ua=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?zh:ql),n+=e.substr(t,i-t)+nd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},rd=function(e,t,n,i,s){var a=t-e,o=i-n;return er(s,function(l){return n+((l-e)/a*o||0)})},Ox=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=zt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Lr(Zt(e)?[]:{},e));if(!u){for(l in t)Pc.call(o,e,l,"get",t[l]);s=function(g){return Ic(g,o)||(a?e.p:e)}}}return er(n,s)},Ef=function(e,t,n){var i=e.labels,s=Gn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Vn=function(e,t,n){var i=e.vars,s=i[t],a=Et,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&So(),o&&(Et=o),u=l?s.apply(c,l):s.call(c),Et=a,u},Vs=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Vn(e,"onInterrupt"),e},ls,sd=[],ad=function(e){if(Tc()&&e){e=!e.name&&e.default||e;var t=e.name,n=Tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ca,render:Ic,add:Pc,kill:Jx,modifier:jx,rawVars:0},a={targetTest:0,get:0,getSetter:Uc,aliases:{},register:0};if(As(),e!==i){if(An[t])return;Yn(i,Yn(yo(e,s),a)),Lr(i.prototype,Lr(s,yo(e,a))),An[i.prop=t]=i,e.targetTest&&(oo.push(i),wc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hh(t,i),e.register&&e.register(vn,i,gn)}else e&&sd.push(e)},ut=255,Ws={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Sl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},od=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&ut,e&ut]:0:Ws.black,s,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])i=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ql),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Sl(l+1/3,s,a),i[1]=Sl(l,s,a),i[2]=Sl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Fh),n&&i.length<4&&(i[3]=1),i}else i=e.match(ql)||Ws.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ut,a=i[1]/ut,o=i[2]/ut,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ld=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(s){var a=s.match(os)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Tf=function(e,t,n){var i="",s=(e+i).match($i),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=od(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ld(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(os),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Fx=/hsl[a]?\(/,cd=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=Fx.test(t),e[1]=Tf(e[1],n),e[0]=Tf(e[0],n,ld(e[1])),!0},fa,wn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,S=m===!0,x,M,E,w;if(p>e&&(n+=p-t),i+=p,E=i-n,x=E-a,(x>0||S)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=x+(x>=s?4:s-x),M=1),S||(l=c(_)),M)for(d=0;d<o.length;d++)o[d](E,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){kh&&(!$l&&Tc()&&(On=$l=window,bc=On.document||{},Ln.gsap=vn,(On.gsapVersions||(On.gsapVersions=[])).push(vn.version),Gh(xo||On.GreenSockGlobals||!On.gsap&&On||{}),u=On.requestAnimationFrame,sd.forEach(ad)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},fa=1,g(2))},sleep:function(){(u?On.cancelAnimationFrame:clearTimeout)(l),fa=0,c=ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,S){var x=p?function(M,E,w,A){m(M,E,w,A),h.remove(x)}:m;return h.remove(m),o[S?"unshift":"push"](x),As(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),As=function(){return!fa&&wn.wake()},rt={},Bx=/^[\d.\-M][\d.\-,\s]/,zx=/["']/g,kx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(zx,"").trim():+c,i=l.substr(o+1).trim();return t},Gx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Hx=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kx(t[1])]:Gx(e).split(",").map(Yh)):rt._CE&&Bx.test(e)?rt._CE("",e):n},ud=function(e){return function(t){return 1-e(1-t)}},fd=function r(e,t){for(var n=e._first,i;n;)n instanceof hn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Tr=function(e,t){return e&&(Tt(e)?e:rt[e]||Hx(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return _n(e,function(o){rt[o]=Ln[o]=s,rt[a=o.toLowerCase()]=n;for(var l in s)rt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[o+"."+l]=s[l]}),s},hd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Yl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*_x((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:hd(o);return s=Yl/s,l.config=function(c,u){return r(e,c,u)},l},El=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hd(n);return i.config=function(s){return r(e,s)},i};_n("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Nr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Nr("Elastic",yl("in"),yl("out"),yl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Nr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Nr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Nr("Circ",function(r){return-(Nh(1-r*r)-1)});Nr("Sine",function(r){return r===1?1:-mx(r*dx)+1});Nr("Back",El("in"),El("out"),El());rt.SteppedEase=rt.steps=Ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((i*ya(0,a,o)|0)+s)*n}}};Es.ease=rt["quad.out"];_n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Rc+=r+","+r+"Params,"});var dd=function(e,t){this.id=px++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wh,this.set=t?t.getSetter:Uc},ha=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bs(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),fa||wn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(As(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Bo(this,n),!s._dp||s.parent||Kh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ts(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Eo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(ya(-Math.abs(this._delay),this._tDur,i),!0),Fo(this),Ex(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(As(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ai(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Eo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=xx);var i=Kt;return Kt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,yf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Nn(this,n),mn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,mn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ft)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Tt(n)?n:qh,o=function(){var c=i.then;i.then=null,Tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Vs(this)},r}();Yn(ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var hn=function(r){Ih(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=mn(n.sortChildren),St&&ai(n.parent||St,vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zh(vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return js(0,arguments,this),this},t.from=function(i,s,a){return js(1,arguments,this),this},t.fromTo=function(i,s,a,o){return js(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(i,s,Nn(this,a),1),this},t.call=function(i,s,a){return ai(this,Ct.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ct(i,a,Nn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Zs(a).immediateRender=mn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Zs(o).immediateRender=mn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,x,M,E,w,A;if(this!==St&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Ht(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),E=Ts(this._tTime,m),!o&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),w&&_&1&&(f=c-f,A=1),_!==E&&!this._lock){var L=w&&E&1,v=L===(w&&_&1);if(_<E&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ht(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;fd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=wx(this,Ht(o),Ht(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(Vn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-ft);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||Kt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-ft:ft);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=M,Fo(this),this.render(i,s,a);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(wi(s)||(s=Nn(this,s,i)),!(i instanceof ha)){if(Zt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(zt(i))return this.addLabel(i,s);if(Tt(i))i=Ct.delayedCall(0,i);else return this}return this!==i?ai(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ct?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return zt(i)?this.removeLabel(i):Tt(i)?this.killTweensOf(i):(Oo(this,i),i===this._recent&&(this._recent=this._last),Er(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Nn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Ct.delayedCall(0,s||ca,a);return o.data="isPause",this._hasPause=1,ai(this,o,Nn(this,i))},t.removePause=function(i){var s=this._first;for(i=Nn(this,i);s;)s._start===i&&s.data==="isPause"&&ji(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ki!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Hn(i),l=this._first,c=wi(s),u;l;)l instanceof Ct?Mx(l._targets,o)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Nn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ct.to(a,Yn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&bs(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Yn({startAt:{time:Nn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Ef(this,Nn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Ef(this,Nn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Er(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Er(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Gn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ai(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;bs(a,a===St&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(St._ts&&(Xh(St,Eo(i,St)),Vh=wn.frame),wn.frame>=xf){xf+=Pn.autoSleep||120;var s=St._first;if((!s||!s._ts)&&Pn.autoSleep&&wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wn.sleep()}}},e}(ha);Yn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Vx=function(e,t,n,i,s,a,o){var l=new gn(this._pt,e,t,0,1,xd,null,s),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ua(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(xl)||[];h=xl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ds(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=xl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Bh.test(i)||p)&&(l.e=0),this._pt=l,l},Pc=function(e,t,n,i,s,a,o,l,c,u){Tt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Tt(h)?c?$x:gd:Dc,g;if(zt(i)&&(~i.indexOf("random(")&&(i=ua(i)),i.charAt(1)==="="&&(g=ds(f,i)+($t(f)||0),(g||g===0)&&(i=g))),!u||f!==i||tc)return!isNaN(f*i)&&i!==""?(g=new gn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Zx:vd,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Ac(t,i),Vx.call(this,e,t,f,i,d,l||Pn.stringFilter,c))},Wx=function(e,t,n,i,s){if(Tt(e)&&(e=Js(e,s,t,n,i)),!ui(e)||e.style&&e.nodeType||Zt(e)||Oh(e))return zt(e)?Js(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Js(e[o],s,t,n,i);return a},pd=function(e,t,n,i,s,a){var o,l,c,u;if(An[e]&&(o=new An[e]).init(s,o.rawVars?t[e]:Wx(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new gn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ls))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ki,tc,Lc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,S=e._targets,x=e.parent,M=x&&x.data==="nested"?x.vars.targets:S,E=e._overwrite==="auto"&&!yc,w=e.timeline,A,L,v,b,H,k,U,N,O,Z,I,X,j;if(w&&(!g||!s)&&(s="none"),e._ease=Tr(s,Es.ease),e._yEase=d?ud(Tr(d===!0?s:d,Es.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(N=S[0]?yr(S[0]).harness:0,X=N&&i[N.prop],A=yo(i,wc),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!_?p.render(-1,!0):p.revert(f&&m?ao:vx),p._lazy=0),a){if(ji(e._startAt=Ct.set(S,Yn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&mn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!o&&!_)&&e._startAt.revert(ao),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),v=Yn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&mn(l),immediateRender:o,stagger:0,parent:x},A),X&&(v[N.prop]=X),ji(e._startAt=Ct.set(S,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(ao):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&mn(l)||l&&!m,L=0;L<S.length;L++){if(H=S[L],U=H._gsap||Cc(S)[L]._gsap,e._ptLookup[L]=Z={},Kl[U.id]&&qi.length&&So(),I=M===S?L:M.indexOf(H),N&&(O=new N).init(H,X||A,e,I,M)!==!1&&(e._pt=b=new gn(e._pt,H,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(R){Z[R]=b}),O.priority&&(k=1)),!N||X)for(v in A)An[v]&&(O=pd(v,A,e,I,H,M))?O.priority&&(k=1):Z[v]=b=Pc.call(e,H,v,"get",A[v],I,M,0,i.stringFilter);e._op&&e._op[L]&&e.kill(H,e._op[L]),E&&e._pt&&(ki=e,St.killTweensOf(H,Z,e.globalTime(t)),j=!e.parent,ki=0),e._pt&&l&&(Kl[U.id]=1)}k&&Md(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,g&&t<=0&&w.render(Gn,!0,!0)},Xx=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return tc=1,e.vars[t]="+=0",Lc(e,o),tc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=At(n)+$t(u.e)),u.b&&(u.b=c.s+$t(u.b))},Yx=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Lr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},qx=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Zt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Js=function(e,t,n,i,s){return Tt(e)?e.call(t,n,i,s):zt(e)&&~e.indexOf("random(")?ua(e):e},md=Rc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_d={};_n(md+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _d[r]=1});var Ct=function(r){Ih(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Zs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||St,x=(Zt(n)||Oh(n)?wi(n[0]):"length"in i)?[n]:Hn(n),M,E,w,A,L,v,b,H;if(o._targets=x.length?Cc(x):Mo("GSAP target "+n+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Ya(c)||Ya(u)){if(i=o.vars,M=o.timeline=new hn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:x}),M.kill(),M.parent=M._dp=vi(o),M._start=0,f||Ya(c)||Ya(u)){if(A=x.length,b=f&&ed(f),ui(f))for(L in f)~md.indexOf(L)&&(H||(H={}),H[L]=f[L]);for(E=0;E<A;E++)w=yo(i,_d),w.stagger=0,p&&(w.yoyoEase=p),H&&Lr(w,H),v=x[E],w.duration=+Js(c,vi(o),E,v,x),w.delay=(+Js(u,vi(o),E,v,x)||0)-o._delay,!f&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),M.to(v,w,b?b(E,v,x):0),M._ease=rt.none;M.duration()?c=u=0:o.timeline=0}else if(g){Zs(Yn(M.vars.defaults,{ease:"none"})),M._ease=Tr(g.ease||i.ease||"none");var k=0,U,N,O;if(Zt(g))g.forEach(function(Z){return M.to(x,Z,">")}),M.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||qx(L,g[L],w,g.easeEach);for(L in w)for(U=w[L].sort(function(Z,I){return Z.t-I.t}),k=0,E=0;E<U.length;E++)N=U[E],O={ease:N.e,duration:(N.t-(E?U[E-1].t:0))/100*c},O[L]=N.v,M.to(x,O,k),k+=O.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return d===!0&&!yc&&(ki=vi(o),St.killTweensOf(x),ki=0),ai(S,vi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ht(S._time)&&mn(h)&&Tx(vi(o))&&S.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-u)||0)),m&&Zh(vi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ft&&!u?l:i<ft?0:i,f,d,g,_,m,p,S,x,M;if(!c)Ax(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=Ht(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,f=c-f),m=Ts(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&fd(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(Ht(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(jh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!s&&!g&&(Vn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:!f&&p?-ft:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Zl(this,i,s,a),Vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Zl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ji(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){fa||wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Lc(this,l),c=this._ease(l/this._dur),Xx(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Bo(this,0),this.parent||$h(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ki&&ki.vars.overwrite!==!0)._first||Vs(this),this.parent&&a!==this.timeline.totalDuration()&&bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Hn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&yx(o,l))return s==="all"&&(this._pt=0),Vs(this);for(h=this._op=this._op||[],s!=="all"&&(zt(s)&&(_={},_n(s,function(S){return _[S]=1}),s=_),s=Yx(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Oo(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Vs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return js(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return js(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return St.killTweensOf(i,s,a)},e}(ha);Yn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_n("staggerTo,staggerFrom,staggerFromTo",function(r){Ct[r]=function(){var e=new hn,t=Jl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Dc=function(e,t,n){return e[t]=n},gd=function(e,t,n){return e[t](n)},$x=function(e,t,n,i){return e[t](i.fp,n)},Kx=function(e,t,n){return e.setAttribute(t,n)},Uc=function(e,t){return Tt(e[t])?gd:Ec(e[t])&&e.setAttribute?Kx:Dc},vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Zx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ic=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jx=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Jx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Oo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Qx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Md=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},gn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||vd,this.d=l||this,this.set=c||Dc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Qx,this.m=n,this.mt=s,this.tween=i},r}();_n(Rc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return wc[r]=1});Ln.TweenMax=Ln.TweenLite=Ct;Ln.TimelineLite=Ln.TimelineMax=hn;St=new hn({sortChildren:!1,defaults:Es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=cd;var br=[],lo={},eM=[],bf=0,tM=0,Tl=function(e){return(lo[e]||eM).map(function(t){return t()})},nc=function(){var e=Date.now(),t=[];e-bf>2&&(Tl("matchMediaInit"),br.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=On.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Tl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),bf=e,Tl("matchMedia"))},Sd=function(){function r(t,n){this.selector=n&&Ql(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Tt(n)&&(s=i,i=n,n=Tt);var a=this,o=function(){var c=Et,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Ql(s)),Et=a,h=i.apply(a,arguments),Tt(h)&&a._r.push(h),Et=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Tt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Et;Et=null,n(this),Et=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ct&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ct)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=br.length;o--;)br[o].id===this.id&&br.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),nM=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){ui(n)||(n={matches:n});var a=new Sd(0,s||this.scope),o=a.conditions={},l,c,u;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=On.matchMedia(n[c]),l&&(br.indexOf(a)<0&&br.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(nc):l.addEventListener("change",nc)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),To={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ad(i)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return St.getTweensOf(e,t)},getProperty:function(e,t,n,i){zt(e)&&(e=Hn(e)[0]);var s=yr(e||{}).get,a=n?qh:Yh;return n==="native"&&(n=""),e&&(t?a((An[t]&&An[t].get||s)(e,t,n,i)):function(o,l,c){return a((An[o]&&An[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Hn(e),e.length>1){var i=e.map(function(u){return vn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=An[t],o=yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ls._pt=0,h.init(e,n?u+n:u,ls,0,[e]),h.render(1,h),ls._pt&&Ic(1,ls)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=vn.to(e,Lr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return St.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Tr(e.ease,Es.ease)),Mf(Es,e||{})},config:function(e){return Mf(Pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!An[o]&&!Ln[o]&&Mo(t+" effect requires "+o+" plugin.")}),Ml[t]=function(o,l,c){return n(Hn(o),Yn(l||{},s),c)},a&&(hn.prototype[t]=function(o,l,c){return this.add(Ml[t](o,ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=Tr(t)},parseEase:function(e,t){return arguments.length?Tr(e,t):rt},getById:function(e){return St.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new hn(e),i,s;for(n.smoothChildTiming=mn(e.smoothChildTiming),St.remove(n),n._dp=0,n._time=n._tTime=St._time,i=St._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ct&&i.vars.onComplete===i._targets[0]))&&ai(n,i,i._start-i._delay),i=s;return ai(St,n,0),n},context:function(e,t){return e?new Sd(e,t):Et},matchMedia:function(e){return new nM(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||nc()},addEventListener:function(e,t){var n=lo[e]||(lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=lo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ix,wrapYoyo:Nx,distribute:ed,random:nd,snap:td,normalize:Ux,getUnit:$t,clamp:Cx,splitColor:od,toArray:Hn,selector:Ql,mapRange:rd,pipe:Lx,unitize:Dx,interpolate:Ox,shuffle:Qh},install:Gh,effects:Ml,ticker:wn,updateRoot:hn.updateRoot,plugins:An,globalTimeline:St,core:{PropTween:gn,globals:Hh,Tween:Ct,Timeline:hn,Animation:ha,getCache:yr,_removeLinkedListItem:Oo,reverting:function(){return Kt},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return yc=e}}};_n("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return To[r]=Ct[r]});wn.add(hn.updateRoot);ls=To.to({},{duration:0});var iM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=iM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},bl=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(zt(s)&&(l={},_n(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rM(o,s)}}}},vn=To.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bl("roundProps",ec),bl("modifiers"),bl("snap",td))||To;Ct.version=hn.version=vn.version="3.12.2";kh=1;Tc()&&As();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Af,Gi,ps,Nc,mr,wf,Oc,sM=function(){return typeof window<"u"},Ri={},fr=180/Math.PI,ms=Math.PI/180,es=Math.atan2,Rf=1e8,Fc=/([A-Z])/g,aM=/(left|right|width|margin|padding|x)/i,oM=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ic=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},yd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ed=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fM=function(e,t,n){return e.style[t]=n},hM=function(e,t,n){return e.style.setProperty(t,n)},dM=function(e,t,n){return e._gsap[t]=n},pM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},mM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_M=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},yt="transform",ti=yt+"Origin",gM=function r(e,t){var n=this,i=this.target,s=i.style;if(e in Ri&&s){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=xi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:xi(i,e);else return oi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(yt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ti,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},Td=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Fc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Oc(),(!s||!s.isStart)&&!n[yt]&&(Td(n),i.uncache=1)}},bd=function(e,t){var n={target:e,props:[],revert:vM,save:gM};return e._gsap||vn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ad,rc=function(e,t){var n=Gi.createElementNS?Gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gi.createElement(e);return n.style?n:Gi.createElement(e)},li=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Fc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ws(t)||t,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),ws=function(e,t,n){var i=t||mr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Cf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Cf[a]:"")+e},sc=function(){sM()&&window.document&&(Af=window,Gi=Af.document,ps=Gi.documentElement,mr=rc("div")||{style:{}},rc("div"),yt=ws(yt),ti=yt+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ad=!!ws("perspective"),Oc=vn.core.reverting,Nc=1)},Al=function r(e){var t=rc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ps.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ps.removeChild(t),this.style.cssText=s,a},Pf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wd=function(e){var t;try{t=e.getBBox()}catch{t=Al.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Al||(t=Al.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Pf(e,["x","cx","x1"])||0,y:+Pf(e,["y","cy","y1"])||0,width:0,height:0}:t},Rd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wd(e))},da=function(e,t){if(t){var n=e.style;t in Ri&&t!==ti&&(t=yt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Fc,"-$1").toLowerCase())):n.removeAttribute(t)}},Hi=function(e,t,n,i,s,a){var o=new gn(e._pt,t,n,0,1,a?Ed:yd);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Lf={deg:1,rad:1,turn:1},xM={grid:1,flex:1},Ji=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=mr.style,l=aM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===a||!s||Lf[i]||Lf[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Rd(e),(d||a==="%")&&(Ri[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],At(d?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Gi||!_.appendChild)&&(_=Gi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===wn.time&&!m.uncache?At(s/m.width*h):((d||a==="%")&&!xM[li(_,"display")]&&(o.position=li(e,"position")),_===e&&(o.position="static"),_.appendChild(mr),g=mr[u],_.removeChild(mr),o.position="absolute",l&&d&&(m=yr(_),m.time=wn.time,m.width=_[u]),At(f?g*s/h:g&&s?h/g*s:0))))},xi=function(e,t,n,i){var s;return Nc||sc(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ri[t]&&t!=="transform"?(s=ma(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ao(li(e,ti))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=bo[t]&&bo[t](e,t,n)||li(e,t)||Wh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(e,t,s,n)+n:s},MM=function(e,t,n,i){if(!n||n==="none"){var s=ws(t,e,1),a=s&&li(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new gn(this._pt,e.style,t,0,1,xd),l=0,c=0,u,h,f,d,g,_,m,p,S,x,M,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=li(e,t)||i,e.style[t]=n),u=[n,i],cd(u),n=u[0],i=u[1],f=n.match(os)||[],E=i.match(os)||[],E.length){for(;h=os.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,M=_.substr((d+"").length),m.charAt(1)==="="&&(m=ds(d,m)+M),p=parseFloat(m),x=m.substr((p+"").length),l=os.lastIndex-x.length,x||(x=x||Pn.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(d=Ji(e,t,_,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Ed:yd;return Bh.test(i)&&(o.e=0),this._pt=o,o},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},SM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Df[n]||n,t[1]=Df[i]||i,t.join(" ")},yM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ri[o]&&(l=1,o=o==="transformOrigin"?ti:yt),da(n,o);l&&(da(n,yt),a&&(a.svg&&n.removeAttribute("transform"),ma(n,1),a.uncache=1,Td(i)))}},bo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new gn(e._pt,t,n,0,0,yM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},pa=[1,0,0,1,0,0],Cd={},Pd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Uf=function(e){var t=li(e,yt);return Pd(t)?pa:t.substr(7).match(Fh).map(At)},Bc=function(e,t){var n=e._gsap||yr(e),i=e.style,s=Uf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pa:s):(s===pa&&!e.offsetParent&&e!==ps&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ps.appendChild(e)),s=Uf(e),l?i.display=l:da(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ps.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ac=function(e,t,n,i,s,a){var o=e._gsap,l=s||Bc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),M=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,A,L,v;n?l!==pa&&(A=d*m-g*_)&&(L=M*(m/A)+E*(-_/A)+(_*S-m*p)/A,v=M*(-g/A)+E*(d/A)-(d*S-g*p)/A,M=L,E=v):(w=wd(e),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(p=M-c,S=E-u,o.xOffset=h+(p*d+S*_)-p,o.yOffset=f+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ti]="0px 0px",a&&(Hi(a,o,"xOrigin",c,M),Hi(a,o,"yOrigin",u,E),Hi(a,o,"xOffset",h,o.xOffset),Hi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+E)},ma=function(e,t){var n=e._gsap||new dd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=li(e,ti)||"0",u,h,f,d,g,_,m,p,S,x,M,E,w,A,L,v,b,H,k,U,N,O,Z,I,X,j,R,le,z,ee,J,se;return u=h=f=_=m=p=S=x=M=0,d=g=1,n.svg=!!(e.getCTM&&Rd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),i.scale=i.rotate=i.translate="none"),A=Bc(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),ac(e,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,A)),E=n.xOrigin||0,w=n.yOrigin||0,A!==pa&&(H=A[0],k=A[1],U=A[2],N=A[3],u=O=A[4],h=Z=A[5],A.length===6?(d=Math.sqrt(H*H+k*k),g=Math.sqrt(N*N+U*U),_=H||k?es(k,H)*fr:0,S=U||N?es(U,N)*fr+_:0,S&&(g*=Math.abs(Math.cos(S*ms))),n.svg&&(u-=E-(E*H+w*U),h-=w-(E*k+w*N))):(se=A[6],ee=A[7],R=A[8],le=A[9],z=A[10],J=A[11],u=A[12],h=A[13],f=A[14],L=es(se,z),m=L*fr,L&&(v=Math.cos(-L),b=Math.sin(-L),I=O*v+R*b,X=Z*v+le*b,j=se*v+z*b,R=O*-b+R*v,le=Z*-b+le*v,z=se*-b+z*v,J=ee*-b+J*v,O=I,Z=X,se=j),L=es(-U,z),p=L*fr,L&&(v=Math.cos(-L),b=Math.sin(-L),I=H*v-R*b,X=k*v-le*b,j=U*v-z*b,J=N*b+J*v,H=I,k=X,U=j),L=es(k,H),_=L*fr,L&&(v=Math.cos(L),b=Math.sin(L),I=H*v+k*b,X=O*v+Z*b,k=k*v-H*b,Z=Z*v-O*b,H=I,O=X),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=At(Math.sqrt(H*H+k*k+U*U)),g=At(Math.sqrt(Z*Z+se*se)),L=es(O,Z),S=Math.abs(L)>2e-4?L*fr:0,M=J?1/(J<0?-J:J):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pd(li(e,yt)),I&&e.setAttribute("transform",I))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=At(d),n.scaleY=At(g),n.rotation=At(_)+o,n.rotationX=At(m)+o,n.rotationY=At(p)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ti]=Ao(c)),n.xOffset=n.yOffset=0,n.force3D=Pn.force3D,n.renderTransform=n.svg?TM:Ad?Ld:EM,n.uncache=0,n},Ao=function(e){return(e=e.split(" "))[0]+" "+e[1]},wl=function(e,t,n){var i=$t(t);return At(parseFloat(t)+parseFloat(Ji(e,"x",n+"px",i)))+i},EM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ld(e,t)},or="0deg",Fs="0px",lr=") ",Ld=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,M="",E=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==or||u!==or)){var w=parseFloat(u)*ms,A=Math.sin(w),L=Math.cos(w),v;w=parseFloat(h)*ms,v=Math.cos(w),a=wl(S,a,A*v*-x),o=wl(S,o,-Math.sin(w)*-x),l=wl(S,l,L*v*-x+x)}m!==Fs&&(M+="perspective("+m+lr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(E||a!==Fs||o!==Fs||l!==Fs)&&(M+=l!==Fs||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+lr),c!==or&&(M+="rotate("+c+lr),u!==or&&(M+="rotateY("+u+lr),h!==or&&(M+="rotateX("+h+lr),(f!==or||d!==or)&&(M+="skew("+f+", "+d+lr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+lr),S.style[yt]=M||"translate(0, 0)"},TM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(a),M=parseFloat(o),E,w,A,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ms,c*=ms,E=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=ms,v=Math.tan(c-u),v=Math.sqrt(1+v*v),A*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,w*=v)),E=At(E),w=At(w),A=At(A),L=At(L)):(E=h,L=f,w=A=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=Ji(d,"x",a,"px"),M=Ji(d,"y",o,"px")),(g||_||m||p)&&(x=At(x+g-(g*E+_*A)+m),M=At(M+_-(g*w+_*L)+p)),(i||s)&&(v=d.getBBox(),x=At(x+i/100*v.width),M=At(M+s/100*v.height)),v="matrix("+E+","+w+","+A+","+L+","+x+","+M+")",d.setAttribute("transform",v),S&&(d.style[yt]=v)},bM=function(e,t,n,i,s){var a=360,o=zt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Rf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Rf)%a-~~(c/a)*a)),e._pt=f=new gn(e._pt,t,n,i,c,lM),f.e=u,f.u="deg",e._props.push(n),f},If=function(e,t){for(var n in t)e[n]=t[n];return e},AM=function(e,t,n){var i=If({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[yt]=t,o=ma(n,1),da(n,yt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yt],a[yt]=t,o=ma(n,1),a[yt]=c);for(l in Ri)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=$t(c),g=$t(u),h=d!==g?Ji(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new gn(e._pt,o,l,h,f-h,ic),e._pt.u=g||0,e._props.push(l));If(o,i)};_n("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});bo[e>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return xi(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var Dd={name:"css",register:sc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,x,M,E,w,A,L;Nc||sc(),this.styles=this.styles||bd(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(An[_]&&pd(_,t,n,i,e,s)))){if(d=typeof u,g=bo[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ua(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(m=$t(c),p=$t(u)),p?m!==p&&(c=Ji(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],zt(c)&&~c.indexOf("random(")&&(c=ua(c)),$t(c+"")||(c+=Pn.units[_]||$t(xi(e,_))||""),(c+"").charAt(1)==="="&&(c=xi(e,_))):c=xi(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in oi&&(_==="autoAlpha"&&(f===1&&xi(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,o.visibility),Hi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ri,x){if(this.styles.save(_),M||(E=e._gsap,E.renderTransform&&!t.parseTransform||ma(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,M=this._pt=new gn(this._pt,o,yt,0,1,E.renderTransform,E,0,-1),M.dep=1),_==="scale")this._pt=new gn(this._pt,E,"scaleY",E.scaleY,(S?ds(E.scaleY,S+h):h)-E.scaleY||0,ic),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(ti,0,o[ti]),u=SM(u),E.svg?ac(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&Hi(this,E,"zOrigin",E.zOrigin,p),Hi(this,o,_,Ao(c),Ao(u)));continue}else if(_==="svgOrigin"){ac(e,u,1,w,0,this);continue}else if(_ in Cd){bM(this,E,_,f,S?ds(f,S+u):u);continue}else if(_==="smoothOrigin"){Hi(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){AM(this,u,e);continue}}else _ in o||(_=ws(_)||_);if(x||(h||h===0)&&(f||f===0)&&!oM.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=$t(u)||(_ in Pn.units?Pn.units[_]:m),m!==p&&(f=Ji(e,_,c,p)),this._pt=new gn(this._pt,x?E:o,_,f,(S?ds(f,S+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?uM:ic),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=cM);else if(_ in o)MM.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Ac(_,u);continue}x||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}A&&Md(this)},render:function(e,t){if(t.tween._time||!Oc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xi,aliases:oi,getSetter:function(e,t,n){var i=oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ri&&t!==ti&&(e._gsap.x||xi(e,"x"))?n&&wf===n?t==="scale"?pM:dM:(wf=n||{})&&(t==="scale"?mM:_M):e.style&&!Ec(e.style[t])?fM:~t.indexOf("-")?hM:Uc(e,t)},core:{_removeProperty:da,_getMatrix:Bc}};vn.utils.checkPrefix=ws;vn.core.getStyleSaver=bd;(function(r,e,t,n){var i=_n(r+","+e+","+t,function(s){Ri[s]=1});_n(e,function(s){Pn.units[s]="deg",Cd[s]=1}),oi[i[13]]=r+","+e,_n(n,function(s){var a=s.split(":");oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Pn.units[r]="px"});vn.registerPlugin(Dd);var Or=vn.registerPlugin(Dd)||vn;Or.core.Tween;function Nf(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function wM(r,e,t){return e&&Nf(r.prototype,e),t&&Nf(r,t),r}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wt,oc,Rn,Vi,Wi,_s,Ud,hr,Qs,Id,Ei,Zn,Nd,Od=function(){return Wt||typeof window<"u"&&(Wt=window.gsap)&&Wt.registerPlugin&&Wt},Fd=1,cs=[],Qe=[],ci=[],ea=Date.now,lc=function(e,t){return t},RM=function(){var e=Qs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Qe),i.push.apply(i,ci),Qe=n,ci=i,lc=function(a,o){return t[a](o)}},Ki=function(e,t){return~ci.indexOf(e)&&ci[ci.indexOf(e)+1][t]},ta=function(e){return!!~Id.indexOf(e)},en=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Qt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa="scrollLeft",$a="scrollTop",cc=function(){return Ei&&Ei.isPressed||Qe.cache++},wo=function(e,t){var n=function i(s){if(s||s===0){Fd&&(Rn.history.scrollRestoration="manual");var a=Ei&&Ei.isPressed;s=i.v=Math.round(s)||(Ei&&Ei.iOS?1:0),e(s),i.cacheID=Qe.cache,a&&lc("ss",s)}else(t||Qe.cache!==i.cacheID||lc("ref"))&&(i.cacheID=Qe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},on={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:wo(function(r){return arguments.length?Rn.scrollTo(r,Dt.sc()):Rn.pageXOffset||Vi[qa]||Wi[qa]||_s[qa]||0})},Dt={s:$a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:on,sc:wo(function(r){return arguments.length?Rn.scrollTo(on.sc(),r):Rn.pageYOffset||Vi[$a]||Wi[$a]||_s[$a]||0})},un=function(e,t){return(t&&t._ctx&&t._ctx.selector||Wt.utils.toArray)(e)[0]||(typeof e=="string"&&Wt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Qi=function(e,t){var n=t.s,i=t.sc;ta(e)&&(e=Vi.scrollingElement||Wi);var s=Qe.indexOf(e),a=i===Dt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+a]||en(e,"scroll",cc);var o=Qe[s+a],l=o||(Qe[s+a]=wo(Ki(e,n),!0)||(ta(e)?i:wo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Wt.getProperty(e,"scrollBehavior")==="smooth"),l},uc=function(e,t,n){var i=e,s=e,a=ea(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ea();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var _=o,m=s,p=ea();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Bs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Of=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Bd=function(){Qs=Wt.core.globals().ScrollTrigger,Qs&&Qs.core&&RM()},zd=function(e){return Wt=e||Od(),Wt&&typeof document<"u"&&document.body&&(Rn=window,Vi=document,Wi=Vi.documentElement,_s=Vi.body,Id=[Rn,Vi,Wi,_s],Wt.utils.clamp,Nd=Wt.core.context||function(){},hr="onpointerenter"in _s?"pointer":"mouse",Ud=Pt.isTouch=Rn.matchMedia&&Rn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Rn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zn=Pt.eventTypes=("ontouchstart"in Wi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Fd=0},500),Bd(),oc=1),oc};on.op=Dt;Qe.cache=0;var Pt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){oc||zd(Wt)||console.warn("Please gsap.registerPlugin(Observer)"),Qs||Bd();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,x=n.onPress,M=n.onRelease,E=n.onRight,w=n.onLeft,A=n.onUp,L=n.onDown,v=n.onChangeX,b=n.onChangeY,H=n.onChange,k=n.onToggleX,U=n.onToggleY,N=n.onHover,O=n.onHoverEnd,Z=n.onMove,I=n.ignoreCheck,X=n.isNormalizer,j=n.onGestureStart,R=n.onGestureEnd,le=n.onWheel,z=n.onEnable,ee=n.onDisable,J=n.onClick,se=n.scrollSpeed,ce=n.capture,de=n.allowClicks,Ce=n.lockAxis,Ee=n.onLockAxis;this.target=o=un(o)||Wi,this.vars=n,d&&(d=Wt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,se=se||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Rn.getComputedStyle(_s).lineHeight)||22);var ct,Oe,F,De,pe,Pe,Ae,G=this,Ue=0,Ie=0,tt=Qi(o,on),qe=Qi(o,Dt),gt=tt(),C=qe(),T=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Zn[0]==="pointerdown",Y=ta(o),Q=o.ownerDocument||Vi,te=[0,0,0],ie=[0,0,0],Se=0,ae=function(){return Se=ea()},K=function(he,ze){return(G.event=he)&&d&&~d.indexOf(he.target)||ze&&T&&he.pointerType!=="touch"||I&&I(he,ze)},xe=function(){G._vx.reset(),G._vy.reset(),Oe.pause(),h&&h(G)},we=function(){var he=G.deltaX=Of(te),ze=G.deltaY=Of(ie),$e=Math.abs(he)>=i,_e=Math.abs(ze)>=i;H&&($e||_e)&&H(G,he,ze,te,ie),$e&&(E&&G.deltaX>0&&E(G),w&&G.deltaX<0&&w(G),v&&v(G),k&&G.deltaX<0!=Ue<0&&k(G),Ue=G.deltaX,te[0]=te[1]=te[2]=0),_e&&(L&&G.deltaY>0&&L(G),A&&G.deltaY<0&&A(G),b&&b(G),U&&G.deltaY<0!=Ie<0&&U(G),Ie=G.deltaY,ie[0]=ie[1]=ie[2]=0),(De||F)&&(Z&&Z(G),F&&(S(G),F=!1),De=!1),Pe&&!(Pe=!1)&&Ee&&Ee(G),pe&&(le(G),pe=!1),ct=0},Re=function(he,ze,$e){te[$e]+=he,ie[$e]+=ze,G._vx.update(he),G._vy.update(ze),c?ct||(ct=requestAnimationFrame(we)):we()},ve=function(he,ze){Ce&&!Ae&&(G.axis=Ae=Math.abs(he)>Math.abs(ze)?"x":"y",Pe=!0),Ae!=="y"&&(te[2]+=he,G._vx.update(he,!0)),Ae!=="x"&&(ie[2]+=ze,G._vy.update(ze,!0)),c?ct||(ct=requestAnimationFrame(we)):we()},me=function(he){if(!K(he,1)){he=Bs(he,u);var ze=he.clientX,$e=he.clientY,_e=ze-G.x,Je=$e-G.y,Fe=G.isDragging;G.x=ze,G.y=$e,(Fe||Math.abs(G.startX-ze)>=s||Math.abs(G.startY-$e)>=s)&&(S&&(F=!0),Fe||(G.isDragging=!0),ve(_e,Je),Fe||m&&m(G))}},Be=G.onPress=function(Ne){K(Ne,1)||Ne&&Ne.button||(G.axis=Ae=null,Oe.pause(),G.isPressed=!0,Ne=Bs(Ne),Ue=Ie=0,G.startX=G.x=Ne.clientX,G.startY=G.y=Ne.clientY,G._vx.reset(),G._vy.reset(),en(X?o:Q,Zn[1],me,u,!0),G.deltaX=G.deltaY=0,x&&x(G))},nt=G.onRelease=function(Ne){if(!K(Ne,1)){Qt(X?o:Q,Zn[1],me,!0);var he=!isNaN(G.y-G.startY),ze=G.isDragging&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),$e=Bs(Ne);!ze&&he&&(G._vx.reset(),G._vy.reset(),u&&de&&Wt.delayedCall(.08,function(){if(ea()-Se>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(Q.createEvent){var _e=Q.createEvent("MouseEvents");_e.initMouseEvent("click",!0,!0,Rn,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(_e)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&!X&&Oe.restart(!0),p&&ze&&p(G),M&&M(G,ze)}},P=function(he){return he.touches&&he.touches.length>1&&(G.isGesturing=!0)&&j(he,G.isDragging)},oe=function(){return(G.isGesturing=!1)||R(G)},V=function(he){if(!K(he)){var ze=tt(),$e=qe();Re((ze-gt)*se,($e-C)*se,1),gt=ze,C=$e,h&&Oe.restart(!0)}},ne=function(he){if(!K(he)){he=Bs(he,u),le&&(pe=!0);var ze=(he.deltaMode===1?l:he.deltaMode===2?Rn.innerHeight:1)*g;Re(he.deltaX*ze,he.deltaY*ze,0),h&&!X&&Oe.restart(!0)}},re=function(he){if(!K(he)){var ze=he.clientX,$e=he.clientY,_e=ze-G.x,Je=$e-G.y;G.x=ze,G.y=$e,De=!0,(_e||Je)&&ve(_e,Je)}},He=function(he){G.event=he,N(G)},ot=function(he){G.event=he,O(G)},at=function(he){return K(he)||Bs(he,u)&&J(G)};Oe=G._dc=Wt.delayedCall(f||.25,xe).pause(),G.deltaX=G.deltaY=0,G._vx=uc(0,50,!0),G._vy=uc(0,50,!0),G.scrollX=tt,G.scrollY=qe,G.isDragging=G.isGesturing=G.isPressed=!1,Nd(this),G.enable=function(Ne){return G.isEnabled||(en(Y?Q:o,"scroll",cc),a.indexOf("scroll")>=0&&en(Y?Q:o,"scroll",V,u,ce),a.indexOf("wheel")>=0&&en(o,"wheel",ne,u,ce),(a.indexOf("touch")>=0&&Ud||a.indexOf("pointer")>=0)&&(en(o,Zn[0],Be,u,ce),en(Q,Zn[2],nt),en(Q,Zn[3],nt),de&&en(o,"click",ae,!1,!0),J&&en(o,"click",at),j&&en(Q,"gesturestart",P),R&&en(Q,"gestureend",oe),N&&en(o,hr+"enter",He),O&&en(o,hr+"leave",ot),Z&&en(o,hr+"move",re)),G.isEnabled=!0,Ne&&Ne.type&&Be(Ne),z&&z(G)),G},G.disable=function(){G.isEnabled&&(cs.filter(function(Ne){return Ne!==G&&ta(Ne.target)}).length||Qt(Y?Q:o,"scroll",cc),G.isPressed&&(G._vx.reset(),G._vy.reset(),Qt(X?o:Q,Zn[1],me,!0)),Qt(Y?Q:o,"scroll",V,ce),Qt(o,"wheel",ne,ce),Qt(o,Zn[0],Be,ce),Qt(Q,Zn[2],nt),Qt(Q,Zn[3],nt),Qt(o,"click",ae,!0),Qt(o,"click",at),Qt(Q,"gesturestart",P),Qt(Q,"gestureend",oe),Qt(o,hr+"enter",He),Qt(o,hr+"leave",ot),Qt(o,hr+"move",re),G.isEnabled=G.isPressed=G.isDragging=!1,ee&&ee(G))},G.kill=G.revert=function(){G.disable();var Ne=cs.indexOf(G);Ne>=0&&cs.splice(Ne,1),Ei===G&&(Ei=0)},cs.push(G),X&&ta(o)&&(Ei=G),G.enable(_)},wM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Pt.version="3.12.2";Pt.create=function(r){return new Pt(r)};Pt.register=zd;Pt.getAll=function(){return cs.slice()};Pt.getById=function(r){return cs.filter(function(e){return e.vars.id===r})[0]};Od()&&Wt.registerPlugin(Pt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,rs,it,Mt,Jn,mt,kd,Ro,Co,us,co,Ka,qt,zo,fc,nn,Ff,Bf,ss,Gd,Rl,Hd,En,Vd,Wd,Xd,Oi,hc,zc,gs,kc,Cl,Za=1,an=Date.now,Pl=an(),Xn=0,Xs=0,zf=function(e,t,n){var i=bn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},kf=function(e,t){return t&&(!bn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},CM=function r(){return Xs&&requestAnimationFrame(r)},Gf=function(){return zo=1},Hf=function(){return zo=0},ii=function(e){return e},Ys=function(e){return Math.round(e*1e5)/1e5||0},Yd=function(){return typeof window<"u"},qd=function(){return Me||Yd()&&(Me=window.gsap)&&Me.registerPlugin&&Me},Dr=function(e){return!!~kd.indexOf(e)},$d=function(e){return(e==="Height"?kc:it["inner"+e])||Jn["client"+e]||mt["client"+e]},Kd=function(e){return Ki(e,"getBoundingClientRect")||(Dr(e)?function(){return _o.width=it.innerWidth,_o.height=kc,_o}:function(){return Si(e)})},PM=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ki(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?$d(s):e["client"+s])||0}},LM=function(e,t){return!t||~ci.indexOf(e)?Kd(e):function(){return _o}},Ti=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ki(e,n))?a()-Kd(e)()[s]:Dr(e)?(Jn[n]||mt[n])-$d(i):e[n]-e["offset"+i])},ja=function(e,t){for(var n=0;n<ss.length;n+=3)(!t||~t.indexOf(ss[n+1]))&&e(ss[n],ss[n+1],ss[n+2])},bn=function(e){return typeof e=="string"},ln=function(e){return typeof e=="function"},uo=function(e){return typeof e=="number"},dr=function(e){return typeof e=="object"},zs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ll=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ts=Math.abs,Zd="left",jd="top",Gc="right",Hc="bottom",Ar="width",wr="height",na="Right",ia="Left",ra="Top",sa="Bottom",Rt="padding",zn="margin",Rs="Width",Vc="Height",Gt="px",kn=function(e){return it.getComputedStyle(e)},DM=function(e){var t=kn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Vf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Si=function(e,t){var n=t&&kn(e)[fc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},dc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Jd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},UM=function(e){return function(t){return Me.utils.snap(Jd(e),t)}},Wc=function(e){var t=Me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},IM=function(e){return function(t,n){return Wc(Jd(e))(t,n.direction)}},Ja=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ft=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ot=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qa=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},eo={toggleActions:"play",anticipatePin:0},Po={top:0,left:0,center:.5,bottom:1,right:1},fo=function(e,t){if(bn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Po?Po[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},to=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=Mt.createElement("div"),_=Dr(n)||Ki(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n,S=e.indexOf("start")!==-1,x=S?c:u,M="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===Dt?Gc:Hc)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],ho(g,0,i,S),g},ho=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Rs]=1,s["border"+o+Rs]=0,s[n.p]=t+"px",Me.set(e,s)},Ze=[],pc={},_a,Xf=function(){return an()-Xn>34&&(_a||(_a=requestAnimationFrame(Ai)))},ns=function(){(!En||!En.isPressed||En.startX>mt.clientWidth)&&(Qe.cache++,En?_a||(_a=requestAnimationFrame(Ai)):Ai(),Xn||Ir("scrollStart"),Xn=an())},Dl=function(){Xd=it.innerWidth,Wd=it.innerHeight},qs=function(){Qe.cache++,!qt&&!Hd&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!Vd||Xd!==it.innerWidth||Math.abs(it.innerHeight-Wd)>it.innerHeight*.25)&&Ro.restart(!0)},Ur={},NM=[],Qd=function r(){return Ot(Xe,"scrollEnd",r)||_r(!0)},Ir=function(e){return Ur[e]&&Ur[e].map(function(t){return t()})||NM},Tn=[],ep=function(e){for(var t=0;t<Tn.length;t+=5)(!e||Tn[t+4]&&Tn[t+4].query===e)&&(Tn[t].style.cssText=Tn[t+1],Tn[t].getBBox&&Tn[t].setAttribute("transform",Tn[t+2]||""),Tn[t+3].uncache=1)},Xc=function(e,t){var n;for(nn=0;nn<Ze.length;nn++)n=Ze[nn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&ep(t),t||Ir("revert")},tp=function(e,t){Qe.cache++,(t||!rn)&&Qe.forEach(function(n){return ln(n)&&n.cacheID++&&(n.rec=0)}),bn(e)&&(it.history.scrollRestoration=zc=e)},rn,Rr=0,Yf,OM=function(){if(Yf!==Rr){var e=Yf=Rr;requestAnimationFrame(function(){return e===Rr&&_r(!0)})}},np=function(){mt.appendChild(gs),kc=gs.offsetHeight||it.innerHeight,mt.removeChild(gs)},_r=function(e,t){if(Xn&&!e){Ft(Xe,"scrollEnd",Qd);return}np(),rn=Xe.isRefreshing=!0,Qe.forEach(function(i){return ln(i)&&++i.cacheID&&(i.rec=i())});var n=Ir("refreshInit");Gd&&Xe.sort(),t||Xc(),Qe.forEach(function(i){ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),Ze.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),Ze.forEach(function(i){var s=Ti(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>s)&&i.setPositions(i.start,Math.max(i.start+1,s),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Qe.forEach(function(i){ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),tp(zc,1),Ro.pause(),Rr++,rn=2,Ai(2),Ze.forEach(function(i){return ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),rn=Xe.isRefreshing=!1,Ir("refresh")},mc=0,po=1,aa,Ai=function(e){if(!rn||e===2){Xe.isUpdating=!0,aa&&aa.update(0);var t=Ze.length,n=an(),i=n-Pl>=50,s=t&&Ze[0].scroll();if(po=mc>s?-1:1,rn||(mc=s),i&&(Xn&&!zo&&n-Xn>200&&(Xn=0,Ir("scrollEnd")),co=Pl,Pl=n),po<0){for(nn=t;nn-- >0;)Ze[nn]&&Ze[nn].update(0,i);po=1}else for(nn=0;nn<t;nn++)Ze[nn]&&Ze[nn].update(0,i);Xe.isUpdating=!1}_a=0},_c=[Zd,jd,Hc,Gc,zn+sa,zn+na,zn+ra,zn+ia,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mo=_c.concat([Ar,wr,"boxSizing","max"+Rs,"max"+Vc,"position",zn,Rt,Rt+ra,Rt+na,Rt+sa,Rt+ia]),FM=function(e,t,n){vs(n);var i=e._gsap;if(i.spacerIsNative)vs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ul=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=_c.length,a=t.style,o=e.style,l;s--;)l=_c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Hc]=o[Gc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ar]=dc(e,on)+Gt,a[wr]=dc(e,Dt)+Gt,a[Rt]=o[zn]=o[jd]=o[Zd]="0",vs(i),o[Ar]=o["max"+Rs]=n[Ar],o[wr]=o["max"+Vc]=n[wr],o[Rt]=n[Rt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},BM=/([A-Z])/g,vs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(BM,"-$1").toLowerCase())}},no=function(e){for(var t=mo.length,n=e.style,i=[],s=0;s<t;s++)i.push(mo[s],n[mo[s]]);return i.t=e,i},zM=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},_o={left:0,top:0},qf=function(e,t,n,i,s,a,o,l,c,u,h,f,d,g){ln(e)&&(e=e(l)),bn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),uo(e))d&&(e=Me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&ho(o,n,i,!0);else{ln(t)&&(t=t(l));var x=(e||"0").split(" "),M,E,w,A;S=un(t,l)||mt,M=Si(S)||{},(!M||!M.left&&!M.top)&&kn(S).display==="none"&&(A=S.style.display,S.style.display="block",M=Si(S),A?S.style.display=A:S.style.removeProperty("display")),E=fo(x[0],M[i.d]),w=fo(x[1]||"0",n),e=M[i.p]-c[i.p]-u+E+s-w,o&&ho(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var L=e+n,v=a._isStart;m="scroll"+i.d2,ho(a,L,i,v&&L>20||!v&&(h?Math.max(mt[m],Jn[m]):a.parentNode[m])<=L+1),h&&(c=Si(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Gt))}return d&&S&&(m=Si(S),d.seek(f),p=Si(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},kM=/(webkit|moz|length|cssText|inset)/i,$f=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=kn(e);for(a in o)!+a&&!kM.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},ip=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},io=function(e,t,n){var i={};i[t.p]="+="+n,Me.set(e,i)},Kf=function(e,t){var n=Qi(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=ip(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Qe.cache++,Ai()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ft(e,"wheel",n.wheelHandler),Xe.isTouch&&Ft(e,"touchmove",n.wheelHandler),s},Xe=function(){function r(t,n){rs||r.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),hc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xs){this.update=this.refresh=this.kill=ii;return}n=Vf(bn(n)||uo(n)||n.nodeType?{trigger:n}:n,eo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,x=s.once,M=s.snap,E=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,L=s.fastScrollEnd,v=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?on:Dt,H=!h&&h!==0,k=un(n.scroller||it),U=Me.core.getCache(k),N=Dr(k),O=("pinType"in n?n.pinType:Ki(k,"pinType")||N&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=H&&n.toggleActions.split(" "),X="markers"in n?n.markers:eo.markers,j=N?0:parseFloat(kn(k)["border"+b.p2+Rs])||0,R=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(R)},z=PM(k,N,b),ee=LM(k,N),J=0,se=0,ce=0,de=Qi(k,b),Ce,Ee,ct,Oe,F,De,pe,Pe,Ae,G,Ue,Ie,tt,qe,gt,C,T,Y,Q,te,ie,Se,ae,K,xe,we,Re,ve,me,Be,nt,P,oe,V,ne,re,He,ot,at;if(R._startClamp=R._endClamp=!1,R._dir=b,m*=45,R.scroller=k,R.scroll=A?A.time.bind(A):de,Oe=de(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Gd=1,n.refreshPriority===-9999&&(aa=R)),U.tweenScroll=U.tweenScroll||{top:Kf(k,Dt),left:Kf(k,on)},R.tweenTo=Ce=U.tweenScroll[b.p],R.scrubDuration=function(_e){oe=uo(_e)&&_e,oe?P?P.duration(_e):P=Me.to(i,{ease:"expo",totalProgress:"+=0",duration:oe,paused:!0,onComplete:function(){return p&&p(R)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Be=0,l||(l=i.vars.id)),M&&((!dr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in mt.style&&Me.set(N?[mt,Jn]:k,{scrollBehavior:"auto"}),Qe.forEach(function(_e){return ln(_e)&&_e.target===(N?Mt.scrollingElement||Jn:k)&&(_e.smooth=!1)}),ct=ln(M.snapTo)?M.snapTo:M.snapTo==="labels"?UM(i):M.snapTo==="labelsDirectional"?IM(i):M.directional!==!1?function(_e,Je){return Wc(M.snapTo)(_e,an()-se<500?0:Je.direction)}:Me.utils.snap(M.snapTo),V=M.duration||{min:.1,max:2},V=dr(V)?us(V.min,V.max):us(V,V),ne=Me.delayedCall(M.delay||oe/2||.1,function(){var _e=de(),Je=an()-se<500,Fe=Ce.tween;if((Je||Math.abs(R.getVelocity())<10)&&!Fe&&!zo&&J!==_e){var ke=(_e-De)/qe,bt=i&&!H?i.totalProgress():ke,Ke=Je?0:(bt-nt)/(an()-co)*1e3||0,vt=Me.utils.clamp(-ke,1-ke,ts(Ke/2)*Ke/.185),kt=ke+(M.inertia===!1?0:vt),Lt=us(0,1,ct(kt,R)),dt=Math.round(De+Lt*qe),y=M,B=y.onStart,W=y.onInterrupt,D=y.onComplete;if(_e<=pe&&_e>=De&&dt!==_e){if(Fe&&!Fe._initted&&Fe.data<=ts(dt-_e))return;M.inertia===!1&&(vt=Lt-ke),Ce(dt,{duration:V(ts(Math.max(ts(kt-bt),ts(Lt-bt))*.185/Ke/.05||0)),ease:M.ease||"power3",data:ts(dt-_e),onInterrupt:function(){return ne.restart(!0)&&W&&W(R)},onComplete:function(){R.update(),J=de(),Be=nt=i&&!H?i.totalProgress():R.progress,S&&S(R),D&&D(R)}},_e,vt*qe,dt-_e-vt*qe),B&&B(R,Ce.tween)}}else R.isActive&&J!==_e&&ne.restart(!0)}).pause()),l&&(pc[l]=R),f=R.trigger=un(f||d!==!0&&d),at=f&&f._gsap&&f._gsap.stRevert,at&&(at=at(R)),d=d===!0?f:un(d),bn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===zn||(g=!g&&d.parentNode&&d.parentNode.style&&kn(d.parentNode).display==="flex"?!1:Rt),R.pin=d,Ee=Me.core.getCache(d),Ee.spacer?gt=Ee.pinState:(w&&(w=un(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ee.spacerIsNative=!!w,w&&(Ee.spacerState=no(w))),Ee.spacer=Y=w||Mt.createElement("div"),Y.classList.add("pin-spacer"),l&&Y.classList.add("pin-spacer-"+l),Ee.pinState=gt=no(d)),n.force3D!==!1&&Me.set(d,{force3D:!0}),R.spacer=Y=Ee.spacer,me=kn(d),K=me[g+b.os2],te=Me.getProperty(d),ie=Me.quickSetter(d,b.a,Gt),Ul(d,Y,me),T=no(d)),X){Ie=dr(X)?Vf(X,Wf):Wf,G=to("scroller-start",l,k,b,Ie,0),Ue=to("scroller-end",l,k,b,Ie,0,G),Q=G["offset"+b.op.d2];var Ne=un(Ki(k,"content")||k);Pe=this.markerStart=to("start",l,Ne,b,Ie,Q,0,A),Ae=this.markerEnd=to("end",l,Ne,b,Ie,Q,0,A),A&&(ot=Me.quickSetter([Pe,Ae],b.a,Gt)),!O&&!(ci.length&&Ki(k,"fixedMarkers")===!0)&&(DM(N?mt:k),Me.set([G,Ue],{force3D:!0}),we=Me.quickSetter(G,b.a,Gt),ve=Me.quickSetter(Ue,b.a,Gt))}if(A){var he=A.vars.onUpdate,ze=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),he&&he.apply(A,ze||[])})}if(R.previous=function(){return Ze[Ze.indexOf(R)-1]},R.next=function(){return Ze[Ze.indexOf(R)+1]},R.revert=function(_e,Je){if(!Je)return R.kill(!0);var Fe=_e!==!1||!R.enabled,ke=qt;Fe!==R.isReverted&&(Fe&&(re=Math.max(de(),R.scroll.rec||0),ce=R.progress,He=i&&i.progress()),Pe&&[Pe,Ae,G,Ue].forEach(function(bt){return bt.style.display=Fe?"none":"block"}),Fe&&(qt=R,R.update(Fe)),d&&(!E||!R.isActive)&&(Fe?FM(d,Y,gt):Ul(d,Y,kn(d),xe)),Fe||R.update(Fe),qt=ke,R.isReverted=Fe)},R.refresh=function(_e,Je,Fe,ke){if(!((qt||!R.enabled)&&!Je)){if(d&&_e&&Xn){Ft(r,"scrollEnd",Qd);return}!rn&&le&&le(R),qt=R,Ce.tween&&!Fe&&(Ce.tween.kill(),Ce.tween=0),P&&P.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var bt=z(),Ke=ee(),vt=A?A.duration():Ti(k,b),kt=qe<=.01,Lt=0,dt=ke||0,y=dr(Fe)?Fe.end:n.end,B=n.endTrigger||f,W=dr(Fe)?Fe.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),D=R.pinnedContainer=n.pinnedContainer&&un(n.pinnedContainer,R),$=f&&Math.max(0,Ze.indexOf(R))||0,ue=$,ge,ye,Le,Ge,be,Te,et,pt,cn,jt,st,Ve,Pi;for(X&&dr(Fe)&&(Ve=Me.getProperty(G,b.p),Pi=Me.getProperty(Ue,b.p));ue--;)Te=Ze[ue],Te.end||Te.refresh(0,1)||(qt=R),et=Te.pin,et&&(et===f||et===d||et===D)&&!Te.isReverted&&(jt||(jt=[]),jt.unshift(Te),Te.revert(!0,!0)),Te!==Ze[ue]&&($--,ue--);for(ln(W)&&(W=W(R)),W=zf(W,"start",R),De=qf(W,f,bt,b,de(),Pe,G,R,Ke,j,O,vt,A,R._startClamp&&"_startClamp")||(d?-.001:0),ln(y)&&(y=y(R)),bn(y)&&!y.indexOf("+=")&&(~y.indexOf(" ")?y=(bn(W)?W.split(" ")[0]:"")+y:(Lt=fo(y.substr(2),bt),y=bn(W)?W:(A?Me.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,De):De)+Lt,B=f)),y=zf(y,"end",R),pe=Math.max(De,qf(y||(B?"100% 0":vt),B,bt,b,de()+Lt,Ae,Ue,R,Ke,j,O,vt,A,R._endClamp&&"_endClamp"))||-.001,Lt=0,ue=$;ue--;)Te=Ze[ue],et=Te.pin,et&&Te.start-Te._pinPush<=De&&!A&&Te.end>0&&(ge=Te.end-(R._startClamp?Math.max(0,Te.start):Te.start),(et===f&&Te.start-Te._pinPush<De||et===D)&&isNaN(W)&&(Lt+=ge*(1-Te.progress)),et===d&&(dt+=ge));if(De+=Lt,pe+=Lt,R._startClamp&&(R._startClamp+=Lt),R._endClamp&&!rn&&(R._endClamp=pe||-.001,pe=Math.min(pe,Ti(k,b))),qe=pe-De||(De-=.01)&&.001,kt&&(ce=Me.utils.clamp(0,1,Me.utils.normalize(De,pe,re))),R._pinPush=dt,Pe&&Lt&&(ge={},ge[b.a]="+="+Lt,D&&(ge[b.p]="-="+de()),Me.set([Pe,Ae],ge)),d)ge=kn(d),Ge=b===Dt,Le=de(),Se=parseFloat(te(b.a))+dt,!vt&&pe>1&&(st=(N?Mt.scrollingElement||Jn:k).style,st={style:st,value:st["overflow"+b.a.toUpperCase()]},N&&kn(mt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(st.style["overflow"+b.a.toUpperCase()]="scroll")),Ul(d,Y,ge),T=no(d),ye=Si(d,!0),pt=O&&Qi(k,Ge?on:Dt)(),g&&(xe=[g+b.os2,qe+dt+Gt],xe.t=Y,ue=g===Rt?dc(d,b)+qe+dt:0,ue&&xe.push(b.d,ue+Gt),vs(xe),D&&Ze.forEach(function(xt){xt.pin===D&&xt.vars.pinSpacing!==!1&&(xt._subPinOffset=!0)}),O&&de(re)),O&&(be={top:ye.top+(Ge?Le-De:pt)+Gt,left:ye.left+(Ge?pt:Le-De)+Gt,boxSizing:"border-box",position:"fixed"},be[Ar]=be["max"+Rs]=Math.ceil(ye.width)+Gt,be[wr]=be["max"+Vc]=Math.ceil(ye.height)+Gt,be[zn]=be[zn+ra]=be[zn+na]=be[zn+sa]=be[zn+ia]="0",be[Rt]=ge[Rt],be[Rt+ra]=ge[Rt+ra],be[Rt+na]=ge[Rt+na],be[Rt+sa]=ge[Rt+sa],be[Rt+ia]=ge[Rt+ia],C=zM(gt,be,E),rn&&de(0)),i?(cn=i._initted,Rl(1),i.render(i.duration(),!0,!0),ae=te(b.a)-Se+qe+dt,Re=Math.abs(qe-ae)>1,O&&Re&&C.splice(C.length-2,2),i.render(0,!0,!0),cn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Rl(0)):ae=qe,st&&(st.value?st.style["overflow"+b.a.toUpperCase()]=st.value:st.style.removeProperty("overflow-"+b.a));else if(f&&de()&&!A)for(ye=f.parentNode;ye&&ye!==mt;)ye._pinOffset&&(De-=ye._pinOffset,pe-=ye._pinOffset),ye=ye.parentNode;jt&&jt.forEach(function(xt){return xt.revert(!1,!0)}),R.start=De,R.end=pe,Oe=F=rn?re:de(),!A&&!rn&&(Oe<re&&de(re),R.scroll.rec=0),R.revert(!1,!0),se=an(),ne&&(J=-1,ne.restart(!0)),qt=0,i&&H&&(i._initted||He)&&i.progress()!==He&&i.progress(He||0,!0).render(i.time(),!0,!0),(kt||ce!==R.progress||A)&&(i&&!H&&i.totalProgress(A&&De<-.001&&!ce?Me.utils.normalize(De,pe,0):ce,!0),R.progress=kt||(Oe-De)/qe===ce?0:ce),d&&g&&(Y._pinOffset=Math.round(R.progress*ae)),P&&P.invalidate(),isNaN(Ve)||(Ve-=Me.getProperty(G,b.p),Pi-=Me.getProperty(Ue,b.p),io(G,b,Ve),io(Pe,b,Ve-(ke||0)),io(Ue,b,Pi),io(Ae,b,Pi-(ke||0))),kt&&!rn&&R.update(),u&&!rn&&!tt&&(tt=!0,u(R),tt=!1)}},R.getVelocity=function(){return(de()-F)/(an()-co)*1e3||0},R.endAnimation=function(){zs(R.callbackAnimation),i&&(P?P.progress(1):i.paused()?H||zs(i,R.direction<0,1):zs(i,i.reversed()))},R.labelToScroll=function(_e){return i&&i.labels&&(De||R.refresh()||De)+i.labels[_e]/i.duration()*qe||0},R.getTrailing=function(_e){var Je=Ze.indexOf(R),Fe=R.direction>0?Ze.slice(0,Je).reverse():Ze.slice(Je+1);return(bn(_e)?Fe.filter(function(ke){return ke.vars.preventOverlaps===_e}):Fe).filter(function(ke){return R.direction>0?ke.end<=De:ke.start>=pe})},R.update=function(_e,Je,Fe){if(!(A&&!Fe&&!_e)){var ke=rn===!0?re:R.scroll(),bt=_e?0:(ke-De)/qe,Ke=bt<0?0:bt>1?1:bt||0,vt=R.progress,kt,Lt,dt,y,B,W,D,$;if(Je&&(F=Oe,Oe=A?de():ke,M&&(nt=Be,Be=i&&!H?i.totalProgress():Ke)),m&&!Ke&&d&&!qt&&!Za&&Xn&&De<ke+(ke-F)/(an()-co)*m&&(Ke=1e-4),Ke!==vt&&R.enabled){if(kt=R.isActive=!!Ke&&Ke<1,Lt=!!vt&&vt<1,W=kt!==Lt,B=W||!!Ke!=!!vt,R.direction=Ke>vt?1:-1,R.progress=Ke,B&&!qt&&(dt=Ke&&!vt?0:Ke===1?1:vt===1?2:3,H&&(y=!W&&I[dt+1]!=="none"&&I[dt+1]||I[dt],$=i&&(y==="complete"||y==="reset"||y in i))),v&&(W||$)&&($||h||!i)&&(ln(v)?v(R):R.getTrailing(v).forEach(function(Le){return Le.endAnimation()})),H||(P&&!qt&&!Za?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",Ke,i._tTime/i._tDur):(P.vars.totalProgress=Ke,P.invalidate().restart())):i&&i.totalProgress(Ke,!!(qt&&(se||_e)))),d){if(_e&&g&&(Y.style[g+b.os2]=K),!O)ie(Ys(Se+ae*Ke));else if(B){if(D=!_e&&Ke>vt&&pe+1>ke&&ke+1>=Ti(k,b),E)if(!_e&&(kt||D)){var ue=Si(d,!0),ge=ke-De;$f(d,mt,ue.top+(b===Dt?ge:0)+Gt,ue.left+(b===Dt?0:ge)+Gt)}else $f(d,Y);vs(kt||D?C:T),Re&&Ke<1&&kt||ie(Se+(Ke===1&&!D?ae:0))}}M&&!Ce.tween&&!qt&&!Za&&ne.restart(!0),o&&(W||x&&Ke&&(Ke<1||!Cl))&&Co(o.targets).forEach(function(Le){return Le.classList[kt||x?"add":"remove"](o.className)}),a&&!H&&!_e&&a(R),B&&!qt?(H&&($&&(y==="complete"?i.pause().totalProgress(1):y==="reset"?i.restart(!0).pause():y==="restart"?i.restart(!0):i[y]()),a&&a(R)),(W||!Cl)&&(c&&W&&Ll(R,c),Z[dt]&&Ll(R,Z[dt]),x&&(Ke===1?R.kill(!1,1):Z[dt]=0),W||(dt=Ke===1?1:3,Z[dt]&&Ll(R,Z[dt]))),L&&!kt&&Math.abs(R.getVelocity())>(uo(L)?L:2500)&&(zs(R.callbackAnimation),P?P.progress(1):zs(i,y==="reverse"?1:!Ke,1))):H&&a&&!qt&&a(R)}if(ve){var ye=A?ke/A.duration()*(A._caScrollDist||0):ke;we(ye+(G._isFlipped?1:0)),ve(ye)}ot&&ot(-ke/A.duration()*(A._caScrollDist||0))}},R.enable=function(_e,Je){R.enabled||(R.enabled=!0,Ft(k,"resize",qs),N||Ft(k,"scroll",ns),le&&Ft(r,"refreshInit",le),_e!==!1&&(R.progress=ce=0,Oe=F=J=de()),Je!==!1&&R.refresh())},R.getTween=function(_e){return _e&&Ce?Ce.tween:P},R.setPositions=function(_e,Je,Fe,ke){if(A){var bt=A.scrollTrigger,Ke=A.duration(),vt=bt.end-bt.start;_e=bt.start+vt*_e/Ke,Je=bt.start+vt*Je/Ke}R.refresh(!1,!1,{start:kf(_e,Fe&&!!R._startClamp),end:kf(Je,Fe&&!!R._endClamp)},ke),R.update()},R.adjustPinSpacing=function(_e){if(xe&&_e){var Je=xe.indexOf(b.d)+1;xe[Je]=parseFloat(xe[Je])+_e+Gt,xe[1]=parseFloat(xe[1])+_e+Gt,vs(xe)}},R.disable=function(_e,Je){if(R.enabled&&(_e!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Je||P&&P.pause(),re=0,Ee&&(Ee.uncache=1),le&&Ot(r,"refreshInit",le),ne&&(ne.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!N)){for(var Fe=Ze.length;Fe--;)if(Ze[Fe].scroller===k&&Ze[Fe]!==R)return;Ot(k,"resize",qs),N||Ot(k,"scroll",ns)}},R.kill=function(_e,Je){R.disable(_e,Je),P&&!Je&&P.kill(),l&&delete pc[l];var Fe=Ze.indexOf(R);Fe>=0&&Ze.splice(Fe,1),Fe===nn&&po>0&&nn--,Fe=0,Ze.forEach(function(ke){return ke.scroller===R.scroller&&(Fe=1)}),Fe||rn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,_e&&i.revert({kill:!1}),Je||i.kill()),Pe&&[Pe,Ae,G,Ue].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),aa===R&&(aa=0),d&&(Ee&&(Ee.uncache=1),Fe=0,Ze.forEach(function(ke){return ke.pin===d&&Fe++}),Fe||(Ee.spacer=0)),n.onKill&&n.onKill(R)},Ze.push(R),R.enable(!1,!1),at&&at(R),i&&i.add&&!qe){var $e=R.update;R.update=function(){R.update=$e,De||pe||R.refresh()},Me.delayedCall(.01,R.update),qe=.01,De=pe=0}else R.refresh();d&&OM()},r.register=function(n){return rs||(Me=n||qd(),Yd()&&window.document&&r.enable(),rs=Xs),rs},r.defaults=function(n){if(n)for(var i in n)eo[i]=n[i];return eo},r.disable=function(n,i){Xs=0,Ze.forEach(function(a){return a[i?"kill":"disable"](n)}),Ot(it,"wheel",ns),Ot(Mt,"scroll",ns),clearInterval(Ka),Ot(Mt,"touchcancel",ii),Ot(mt,"touchstart",ii),Ja(Ot,Mt,"pointerdown,touchstart,mousedown",Gf),Ja(Ot,Mt,"pointerup,touchend,mouseup",Hf),Ro.kill(),ja(Ot);for(var s=0;s<Qe.length;s+=3)Qa(Ot,Qe[s],Qe[s+1]),Qa(Ot,Qe[s],Qe[s+2])},r.enable=function(){if(it=window,Mt=document,Jn=Mt.documentElement,mt=Mt.body,Me&&(Co=Me.utils.toArray,us=Me.utils.clamp,hc=Me.core.context||ii,Rl=Me.core.suppressOverwrites||ii,zc=it.history.scrollRestoration||"auto",mc=it.pageYOffset,Me.core.globals("ScrollTrigger",r),mt)){Xs=1,gs=document.createElement("div"),gs.style.height="100vh",gs.style.position="absolute",np(),CM(),Pt.register(Me),r.isTouch=Pt.isTouch,Oi=Pt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ft(it,"wheel",ns),kd=[it,Mt,Jn,mt],Me.matchMedia?(r.matchMedia=function(l){var c=Me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Me.addEventListener("matchMediaInit",function(){return Xc()}),Me.addEventListener("matchMediaRevert",function(){return ep()}),Me.addEventListener("matchMedia",function(){_r(0,1),Ir("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return Dl(),Dl})):console.warn("Requires GSAP 3.11.0 or later"),Dl(),Ft(Mt,"scroll",ns);var n=mt.style,i=n.borderTopStyle,s=Me.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Si(mt),Dt.m=Math.round(a.top+Dt.sc())||0,on.m=Math.round(a.left+on.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ka=setInterval(Xf,250),Me.delayedCall(.5,function(){return Za=0}),Ft(Mt,"touchcancel",ii),Ft(mt,"touchstart",ii),Ja(Ft,Mt,"pointerdown,touchstart,mousedown",Gf),Ja(Ft,Mt,"pointerup,touchend,mouseup",Hf),fc=Me.utils.checkPrefix("transform"),mo.push(fc),rs=an(),Ro=Me.delayedCall(.2,_r).pause(),ss=[Mt,"visibilitychange",function(){var l=it.innerWidth,c=it.innerHeight;Mt.hidden?(Ff=l,Bf=c):(Ff!==l||Bf!==c)&&qs()},Mt,"DOMContentLoaded",_r,it,"load",_r,it,"resize",qs],ja(Ft),Ze.forEach(function(l){return l.enable(0,1)}),o=0;o<Qe.length;o+=3)Qa(Ot,Qe[o],Qe[o+1]),Qa(Ot,Qe[o],Qe[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Cl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ka)||(Ka=i)&&setInterval(Xf,i),"ignoreMobileResize"in n&&(Vd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ja(Ot)||ja(Ft,n.autoRefreshEvents||"none"),Hd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=un(n),a=Qe.indexOf(s),o=Dr(s);~a&&Qe.splice(a,o?6:2),i&&(o?ci.unshift(it,i,mt,i,Jn,i):ci.unshift(s,i))},r.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(bn(n)?un(n):n).getBoundingClientRect(),o=a[s?Ar:wr]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){bn(n)&&(n=un(n));var a=n.getBoundingClientRect(),o=a[s?Ar:wr],l=i==null?o/2:i in Po?Po[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},r.killAll=function(n){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ur.killAll||[];Ur={},i.forEach(function(s){return s()})}},r}();Xe.version="3.12.2";Xe.saveStyles=function(r){return r?Co(r).forEach(function(e){if(e&&e.style){var t=Tn.indexOf(e);t>=0&&Tn.splice(t,5),Tn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),hc())}}):Tn};Xe.revert=function(r,e){return Xc(!r,e)};Xe.create=function(r,e){return new Xe(r,e)};Xe.refresh=function(r){return r?qs():(rs||Xe.register())&&_r(!0)};Xe.update=function(r){return++Qe.cache&&Ai(r===!0?2:0)};Xe.clearScrollMemory=tp;Xe.maxScroll=function(r,e){return Ti(r,e?on:Dt)};Xe.getScrollFunc=function(r,e){return Qi(un(r),e?on:Dt)};Xe.getById=function(r){return pc[r]};Xe.getAll=function(){return Ze.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!Xn};Xe.snapDirectional=Wc;Xe.addEventListener=function(r,e){var t=Ur[r]||(Ur[r]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(r,e){var t=Ur[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&ln(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return ln(s)&&(s=s(),Ft(Xe,"refresh",function(){return s=e.batchMax()})),Co(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Xe.create(c))}),t};var Zf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Il=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Pt.isTouch?" pinch-zoom":""):"none",e===Jn&&r(mt,t)},ro={auto:1,scroll:1},GM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Me.core.getCache(s),o=an(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ro[(l=kn(s)).overflowY]||ro[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Dr(s)&&(ro[(l=kn(s)).overflowY]||ro[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},rp=function(e,t,n,i){return Pt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&GM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ft(Mt,Pt.eventTypes[0],Jf,!1,!0)},onDisable:function(){return Ot(Mt,Pt.eventTypes[0],Jf,!0)}})},HM=/(input|label|select|textarea)/i,jf,Jf=function(e){var t=HM.test(e.target.tagName);(t||jf)&&(e._gsapAllow=!0,jf=t)},VM=function(e){dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=un(e.target)||Jn,u=Me.core.globals().ScrollSmoother,h=u&&u.get(),f=Oi&&(e.content&&un(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Qi(c,Dt),g=Qi(c,on),_=1,m=(Pt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,S=ln(i)?function(){return i(o)}:function(){return i||2.8},x,M,E=rp(c,e.type,!0,s),w=function(){return M=!1},A=ii,L=ii,v=function(){l=Ti(c,Dt),L=us(Oi?1:0,l),n&&(A=us(0,Ti(c,on))),x=Rr},b=function(){f._gsap.y=Ys(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},H=function(){if(M){requestAnimationFrame(w);var X=Ys(o.deltaY/2),j=L(d.v-X);if(f&&j!==d.v+d.offset){d.offset=j-d.v;var R=Ys((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=Qe.cache,Ai()}return!0}d.offset&&b(),M=!0},k,U,N,O,Z=function(){v(),k.isActive()&&k.vars.scrollY>l&&(d()>l?k.progress(1)&&d(l):k.resetTo("scrollY",l))};return f&&Me.set(f,{y:"+=0"}),e.ignoreCheck=function(I){return Oi&&I.type==="touchmove"&&H()||_>1.05&&I.type!=="touchstart"||o.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){M=!1;var I=_;_=Ys((it.visualViewport&&it.visualViewport.scale||1)/m),k.pause(),I!==_&&Il(c,_>1.01?!0:n?!1:"x"),U=g(),N=d(),v(),x=Rr},e.onRelease=e.onGestureStart=function(I,X){if(d.offset&&b(),!X)O.restart(!0);else{Qe.cache++;var j=S(),R,le;n&&(R=g(),le=R+j*.05*-I.velocityX/.227,j*=Zf(g,R,le,Ti(c,on)),k.vars.scrollX=A(le)),R=d(),le=R+j*.05*-I.velocityY/.227,j*=Zf(d,R,le,Ti(c,Dt)),k.vars.scrollY=L(le),k.invalidate().duration(j).play(.01),(Oi&&k.vars.scrollY>=l||R>=l-1)&&Me.to({},{onUpdate:Z,duration:j})}a&&a(I)},e.onWheel=function(){k._ts&&k.pause(),an()-p>1e3&&(x=0,p=an())},e.onChange=function(I,X,j,R,le){if(Rr!==x&&v(),X&&n&&g(A(R[2]===X?U+(I.startX-I.x):g()+X-R[1])),j){d.offset&&b();var z=le[2]===j,ee=z?N+I.startY-I.y:d()+j-le[1],J=L(ee);z&&ee!==J&&(N+=J-ee),d(J)}(j||X)&&Ai()},e.onEnable=function(){Il(c,n?!1:"x"),Xe.addEventListener("refresh",Z),Ft(it,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),E.enable()},e.onDisable=function(){Il(c,!0),Ot(it,"resize",Z),Xe.removeEventListener("refresh",Z),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Pt(e),o.iOS=Oi,Oi&&!d()&&d(1),Oi&&Me.ticker.add(ii),O=o._dc,k=Me.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ip(d,d(),function(){return k.pause()})},onUpdate:Ai,onComplete:O.vars.onComplete}),o};Xe.sort=function(r){return Ze.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(r){return new Pt(r)};Xe.normalizeScroll=function(r){if(typeof r>"u")return En;if(r===!0&&En)return En.enable();if(r===!1)return En&&En.kill();var e=r instanceof Pt?r:VM(r);return En&&En.target===e.target&&En.kill(),Dr(e.target)&&(En=e),e};Xe.core={_getVelocityProp:uc,_inputObserver:rp,_scrollers:Qe,_proxies:ci,bridge:{ss:function(){Xn||Ir("scrollStart"),Xn=an()},ref:function(){return qt}}};qd()&&Me.registerPlugin(Xe);In.enabled=!1;const WM=document.querySelector(".galaxy-canvas"),Lo=new ux,_t={};_t.count=3e4;_t.size=.007;_t.radius=5;_t.branches=3;_t.spin=.2;_t.randomness=.2;_t.randomnessPower=3;_t.insideColor="#ff6030";_t.outsideColor="#1b3984";let ks=null,Ni=null,$s=null;const Yc=function(){$s!==null&&(ks.dispose(),Ni.dispose(),Lo.remove($s));const r=new Float32Array(_t.count*3),e=new Float32Array(_t.count*3),t=new lt(_t.insideColor),n=new lt(_t.outsideColor);for(let i=0;i<_t.count;i++){const s=3*i,a=Math.random()*_t.radius,o=a*_t.spin,l=i%_t.branches/_t.branches*(2*Math.PI),c=_t.randomnessPower,u=Math.pow(Math.random(),c)*(Math.random()<.5?1:-1),h=Math.pow(Math.random(),c)*(Math.random()<.5?1:-1),f=Math.pow(Math.random(),c)*(Math.random()<.5?1:-1);r[s+0]=Math.cos(l+o)*a+u,r[s+1]=h,r[s+2]=Math.sin(l+o)*a+f;const d=t.clone();d.lerp(n,a/_t.radius),e[s+0]=d.r,e[s+1]=d.g,e[s+2]=d.b}ks=new Ci,ks.setAttribute("position",new Wn(r,3)),ks.setAttribute("color",new Wn(e,3)),Ni=new Uh,Ni.size=_t.size,Ni.sizeAttenuation=!0,Ni.depthWrite=!1,Ni.blending=Nl,Ni.vertexColors=!0,$s=new fx(ks,Ni),Lo.add($s)};Yc();const si={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{si.width=window.innerWidth,si.height=window.innerHeight,Dn.aspect=si.width/si.height,Dn.updateProjectionMatrix(),Cs.setSize(si.width,si.height),Cs.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Fr=new Hs,Dn=new Bn(75,si.width/si.height,.1,100);Dn.position.x=10;Dn.position.y=10;Dn.position.z=10;Fr.add(Dn);Lo.add(Fr);const Cs=new Dh({canvas:WM});Cs.outputColorSpace=ni;Cs.setSize(si.width,si.height);Cs.setPixelRatio(Math.min(window.devicePixelRatio,2));const XM=new hx,sp=()=>{XM.getElapsedTime(),Dn.lookAt($s.position),Cs.render(Lo,Dn),window.requestAnimationFrame(sp)};sp();const qc=Or.timeline({});qc.fromTo(Dn.position,{x:6,y:6,z:6},{x:.1,y:.1,z:.1,duration:2,ease:"ease-out"},0);qc.fromTo(Fr.rotation,{x:0,y:2*Math.PI,z:0},{x:0,y:0,z:0,duration:2,ease:"ease-out"},0);document.addEventListener("readystatechange",r=>{r.target.readyState==="complete"&&qc.play()});Or.registerPlugin(Xe);const $c=Or.timeline({});$c.fromTo(Dn.position,{x:.1,y:.1,z:.1},{x:.1,y:5,z:.01,duration:1,ease:"linear"},0);$c.fromTo(Fr.rotation,{x:0,y:0,z:0},{x:0,y:2*Math.PI,z:0,duration:1,ease:"linear"},0);const YM=Xe.create({trigger:"#first-section",start:"-=5 top",end:"bottom top",animation:$c,scrub:1,onUpdate(){YM.progress}}),Kc=Or.timeline({});Kc.fromTo(Dn.position,{x:.1,y:5,z:.01},{x:2,y:-9,z:2,duration:1,ease:"linear"},0);Kc.fromTo(Fr.rotation,{x:0,y:2*Math.PI,z:0},{x:0,y:2*Math.PI+2*Math.PI,z:0,duration:1,ease:"linear"},0);let gc=-1,Qf=-1;const qM=Xe.create({trigger:"#second-section",start:"top top",end:"bottom top",animation:Kc,scrub:1,onUpdate(){const r=qM.progress,e=Math.ceil(r*29+2===2?3:r*29+2),t=Math.ceil(r*10+3);(e!==gc||t!==Qf)&&(_t.branches=e,_t.randomnessPower=t,Yc(),gc=e,Qf=t)}}),Zc=Or.timeline({});Zc.fromTo(Dn.position,{x:2,y:-9,z:2},{x:5,y:3,z:5,duration:1,ease:"linear"},0);Zc.fromTo(Fr.rotation,{x:0,y:2*Math.PI+2*Math.PI,z:0},{x:0,y:2*Math.PI+Math.PI+2*Math.PI,z:0,duration:1,ease:"linear"},0);const $M=Xe.create({trigger:"#third-section",start:"top top",end:"bottom top",animation:Zc,scrub:1,onUpdate(){$M.progress}}),jc=Or.timeline({});jc.fromTo(Dn.position,{x:5,y:3,z:5},{x:.5,y:.5,z:.5,duration:1,ease:"linear"},0);jc.fromTo(Fr.rotation,{x:0,y:2*Math.PI+Math.PI+2*Math.PI,z:0},{x:0,y:2*Math.PI+Math.PI+2*Math.PI+2*Math.PI,z:0,duration:1,ease:"linear"},0);let KM=-1;const ZM=Xe.create({trigger:"#fourth-section",start:"top top",end:"bottom bottom",animation:jc,scrub:1,onUpdate(){const r=ZM.progress,e=Math.ceil(30-r*28);let t=Math.ceil(14-r*14);t<=0&&(t=1),e!==KM&&(_t.branches=e,_t.randomnessPower=t,Yc(),gc=e)}});
//# sourceMappingURL=index-cabad7d6.js.map