import { Schema } from 'mongoose'

const bookingSchema = Schema({
    
    name : string, //nombre de usuario unico e irremplazable -> l0lo_LPA_98
    nickname : string, //nombre para mostrar a los usuarios -> Lolo Restaurant Las Palmas
    description : string,
    contact : {
        companyName : string,
        phone : number,
        email : string
    },
    tables :  [{
        id: string,
        owner: string,
        size : number 
    }]

    
})

const booking = mongoose.model('bookings', bookingSchema);

module.exports = booking;

