import express,{Request, Response} from 'express'

const app = express();

import cors from 'cors'

interface props{
    name:string;
    id:string;
}
app.use(express.json());
app.use(cors())

const array: props[] = [{name:'david',id:'1'},{name:'david',id:'2'}, {name:'isabel',id:'3'}];


app.get('/',(req: Request, res: Response) =>      
    res.status(200).json(array)
)

app.post('/add',(req: Request, res: Response) =>{
 const {name, id } = req.body;
 array.push({name,id})
 res.status(200).json({message:'success'})   
})

app.delete('/del/:id',(req: Request,res: Response)=>{
    const {id} = req.params;
    array.splice(array.findIndex(item=> item.id===id),1)
    res.status(200).json(array)
})
app.get('/jaja/:id',(req: Request, res: Response) =>{
    const {id} = req.params;
    res.status(200).json(array.find(item => item.id===id))
})
app.listen(process.env.PORT || 3000,()=>console.log('app listening port 3000'))