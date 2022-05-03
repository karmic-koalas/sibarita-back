import { Schema } from 'mongoose'



const companySchema = Schema({
    
    name : string, //nombre de usuario unico e irremplazable -> l0lo_LPA_98
    nickname : string, //nombre para mostrar a los usuarios -> Lolo Restaurant Las Palmas
    description : string,
    contact : {
        companyName : string,
        phone : number,
        email : string
    },
    tables :  [{
        name: string,
        bussy : boolean,
        size : number 
    }]

    
})