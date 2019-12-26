function _random(i){
     let temp=(Math.random()*10).toFixed(i)
     if(temp){
            let newTemp=(Math.random()*10).toFixed(i)
            let ij=0
            while(temp!==newTemp){
                newTemp =(Math.random()*10).toFixed(i)
                ij++
            }

            if(temp==newTemp){
                return 'number found after running '+ij
            }
     }
     return temp
}

console.log(_random(6))