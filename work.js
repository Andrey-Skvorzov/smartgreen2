let l=0;
let t0=9;
let t1=15;
let v0=0;
let v1=0;
let vMax=0;
let vr = (vMax + v0)/(2*3.6);
let vp = vMax;
let vt = (vMax+v1)/(2*3.6);
let t = t1 - t0;
let vAverageValue = l/(t1-t0);
if (v0 != vMax && v1 != vMax && v0,v1,vMax>0){
   /* Должен быть метод Крамера*/
    ap = (vMax-v0)/tr
    at = (vMax-v1)/tt
    console.log("tp=" + tr,"tп=" + tp,"tт=" + tt,"ap=" + ap,"at=" + at)
}else if (v0 == vMax && v1 != vMax && tr == 0){
    tp = t*((vAverageValue-vt)/(vr-vt))
    tt = t-tp
    at = (vMax-v1)/tt
    console.log("tp=" + tr,"tп=" + tp,"tт=" + tt,"at=" + at)
}else if(v1==vMax && v0 != vMax && tt == 0){
    tr = t*((vAverageValue-vp)/(vr-vp))
    tp = t - tp
    ap = (vMax-v0)/tr
    console.log("tp=" + tr,"tп=" + tp,"tт=" + tt,"ap=" + ap)

}else if(v0===v1 && v1===vMax && v0,v1,vMax>0) {
    tp=l/t
    tr=0
    tt=0
    console.log("tp=" + tr,"tп=" + tp,"tт=" + tt)
} else {
    tr=tp=tt=0
    console.log("tp=" + tr,"tп=" + tp,"tт=" + tt,"t=" + t)
}

