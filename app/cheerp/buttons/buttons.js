"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function fetchBuffer(p){
	var b=null,f='function';
	if(typeof fetch===f)b=fetch(p).then(r=>r.arrayBuffer());
	else if(typeof require===f){
		p=require('path').join(__dirname, p);
		b=new Promise((y,n)=>{
			require('fs').readFile(p,(e,d)=>{
				if(e)n(e);
				else y(d);
			});
		});
	}else b=new Promise((y,n)=>{
		y(read(p,'binary'));
	});
	return b;
}
function __Z7webMainv(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437822>>0));
	console.log(tmp0);
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437792>>0));
	console.log(tmp0);
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437771>>0));
	console.log(tmp0);
	HEAP32[67109588]=0;
	__Z13buttonCreatorv();
}
function __Z13buttonCreatorv(){
	var LsavedStack=null,tmp1=null,tmp1o=0,tmp2=0,tmp3=null;
	LsavedStack=___getStackPtr();
	tmp1=-96+LsavedStack|0;
	___setStackPtr(tmp1);
	tmp2=(HEAP32[67109588]|0)%6|0;
	if(tmp2>>>0<3){
		if((tmp2|0)!==0){
			if((tmp2|0)===1){
				tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437685>>0));
				console.log(tmp3);
				tmp2=64+tmp1|0;
				__ZNSsC2EPKc(tmp2,268437679|0);
				tmp1=__ZZ13buttonCreatorvEN3$_18__invokeEv;
				__Z9addButtonRKSsPN6client13EventListenerE(tmp2,tmp1);
				__ZNSsD2Ev(tmp2);
			}else{
				tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437644>>0));
				console.log(tmp3);
				tmp2=48+tmp1|0;
				__ZNSsC2EPKc(tmp2,268437636|0);
				tmp1=__Z6addBoxv;
				__Z9addButtonRKSsPN6client13EventListenerE(tmp2,tmp1);
				__ZNSsD2Ev(tmp2);
			}
		}else{
			tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437731>>0));
			console.log(tmp3);
			tmp2=80+tmp1|0;
			__ZNSsC2EPKc(tmp2,268437718|0);
			tmp1=__Z13buttonCreatorv;
			__Z9addButtonRKSsPN6client13EventListenerE(tmp2,tmp1);
			__ZNSsD2Ev(tmp2);
		}
	}else if(tmp2>>>0<5){
		if((tmp2|0)===3){
			tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437450>>0));
			console.log(tmp3);
			tmp2=32+tmp1|0;
			__ZNSsC2EPKc(tmp2,268437612|0);
			tmp1=__ZZ13buttonCreatorvEN3$_28__invokeEv;
			__Z9addButtonRKSsPN6client13EventListenerE(tmp2,tmp1);
			__ZNSsD2Ev(tmp2);
		}else{
			tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437573>>0));
			console.log(tmp3);
			tmp2=16+tmp1|0;
			__ZNSsC2EPKc(tmp2,268437561|0);
			tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437554>>0));
			tmp3=document.createElement(tmp1);
			tmp1o=HEAP32[8+tmp2>>2];
			tmp1=HEAP8;
			tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,tmp1o);
			tmp3.innerHTML=tmp1;
			HEAP32[67109588]=(HEAP32[67109588]|0)+1|0;
			tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
			document.querySelector(tmp1).appendChild(tmp3);
			__ZNSsD2Ev(tmp2);
		}
	}else if((tmp2|0)===5){
		tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437506>>0));
		console.log(tmp3);
		tmp2=tmp1|0;
		__ZNSsC2EPKc(tmp2,268437494|0);
		tmp1=__Z16addMousePositionv;
		__Z9addButtonRKSsPN6client13EventListenerE(tmp2,tmp1);
		__ZNSsD2Ev(tmp2);
	}
	___setStackPtr(LsavedStack);
}
function __Z16addMousePositionv(){
	var tmp0=null,tmp1=null,tmp2=null;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437491>>0));
	tmp0=document.createElement(tmp1);
	tmp1=tmp0.style;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437626>>0));
	tmp1.backgroundColor=tmp2;
	tmp1=tmp0.style;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437809>>0));
	tmp1.display=tmp2;
	tmp1=tmp0.style;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437937>>0));
	tmp1.height=tmp2;
	tmp1=tmp0.style;
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437931>>0));
	tmp1.width=tmp2;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437917>>0));
	tmp0.textContent=tmp1;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437907>>0));
	tmp2=[null];
	tmp2[0]=tmp0;
	tmp2=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ16addMousePositionvE3$_0JPN6client10MouseEventEEEEvPT_DpT0_,tmp2,0);
	document.addEventListener(tmp1,tmp2);
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
	document.querySelector(tmp1).appendChild(tmp0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ16addMousePositionvE3$_0JPN6client10MouseEventEEEEvPT_DpT0_(Larg0,Marg0,Larg1){
	__ZZ16addMousePositionvENK3$_0clEPN6client10MouseEventE(Larg0[Marg0],Larg1);
}
function __ZZ16addMousePositionvENK3$_0clEPN6client10MouseEventE(Larg0,Larg1){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp5o=0;
	LsavedStack=___getStackPtr();
	tmp5=-64+LsavedStack|0;
	___setStackPtr(tmp5);
	if(Larg0!==null){
		tmp1=48+tmp5|0;
		tmp2=32+tmp5|0;
		tmp3=16+tmp5|0;
		__ZSt9to_stringi(tmp3,~~ +Larg1.x);
		__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_PKS3_(tmp2,tmp3);
		tmp4=tmp5|0;
		__ZSt9to_stringi(tmp4,~~ +Larg1.y);
		__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_S7_(tmp1,tmp2,tmp4);
		tmp5o=HEAP32[8+tmp1>>2];
		tmp5=HEAP8;
		tmp5=_cheerpCreate_ZN6client6StringC2EPKc(tmp5,tmp5o);
		Larg0.textContent=tmp5;
		__ZNSsD2Ev(tmp1);
		__ZNSsD2Ev(tmp4);
		__ZNSsD2Ev(tmp2);
		__ZNSsD2Ev(tmp3);
	}
	___setStackPtr(LsavedStack);
}
function __ZZ13buttonCreatorvEN3$_28__invokeEv(){
	__ZZ13buttonCreatorvENK3$_2clEv();
}
function __ZZ13buttonCreatorvENK3$_2clEv(){
	var tmp0=null,tmp1=null,tmp2=null,tmp3=null;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
	tmp0=document.querySelector(tmp3);
	tmp3=tmp0.firstChild;
	tmp1=tmp0.lastChild;
	while(1){
		tmp2=tmp3.tagName;
		if(tmp2===_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437443>>0)))tmp0.appendChild(tmp3.cloneNode());
		tmp3=tmp3.nextSibling;
		if(tmp3!==tmp1)continue;
		break;
	}
	tmp3=tmp1.tagName;
	if(tmp3===_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437443>>0)))tmp0.appendChild(tmp1.cloneNode());
}
function __Z6addBoxv(){
	var LsavedStack=null,tmp1=null,tmp2=0,tmp3=null,tmp4=null,tmp4o=0;
	LsavedStack=___getStackPtr();
	tmp3=-16+LsavedStack|0;
	___setStackPtr(tmp3);
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437439>>0));
	tmp1=document.createElement(tmp4);
	tmp2=tmp3|0;
	__Z11randomColorv(tmp2);
	tmp3=tmp1.style;
	tmp4o=HEAP32[8+tmp2>>2];
	tmp4=HEAP8;
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(tmp4,tmp4o);
	tmp3.backgroundColor=tmp4;
	tmp3=tmp1.style;
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437809>>0));
	tmp3.display=tmp4;
	tmp3=tmp1.style;
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437937>>0));
	tmp3.height=tmp4;
	tmp3=tmp1.style;
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437931>>0));
	tmp3.width=tmp4;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
	document.querySelector(tmp3).appendChild(tmp1);
	__ZNSsD2Ev(tmp2);
	___setStackPtr(LsavedStack);
}
function __ZZ13buttonCreatorvEN3$_18__invokeEv(){
	var tmp0=null,tmp1=null;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
	tmp0=document.querySelector(tmp1);
	tmp1=tmp0.lastChild;
	if(tmp1!==null)while(1){
		tmp0.removeChild(tmp1);
		tmp1=tmp0.lastChild;
		if(tmp1!==null)continue;
		break;
	}
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437771>>0));
	console.log(tmp1);
	HEAP32[67109588]=0;
	__Z13buttonCreatorv();
}
function __Z9addButtonRKSsPN6client13EventListenerE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp1o=0;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437554>>0));
	tmp0=document.createElement(tmp1);
	tmp1o=HEAP32[8+Larg0>>2];
	tmp1=HEAP8;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,tmp1o);
	tmp0.innerHTML=tmp1;
	if(Larg1!==null){
		tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437433>>0));
		tmp0.addEventListener(tmp1,Larg1);
	}
	HEAP32[67109588]=(HEAP32[67109588]|0)+1|0;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268437545>>0));
	document.querySelector(tmp1).appendChild(tmp0);
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var tmp0=null,tmp1=0,Lgeptoindexphi=0,tmp3=null;
	tmp0=String();
	tmp1=Larg0[Marg0]|0;
	if((tmp1&255)===0)return String(tmp0);
	Lgeptoindexphi=0;
	while(1){
		tmp3=String.fromCharCode(tmp1<<24>>24);
		tmp0=tmp0.concat(tmp3);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		tmp1=Larg0[Marg0+Lgeptoindexphi|0]|0;
		if((tmp1&255)!==0)continue;
		break;
	}
	return String(tmp0);
}
function cheerpCreateClosure(func, obj){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj);return func.apply(null,a);};}
function cheerpCreateClosureSplit(func, obj, objo){return function(){var a=Array.prototype.slice.call(arguments);a.unshift(obj,objo);return func.apply(null,a);};}
function growLinearMemory(bytes){
	var pages=(bytes+65535)>>16;
	try{
		__asm.memory.grow(pages);
		assignHeaps(__asm.memory.buffer);
		return pages<<16;
	}catch(e){
		return -1;
	}
}
var HEAP8=null,HEAP32=null,__asm=null,__heap=null;function __dummy(){throw new Error('this should be unreachable');};
var __ZNSsC2EPKc=null;
var __ZNSsD2Ev=null;
var __ZSt9to_stringi=null;
var __ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_PKS3_=null;
var __ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_S7_=null;
var __Z11randomColorv=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
__dummy.promise=
fetchBuffer('cheerp/buttons/buttons.wasm').then(tmp0=>
WebAssembly.instantiate(tmp0,
{i:{
		___cxa_allocate_exception:__dummy,
		___cxa_throw:__dummy,
		__ZSt15get_new_handlerv:__dummy,
		growLinearMemory:growLinearMemory,
	}})
).then(tmp0=>{
	__asm=tmp0.instance.exports;
	__heap=__asm.memory.buffer;
	assignHeaps(__heap);
	__ZNSsC2EPKc=__asm.__ZNSsC2EPKc;
	__ZNSsD2Ev=__asm.__ZNSsD2Ev;
	__ZSt9to_stringi=__asm.__ZSt9to_stringi;
	__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_PKS3_=__asm.__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_PKS3_;
	__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_S7_=__asm.__ZStplIcSt11char_traitsIcESaIcEESbIT_T0_T1_EOS6_S7_;
	__Z11randomColorv=__asm.__Z11randomColorv;
	___getStackPtr=__asm.___getStackPtr;
	___setStackPtr=__asm.___setStackPtr;
	__Z7webMainv();
});
function assignHeaps(tmp0){
	HEAP8=new Uint8Array(tmp0);
	HEAP32=new Int32Array(tmp0);
}
