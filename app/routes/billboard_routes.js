var ObjectID= require('mongodb').ObjectID;

const collectionName = 'messages';
//var obj = { message: "hola"};
module.exports=(app, db)=>{
    app.post('/message/add',(req, res)=>{
        mensaje = req.body;
        console.log(req.body);
        //console.log('aqui'+obj);
        db.collection(collectionName).insertOne(mensaje,(err, result)=>{
            //console.log('result' + result);
            if(err) return res.send('err: '+ err);
            res.send(result.ops[0])
        })
    })


    app.get('/message', (req, res)=>{
        console.log('here get')
        db.collection(collectionName).find().toArray((err, result)=>{
            if(err) return res.send('err: '+err);
            console.log(result)
            res.json(result)
        })
    })

    app.get('/message/:id', (req, res)=>{
        id=req.params.id;
        const details={'_id': new ObjectID(id)};

        db.collection(collectionName).findOne(details,(err, res)=>{
            if(err) return err;
            console.log(item);
            res.send(item)
        })
    })
}