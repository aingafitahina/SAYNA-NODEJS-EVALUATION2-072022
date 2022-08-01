  require('dotenv').config();
  const express = require ('express');
  const bodyParser=require('body-parser')
  const {connection, indice}= require('./models/db');
  const connex= require ('express-myconnection')
  const { queryback,queryfront,querymarketing, queryux,insertquery, bestcomment } = require('./models/requete')
  
  const app = express();
  
  const port = 3309;


    //récuperer le HTML dans le fichier publique
    app.use('/public',express.static('public'));
    //rendre EJS comme moteur de visualisation de l'application express
    app.set('view engine', 'ejs');

    //mise en place du body-parser

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    var urlencodedParser = bodyParser.urlencoded({extended:true})

    

    //mettre la page 'home' dans views comme page principale
    app.get('/',function(req,res){
      res.render('home')

    })

    //mettre le frontend dans la route /front et recuperer les base pour être afficher
    app.get('/frontend', async function(req,res){

        // let sql = "SELECT *FROM commentaire where formation_typeformation='frontend'ORDER BY note DESC";
        // connection.query(sql,insertquery,(err,rows)=>{
        //    if(err) throw err 
        //    res.render('frontend',{
        //    commentaire:rows});

        // })
        const avis_frontend = await indice(queryfront[0])
        const avis_frontend2 = await indice(queryfront[1])
        const avis_frontend3 = await indice(queryfront[2])
        const avis_frontend4 = await indice(queryfront[3])
    
        res.render('frontend', { avis: avis_frontend, avis1: avis_frontend2, avis2: avis_frontend3, avis3: avis_frontend4})

    })

    app.get('/backend', async function(req,res){
        //       let sql = "SELECT *FROM commentaire where formation_typeformation='backend'ORDER BY note DESC  LIMIT 1 OFFSET 0";
        // connection.query(sql,insertquery,(err,rows)=>{
        //    if(err) throw err 
        //    res.render('backend',{
        //    commentaire:rows});

        // })
      const avis_backend = await indice(queryback[0])
      const avis_backend1 = await indice(queryback[1])
      const avis_backend2 = await indice(queryback[2])
      const avis_backend3 = await indice(queryback[3])
  
      res.render('backend', { avis: avis_backend, avis1: avis_backend1, avis2: avis_backend2, avis3: avis_backend3 })
  
     
    })


    app.get('/marketing', function(req,res){
      res.render('marketing')
    })



    app.get('/contact', function(req,res){
      res.render('contact')
  
    })

   

  // fin de la mise en place du route

  //mis en place du post 
    
    app.post('/contact',function(req,res){

      class comment {
        static create(firstname, lastname, avis, note, formation_typeformation , query, callback) {
            connection.query(query, [firstname, lastname, avis, note, formation_typeformation], function(err, result) {
                if (err) throw err
                callback(result)
            })
        }

    }

      if(req.body.nom==""||req.body.prenom==""||req.body.avis=="" ||req.body.note=="" ){
        res.send('vous deveez remplir tout les formulaire')
      }
      else{
       comment.create(req.body.nom,req.body.prenom,req.body.avis,req.body.note,req.body.formation, insertquery, function(){ 
          console.log(req.body.nom,req.body.prenom,req.body.avis,req.body.note,req.body.formation  )
          res.send('inserer avec succes')
          res.redirect('/contact')
        });
        
      }      
      })
      
    app.listen(3000,()=>{
      console.log("connextion reuissi:" +port)
    });