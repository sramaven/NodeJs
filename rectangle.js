module.exports = (l,b,callback)=>{
    if(l<0 || b<0){
        setTimeout(()=>
        callback(new Error("L and b should be greater than zero l = "+l+" b = "+b),null)
        
        
        ,2000)
    }else{
        setTimeout(()=>
        callback(null,{
            area:l*b,
            perimeter:2*(l+b)
        }),2000)
    }
}