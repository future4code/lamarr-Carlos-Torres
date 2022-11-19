import connection from './dataBase/connection'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

// ---------- Retorna todos asinformações dos User ou algum de acordo com o id se passdo --------- 

app.get("/users",(req:Request, res:Response)=>{
    const id = req.query.id;
})

// -------------------ADD Products -------------

app.post("/products",(req :Request, res:Response)=>{

    const {nome,price,fk_provider} = req.body

    try{
        
        // se dados do produto faltando
        if (!nome){
            //cofigurando erro
            const erro=new Error("O nome do produto informado!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }
        if (!price){
            //cofigurando erro
            const erro=new Error("O preço do produto não foi informado!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }
        if (!fk_provider){
            //cofigurando erro
            const erro=new Error("Id do fornecedotr não informado não foi informada!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }

        res.status(201).send("Produto adicionado com êxito!")
    }catch(e:any){
        switch(e.name){
            case "AuthotizationError":
                res.status(401).send(e.message);
                break;
            case "dataProductNotFound":
                res.status(422).send(e.message);
                break;
            case "playlistNotFound":
                res.status(404).send(e.message);
                break;
            case "tracAreadyExist":
                res.status(409).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        
        }
    }
})
// -------------------ADD Products -------------

app.put("/products/price:id",(req :Request, res:Response)=>{
    const productId=req.params
    const {nome,price,fk_provider} = req.body
    try{
        //id não informado
        if (!productId){
            if (!nome){
                //cofigurando erro
                const erro=new Error("O id do produto não informado!");
                erro.name="idProductNotFound";
                //lanço erro
                throw erro;
            }

        }
        
        // se dados do produto faltando
        if (!nome){
            //cofigurando erro
            const erro=new Error("O nome do produto não informado!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }
        if (!price){
            //cofigurando erro
            const erro=new Error("O preço do produto não foi informado!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }
        if (!fk_provider){
            //cofigurando erro
            const erro=new Error("Id do fornecedotr não informado não foi informada!");
            erro.name="dataProductNotFound";
            //lanço erro
            throw erro;
        }

        res.status(201).send("Produto adicionado com êxito!")
    }catch(e:any){
        switch(e.name){
            case "idProductNotFound":
                res.status(401).send(e.message);
                break;
            case "dataProductNotFound":
                res.status(422).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        
        }
    }
})




// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})