(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.ea(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.F(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bE(b)
return new t(c,this)}:function(){if(t===null)t=A.bE(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bE(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bJ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bG(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bH==null){A.e0()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.j(A.c1("Return interceptor for "+A.l(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bc
if(p==null)p=$.bc=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.e4(a)
if(q!=null)return q
if(typeof a=="function")return B.p
t=Object.getPrototypeOf(a)
if(t==null)return B.h
if(t===Object.prototype)return B.h
if(typeof r=="function"){p=$.bc
if(p==null)p=$.bc=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.c,enumerable:false,writable:true,configurable:true})
return B.c}return B.c},
I(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.as.prototype
return J.at.prototype}if(typeof a=="string")return J.D.prototype
if(a==null)return J.Y.prototype
if(typeof a=="boolean")return J.ar.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.z.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a_.prototype
return a}if(a instanceof A.h)return a
return J.bG(a)},
cq(a){if(typeof a=="string")return J.D.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.z.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a_.prototype
return a}if(a instanceof A.h)return a
return J.bG(a)},
cr(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.z.prototype
if(typeof a=="symbol")return J.a1.prototype
if(typeof a=="bigint")return J.a_.prototype
return a}if(a instanceof A.h)return a
return J.bG(a)},
dW(a){if(typeof a=="string")return J.D.prototype
if(a==null)return a
if(!(a instanceof A.h))return J.R.prototype
return a},
bL(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).B(a,b)},
cz(a,b){return J.dW(a).J(a,b)},
cA(a,b){return J.cr(a).D(a,b)},
aS(a){return J.I(a).gm(a)},
cB(a){return J.cr(a).gq(a)},
bM(a){return J.cq(a).gl(a)},
cC(a){return J.I(a).gi(a)},
ak(a){return J.I(a).h(a)},
ap:function ap(){},
ar:function ar(){},
Y:function Y(){},
a0:function a0(){},
A:function A(){},
aF:function aF(){},
R:function R(){},
z:function z(){},
a_:function a_(){},
a1:function a1(){},
o:function o(a){this.$ti=a},
aq:function aq(){},
b_:function b_(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
au:function au(){},
as:function as(){},
at:function at(){},
D:function D(){}},A={bu:function bu(){},
bI(a){var t,s
for(t=$.u.length,s=0;s<t;++s)if(a===$.u[s])return!0
return!1},
b0:function b0(a){this.a=a},
X:function X(){},
B:function B(){},
O:function O(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
cx(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
ei(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
l(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ak(a)
return t},
aG(a){var t,s=$.bY
if(s==null)s=$.bY=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aH(a){var t,s,r,q
if(a instanceof A.h)return A.r(A.aj(a),null)
t=J.I(a)
if(t===B.o||t===B.q||u.o.b(a)){s=B.d(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.r(A.aj(a),null)},
cT(a){var t,s,r
if(typeof a=="number"||A.bD(a))return J.ak(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.y)return a.h(0)
t=$.cy()
for(s=0;s<1;++s){r=t[s].Z(a)
if(r!=null)return r}return"Instance of '"+A.aH(a)+"'"},
t(a,b){if(a==null)J.bM(a)
throw A.j(A.dU(a,b))},
dU(a,b){var t,s="index"
if(!A.ck(b))return new A.W(!0,b,s,null)
t=J.bM(a)
if(b<0||b>=t)return A.cM(b,t,a,s)
return new A.aI(null,null,!0,b,s,"Value not in range")},
j(a){return A.n(a,new Error())},
n(a,b){var t
if(a==null)a=new A.b7()
b.dartException=a
t=A.eb
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
eb(){return J.ak(this.dartException)},
cv(a,b){throw A.n(a,b==null?new Error():b)},
cw(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.cv(A.ds(a,b,c),t)},
ds(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.b9("'"+t+"': Cannot "+p+" "+m+l+o)},
e9(a){throw A.j(A.ao(a))},
e7(a){if(a==null)return J.aS(a)
if(typeof a=="object")return A.aG(a)
return J.aS(a)},
dV(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
for(t=b.$ti,s=t.c,t=t.y[1],r=0;r<g;){q=r+1
p=a[r]
r=q+1
o=a[q]
s.a(p)
t.a(o)
if(typeof p=="string"){n=b.b
if(n==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.b=m
n=m}l=n[p]
if(l==null)n[p]=b.C(p,o)
else l.b=o}else if(typeof p=="number"&&(p&0x3fffffff)===p){k=b.c
if(k==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.c=m
k=m}l=k[p]
if(l==null)k[p]=b.C(p,o)
else l.b=o}else{j=b.d
if(j==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.d=m
j=m}i=J.aS(p)&1073741823
h=j[i]
if(h==null)j[i]=[b.C(p,o)]
else{q=b.K(h,p)
if(q>=0)h[q].b=o
else h.push(b.C(p,o))}}}return b},
cJ(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aJ().constructor.prototype):Object.create(new A.L(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bS(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cF(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bS(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cF(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.j("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.cD)}throw A.j("Error in functionType of tearoff")},
cG(a,b,c,d){var t=A.bR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bS(a,b,c,d){if(c)return A.cI(a,b,d)
return A.cG(b.length,d,a,b)},
cH(a,b,c,d){var t=A.bR,s=A.cE
switch(b?-1:a){case 0:throw A.j(new A.b6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
cI(a,b,c){var t,s
if($.bP==null)$.bP=A.bO("interceptor")
if($.bQ==null)$.bQ=A.bO("receiver")
t=b.length
s=A.cH(t,c,a,b)
return s},
bE(a){return A.cJ(a)},
cD(a,b){return A.bg(v.typeUniverse,A.aj(a.a),b)},
bR(a){return a.a},
cE(a){return a.b},
bO(a){var t,s,r,q=new A.L("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.j(A.bN("Field name "+a+" not found."))},
dX(a){return v.getIsolateTag(a)},
e4(a){var t,s,r,q,p,o=A.S($.cs.$1(a)),n=$.bk[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bo[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cf($.co.$2(a,o))
if(r!=null){n=$.bk[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bo[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bt(t)
$.bk[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bo[o]=t
return t}if(q==="-"){p=A.bt(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.ct(a,t)
if(q==="*")throw A.j(A.c1(o))
if(v.leafTags[o]===true){p=A.bt(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.ct(a,t)},
ct(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bJ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bt(a){return J.bJ(a,!1,null,!!a.$iq)},
e6(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bt(t)
else return J.bJ(t,c,null,null)},
e0(){if(!0===$.bH)return
$.bH=!0
A.e1()},
e1(){var t,s,r,q,p,o,n,m
$.bk=Object.create(null)
$.bo=Object.create(null)
A.e_()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.cu.$1(p)
if(o!=null){n=A.e6(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
e_(){var t,s,r,q,p,o,n=B.i()
n=A.U(B.j,A.U(B.k,A.U(B.e,A.U(B.e,A.U(B.l,A.U(B.m,A.U(B.n(B.d),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cs=new A.bl(q)
$.co=new A.bm(p)
$.cu=new A.bn(o)},
U(a,b){return a(b)||b},
dT(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
bV(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,t+s+r+q+f)
if(p instanceof RegExp)return p
throw A.j(new A.aY("Illegal RegExp pattern ("+String(p)+")",a))},
e8(a,b,c){var t
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.Z){t=B.b.E(a,c)
return b.b.test(t)}else return!J.cz(b,B.b.E(a,c)).gX(0)},
aa:function aa(){},
y:function y(){},
an:function an(){},
aM:function aM(){},
aJ:function aJ(){},
L:function L(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
b1:function b1(a,b){this.a=a
this.b=b
this.c=null},
b2:function b2(a,b){this.a=a
this.$ti=b},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bl:function bl(a){this.a=a},
bm:function bm(a){this.a=a},
bn:function bn(a){this.a=a},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aP:function aP(a){this.b=a},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aL:function aL(){},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
P:function P(){},
a7:function a7(){},
aw:function aw(){},
Q:function Q(){},
a5:function a5(){},
a6:function a6(){},
ax:function ax(){},
ay:function ay(){},
az:function az(){},
aA:function aA(){},
aB:function aB(){},
aC:function aC(){},
aD:function aD(){},
a8:function a8(){},
aE:function aE(){},
ab:function ab(){},
ac:function ac(){},
ad:function ad(){},
ae:function ae(){},
bx(a,b){var t=b.c
return t==null?b.c=A.ag(a,"bT",[b.x]):t},
c_(a){var t=a.w
if(t===6||t===7)return A.c_(a.x)
return t===11||t===12},
cX(a){return a.as},
bF(a){return A.bf(v.typeUniverse,a,!1)},
G(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.G(a0,t,a2,a3)
if(s===t)return a1
return A.ca(a0,s,!0)
case 7:t=a1.x
s=A.G(a0,t,a2,a3)
if(s===t)return a1
return A.c9(a0,s,!0)
case 8:r=a1.y
q=A.T(a0,r,a2,a3)
if(q===r)return a1
return A.ag(a0,a1.x,q)
case 9:p=a1.x
o=A.G(a0,p,a2,a3)
n=a1.y
m=A.T(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.by(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.T(a0,k,a2,a3)
if(j===k)return a1
return A.cb(a0,l,j)
case 11:i=a1.x
h=A.G(a0,i,a2,a3)
g=a1.y
f=A.dP(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.c8(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.T(a0,e,a2,a3)
p=a1.x
o=A.G(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.bz(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.j(A.am("Attempted to substitute unexpected RTI kind "+a))}},
T(a,b,c,d){var t,s,r,q,p=b.length,o=A.bh(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.G(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
dQ(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bh(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.G(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
dP(a,b,c,d){var t,s=b.a,r=A.T(a,s,c,d),q=b.b,p=A.T(a,q,c,d),o=b.c,n=A.dQ(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.aO()
t.a=r
t.b=p
t.c=n
return t},
F(a,b){a[v.arrayRti]=b
return a},
cp(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dZ(t)
return a.$S()}return null},
e2(a,b){var t
if(A.c_(b))if(a instanceof A.y){t=A.cp(a)
if(t!=null)return t}return A.aj(a)},
aj(a){if(a instanceof A.h)return A.ci(a)
if(Array.isArray(a))return A.ai(a)
return A.bC(J.I(a))},
ai(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
ci(a){var t=a.$ti
return t!=null?t:A.bC(a)},
bC(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.dz(a,t)},
dz(a,b){var t=a instanceof A.y?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.df(v.typeUniverse,t.name)
b.$ccache=s
return s},
dZ(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bf(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
dY(a){return A.H(A.ci(a))},
dO(a){var t=a instanceof A.y?A.cp(a):null
if(t!=null)return t
if(u.R.b(a))return J.cC(a).a
if(Array.isArray(a))return A.ai(a)
return A.aj(a)},
H(a){var t=a.r
return t==null?a.r=new A.be(a):t},
x(a){return A.H(A.bf(v.typeUniverse,a,!1))},
dy(a){var t=this
t.b=A.dN(t)
return t.b(a)},
dN(a){var t,s,r,q,p
if(a===u.K)return A.dF
if(A.J(a))return A.dJ
t=a.w
if(t===6)return A.dw
if(t===1)return A.cm
if(t===7)return A.dA
s=A.dM(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.J)){a.f="$i"+r
if(r==="e")return A.dD
if(a===u.m)return A.dC
return A.dI}}else if(t===10){q=A.dT(a.x,a.y)
p=q==null?A.cm:q
return p==null?A.bA(p):p}return A.du},
dM(a){if(a.w===8){if(a===u.S)return A.ck
if(a===u.i||a===u.H)return A.dE
if(a===u.N)return A.dH
if(a===u.y)return A.bD}return null},
dx(a){var t=this,s=A.dt
if(A.J(t))s=A.dq
else if(t===u.K)s=A.bA
else if(A.V(t)){s=A.dv
if(t===u.t)s=A.dl
else if(t===u.v)s=A.cf
else if(t===u.u)s=A.di
else if(t===u.n)s=A.ce
else if(t===u.I)s=A.dk
else if(t===u.z)s=A.dn}else if(t===u.S)s=A.bi
else if(t===u.N)s=A.S
else if(t===u.y)s=A.dh
else if(t===u.H)s=A.dp
else if(t===u.i)s=A.dj
else if(t===u.m)s=A.dm
t.a=s
return t.a(a)},
du(a){var t=this
if(a==null)return A.V(t)
return A.e3(v.typeUniverse,A.e2(a,t),t)},
dw(a){if(a==null)return!0
return this.x.b(a)},
dI(a){var t,s=this
if(a==null)return A.V(s)
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.I(a)[t]},
dD(a){var t,s=this
if(a==null)return A.V(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.h)return!!a[t]
return!!J.I(a)[t]},
dC(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.h)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
cl(a){if(typeof a=="object"){if(a instanceof A.h)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
dt(a){var t=this
if(a==null){if(A.V(t))return a}else if(t.b(a))return a
throw A.n(A.cg(a,t),new Error())},
dv(a){var t=this
if(a==null||t.b(a))return a
throw A.n(A.cg(a,t),new Error())},
cg(a,b){return new A.aR("TypeError: "+A.c2(a,A.r(b,null)))},
c2(a,b){return A.aX(a)+": type '"+A.r(A.dO(a),null)+"' is not a subtype of type '"+b+"'"},
v(a,b){return new A.aR("TypeError: "+A.c2(a,b))},
dA(a){var t=this
return t.x.b(a)||A.bx(v.typeUniverse,t).b(a)},
dF(a){return a!=null},
bA(a){if(a!=null)return a
throw A.n(A.v(a,"Object"),new Error())},
dJ(a){return!0},
dq(a){return a},
cm(a){return!1},
bD(a){return!0===a||!1===a},
dh(a){if(!0===a)return!0
if(!1===a)return!1
throw A.n(A.v(a,"bool"),new Error())},
di(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.n(A.v(a,"bool?"),new Error())},
dj(a){if(typeof a=="number")return a
throw A.n(A.v(a,"double"),new Error())},
dk(a){if(typeof a=="number")return a
if(a==null)return a
throw A.n(A.v(a,"double?"),new Error())},
ck(a){return typeof a=="number"&&Math.floor(a)===a},
bi(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.n(A.v(a,"int"),new Error())},
dl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.n(A.v(a,"int?"),new Error())},
dE(a){return typeof a=="number"},
dp(a){if(typeof a=="number")return a
throw A.n(A.v(a,"num"),new Error())},
ce(a){if(typeof a=="number")return a
if(a==null)return a
throw A.n(A.v(a,"num?"),new Error())},
dH(a){return typeof a=="string"},
S(a){if(typeof a=="string")return a
throw A.n(A.v(a,"String"),new Error())},
cf(a){if(typeof a=="string")return a
if(a==null)return a
throw A.n(A.v(a,"String?"),new Error())},
dm(a){if(A.cl(a))return a
throw A.n(A.v(a,"JSObject"),new Error())},
dn(a){if(a==null)return a
if(A.cl(a))return a
throw A.n(A.v(a,"JSObject?"),new Error())},
cn(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.r(a[r],b)
return t},
dL(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.cn(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.r(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
ch(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.F([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.a.n(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.t(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.r(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.r(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.r(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.r(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.r(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
r(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.r(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.r(a.x,b)+">"
if(m===8){q=A.dR(a.x)
p=a.y
return p.length>0?q+("<"+A.cn(p,b)+">"):q}if(m===10)return A.dL(a,b)
if(m===11)return A.ch(a,b,null)
if(m===12)return A.ch(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.t(b,o)
return b[o]}return"?"},
dR(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dg(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
df(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bf(a,b,!1)
else if(typeof n=="number"){t=n
s=A.ah(a,5,"#")
r=A.bh(t)
for(q=0;q<t;++q)r[q]=s
p=A.ag(a,b,r)
o[b]=p
return p}else return n},
dd(a,b){return A.cc(a.tR,b)},
dc(a,b){return A.cc(a.eT,b)},
bf(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.c6(A.c4(a,null,b,!1))
s.set(b,t)
return t},
bg(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.c6(A.c4(a,b,c,!0))
r.set(c,s)
return s},
de(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.by(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
C(a,b){b.a=A.dx
b.b=A.dy
return b},
ah(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.w(null,null)
t.w=b
t.as=c
s=A.C(a,t)
a.eC.set(c,s)
return s},
ca(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.da(a,b,s,c)
a.eC.set(s,t)
return t},
da(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.J(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.V(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.w(null,null)
r.w=6
r.x=b
r.as=c
return A.C(a,r)},
c9(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.d8(a,b,s,c)
a.eC.set(s,t)
return t},
d8(a,b,c,d){var t,s
if(d){t=b.w
if(A.J(b)||b===u.K)return b
else if(t===1)return A.ag(a,"bT",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.w(null,null)
s.w=7
s.x=b
s.as=c
return A.C(a,s)},
db(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.w=13
t.x=b
t.as=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
af(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
d7(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
ag(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.af(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.w(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.C(a,s)
a.eC.set(q,r)
return r},
by(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.af(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.C(a,p)
a.eC.set(r,o)
return o},
cb(a,b,c){var t,s,r="+"+(b+"("+A.af(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.C(a,t)
a.eC.set(r,s)
return s},
c8(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.af(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.af(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.d7(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.w(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.C(a,q)
a.eC.set(s,p)
return p},
bz(a,b,c,d){var t,s=b.as+("<"+A.af(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.d9(a,b,c,s,d)
a.eC.set(s,t)
return t},
d9(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bh(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.G(a,b,s,0)
n=A.T(a,c,s,0)
return A.bz(a,o,n,c!==n)}}m=new A.w(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.C(a,m)},
c4(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
c6(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.d2(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.c5(a,s,m,l,!1)
else if(r===46)s=A.c5(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.E(a.u,a.e,l.pop()))
break
case 94:l.push(A.db(a.u,l.pop()))
break
case 35:l.push(A.ah(a.u,5,"#"))
break
case 64:l.push(A.ah(a.u,2,"@"))
break
case 126:l.push(A.ah(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.d4(a,l)
break
case 38:A.d3(a,l)
break
case 63:q=a.u
l.push(A.ca(q,A.E(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.c9(q,A.E(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.d1(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.c7(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.d6(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.E(a.u,a.e,n)},
d2(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
c5(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.dg(t,p.x)[q]
if(o==null)A.cv('No "'+q+'" in "'+A.cX(p)+'"')
d.push(A.bg(t,p,o))}else d.push(q)
return n},
d4(a,b){var t,s=a.u,r=A.c3(a,b),q=b.pop()
if(typeof q=="string")b.push(A.ag(s,q,r))
else{t=A.E(s,a.e,q)
switch(t.w){case 11:b.push(A.bz(s,t,r,a.n))
break
default:b.push(A.by(s,t,r))
break}}},
d1(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.c3(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.E(q,a.e,p)
r=new A.aO()
r.a=t
r.b=o
r.c=n
b.push(A.c8(q,s,r))
return
case-4:b.push(A.cb(q,b.pop(),t))
return
default:throw A.j(A.am("Unexpected state under `()`: "+A.l(p)))}},
d3(a,b){var t=b.pop()
if(0===t){b.push(A.ah(a.u,1,"0&"))
return}if(1===t){b.push(A.ah(a.u,4,"1&"))
return}throw A.j(A.am("Unexpected extended operation "+A.l(t)))},
c3(a,b){var t=b.splice(a.p)
A.c7(a.u,a.e,t)
a.p=b.pop()
return t},
E(a,b,c){if(typeof c=="string")return A.ag(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.d5(a,b,c)}else return c},
c7(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.E(a,b,c[t])},
d6(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.E(a,b,c[t])},
d5(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.j(A.am("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.j(A.am("Bad index "+c+" for "+b.h(0)))},
e3(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.k(a,b,null,c,null)
s.set(c,t)}return t},
k(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.J(d))return!0
t=b.w
if(t===4)return!0
if(A.J(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.k(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.k(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.k(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.k(a,b.x,c,d,e))return!1
return A.k(a,A.bx(a,b),c,d,e)}if(t===6)return A.k(a,q,c,d,e)&&A.k(a,b.x,c,d,e)
if(r===7){if(A.k(a,b,c,d.x,e))return!0
return A.k(a,b,c,A.bx(a,d),e)}if(r===6)return A.k(a,b,c,q,e)||A.k(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.k(a,k,c,j,e)||!A.k(a,j,e,k,c))return!1}return A.cj(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.cj(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.dB(a,b,c,d,e)}if(p&&r===10)return A.dG(a,b,c,d,e)
return!1},
cj(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.k(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.k(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.k(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.k(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.k(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
dB(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bg(a,b,s[p])
return A.cd(a,q,null,c,d.y,e)}return A.cd(a,b.y,null,c,d.y,e)},
cd(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.k(a,b[t],d,e[t],f))return!1
return!0},
dG(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.k(a,s[t],c,r[t],e))return!1
return!0},
V(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.J(a))if(t!==6)s=t===7&&A.V(a.x)
return s},
J(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
cc(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bh(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
aO:function aO(){this.c=this.b=this.a=null},
be:function be(a){this.a=a},
bb:function bb(){},
aR:function aR(a){this.a=a},
bv(a,b,c){return b.j("@<0>").I(c).j("bW<1,2>").a(A.dV(a,new A.a2(b.j("@<0>").I(c).j("a2<1,2>"))))},
bX(a){var t,s
if(A.bI(a))return"{...}"
t=new A.aK("")
try{s={}
B.a.n($.u,a)
t.a+="{"
s.a=!0
a.V(0,new A.b3(s,t))
t.a+="}"}finally{if(0>=$.u.length)return A.t($.u,-1)
$.u.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
f:function f(){},
a3:function a3(){},
b3:function b3(a,b){this.a=a
this.b=b},
cS(a,b){var t,s=A.F([],b.j("o<0>"))
for(t=a.gq(a);t.k();)B.a.n(s,t.gp())
return s},
cW(a){return new A.Z(a,A.bV(a,!1,!0,!1,!1,""))},
c0(a,b,c){var t=J.cB(b)
if(!t.k())return a
if(c.length===0){do a+=A.l(t.gp())
while(t.k())}else{a+=A.l(t.gp())
for(;t.k();)a=a+c+A.l(t.gp())}return a},
aX(a){if(typeof a=="number"||A.bD(a)||a==null)return J.ak(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cT(a)},
am(a){return new A.aU(a)},
bN(a){return new A.W(!1,null,null,a)},
bZ(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
cU(a,b,c){if(0>a||a>c)throw A.j(A.bZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.j(A.bZ(b,a,c,"end",null))
return b}return c},
cM(a,b,c,d){return new A.aZ(b,!0,a,d,"Index out of range")},
c1(a){return new A.b8(a)},
ao(a){return new A.aV(a)},
cQ(a,b,c){var t,s
if(A.bI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.F([],u.s)
B.a.n($.u,a)
try{A.dK(a,t)}finally{if(0>=$.u.length)return A.t($.u,-1)
$.u.pop()}s=A.c0(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
bU(a,b,c){var t,s
if(A.bI(a))return b+"..."+c
t=new A.aK(b)
B.a.n($.u,a)
try{s=t
s.a=A.c0(s.a,a,", ")}finally{if(0>=$.u.length)return A.t($.u,-1)
$.u.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dK(a,b){var t,s,r,q,p,o,n,m=a.gq(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.k())return
t=A.l(m.gp())
B.a.n(b,t)
l+=t.length+2;++k}if(!m.k()){if(k<=5)return
if(0>=b.length)return A.t(b,-1)
s=b.pop()
if(0>=b.length)return A.t(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.k()){if(k<=4){B.a.n(b,A.l(q))
return}s=A.l(q)
if(0>=b.length)return A.t(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.k();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.t(b,-1)
l-=b.pop().length+2;--k}B.a.n(b,"...")
return}}r=A.l(q)
s=A.l(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.t(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.n(b,n)
B.a.n(b,r)
B.a.n(b,s)},
aW:function aW(){},
aU:function aU(a){this.a=a},
b7:function b7(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aZ:function aZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b9:function b9(a){this.a=a},
b8:function b8(a){this.a=a},
aV:function aV(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
b:function b(){},
a9:function a9(){},
h:function h(){},
aK:function aK(a){this.a=a},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5(){var t,s=u.N,r=new A.aT(A.bv(["sh","\u0634","kh","\u062e","th","\u062b","gh","\u063a","ph","\u0641","el","\u0627\u0644"],s,s),A.bv(["2","\u0621","3","\u0639","5","\u062e","6","\u0637","7","\u062d","8","\u0642","9","\u0635","a","\u0627","e","\u064a","i","\u064a","o","\u0648","u","\u0648","b","\u0628","t","\u062a","j","\u062c","d","\u062f","r","\u0631","z","\u0632","s","\u0633","f","\u0641","q","\u0642","k","\u0643","l","\u0644","m","\u0645","n","\u0646","h","\u0647","y","\u064a","w","\u0648","c","\u0643"],s,s),A.F(["\u0627\u0644","\u0628","\u0641\u064a","\u0648","\u0644"],u.s),A.bv(["shukran","\u0634\u0643\u0631\u0627\u064b","mar7aba","\u0645\u0631\u062d\u0628\u0627","kifak","\u0643\u064a\u0641\u0643","shu","\u0634\u0648","sar","\u0635\u0627\u0631","ya3tik","\u064a\u0639\u0637\u064a\u0643","el3afye","\u0627\u0644\u0639\u0627\u0641\u064a\u0629","2eltellak","\u0642\u0644\u062a\u0644\u0643","bsafer","\u0628\u0633\u0627\u0641\u0631","bhebbak","\u0628\u062d\u0628\u0643","3am","\u0639\u0645","ma3","\u0645\u0639","mafi","\u0645\u0627\u0641\u064a","hal","\u0647\u0644","mnih","\u0645\u0646\u064a\u062d","mnihah","\u0645\u0646\u064a\u062d\u0629","sabah","\u0635\u0628\u0627\u062d","noor","\u0646\u0648\u0631","sahtein","\u0635\u062d\u062a\u064a\u0646","tkallem","\u062a\u0643\u0644\u0645","ma","\u0645\u0627","teshuf","\u062a\u0634\u0648\u0641"],s,s))
s=v.G
s.arabiziFull=A.bB(new A.bq(r))
s.arabiziPartial=A.bB(new A.br(r))
s.arabiziSuggest=A.bB(new A.bs(r))
s.arabiziReady=!0
t=u.g.a(s.Event)
A.cR(s,"dispatchEvent",A.dS(t,["arabizi:ready"],u.m),null,null,null)},
bq:function bq(a){this.a=a},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
bp:function bp(){},
ea(a){throw A.n(new A.b0("Field '"+a+"' has been assigned during initialization."),new Error())},
cR(a,b,c,d,e,f){var t=a[b](c)
return t},
bB(a){var t
if(typeof a=="function")throw A.j(A.bN("Attempting to rewrap a JS function."))
t=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.dr,a)
t[$.bK()]=a
return t},
dr(a,b,c){u.Z.a(a)
if(A.bi(c)>=1)return a.$1(b)
return a.$0()},
dS(a,b,c){var t,s
if(b==null)return c.a(new a())
if(b instanceof Array)switch(b.length){case 0:return c.a(new a())
case 1:return c.a(new a(b[0]))
case 2:return c.a(new a(b[0],b[1]))
case 3:return c.a(new a(b[0],b[1],b[2]))
case 4:return c.a(new a(b[0],b[1],b[2],b[3]))}t=[null]
B.a.U(t,b)
s=a.bind.apply(a,t)
String(s)
return c.a(new s())}},B={}
var w=[A,J,B]
var $={}
A.bu.prototype={}
J.ap.prototype={
B(a,b){return a===b},
gm(a){return A.aG(a)},
h(a){return"Instance of '"+A.aH(a)+"'"},
gi(a){return A.H(A.bC(this))}}
J.ar.prototype={
h(a){return String(a)},
gm(a){return a?519018:218159},
gi(a){return A.H(u.y)},
$ic:1,
$ibj:1}
J.Y.prototype={
B(a,b){return null==b},
h(a){return"null"},
gm(a){return 0},
$ic:1}
J.a0.prototype={$ii:1}
J.A.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.aF.prototype={}
J.R.prototype={}
J.z.prototype={
h(a){var t=a[$.bK()]
if(t==null)return this.O(a)
return"JavaScript function for "+J.ak(t)},
$iM:1}
J.a_.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.a1.prototype={
gm(a){return 0},
h(a){return String(a)}}
J.o.prototype={
n(a,b){A.ai(a).c.a(b)
a.$flags&1&&A.cw(a,29)
a.push(b)},
U(a,b){A.ai(a).j("b<1>").a(b)
a.$flags&1&&A.cw(a,"addAll",2)
this.P(a,b)
return},
P(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.j(A.ao(a))
for(s=0;s<t;++s)a.push(b[s])},
D(a,b){if(!(b<a.length))return A.t(a,b)
return a[b]},
v(a,b){var t
for(t=0;t<a.length;++t)if(J.bL(a[t],b))return!0
return!1},
h(a){return A.bU(a,"[","]")},
gq(a){return new J.al(a,a.length,A.ai(a).j("al<1>"))},
gm(a){return A.aG(a)},
gl(a){return a.length},
$ib:1,
$ie:1}
J.aq.prototype={
Z(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.aH(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.b_.prototype={}
J.al.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.e9(r)
throw A.j(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.au.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
gi(a){return A.H(u.H)},
$id:1,
$iK:1}
J.as.prototype={
gi(a){return A.H(u.S)},
$ic:1,
$ia:1}
J.at.prototype={
gi(a){return A.H(u.i)},
$ic:1}
J.D.prototype={
J(a,b){return new A.aQ(b,a,0)},
N(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
u(a,b,c){return a.substring(b,A.cU(b,c,a.length))},
E(a,b){return this.u(a,b,null)},
v(a,b){return A.e8(a,b,0)},
h(a){return a},
gm(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gi(a){return A.H(u.N)},
gl(a){return a.length},
$ic:1,
$ib4:1,
$im:1}
A.b0.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.X.prototype={}
A.B.prototype={
gq(a){return new A.O(this,this.gl(0),this.$ti.j("O<B.E>"))}}
A.O.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
k(){var t,s=this,r=s.a,q=J.cq(r),p=q.gl(r)
if(s.b!==p)throw A.j(A.ao(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.D(r,t);++s.c
return!0}}
A.a4.prototype={
gl(a){return this.a.length},
D(a,b){return this.b.$1(J.cA(this.a,b))}}
A.p.prototype={}
A.aa.prototype={}
A.y.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.cx(s==null?"unknown":s)+"'"},
$iM:1,
ga_(){return this},
$C:"$1",
$R:1,
$D:null}
A.an.prototype={$C:"$2",$R:2}
A.aM.prototype={}
A.aJ.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.cx(t)+"'"}}
A.L.prototype={
B(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.L))return!1
return this.$_target===b.$_target&&this.a===b.a},
gm(a){return(A.e7(this.a)^A.aG(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aH(this.a)+"'")}}
A.b6.prototype={
h(a){return"RuntimeError: "+this.a}}
A.a2.prototype={
gl(a){return this.a},
A(a){var t=this.b
if(t==null)return!1
return t[a]!=null},
t(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.W(b)},
W(a){var t,s,r=this.d
if(r==null)return null
t=r[J.aS(a)&1073741823]
s=this.K(t,a)
if(s<0)return null
return t[s].b},
V(a,b){var t,s,r=this
r.$ti.j("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.j(A.ao(r))
t=t.c}},
C(a,b){var t=this,s=t.$ti,r=new A.b1(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
K(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bL(a[s].a,b))return s
return-1},
h(a){return A.bX(this)},
$ibW:1}
A.b1.prototype={}
A.b2.prototype={
gl(a){return this.a.a},
gq(a){var t=this.a
return new A.N(t,t.r,t.e,this.$ti.j("N<1>"))}}
A.N.prototype={
gp(){return this.d},
k(){var t,s=this,r=s.a
if(s.b!==r.r)throw A.j(A.ao(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.b
s.c=t.c
return!0}}}
A.bl.prototype={
$1(a){return this.a(a)},
$S:1}
A.bm.prototype={
$2(a,b){return this.a(a,b)},
$S:2}
A.bn.prototype={
$1(a){return this.a(A.S(a))},
$S:3}
A.Z.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
gS(){var t=this,s=t.c
if(s!=null)return s
s=t.b
return t.c=A.bV(t.a,s.multiline,!s.ignoreCase,s.unicode,s.dotAll,"g")},
J(a,b){return new A.aN(this,b,0)},
R(a,b){var t,s=this.gS()
if(s==null)s=A.bA(s)
s.lastIndex=b
t=s.exec(a)
if(t==null)return null
return new A.aP(t)},
$ib4:1,
$icV:1}
A.aP.prototype={$iav:1,$ib5:1}
A.aN.prototype={
gq(a){return new A.ba(this.a,this.b,this.c)}}
A.ba.prototype={
gp(){var t=this.d
return t==null?u.F.a(t):t},
k(){var t,s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
t=n.c
s=m.length
if(t<=s){r=n.a
q=r.R(m,t)
if(q!=null){n.d=q
t=q.b
p=t.index
o=p+t[0].length
if(p===o){t=!1
if(r.b.unicode){r=n.c
p=r+1
if(p<s){if(!(r>=0&&r<s))return A.t(m,r)
r=m.charCodeAt(r)
if(r>=55296&&r<=56319){if(!(p>=0))return A.t(m,p)
t=m.charCodeAt(p)
t=t>=56320&&t<=57343}}}o=(t?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1}}
A.aL.prototype={$iav:1}
A.aQ.prototype={
gq(a){return new A.bd(this.a,this.b,this.c)}}
A.bd.prototype={
k(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new A.aL()
r.c=s===r.c?s+1:s
return!0},
gp(){var t=this.d
t.toString
return t}}
A.P.prototype={
gi(a){return B.r},
$ic:1}
A.a7.prototype={}
A.aw.prototype={
gi(a){return B.t},
$ic:1}
A.Q.prototype={
gl(a){return a.length},
$iq:1}
A.a5.prototype={$ib:1,$ie:1}
A.a6.prototype={$ib:1,$ie:1}
A.ax.prototype={
gi(a){return B.u},
$ic:1}
A.ay.prototype={
gi(a){return B.v},
$ic:1}
A.az.prototype={
gi(a){return B.w},
$ic:1}
A.aA.prototype={
gi(a){return B.x},
$ic:1}
A.aB.prototype={
gi(a){return B.y},
$ic:1}
A.aC.prototype={
gi(a){return B.z},
$ic:1}
A.aD.prototype={
gi(a){return B.A},
$ic:1}
A.a8.prototype={
gi(a){return B.B},
gl(a){return a.length},
$ic:1}
A.aE.prototype={
gi(a){return B.C},
gl(a){return a.length},
$ic:1}
A.ab.prototype={}
A.ac.prototype={}
A.ad.prototype={}
A.ae.prototype={}
A.w.prototype={
j(a){return A.bg(v.typeUniverse,this,a)},
I(a){return A.de(v.typeUniverse,this,a)}}
A.aO.prototype={}
A.be.prototype={
h(a){return A.r(this.a,null)}}
A.bb.prototype={
h(a){return this.a}}
A.aR.prototype={}
A.f.prototype={
gq(a){return new A.O(a,a.length,A.aj(a).j("O<f.E>"))},
D(a,b){if(!(b<a.length))return A.t(a,b)
return a[b]},
h(a){return A.bU(a,"[","]")}}
A.a3.prototype={
gl(a){return this.a},
h(a){return A.bX(this)},
$ibw:1}
A.b3.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.l(a)
s.a=(s.a+=t)+": "
t=A.l(b)
s.a+=t},
$S:4}
A.aW.prototype={}
A.aU.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aX(t)
return"Assertion failed"}}
A.b7.prototype={}
A.W.prototype={
gG(){return"Invalid argument"+(!this.a?"(s)":"")},
gF(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gG()+r+p
if(!t.a)return o
return o+t.gF()+": "+A.aX(t.gH())},
gH(){return this.b}}
A.aI.prototype={
gH(){return A.ce(this.b)},
gG(){return"RangeError"},
gF(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.l(r):""
else if(r==null)t=": Not greater than or equal to "+A.l(s)
else if(r>s)t=": Not in inclusive range "+A.l(s)+".."+A.l(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.l(s)
return t}}
A.aZ.prototype={
gH(){return A.bi(this.b)},
gG(){return"RangeError"},
gF(){if(A.bi(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl(a){return this.f}}
A.b9.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b8.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aV.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aX(t)+"."}}
A.aY.prototype={
h(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=B.b.u(r,0,75)+"..."
return s+"\n"+r}}
A.b.prototype={
gl(a){var t,s=this.gq(this)
for(t=0;s.k();)++t
return t},
gX(a){return!this.gq(this).k()},
h(a){return A.cQ(this,"(",")")}}
A.a9.prototype={
gm(a){return A.h.prototype.gm.call(this,0)},
h(a){return"null"}}
A.h.prototype={$ih:1,
B(a,b){return this===b},
gm(a){return A.aG(this)},
h(a){return"Instance of '"+A.aH(this)+"'"},
gi(a){return A.dY(this)},
toString(){return this.h(this)}}
A.aK.prototype={
gl(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.aT.prototype={
L(a){var t,s,r,q,p,o,n,m,l,k
if(a.length===0)return""
a=a.toLowerCase()
for(t=a.length,s=this.b,r=this.a,q="",p=0;p<t;){o=p+1
n=o<t
if(n){m=p+2
l=B.b.u(a,p,m)
if(r.A(l)){n=r.t(0,l)
n.toString
q+=n
p=m
continue}}if(n){n=a[p]
n=n===a[o]&&B.a.v(B.f,n)}else n=!1
if(n){n=s.t(0,a[p])
n.toString
q+=n
p+=2
continue}k=a[p]
if(s.A(k))if(B.a.v(B.f,k)){if(p===0)if(k==="a")q+="\u0623"
else if(k==="i")q+="\u0625"
else if(k==="u")q+="\u0623"
else{n=s.t(0,k)
n.toString
q+=n}else if(k==="i"||k==="e"){n=s.t(0,k)
n.toString
q+=n}}else{n=s.t(0,k)
n.toString
q+=n}else q+=k
p=o}return q},
Y(a){var t,s,r,q,p,o,n,m,l,k
a=a.toLowerCase()
for(t=a.length,s=this.b,r=this.a,q="",p=0;p<t;){o=p+1
if(o<t){n=p+2
m=B.b.u(a,p,n)
if(r.A(m)){l=r.t(0,m)
l.toString
q+=l
p=n
continue}}k=a[p]
if(s.A(k))l=B.b.v(k,A.cW("[0-9]"))||r.A(B.b.u(a,p,o))
else l=!1
if(l){l=s.t(0,k)
l.toString
q+=l}else q+=k
p=o}return q},
T(a){var t,s,r
for(t=this.c,s=0;s<5;++s){r=t[s]
if(B.b.N(a,r))return B.b.E(a,r.length)}return a},
M(a){var t,s,r=this.T(this.L(a)),q=A.F([],u.s)
for(t=this.d,t=new A.N(t,t.r,t.e,t.$ti.j("N<2>"));t.k();){s=t.d
if(B.b.v(s,r))B.a.n(q,s)}return q}}
A.bq.prototype={
$1(a){return this.a.L(A.S(a))},
$S:0}
A.br.prototype={
$1(a){return this.a.Y(A.S(a))},
$S:0}
A.bs.prototype={
$1(a){var t=this.a.M(A.S(a)),s=A.ai(t),r=s.j("a4<1,m>")
t=A.cS(new A.a4(t,s.j("m(1)").a(new A.bp()),r),r.j("B.E"))
return t},
$S:5}
A.bp.prototype={
$1(a){return A.S(a)},
$S:0};(function aliases(){var t=J.A.prototype
t.O=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.h,null)
r(A.h,[A.bu,J.ap,A.aa,J.al,A.aW,A.b,A.O,A.p,A.y,A.a3,A.b1,A.N,A.Z,A.aP,A.ba,A.aL,A.bd,A.w,A.aO,A.be,A.f,A.aY,A.a9,A.aK,A.aT])
r(J.ap,[J.ar,J.Y,J.a0,J.a_,J.a1,J.au,J.D])
r(J.a0,[J.A,J.o,A.P,A.a7])
r(J.A,[J.aF,J.R,J.z])
s(J.aq,A.aa)
s(J.b_,J.o)
r(J.au,[J.as,J.at])
r(A.aW,[A.b0,A.b6,A.bb,A.aU,A.b7,A.W,A.b9,A.b8,A.aV])
r(A.b,[A.X,A.aN,A.aQ])
r(A.X,[A.B,A.b2])
s(A.a4,A.B)
r(A.y,[A.an,A.aM,A.bl,A.bn,A.bq,A.br,A.bs,A.bp])
r(A.aM,[A.aJ,A.L])
s(A.a2,A.a3)
r(A.an,[A.bm,A.b3])
r(A.a7,[A.aw,A.Q])
r(A.Q,[A.ab,A.ad])
s(A.ac,A.ab)
s(A.a5,A.ac)
s(A.ae,A.ad)
s(A.a6,A.ae)
r(A.a5,[A.ax,A.ay])
r(A.a6,[A.az,A.aA,A.aB,A.aC,A.aD,A.a8,A.aE])
s(A.aR,A.bb)
r(A.W,[A.aI,A.aZ])
t(A.ab,A.f)
t(A.ac,A.p)
t(A.ad,A.f)
t(A.ae,A.p)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",d:"double",K:"num",m:"String",bj:"bool",a9:"Null",e:"List",h:"Object",bw:"Map",i:"JSObject"},mangledNames:{},types:["m(m)","@(@)","@(@,m)","@(m)","~(h?,h?)","o<h?>(m)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dd(v.typeUniverse,JSON.parse('{"z":"A","aF":"A","R":"A","ef":"P","o":{"e":["1"],"i":[],"b":["1"]},"ar":{"bj":[],"c":[]},"Y":{"c":[]},"a0":{"i":[]},"A":{"i":[]},"aq":{"aa":[]},"b_":{"o":["1"],"e":["1"],"i":[],"b":["1"]},"au":{"d":[],"K":[]},"as":{"d":[],"a":[],"K":[],"c":[]},"at":{"d":[],"K":[],"c":[]},"D":{"m":[],"b4":[],"c":[]},"X":{"b":["1"]},"B":{"b":["1"]},"a4":{"B":["2"],"b":["2"],"B.E":"2"},"y":{"M":[]},"an":{"M":[]},"aM":{"M":[]},"aJ":{"M":[]},"L":{"M":[]},"a2":{"a3":["1","2"],"bW":["1","2"],"bw":["1","2"]},"b2":{"b":["1"]},"Z":{"cV":[],"b4":[]},"aP":{"b5":[],"av":[]},"aN":{"b":["b5"]},"aL":{"av":[]},"aQ":{"b":["av"]},"P":{"i":[],"c":[]},"a7":{"i":[]},"aw":{"i":[],"c":[]},"Q":{"q":["1"],"i":[]},"a5":{"f":["d"],"e":["d"],"q":["d"],"i":[],"b":["d"],"p":["d"]},"a6":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"]},"ax":{"f":["d"],"e":["d"],"q":["d"],"i":[],"b":["d"],"p":["d"],"c":[],"f.E":"d"},"ay":{"f":["d"],"e":["d"],"q":["d"],"i":[],"b":["d"],"p":["d"],"c":[],"f.E":"d"},"az":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"aA":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"aB":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"aC":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"aD":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"a8":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"aE":{"f":["a"],"e":["a"],"q":["a"],"i":[],"b":["a"],"p":["a"],"c":[],"f.E":"a"},"a3":{"bw":["1","2"]},"d":{"K":[]},"a":{"K":[]},"b5":{"av":[]},"m":{"b4":[]},"cP":{"e":["a"],"b":["a"]},"d0":{"e":["a"],"b":["a"]},"d_":{"e":["a"],"b":["a"]},"cN":{"e":["a"],"b":["a"]},"cY":{"e":["a"],"b":["a"]},"cO":{"e":["a"],"b":["a"]},"cZ":{"e":["a"],"b":["a"]},"cK":{"e":["d"],"b":["d"]},"cL":{"e":["d"],"b":["d"]}}'))
A.dc(v.typeUniverse,JSON.parse('{"X":1,"Q":1}'))
var u=(function rtii(){var t=A.bF
return{Z:t("M"),U:t("b<@>"),s:t("o<m>"),b:t("o<@>"),T:t("Y"),m:t("i"),g:t("z"),p:t("q<@>"),j:t("e<@>"),P:t("a9"),K:t("h"),L:t("eg"),F:t("b5"),N:t("m"),R:t("c"),o:t("R"),y:t("bj"),i:t("d"),S:t("a"),O:t("bT<a9>?"),z:t("i?"),X:t("h?"),v:t("m?"),u:t("bj?"),I:t("d?"),t:t("a?"),n:t("K?"),H:t("K")}})();(function constants(){var t=hunkHelpers.makeConstList
B.o=J.ap.prototype
B.a=J.o.prototype
B.b=J.D.prototype
B.p=J.z.prototype
B.q=J.a0.prototype
B.h=J.aF.prototype
B.c=J.R.prototype
B.d=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.i=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.n=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.j=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.m=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.l=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.k=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.e=function(hooks) { return hooks; }

B.f=t(["a","e","i","o","u"],u.s)
B.r=A.x("ec")
B.t=A.x("ed")
B.u=A.x("cK")
B.v=A.x("cL")
B.w=A.x("cN")
B.x=A.x("cO")
B.y=A.x("cP")
B.z=A.x("cY")
B.A=A.x("cZ")
B.B=A.x("d_")
B.C=A.x("d0")})();(function staticFields(){$.bc=null
$.u=A.F([],A.bF("o<h>"))
$.bY=null
$.bQ=null
$.bP=null
$.cs=null
$.co=null
$.cu=null
$.bk=null
$.bo=null
$.bH=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"ee","bK",()=>A.dX("_$dart_dartClosure"))
t($,"eh","cy",()=>A.F([new J.aq()],A.bF("o<aa>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.P,SharedArrayBuffer:A.P,ArrayBufferView:A.a7,DataView:A.aw,Float32Array:A.ax,Float64Array:A.ay,Int16Array:A.az,Int32Array:A.aA,Int8Array:A.aB,Uint16Array:A.aC,Uint32Array:A.aD,Uint8ClampedArray:A.a8,CanvasPixelArray:A.a8,Uint8Array:A.aE})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.Q.$nativeSuperclassTag="ArrayBufferView"
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.ac.$nativeSuperclassTag="ArrayBufferView"
A.a5.$nativeSuperclassTag="ArrayBufferView"
A.ad.$nativeSuperclassTag="ArrayBufferView"
A.ae.$nativeSuperclassTag="ArrayBufferView"
A.a6.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.e5
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=arabizi.js.map
