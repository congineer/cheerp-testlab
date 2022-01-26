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
function __Z9addButtonRKSsPN6client13EventListenerE(Ltext,Lcallback){
	var Lcall=null,LretConstructor=null,LretConstructoro=0;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453349>>0);
	Lcall=document.createElement(LretConstructor);
	LretConstructoro=HEAP32[8+Ltext>>2];
	LretConstructor=HEAP8;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(LretConstructor,LretConstructoro);
	Lcall.innerHTML=LretConstructor;
	if(Lcallback!==null){
		LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453343>>0);
		Lcall.addEventListener(LretConstructor,Lcallback);
	}
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453334>>0);
	document.querySelector(LretConstructor).appendChild(Lcall);
}
function _cheerpCreate_ZN6client6StringC2EPKc(Larg0,Marg0){
	var LretConstructor$pi=null,Lgeptoindexphi=0,LcheerpPtrAlloca$p07$pi=null;
	LretConstructor$pi=String();
	if((Larg0[Marg0]&255)===0)return String(LretConstructor$pi);
	Lgeptoindexphi=0;
	while(1){
		LcheerpPtrAlloca$p07$pi=String.fromCharCode(Larg0[Marg0+Lgeptoindexphi|0]<<24>>24);
		LretConstructor$pi=LretConstructor$pi.concat(LcheerpPtrAlloca$p07$pi);
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		if((Larg0[Marg0+Lgeptoindexphi|0]&255)!==0)continue;
		break;
	}
	return String(LretConstructor$pi);
}
function __ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lptr,Mptr,Lsize){
	var tmp0=0,Lcall1=null,Lcall=-0.;
	tmp0=Mptr;
	Lcall1=Lptr;
	Lcall1=Lcall1;
	Lcall=+Lcall1.BYTES_PER_ELEMENT;
	Lcall1=Lcall1.buffer;
	Lcall=(+(__imul(tmp0,~~Lcall)>>>0));
	if((Lsize|0)!==0)return new Uint8Array(Lcall1,Lcall,(+(Lsize>>>0)));
	return new Uint8Array(Lcall1,Lcall);
}
function __Z16readFromDatabaseRKSs(Lagg$presult,LidKey){
	var Lcall2$pi=null,Lcall2$pio=0,LretConstructor$pi3=null,Lc$p016$pi=0,Li$p015$pi=0;
	Lcall2$pio=HEAP32[8+LidKey>>2];
	Lcall2$pi=HEAP8;
	Lcall2$pi=__ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lcall2$pi,Lcall2$pio,HEAP32[4+LidKey>>2]|0);
	Lcall2$pi=readRecordFromDatabase(new TextDecoder().decode(Lcall2$pi));
	LretConstructor$pi3=new TextEncoder();
	LretConstructor$pi3=LretConstructor$pi3.encode(Lcall2$pi);
	__ZNSsC2Ev(Lagg$presult|0);
	Lc$p016$pi=LretConstructor$pi3[0]|0;
	if((Lc$p016$pi&255)!==0){
		Li$p015$pi=0;
		while(1){
			__ZNSs9push_backEc(Lagg$presult|0,Lc$p016$pi);
			Li$p015$pi=Li$p015$pi+1|0;
			Lc$p016$pi=LretConstructor$pi3[0+Li$p015$pi|0]|0;
			if((Lc$p016$pi&255)!==0)continue;
			break;
		}
	}
}
function __Z14saveToDatabaseRKSsS0_(LidKey,Ljson_str){
	var Lcall2$pi=null,Lcall2$pio=0,Lcall2$pi5=null,Lcall2$pi5o=0;
	Lcall2$pio=HEAP32[8+LidKey>>2];
	Lcall2$pi=HEAP8;
	Lcall2$pi=__ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lcall2$pi,Lcall2$pio,HEAP32[4+LidKey>>2]|0);
	Lcall2$pi=new TextDecoder().decode(Lcall2$pi);
	Lcall2$pi5o=HEAP32[8+Ljson_str>>2];
	Lcall2$pi5=HEAP8;
	Lcall2$pi5=__ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lcall2$pi5,Lcall2$pi5o,HEAP32[4+Ljson_str>>2]|0);
	writeRecordToDatabase(Lcall2$pi,new TextDecoder().decode(Lcall2$pi5));
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445295>>0);
	console.log(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(Ls,Ms){
	var LretConstructor=null,LretConstructor$pi=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445370>>0);
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor,LretConstructor$pi);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268446370>>0);
	console.error(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268446404>>0);
	console.log(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(Ls,Ms){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(Ls,Ms){
	var LretConstructor=null,LretConstructor$pi=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268443980>>0);
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor,LretConstructor$pi);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268450459>>0);
	console.error(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268450493>>0);
	console.log(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(Ls,Ms){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor);
}
function __ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj(Li){
	var LretConstructor=null,LretConstructor$pi=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268452842>>0);
	LretConstructor$pi=String(Li);
	console.log(LretConstructor,LretConstructor$pi);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(Ls,Ms){
	var LretConstructor=null,LretConstructor$pi=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445755>>0);
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor,LretConstructor$pi);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268450459>>0);
	console.error(LretConstructor);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268450493>>0);
	console.log(LretConstructor);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(Ls,Ms){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(Ls,Ms){
	var LretConstructor=null,LretConstructor$pi=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445370>>0);
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor,LretConstructor$pi);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445101>>0);
	console.error(LretConstructor);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc(){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445134>>0);
	console.log(LretConstructor);
}
function __ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(Ls,Ms){
	var LretConstructor=null;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(Ls,Ms);
	console.log(LretConstructor);
}
function __Z16runJsonParseTestN6client6StringE(LdocId){
	var LsavedStack=null,LdocIdCpp=0,Lcall2$pi25=null,Lcall2$pi25o=0,LretConstructor$pi=null,Lc$p016$pi=0,Li$p015$pi=0;
	LsavedStack=___getStackPtr();
	Lcall2$pi25=-32+LsavedStack|0;
	___setStackPtr(Lcall2$pi25);
	LdocIdCpp=16+Lcall2$pi25|0;
	LretConstructor$pi=new TextEncoder();
	LretConstructor$pi=LretConstructor$pi.encode(LdocId);
	__ZNSsC2Ev(LdocIdCpp);
	Lc$p016$pi=LretConstructor$pi[0]|0;
	if((Lc$p016$pi&255)!==0){
		Li$p015$pi=0;
		while(1){
			__ZNSs9push_backEc(LdocIdCpp,Lc$p016$pi);
			Li$p015$pi=Li$p015$pi+1|0;
			Lc$p016$pi=LretConstructor$pi[0+Li$p015$pi|0]|0;
			if((Lc$p016$pi&255)!==0)continue;
			break;
		}
	}
	if(__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_(LdocIdCpp)|0){
		Lc$p016$pi=Lcall2$pi25|0;
		__Z9runTestIdRKSs(Lc$p016$pi,LdocIdCpp);
		Lcall2$pi25o=HEAP32[8+Lc$p016$pi>>2];
		Lcall2$pi25=HEAP8;
		Lcall2$pi25=__ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lcall2$pi25,Lcall2$pi25o,HEAP32[4+Lc$p016$pi>>2]|0);
		Lcall2$pi25=new TextDecoder().decode(Lcall2$pi25);
		__ZNSsD2Ev(Lc$p016$pi);
	}else{
	}
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268445210>>0);
	console.log(LretConstructor$pi,Lcall2$pi25);
	__ZNSsD2Ev(LdocIdCpp);
	___setStackPtr(LsavedStack);
}
function __Z12createButtonRKN6client6StringE(LdocId){
	var LsavedStack=null,LdocIdCpp=0,LretConstructor$pi=null,Lc$p016$pi=0,Li$p015$pi=0;
	LsavedStack=___getStackPtr();
	LretConstructor$pi=-16+LsavedStack|0;
	___setStackPtr(LretConstructor$pi);
	LdocIdCpp=LretConstructor$pi|0;
	LretConstructor$pi=new TextEncoder();
	LretConstructor$pi=LretConstructor$pi.encode(LdocId);
	__ZNSsC2Ev(LdocIdCpp);
	Lc$p016$pi=LretConstructor$pi[0]|0;
	if((Lc$p016$pi&255)!==0){
		Li$p015$pi=0;
		while(1){
			__ZNSs9push_backEc(LdocIdCpp,Lc$p016$pi);
			Li$p015$pi=Li$p015$pi+1|0;
			Lc$p016$pi=LretConstructor$pi[0+Li$p015$pi|0]|0;
			if((Lc$p016$pi&255)!==0)continue;
			break;
		}
	}
	LretConstructor$pi=[null];
	LretConstructor$pi[0]=LdocId;
	LretConstructor$pi=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ12createButtonRKN6client6StringEE3$_0JEEEvPT_DpT0_,LretConstructor$pi,0);
	__Z9addButtonRKSsPN6client13EventListenerE(LdocIdCpp,LretConstructor$pi);
	__ZNSsD2Ev(LdocIdCpp);
	___setStackPtr(LsavedStack);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ12createButtonRKN6client6StringEE3$_0JEEEvPT_DpT0_(Lfunc,Mfunc){
	var Lfunc$pidx$pval=null;
	Lfunc$pidx$pval=Lfunc[Mfunc];
	__Z16runJsonParseTestN6client6StringE(Lfunc$pidx$pval);
}
function __Z19runJsonParseTestAllRN6client6TArrayINS_6StringEEE(LargS){
	var LsavedStack=null,Largw=0,Largsi=0,Lcall2$pi56=null,Lcall2$pi56o=0,Lcall=0,Li$p062=0,LretConstructor=null,LretConstructor$pi=null,Lc$p016$pi=0,Li$p015$pi=0;
	LsavedStack=___getStackPtr();
	Lcall2$pi56=-64+LsavedStack|0;
	___setStackPtr(Lcall2$pi56);
	Largw=48+Lcall2$pi56|0;
	__ZNSt6vectorISsSaISsEEC2Ev(Largw);
	__ZNSt6vectorISsSaISsEE5clearEv(Largw);
	Lcall=LargS.length;
	if((Lcall|0)>0){
		Largsi=32+Lcall2$pi56|0;
		Li$p062=0;
		while(1){
			LretConstructor=LargS[0+Li$p062|0];
			LretConstructor$pi=new TextEncoder();
			LretConstructor$pi=LretConstructor$pi.encode(LretConstructor);
			__ZNSsC2Ev(Largsi);
			Lc$p016$pi=LretConstructor$pi[0]|0;
			if((Lc$p016$pi&255)!==0){
				Li$p015$pi=0;
				while(1){
					__ZNSs9push_backEc(Largsi,Lc$p016$pi);
					Li$p015$pi=Li$p015$pi+1|0;
					Lc$p016$pi=LretConstructor$pi[0+Li$p015$pi|0]|0;
					if((Lc$p016$pi&255)!==0)continue;
					break;
				}
			}
			__ZNSt6vectorISsSaISsEE9push_backERKSs(Largw,Largsi);
			__ZNSsD2Ev(Largsi);
			Li$p062=Li$p062+1|0;
			if((Li$p062|0)!==(Lcall|0))continue;
			break;
		}
	}
	Lcall=16+Lcall2$pi56|0;
	__ZNSsC2IDnEEPKc(Lcall,268453482|0);
	__ZNSt6vectorISsSaISsEE9push_backEOSs(Largw,Lcall);
	__ZNSsD2Ev(Lcall);
	Lcall=Lcall2$pi56|0;
	__Z10runTestAllRKSt6vectorISsSaISsEE(Lcall,Largw);
	Lcall2$pi56o=HEAP32[8+Lcall>>2];
	Lcall2$pi56=HEAP8;
	Lcall2$pi56=__ZN6cheerp14MakeTypedArrayIN6client10Uint8ArrayEEEPT_PKvj(Lcall2$pi56,Lcall2$pi56o,HEAP32[4+Lcall>>2]|0);
	Lcall2$pi56=new TextDecoder().decode(Lcall2$pi56);
	__ZNSsD2Ev(Lcall);
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453314>>0);
	LretConstructor$pi=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453275>>0);
	console.log(LretConstructor,Lcall2$pi56,LretConstructor$pi);
	__ZNSt6vectorISsSaISsEED2Ev(Largw);
	___setStackPtr(LsavedStack);
}
function __ZN6cheerp12InvokeHelperIvE6invokeIZ15createButtonAllRN6client6TArrayINS3_6StringEEEE3$_1JEEEvPT_DpT0_(Lfunc,Mfunc){
	__Z19runJsonParseTestAllRN6client6TArrayINS_6StringEEE(Lfunc[Mfunc]);
}
function __Z9jsonparseRN6client6TArrayINS_6StringEEE(LargS){
	var LsavedStack=null,LargW=0,Lcall1=0,LretConstructor83=null,Lcall45=0,LretConstructor=null,LretConstructoro=0,LretConstructor$pi85=null,Largsi=0,Li$p0101=0,LretConstructor$pi=null,Lc$p016$pi=0,Li$p015$pi=0;
	LsavedStack=___getStackPtr();
	LretConstructor83=-56+LsavedStack|0;
	___setStackPtr(LretConstructor83);
	LargW=32+LretConstructor83|0;
	__ZSt11make_sharedISt6vectorISsSaISsEEJEvESt10shared_ptrIT_EDpOT0_(LargW);
	Lcall45=HEAP32[LargW>>2]|0;
	__ZNSt6vectorISsSaISsEE5clearEv(Lcall45);
	Lcall1=LargS.length;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268456371>>0);
	LretConstructor$pi85=String(Lcall1);
	console.log(LretConstructor,LretConstructor$pi85);
	if((Lcall1|0)>0){
		Largsi=16+LretConstructor83|0;
		Li$p0101=0;
		while(1){
			LretConstructor$pi85=LargS[0+Li$p0101|0];
			LretConstructor$pi=new TextEncoder();
			LretConstructor$pi=LretConstructor$pi.encode(LretConstructor$pi85);
			__ZNSsC2Ev(Largsi);
			Lc$p016$pi=LretConstructor$pi[0]|0;
			if((Lc$p016$pi&255)!==0){
				Li$p015$pi=0;
				while(1){
					__ZNSs9push_backEc(Largsi,Lc$p016$pi);
					Li$p015$pi=Li$p015$pi+1|0;
					Lc$p016$pi=LretConstructor$pi[0+Li$p015$pi|0]|0;
					if((Lc$p016$pi&255)!==0)continue;
					break;
				}
			}
			LretConstructoro=HEAP32[8+Largsi>>2];
			LretConstructor=HEAP8;
			LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(LretConstructor,LretConstructoro);
			__Z12createButtonRKN6client6StringE(LretConstructor);
			__ZNSt6vectorISsSaISsEE9push_backERKSs(Lcall45,Largsi);
			__ZNSsD2Ev(Largsi);
			Li$p0101=Li$p0101+1|0;
			if((Li$p0101|0)!==(Lcall1|0))continue;
			break;
		}
	}
	Largsi=LretConstructor83|0;
	__ZNSsC2IDnEEPKc(Largsi,268453482|0);
	__ZNSt6vectorISsSaISsEE9push_backEOSs(Lcall45,Largsi);
	__ZNSsD2Ev(Largsi);
	Lcall45=__ZNSt6vectorISsSaISsEE2atEj(Lcall45,Lcall1)|0;
	LretConstructoro=HEAP32[8+Lcall45>>2];
	LretConstructor=HEAP8;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(LretConstructor,LretConstructoro);
	__Z12createButtonRKN6client6StringE(LretConstructor);
	Lcall45=40+LretConstructor83|0;
	__ZNSsC2IDnEEPKc(Lcall45,268453468|0);
	LretConstructor83=[null];
	LretConstructor83[0]=LargS;
	LretConstructor83=cheerpCreateClosureSplit(__ZN6cheerp12InvokeHelperIvE6invokeIZ15createButtonAllRN6client6TArrayINS3_6StringEEEE3$_1JEEEvPT_DpT0_,LretConstructor83,0);
	__Z9addButtonRKSsPN6client13EventListenerE(Lcall45,LretConstructor83);
	__ZNSsD2Ev(Lcall45);
	LretConstructor83=_cheerpCreate_ZN6client6StringC2EPKc(HEAP8,268453356>>0);
	console.log(LretConstructor83);
	__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev(LargW);
	___setStackPtr(LsavedStack);
	return 0|0;
}
function __Z7webMainv(){
}
function _abort(){
	throw new Error("Abort called");
	;
}
function __Z7printlnPKcj(Lline,Mline,Llen){
	var Lsub=0,Lcall=null;
	Lcall=__ZN6client6String8fromUtf8EPKcj(Lline,Mline,Llen);
	Lsub=Llen-1|0;
	if((Lline[Mline+Lsub|0]&255)===10){
		Lcall=Lcall.substr(0,Lsub);
		console.log(Lcall);
		return;
	}
	console.log(Lcall);
}
function __ZN6client6String8fromUtf8EPKcj(Lin,Min,Llen){
	var tmp0=0,LretConstructor=null,Lgeptoindexphi=0,Llen$paddr$p050=0,Lcodepoint$p048=0,Lconv2=0,Lcall38=null;
	LretConstructor=String();
	if((Llen|0)===0)return LretConstructor;
	Llen$paddr$p050=Llen;
	Lgeptoindexphi=0;
	while(1){
		tmp0=Lin[Min+Lgeptoindexphi|0]|0;
		if((tmp0&255)!==0){
			Lconv2=tmp0&255;
			if(tmp0<<24<=-16777216)if((tmp0&255)<192){
				Lconv2=(Lconv2&63)+(Lcodepoint$p048<<6)|0;
			}else if((tmp0&255)<224){
				Lconv2&=31;
			}else if((tmp0&255)<240){
				Lconv2&=15;
			}else{
				Lconv2&=7;
			}
			Llen$paddr$p050=Llen$paddr$p050-1|0;
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			a:{
				if((Llen$paddr$p050|0)!==0)if((Lin[Min+Lgeptoindexphi|0]&192)===128){
					Lcodepoint$p048=Lconv2;
					break a;
				}
				if(Lconv2>>>0<65536){
					Lcodepoint$p048=Lconv2;
				}else{
					Lcodepoint$p048=Lconv2-65536|0;
					Lcall38=String.fromCharCode((Lcodepoint$p048>>>10)+55296|0);
					LretConstructor=LretConstructor.concat(Lcall38);
					Lconv2=(Lconv2&1023)+56320|0;
				}
				Lcall38=String.fromCharCode(Lconv2);
				LretConstructor=LretConstructor.concat(Lcall38);
			}
			if((Llen$paddr$p050|0)!==0)continue;
			return LretConstructor;
		}
		break;
	}
	return LretConstructor;
}
function __ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj(Lthrown_object,Ltinfo,Ldest){
	var Ldest$paddr=null,Lref$ptmp=null,Ltinfo$paddr=null;
	Ltinfo$paddr=[(Ltinfo|0)];
	Ldest$paddr=[0];
	Ldest$paddr[0]=Ldest;
	Lref$ptmp=[nullObj];
	Lref$ptmp[0]={d:null,o:Lthrown_object};
	Ltinfo$paddr=__ZN10__cxxabiv19Exception8allocateIJPvRPSt9type_infoRjEEEPS0_DpOT_(Lref$ptmp,0,Ltinfo$paddr,0,Ldest$paddr,0);
	__ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Ltinfo$paddr);
	;
}
function __ZN10__cxxabiv19Exception8allocateIJPvRPSt9type_infoRjEEEPS0_DpOT_(Largs,Margs,Largs1,Margs1,Largs3,Margs3){
	var tmp0=0,Lid$p0$plcssa27$pi$pi=0,tmp2=null,Lid$p021$pi$pi=0,tmp4=null;
	Lid$p0$plcssa27$pi$pi=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
	a:{
		b:{
			if((Lid$p0$plcssa27$pi$pi|0)>1){
				tmp2=__ZN10__cxxabiv19Exception9allocatorE$p1;
				Lid$p021$pi$pi=1;
				while(1){
					if((tmp2[Lid$p021$pi$pi]&255)!==0){
						Lid$p021$pi$pi=Lid$p021$pi$pi+1|0;
						if((Lid$p021$pi$pi|0)===(Lid$p0$plcssa27$pi$pi|0))break b;
						continue;
					}
					break;
				}
			}else{
				Lid$p021$pi$pi=1;
			}
			if((Lid$p021$pi$pi|0)!==(Lid$p0$plcssa27$pi$pi|0)){
				Lid$p0$plcssa27$pi$pi=Lid$p021$pi$pi;
				break a;
			}
		}
		Lid$p021$pi$pi=Lid$p0$plcssa27$pi$pi<<1;
		__ZN10__cxxabiv19Exception9allocatorE$p2=Lid$p021$pi$pi;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p0;
		if(tmp2!==nullArray||0!==0)tmp2=resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(tmp2,tmp2.length,Lid$p021$pi$pi/44|0);
		else tmp2=createArray_struct$p_ZN10__cxxabiv19ExceptionE(Lid$p021$pi$pi/44|0);
		__ZN10__cxxabiv19Exception9allocatorE$p0=tmp2;
		Lid$p021$pi$pi=__ZN10__cxxabiv19Exception9allocatorE$p2|0;
		tmp2=__ZN10__cxxabiv19Exception9allocatorE$p1;
		if(tmp2!==nullArray||0!==0)tmp2=(function(){var __old__=tmp2;
			var __ret__=new Uint8Array(Lid$p021$pi$pi/1|0);
			__ret__.set(__old__.subarray(0, Math.min(__ret__.length,__old__.length)));
			return __ret__;})();
		else tmp2=new Uint8Array(Lid$p021$pi$pi/1|0);
		__ZN10__cxxabiv19Exception9allocatorE$p1=tmp2;
	}
	tmp2=__ZN10__cxxabiv19Exception9allocatorE$p0;
	tmp4=Largs[Margs];
	Lid$p021$pi$pi=Largs1[Margs1]|0;
	tmp0=Largs3[Margs3]|0;
	tmp2[Lid$p0$plcssa27$pi$pi].a1=tmp4.d[tmp4.o];
	tmp2[Lid$p0$plcssa27$pi$pi].a2=null;
	tmp2[Lid$p0$plcssa27$pi$pi].a3=Lid$p021$pi$pi;
	tmp2[Lid$p0$plcssa27$pi$pi].a4=null;
	tmp2[Lid$p0$plcssa27$pi$pi].i5=tmp0;
	tmp2[Lid$p0$plcssa27$pi$pi].i6=1;
	tmp2[Lid$p0$plcssa27$pi$pi].i7=0;
	tmp2[Lid$p0$plcssa27$pi$pi].a9=null;
	tmp2[Lid$p0$plcssa27$pi$pi].a10=null;
	tmp4=__ZN10__cxxabiv19Exception9allocatorE$p1;
	tmp4[Lid$p0$plcssa27$pi$pi]=1;
	return tmp2[Lid$p0$plcssa27$pi$pi];
}
function __ZN10__cxxabiv1L8do_throwEPNS_9ExceptionE(Lex){
	var tmp0=0,LretConstructor8=null,LretConstructor=null,LretConstructoro=0;
	tmp0=Lex.a3|0;
	LretConstructoro=HEAP32[4+tmp0>>2];
	LretConstructor=HEAP8;
	LretConstructor=_cheerpCreate_ZN6client6StringC2EPKc(LretConstructor,LretConstructoro);
	LretConstructor8=new CheerpException(LretConstructor);
	Lex.a0=LretConstructor8;
	throw LretConstructor8;
	;
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(Larg0){
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(Larg0){
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(Larg0){
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(Larg0){
	__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(Larg0){
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(Larg0){
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(Larg0){
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_(HEAP8,Larg0>>0);
}
function ___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(Larg0){
	__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc(HEAP8,Larg0>>0);
}
function ___wrapper___Z7printlnPKcj(Larg0,Larg1){
	__Z7printlnPKcj(HEAP8,Larg0>>0,Larg1);
}
var __ZN10__cxxabiv19Exception9allocatorE$p2=16;
var _promotedMalloc$p4=new Uint8Array(16);
var __ZN10__cxxabiv19Exception9allocatorE$p1=_promotedMalloc$p4;
var _promotedMalloc$p3=createArray_struct$p_ZN10__cxxabiv19ExceptionE(16);
var __ZN10__cxxabiv19Exception9allocatorE$p0=_promotedMalloc$p3;
function constructor_struct$p_ZN10__cxxabiv19ExceptionE(){
	this.a0=null;
	this.a1=null;
	this.a2=null;
	this.a3=0;
	this.a4=null;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.a8=null;
	this.a9=null;
	this.a10=null;
}
function createArray_struct$p_ZN10__cxxabiv19ExceptionE(e){
	var r=[];
	for(var i=0;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
}
function resizeArray_struct$p_ZN10__cxxabiv19ExceptionE(r,s,e){
	for(var i=s;i<e;i++)
	r[i]=new constructor_struct$p_ZN10__cxxabiv19ExceptionE();
	return r;
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
var __ZSt11make_sharedISt6vectorISsSaISsEEJEvESt10shared_ptrIT_EDpOT0_=null;
var __ZNSt6vectorISsSaISsEE5clearEv=null;
var __ZNSsC2Ev=null;
var __ZNSs9push_backEc=null;
var __ZNSt6vectorISsSaISsEE9push_backERKSs=null;
var __ZNSsD2Ev=null;
var __ZNSsC2IDnEEPKc=null;
var __ZNSt6vectorISsSaISsEE9push_backEOSs=null;
var __ZNSt6vectorISsSaISsEE2atEj=null;
var __ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev=null;
var __ZNSt6vectorISsSaISsEEC2Ev=null;
var __Z10runTestAllRKSt6vectorISsSaISsEE=null;
var __ZNSt6vectorISsSaISsEED2Ev=null;
var __ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_=null;
var __Z9runTestIdRKSs=null;
var ___getStackPtr=null;
var ___setStackPtr=null;
var jsonparse=__dummy;
__dummy.promise=
fetchBuffer('cheerp/jsonparse/jsonparse.wasm').then(Ls=>
WebAssembly.instantiate(Ls,
{i:{
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunEPKc,
		___wrapper___Z7printlnPKcj:___wrapper___Z7printlnPKcj,
		__Z16readFromDatabaseRKSs:__Z16readFromDatabaseRKSs,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_1PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_2PKc,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_6PKc,
		__Z14saveToDatabaseRKSsS0_:__Z14saveToDatabaseRKSsS0_,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_3PKcS3_,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_5PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_6PKc,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunE_2PKc,
		__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj:__ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_8PKcj,
		__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj:__ZN10__cxxabiv1L24__cxa_throw_wasm_adapterEjPSt9type_infoj,
		_abort:_abort,
		___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_:___wrapper___ZZ9runTestIdRKSsEN9CheerpTmp3RunEPKcS3_,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_0PKc,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_1PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_7PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_4PKcS6_,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_4PKc,
		__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc:__ZZ9runTestIdRKSsEN9CheerpTmp3RunE_5PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_3PKc,
		___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_:___wrapper___ZZ10runTestAllRKSt6vectorISsSaISsEEEN9CheerpTmp3RunE_0PKcS6_,
		growLinearMemory:growLinearMemory,
	}})
).then(Ls=>{
	__asm=Ls.instance.exports;
	__heap=__asm.memory.buffer;
	assignHeaps(__heap);
	__ZSt11make_sharedISt6vectorISsSaISsEEJEvESt10shared_ptrIT_EDpOT0_=__asm.__ZSt11make_sharedISt6vectorISsSaISsEEJEvESt10shared_ptrIT_EDpOT0_;
	__ZNSt6vectorISsSaISsEE5clearEv=__asm.__ZNSt6vectorISsSaISsEE5clearEv;
	__ZNSsC2Ev=__asm.__ZNSsC2Ev;
	__ZNSs9push_backEc=__asm.__ZNSs9push_backEc;
	__ZNSt6vectorISsSaISsEE9push_backERKSs=__asm.__ZNSt6vectorISsSaISsEE9push_backERKSs;
	__ZNSsD2Ev=__asm.__ZNSsD2Ev;
	__ZNSsC2IDnEEPKc=__asm.__ZNSsC2IDnEEPKc;
	__ZNSt6vectorISsSaISsEE9push_backEOSs=__asm.__ZNSt6vectorISsSaISsEE9push_backEOSs;
	__ZNSt6vectorISsSaISsEE2atEj=__asm.__ZNSt6vectorISsSaISsEE2atEj;
	__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev=__asm.__ZNSt10shared_ptrISt6vectorISsSaISsEEED2Ev;
	__ZNSt6vectorISsSaISsEEC2Ev=__asm.__ZNSt6vectorISsSaISsEEC2Ev;
	__Z10runTestAllRKSt6vectorISsSaISsEE=__asm.__Z10runTestAllRKSt6vectorISsSaISsEE;
	__ZNSt6vectorISsSaISsEED2Ev=__asm.__ZNSt6vectorISsSaISsEED2Ev;
	__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_=__asm.__ZStneIcSt11char_traitsIcESaIcEEbRKSbIT_T0_T1_EPKS3_;
	__Z9runTestIdRKSs=__asm.__Z9runTestIdRKSs;
	___getStackPtr=__asm.___getStackPtr;
	___setStackPtr=__asm.___setStackPtr;
	jsonparse=__Z9jsonparseRN6client6TArrayINS_6StringEEE;
	jsonparse.promise=
	Promise.resolve();
	__Z7webMainv();
});
function assignHeaps(Ls){
	HEAP8=new Uint8Array(Ls);
	HEAP32=new Int32Array(Ls);
}
