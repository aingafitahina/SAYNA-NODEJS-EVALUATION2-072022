const mysql = require('mysql');


//console.log(process.env)


const connection= mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'base',
    port:'3309'

})

const indice = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                reject(err)
                return

            }
            resolve(result)
            return

        })
    })
}


// connection.connect((err)=>{
//     if(!err)
//     console.log("connection etabli")
//     else
//     console.log('connection failed' + JSON.stringify(err,undefined,2))
// })

module.exports={connection, indice};


