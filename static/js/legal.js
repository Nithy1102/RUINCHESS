export function legal(v){
    let val=v.length;
    let legal=[];
    for(let i=0;i<val;i++){
        let s=v[i];
        let id=s.join('-');
        
        let p=document.getElementById(id);
        legal.push(p);
    }  
    return legal; 
}