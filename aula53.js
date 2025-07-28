 let valores = [1,2,3,4]
 const op = [
     (val)=>{
        res = 0
        for(i of val){
            res+=i
        }
        return res 
    }, 
    (val)=>{
        res = 1
        for(i of val){
            res*=i
        }
        return res
    },
    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
 ]

 console.log(op[2](valores))