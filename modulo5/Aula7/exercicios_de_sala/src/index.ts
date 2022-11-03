import { users } from './data'
import * as allTypes from './type'
import  express, { Request, Response} from 'express'

import cors from 'cors'
import { ifError } from 'assert'

const app = express()

app.use(express.json())
app.use(cors())




// ---------- EXPLICAÇÃO EXPRESS --------- 

app.get("/teste/:id",(req:Request, res:Response)=>{

 const id = req.params.id
 const password = req.headers.password

 console.log(id, password)

 res.status(201).send('Deu bom')
})

// ----------- GET ALL PLAYLIST ----------

app.get("/playlist",(req:Request, res:Response)=>{

    const playlists = users.map((user)=>{
        return user.playlists
    })

    res.status(200).send(playlists)
})


//------------ GET PLAYLIST TRACKS --------

app.get("/playlists/tracks",(req:Request, res:Response)=>{

    const playlistId = req.query.idPlaylist 
    const userId = req.headers.iduser


    if(!playlistId && !userId){
        res.status(400).send("Colocar obrigatoriament um id")
    }

    const userFiltered = users.find((user)=>{
        return user.id === userId
    })
    
    let playlistFiltered 

    if(userFiltered){
    
        playlistFiltered = userFiltered.playlists.find((playlist)=>{
            return playlist.id === playlistId
        })
        
    }else{
        res.status(200).send("Não há um usuário com o id informado")
    }

    if(playlistFiltered ){
       const allTracks = playlistFiltered.tracks
        res.status(200).send(allTracks)
    }else{
        res.status(200).send("Não há um playlist com o id informado")
    }  
})

//------------ DELETE PLAYLIST -----------

app.delete("/playlists/playlist",(req:Request, res:Response)=>{
    
        const playlistId = req.query.idPlaylist 
        const userId = req.headers.iduser
    
        if(!playlistId && !userId){
            res.status(400).send("Colocar obrigatoriament um id")
        }
    
        const userFiltered = users.find((user)=>{
            return user.id === userId
        })
        
        let playlistsActual
    
        if(userFiltered){

            playlistsActual = userFiltered.playlists.filter((playlist)=>{
                return playlist.id !== playlistId
            })
            userFiltered.playlists = playlistsActual
            res.status(200).send(userFiltered)
        }else{
            res.status(200).send("Não há um usuário com o id informado")
        }   
    
    })

    

//------------- DELETE TRACK --------------

app.delete("/playlists/track",(req:Request, res:Response)=>{
    
        const playlistId = req.query.idPlaylist 
        const userId = req.headers.iduser
        const trackId = req.query.idtrack
    
        if(!playlistId && !userId && !trackId ){
            res.status(400).send("Colocar obrigatoriament um id")
        }
    
        const userFiltered = users.find((user)=>{
            return user.id === userId
        })
        let playlistFiltered 
    
        if(userFiltered){

            playlistFiltered = userFiltered.playlists.find((playlist)=>{
                return playlist.id === playlistId
            })

        }else{
            res.status(200).send("Não há um usuário com o id informado")
        }
        
        let trackDeleted 

        if(playlistFiltered ){
            trackDeleted = playlistFiltered.tracks.find((track)=>{
                return track.id === trackId

            })
        }else{
            res.status(200).send("Não há um playlist com o id informado")
        }  
        if(trackDeleted && playlistFiltered){

            const tracksActual = playlistFiltered.tracks.filter((track)=>{
                return track.id !== trackId
            })
    
            playlistFiltered.tracks = tracksActual
            
            res.status(200).send(playlistFiltered)

        }else{
            res.status(200).send("Não há uma faixa com o id informado, portanto ela não poderá ser deleta")
        }

    
    })

// --------------------- Explicacao das rotas  -------------------- 


app.get('/test/hello', (req: Request, res: Response) => {
    res.send(`Olá, mundo!`)
})

app.get('/test/:number', (req: Request, res: Response) => {
    
    res.send(
    `Seu número da sorte é ${Number(req.params.number) + 3}!
    `)
})



// --------------------- SEARCH PLAYLIST --------------------

app.get("/playlists",(req :Request,res:Response)=>{
// o que quer que aconteca quando bater no caminho 

const queriedName = req.query.name

if(!queriedName){
    res.status(400).send('Deu ruim, passe o nome da playlist')
}

let allPlaylists = users.map((user)=>{
    return user.playlists
}).flat(1)

allPlaylists = allPlaylists.filter((playlist)=>{
    return playlist.name === queriedName
})

//resposta dada do servidor para cliente 
res.status(200).send(allPlaylists)
})


// -------------------CREATE PLAYLIST -----------------------

app.post("/playlists",(req:Request, res: Response)=>{
    const playlistName = req.body.name
    const userToAdd = req.headers.authorization

    // O que eu quero que faca quando bate no caminho

    if(!playlistName || !userToAdd){
        res.status(400).send('Deu ruim, passe o nome da playlist e o ide do usuario ')
    }

    for(let i = 0; i < users.length; i ++){
        if(users[i].id === userToAdd ){
            users[i].playlists.push({
                id: Date.now().toString(),
                name :playlistName ,
                tracks: []
            })
        }

    }

    // Resposta do servidor 
    res.status(200).send(users)
})


// -------------------ADD TRACK NA PLAYLIST -------------

app.post("/playlists/:playlistId/tracks",(req :Request, res:Response)=>{

    const playlistIdToAdd = req.params.playlistId
    const userIdToAdd = req.headers.authorization
    const {name,artist,url} = req.body

    // if(!playlistIdToAdd || !userIdToAdd|| !name || !artist || !url){
    //     res.status(400).send('Deu ruim, passe os parametros ')
    // }

    try{
        
        //*******************************************************************/

        //Se os dados da música estiverem faltando
        if(!name){

            const erro = new Error("Nome de música nã informado!")
            erro.name="dataMusicNotfound";
            throw erro;            

        }

        //Se o artista não for passado
        if(!artist){

            const erro = new Error("Artista não informado!")
            erro.name="dataMusicNotfound";
            throw erro;            

        }

        //A url da música não foi informada
        if(!url){

            const erro = new Error("URL não informada!")
            erro.name="dataMusicNotfound";
            throw erro;            

        }

        //Quando não passado o authorization
        if(!userIdToAdd){
            //Configurando erro
            const erro = new Error("Autorização não informada!")
            erro.name="AuthorizationError";
            //Lanço o erro
            throw erro;
        }
        
        // Procura usuários
        const userSelectedById = users.find((user) => {
            return user.id === userIdToAdd
        })

        let playlistSelected

        // Para o caso do usuário nã existir.
        if(!userSelectedById){

            //Configurando erro
            const erro = new Error("Usuário não encontrado!")
            erro.name="AuthorizationError";
            //Lanço o erro
            throw erro;

        }
        else
        {
            playlistSelected = userSelectedById.playlists.find((playlist)=>{
            return playlist.id=playlistIdToAdd
            })
        }
        
        // se dados da musica faltando
        if (!name){
            //cofigurando erro
            const erro=new Error("O nome da musica não foi informado!");
            erro.name="dataMusicNotFound";
            //lanço erro
            throw erro;
        }

        if (!artist){
            //cofigurando erro
            const erro=new Error("O artista da musica não foi informado!");
            erro.name="dataMusicNotFound";
            //lanço erro
            throw erro;
        }

        if (!url){
            //cofigurando erro
            const erro=new Error("A url da musica não foi informada!");
            erro.name="dataMusicNotFound";
            //lanço erro
            throw erro;
        }

        if (!playlistSelected){

            //cofigurando erro
            const erro=new Error("Playlist não encontrado!");
            erro.name="PlayListNotFoud";
            //lanço erro
            throw erro;

        }else{

            //Testo se a música já existe...
            playlistSelected.tracks.forEach(Element=>{
                if (Element.name===name && Element.artist===artist)
                {
                    //Configurando erro
                    const erro=new Error("A música já existe!");
                    erro.name="TracAlreadyExist";
                    throw erro;
                }

            })

            playlistSelected.tracks.push({
            id:Date.now().toString(),
            name:name,
            artist:artist,
            url:url
            })

        }


        //***************************************************************** */

        res.status(201).send(playlistSelected)

    }catch(e:any){

        //Erro que ocorre quando não é passado o authorization
        if(e.name==="AuthorizationError")
        {
            res.status(401).send(e.message);
        }
        else if(e.name==="dataMusicNotFound")
        {
            res.status(422).send(e.message);
        }
        else if(e.name==="PlayListNotFound")
        {
            res.status(404).send(e.message);
        }
        else if(e.name==="TracAlreadyExist")
        {
            res.status(409).send(e.message);
        }
        else
        {
            res.status(500).send(e.message);
        }

    }
})

// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})