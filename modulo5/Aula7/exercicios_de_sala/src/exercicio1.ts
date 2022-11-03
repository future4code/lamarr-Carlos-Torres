const validaAge=(age:number)=>{
    try {
        console.log("mensagem 1");
        if (age<18){
            throw new Error("mensagem 2")
        }
        console.log("mensagem 3")
    }catch(e:any){
        console.log(e.message);
    }
}
validaAge(10)