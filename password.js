/*
write a java scipt program to generate a n digit key password for user which consists of Upper case letters ,lower case letter , numbers */


function random_password(n){
    let str='abcdeghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    let password=[],temp
    for(let i=0;i<n;i++){

        temp=Math.ceil(Math.random()*62)
         password.push(str.charAt(temp))

    }

    return password.join('')

}


console.log(random_password(4))