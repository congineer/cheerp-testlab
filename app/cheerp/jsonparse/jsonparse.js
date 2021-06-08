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
}
function __Z9jsonparseRN6client6TArrayINS_6StringEEE(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=0,tmp4=0,tmp5=null,tmp6=0,tmp7=null,tmp7o=0,tmp8=null,tmp9=0;
	LsavedStack=___getStackPtr();
	tmp5=-40+LsavedStack|0;
	___setStackPtr(tmp5);
	tmp1=16+tmp5|0;
	__ZSt11make_sharedISt6vectorISsSaISsEEJEENSt9enable_ifIXntsr8is_arrayIT_EE5valueESt10shared_ptrIS4_EE4typeEDpOT0_(tmp1);
	tmp6=HEAP32[tmp1>>2]|0;
	__ZNSt6vectorISsSaISsEE5clearEv(tmp6);
	tmp2=Larg0.length;
	tmp7=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268472741>>0));
	tmp8=String(tmp2);
	console.log(tmp7,tmp8);
	if((tmp2|0)>0){
		tmp9=0;
		while(1){
			tmp3=__Z10strJStoCPPPKN6client6StringE(Larg0[0+tmp9|0])|0;
			tmp7o=HEAP32[8+tmp3>>2];
			tmp7=HEAP8;
			tmp7=_cheerpCreate_ZN6client6StringC2EPKc(tmp7,tmp7o);
			tmp4=__Z10strJStoCPPPKN6client6StringE(tmp7)|0;
			tmp8=[null];
			tmp8[0]=tmp7;
			tmp8=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ12createButtonRKN6client6StringEE3$_0JEEEvPT_DpT0_,tmp8,0);
			__Z9addButtonRKSsPN6client13EventListenerE(tmp4,tmp8);
			__ZNSt6vectorISsSaISsEE9push_backERKSs(tmp6,tmp3);
			tmp9=tmp9+1|0;
			if((tmp9|0)!==(tmp2|0))continue;
			break;
		}
	}
	tmp9=tmp5|0;
	__ZNSsC2EPKc(tmp9,268469976|0);
	__ZNSt6vectorISsSaISsEE9push_backEOSs(tmp6,tmp9);
	__ZNSsD2Ev(tmp9);
	tmp6=__ZNSt6vectorISsSaISsEE2atEj(tmp6,tmp2)|0;
	tmp7o=HEAP32[8+tmp6>>2];
	tmp7=HEAP8;
	tmp7=_cheerpCreate_ZN6client6StringC2EPKc(tmp7,tmp7o);
	tmp6=__Z10strJStoCPPPKN6client6StringE(tmp7)|0;
	tmp8=[null];
	tmp8[0]=tmp7;
	tmp8=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ12createButtonRKN6client6StringEE3$_0JEEEvPT_DpT0_,tmp8,0);
	__Z9addButtonRKSsPN6client13EventListenerE(tmp6,tmp8);
	tmp6=24+tmp5|0;
	__ZNSsC2EPKc(tmp6,268469962|0);
	tmp5=[null];
	tmp5[0]=Larg0;
	tmp5=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ15createButtonAllRN6client6TArrayINS3_6StringEEEE3$_1JEEEvPT_DpT0_,tmp5,0);
	__Z9addButtonRKSsPN6client13EventListenerE(tmp6,tmp5);
	__ZNSsD2Ev(tmp6);
	tmp5=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268469850>>0));
	console.log(tmp5);
	__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev(tmp1);
	___setStackPtr(LsavedStack);
	return 0|0;
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ15createButtonAllRN6client6TArrayINS3_6StringEEEE3$_1JEEEvPT_DpT0_(Larg0,Marg0){
	__Z19runJsonParseTestAllRN6client6TArrayINS_6StringEEE(Larg0[Marg0]);
}
function __Z19runJsonParseTestAllRN6client6TArrayINS_6StringEEE(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=null,tmp3=null,tmp4=null,tmp4o=0,tmp5=0,tmp6=0;
	LsavedStack=___getStackPtr();
	tmp4=-48+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp1=32+tmp4|0;
	__ZNSt6vectorISsSaISsEEC2Ev(tmp1);
	__ZNSt6vectorISsSaISsEE5clearEv(tmp1);
	tmp5=Larg0.length;
	if((tmp5|0)>0){
		tmp6=0;
		while(1){
			__ZNSt6vectorISsSaISsEE9push_backERKSs(tmp1,__Z10strJStoCPPPKN6client6StringE(Larg0[0+tmp6|0])|0|0);
			tmp6=tmp6+1|0;
			if((tmp6|0)!==(tmp5|0))continue;
			break;
		}
	}
	tmp5=16+tmp4|0;
	__ZNSsC2EPKc(tmp5,268469976|0);
	__ZNSt6vectorISsSaISsEE9push_backEOSs(tmp1,tmp5);
	__ZNSsD2Ev(tmp5);
	tmp5=tmp4|0;
	__Z10runTestAllRKSt6vectorISsSaISsEE(tmp5,tmp1);
	tmp4o=HEAP32[8+tmp5>>2];
	tmp4=HEAP8;
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(tmp4,tmp4o);
	__ZNSsD2Ev(tmp5);
	tmp2=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268469624>>0));
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268469585>>0));
	console.log(tmp2,tmp4,tmp3);
	__ZNSt6vectorISsSaISsEED2Ev(tmp1);
	___setStackPtr(LsavedStack);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj(Larg0){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268470931>>0));
	tmp1=String(Larg0);
	console.log(tmp0,tmp1);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(Larg0,Marg0){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0);
}
function _abort(){
	throw new Error("Abort called");
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268459242>>0));
	console.log(tmp0);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268460083>>0));
	console.error(tmp0);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(Larg0,Marg0){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268442848>>0));
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0,tmp1);
}
function __Z14saveToDatabaseRKSsS0_(Larg0,Larg1){
	var tmp0=null,tmp0o=0,tmp1=null,tmp1o=0;
	tmp0o=HEAP32[8+Larg0>>2];
	tmp0=HEAP8;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(tmp0,tmp0o);
	tmp1o=HEAP32[8+Larg1>>2];
	tmp1=HEAP8;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,tmp1o);
	writeRecordToDatabase(tmp0,tmp1);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(Larg0,Marg0){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268451129>>0));
	console.log(tmp0);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268451049>>0));
	console.error(tmp0);
}
function __Z16readFromDatabaseRKSs(Larg0){
	var tmp0=null,tmp1=0,tmp2=null,tmp2o=0,tmp3=null,tmp3o=0,tmp4=0;
	tmp3o=HEAP32[8+Larg0>>2];
	tmp3=HEAP8;
	tmp3=_cheerpCreate_ZN6client6StringC2EPKc(tmp3,tmp3o);
	tmp0=readRecordFromDatabase(tmp3);
	tmp1=_malloc(12)|0;
	__ZNSsC2Ev(tmp1);
	__ZNSs6resizeEj(tmp1,tmp0.length);
	tmp2o=HEAP32[8+tmp1>>2];
	tmp2=HEAP8;
	if((tmp0.length|0)>0){
		tmp4=0;
		while(1){
			tmp2[tmp2o+tmp4|0]=tmp0.charCodeAt(tmp4);
			tmp4=tmp4+1|0;
			if((tmp4|0)<(tmp0.length|0))continue;
			break;
		}
	}
	return tmp1|0;
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(Larg0,Marg0){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268448326>>0));
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0,tmp1);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447470>>0));
	console.log(tmp0);
}
function __Z9addButtonRKSsPN6client13EventListenerE(Larg0,Larg1){
	var tmp0=null,tmp1=null,tmp1o=0;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447443>>0));
	tmp0=document.createElement(tmp1);
	tmp1o=HEAP32[8+Larg0>>2];
	tmp1=HEAP8;
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(tmp1,tmp1o);
	tmp0.innerHTML=tmp1;
	if(Larg1!==null){
		tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447437>>0));
		tmp0.addEventListener(tmp1,Larg1);
	}
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447428>>0));
	document.querySelector(tmp1).appendChild(tmp0);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ12createButtonRKN6client6StringEE3$_0JEEEvPT_DpT0_(Larg0,Marg0){
	var tmp0=null;
	tmp0=Larg0[Marg0];
	__Z16runJsonParseTestN6client6StringE(tmp0);
}
function __Z16runJsonParseTestN6client6StringE(Larg0){
	var LsavedStack=null,tmp1=0,tmp2=0,tmp3=null,tmp4=null,tmp4o=0;
	LsavedStack=___getStackPtr();
	tmp4=-16+LsavedStack|0;
	___setStackPtr(tmp4);
	tmp1=__Z10strJStoCPPPKN6client6StringE(Larg0)|0;
	if(__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_(tmp1)|0){
		tmp2=tmp4|0;
		__Z9runTestIdRKSs(tmp2,tmp1);
		tmp4o=HEAP32[8+tmp2>>2];
		tmp4=HEAP8;
		tmp4=_cheerpCreate_ZN6client6StringC2EPKc(tmp4,tmp4o);
		__ZNSsD2Ev(tmp2);
		tmp3=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447380>>0));
		console.log(tmp3,tmp4);
		___setStackPtr(LsavedStack);
		return;
	}
	tmp4=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447380>>0));
	console.log(tmp4,null);
	___setStackPtr(LsavedStack);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(Larg0,Marg0){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447304>>0));
	console.log(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268447600>>0));
	console.error(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(Larg0,Marg0){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268448326>>0));
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0,tmp1);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(Larg0,Marg0){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268459242>>0));
	console.log(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc(){
	var tmp0=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268460083>>0));
	console.error(tmp0);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(Larg0,Marg0){
	var tmp0=null,tmp1=null;
	tmp0=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,(268451325>>0));
	tmp1=_cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0);
	console.log(tmp0,tmp1);
}
function __Z10strJStoCPPPKN6client6StringE(Larg0){
	var tmp0=0,tmp1=null,tmp1o=0,tmp2=0;
	tmp0=_malloc(12)|0;
	__ZNSsC2Ev(tmp0);
	__ZNSs6resizeEj(tmp0,Larg0.length);
	tmp1o=HEAP32[8+tmp0>>2];
	tmp1=HEAP8;
	if((Larg0.length|0)>0){
		tmp2=0;
		while(1){
			tmp1[tmp1o+tmp2|0]=Larg0.charCodeAt(tmp2);
			tmp2=tmp2+1|0;
			if((tmp2|0)<(Larg0.length|0))continue;
			break;
		}
	}
	return tmp0|0;
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
function __Z7printlnPKcj(Larg0,Marg0,Larg1){
	var tmp0=0,tmp1=null;
	tmp1=__ZN6client6String8fromUtf8EPKcj(Larg0,Marg0,Larg1);
	tmp0=Larg1-1|0;
	if((Larg0[Marg0+tmp0|0]&255)===10){
		tmp1=tmp1.substr(0,tmp0);
		console.log(tmp1);
		return;
	}
	console.log(tmp1);
}
function __ZN6client6String8fromUtf8EPKcj(Larg0,Marg0,Larg1){
	var tmp0=0,tmp1=0,tmp2=null,Lgeptoindexphi=0,tmp4=0,tmp5=0,tmp6=null;
	tmp2=String();
	if((Larg1|0)===0)return tmp2;
	tmp4=Larg1;
	Lgeptoindexphi=0;
	while(1){
		tmp0=Larg0[Marg0+Lgeptoindexphi|0]|0;
		if((tmp0&255)!==0){
			tmp1=tmp0&255;
			if(tmp0<<24>-16777216){
				tmp5=tmp1;
			}else if((tmp0&255)<192){
				tmp5=tmp1&63|tmp5<<6;
			}else if((tmp0&255)<224){
				tmp5=tmp1&31;
			}else if((tmp0&255)<240){
				tmp5=tmp1&15;
			}else{
				tmp5=tmp1&7;
			}
			tmp4=tmp4-1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			a:{
				if((tmp4|0)!==0)if((Larg0[Marg0+Lgeptoindexphi|0]&192)===128)break a;
				if(tmp5>>>0<65536){
					tmp6=String.fromCharCode(tmp5);
					tmp2=tmp2.concat(tmp6);
				}else{
					tmp5=tmp5-65536|0;
					tmp6=String.fromCharCode((tmp5>>>10)+55296|0);
					tmp2=tmp2.concat(tmp6);
					tmp6=String.fromCharCode((tmp5&1023)+56320|0);
					tmp2=tmp2.concat(tmp6);
				}
			}
			if((tmp4|0)!==0)continue;
			return tmp2;
		}
		break;
	}
	return tmp2;
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(Larg0){
	Larg0=Larg0|0;
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(HEAP8,(Larg0>>0));
}
function ___wrapper___Z16readFromDatabaseRKSs(Larg0){
	Larg0=Larg0|0;
	return (__Z16readFromDatabaseRKSs(Larg0|0)|0)|0;
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(Larg0){
	Larg0=Larg0|0;
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(HEAP8,(Larg0>>0));
}
function ___wrapper___Z14saveToDatabaseRKSsS0_(Larg0,Larg1){
	Larg0=Larg0|0;
	Larg1=Larg1|0;
	__Z14saveToDatabaseRKSsS0_(Larg0|0,Larg1|0);
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(Larg0){
	Larg0=Larg0|0;
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(HEAP8,(Larg0>>0));
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(Larg0){
	Larg0=Larg0|0;
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(HEAP8,(Larg0>>0));
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(Larg0){
	Larg0=Larg0|0;
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(HEAP8,(Larg0>>0));
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(Larg0){
	Larg0=Larg0|0;
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(HEAP8,(Larg0>>0));
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(Larg0){
	Larg0=Larg0|0;
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(HEAP8,(Larg0>>0));
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(Larg0){
	Larg0=Larg0|0;
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(HEAP8,(Larg0>>0));
}
function ___wrapper___Z7printlnPKcj(Larg0,Larg1){
	Larg0=Larg0|0;
	Larg1=Larg1|0;
	__Z7printlnPKcj(HEAP8,(Larg0>>0),Larg1);
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
var __ZSt11make_sharedISt6vectorISsSaISsEEJEENSt9enable_ifIXntsr8is_arrayIT_EE5valueESt10shared_ptrIS4_EE4typeEDpOT0_=null;
var __ZNSt6vectorISsSaISsEE5clearEv=null;
var __ZNSsC2EPKc=null;
var __ZNSt6vectorISsSaISsEE9push_backEOSs=null;
var __ZNSsD2Ev=null;
var __ZNSt6vectorISsSaISsEE2atEj=null;
var __ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev=null;
var __ZNSt6vectorISsSaISsEE9push_backERKSs=null;
var __ZNSt6vectorISsSaISsEEC2Ev=null;
var __Z10runTestAllRKSt6vectorISsSaISsEE=null;
var __ZNSt6vectorISsSaISsEED2Ev=null;
var _malloc=null;
var __ZNSsC2Ev=null;
var __ZNSs6resizeEj=null;
var __ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_=null;
var __Z9runTestIdRKSs=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
var jsonparse=__dummy;
__dummy.promise=
fetchBuffer('cheerp/jsonparse/jsonparse.wasm').then(tmp0=>
WebAssembly.instantiate(tmp0,
{i:{
		___cxa_allocate_exception:__dummy,
		___cxa_throw:__dummy,
		__ZSt15get_new_handlerv:__dummy,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_,
		___wrapper___Z16readFromDatabaseRKSs:___wrapper___Z16readFromDatabaseRKSs,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc,
		___wrapper___Z14saveToDatabaseRKSsS0_:___wrapper___Z14saveToDatabaseRKSsS0_,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj,
		_abort:_abort,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc,
		___wrapper___Z7printlnPKcj:___wrapper___Z7printlnPKcj,
		growLinearMemory:growLinearMemory,
	}})
).then(tmp0=>{
	__asm=tmp0.instance.exports;
	__heap=__asm.memory.buffer;
	assignHeaps(__heap);
	__ZSt11make_sharedISt6vectorISsSaISsEEJEENSt9enable_ifIXntsr8is_arrayIT_EE5valueESt10shared_ptrIS4_EE4typeEDpOT0_=__asm.__ZSt11make_sharedISt6vectorISsSaISsEEJEENSt9enable_ifIXntsr8is_arrayIT_EE5valueESt10shared_ptrIS4_EE4typeEDpOT0_;
	__ZNSt6vectorISsSaISsEE5clearEv=__asm.__ZNSt6vectorISsSaISsEE5clearEv;
	__ZNSsC2EPKc=__asm.__ZNSsC2EPKc;
	__ZNSt6vectorISsSaISsEE9push_backEOSs=__asm.__ZNSt6vectorISsSaISsEE9push_backEOSs;
	__ZNSsD2Ev=__asm.__ZNSsD2Ev;
	__ZNSt6vectorISsSaISsEE2atEj=__asm.__ZNSt6vectorISsSaISsEE2atEj;
	__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev=__asm.__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev;
	__ZNSt6vectorISsSaISsEE9push_backERKSs=__asm.__ZNSt6vectorISsSaISsEE9push_backERKSs;
	__ZNSt6vectorISsSaISsEEC2Ev=__asm.__ZNSt6vectorISsSaISsEEC2Ev;
	__Z10runTestAllRKSt6vectorISsSaISsEE=__asm.__Z10runTestAllRKSt6vectorISsSaISsEE;
	__ZNSt6vectorISsSaISsEED2Ev=__asm.__ZNSt6vectorISsSaISsEED2Ev;
	_malloc=__asm._malloc;
	__ZNSsC2Ev=__asm.__ZNSsC2Ev;
	__ZNSs6resizeEj=__asm.__ZNSs6resizeEj;
	__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_=__asm.__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_;
	__Z9runTestIdRKSs=__asm.__Z9runTestIdRKSs;
	___getStackPtr=__asm.___getStackPtr;
	___setStackPtr=__asm.___setStackPtr;
	jsonparse=__Z9jsonparseRN6client6TArrayINS_6StringEEE;
	jsonparse.promise=
	Promise.resolve();
	__Z7webMainv();
});
function assignHeaps(tmp0){
	HEAP8=new Uint8Array(tmp0);
	HEAP32=new Int32Array(tmp0);
}
