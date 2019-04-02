// var exp = require('express');
// var app = exp();
// var mongo = require('mongo').MongoClient();
// var path = require('path');
// var dbo;
// app.use(exp.static(path.join(__dirname, 'dist/FullMean')));
// mongo.connect('mongodb://localhost:27017/prodb', (err, dbo) => {
//     if (err) throw err;
//     dbo = db.db('prodb');
// })
// app.get('/c1', (req, res) => {
//     dbo.collection('collection1').find().toArray((err, data) => {
//         if (err) throw err;
//         res.send(data);
//     })
// })
// app.listen(5000);



var exp = require('express');
var app = exp();
var mongo = require('mongodb').MongoClient;
var path = require('path');
var bodyparser = require('body-parser');
app.use(bodyparser.json());
var mongoose = require('mongoose');

var dbo;
mongo.connect('mongodb://vijay7181:kumar7181@ds213183.mlab.com:13183/studentonline', (err, db) => {

    app.use(exp.static(path.join(__dirname, 'dist/project')));
    if (err) throw err;
    dbo = db.db('studentonline');
    console.log('data base connected');

});

app.post('/Login/AdminLogin', (req, res) => {
    dbo.collection('adminlogin').find({ $and: [{ username: req.body.AdminId, password: req.body.password }] }).toArray((err, data) => {
        if (err) throw err;
        if (data[0] != null) {
            res.send(data);
        }
        else {
            res.send(data);
        }
    })
});

app.post('/Login/StudentLogin', (req, res) => {
    console.log(req.body);
    dbo.collection('stulog').find({ $and: [{ username: req.body.Studentid, password: req.body.password }] }).toArray((err, data) => {
        if (err) throw err;
        if (data[0] != null)
            res.send(data);
    })
});



app.post('/adminlogin/addstudents', (req, res) => {
    console.log(req.body);
    console.log("post is responding")
    dbo.collection('admlog').insertOne(req.body, (err, data) => {

        if (err) throw err;
        res.send({ "data": "saved successfully" });
    });

});
app.post('/adminlogin/addemployee', (req, res) => {
    console.log(req.body);
    console.log("post is responding")
    dbo.collection('empdet').insertOne(req.body, (err, data) => {

        if (err) throw err;
        res.send({ "data": "saved successfully" });
    });

});
app.post('/adminlogin/addcourses', (req, res) => {
    console.log(req.body);
    console.log("post is responding")
    dbo.collection('coulog').insertOne(req.body, (err, data) => {

        if (err) throw err;
        res.send({ "data": "saved successfully" });

    });

});
app.post('/adminlogin/addadmin', (req, res) => {
    console.log(req.body);
    console.log("post is responding")
    dbo.collection('addadm').insertOne(req.body, (err, data) => {

        if (err) throw err;
        res.send({ "data": "saved successfully" });
    });

});

app.get('/adminlogin/studet', (req, res) => {
    dbo.collection('admlog').find().toArray((err, data) => {
        console.log('get is ready')
        if (err) throw err;
        res.send(data);
    })
})

app.get('/adminlogin/stucourse', (req, res) => {
    dbo.collection('coulog').find().toArray((err, data) => {
        console.log('get is ready')
        if (err) throw err;
        res.send(data);
    })
})
app.get('/adminlogin/empdet', (req, res) => {
    dbo.collection('empdet').find().toArray((err, data) => {
        console.log('get is ready')
        if (err) throw err;
        console.log(data);
        res.send(data);
    })
})

app.delete('/adminlogin/studet/:id', (req, res) => {
    console.log(req.params.id);
    console.log('delete op is responding');
    var objid3 = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('admlog').remove({ _id: objid3 }, (err, result) => {
        if (err) throw err;
        dbo.collection('admlog').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})



app.delete('/adminlogin/empdet/:id', (req, res) => {
    console.log(req.params.id);
    console.log('delete op is responding');
    var objid1 = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('empdet').remove({ _id: objid1 }, (err, result) => {
        if (err) throw err;
        dbo.collection('empdet').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})

app.delete('/adminlogin/stucourse/:id', (req, res) => {
    console.log(req.params.id);
    console.log('delete ope is res');
    var objid = mongoose.Types.ObjectId(req.params.id);
    dbo.collection('coulog').remove({ _id: objid }, (err, result) => {
        if (err) throw err;
        dbo.collection('coulog').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
        })
    })
})

app.put('/adminlogin/studet', (req, res) => {
    console.log(req.body);
    var objid = mongoose.Types.ObjectId(req.body._id);
    dbo.collection('admlog').update({ _id: objid },
        {
            EnrollementId: req.body.EnrollementId, FirstName: req.body.FirstName,
            LastName: req.body.LastName, Country: req.body.Country, Gender: req.body.Gender, EailId: req.body.EailId,
            StateName: req.body.StateName, Address: req.body.Address, StudentId: req.body.StudentId,
            Studentpassword: req.body.Studentpassword,
            Springsemester: req.body.Springsemester, Fallsemester: req.body.Fallsemester, Summersemester: req.body.Summersemester
        }, (err, result) => {
            if (err) throw err;
            dbo.collection('admlog').find().toArray((err, data) => {
                if (err) throw err;
                res.send(data);
                console.log(data);
            })
        })
})

app.put('/adminlogin/empdet', (req, res) => {
    console.log(req.body);
    var objid = mongoose.Types.ObjectId(req.body._id);
    dbo.collection('stulog').update({ _id: objid }, {
        EnrollementId: req.body.EnrollementId, FirstName: req.body.FirstName,
        LastName: req.body.LastName, Country: req.body.Country, Gender: req.body.Gender, EailId: req.body.EailId,
        StateName: req.body.StateName, Address: req.body.Address
    }, (err, result) => {
        if (err) throw err;
        dbo.collection('stulog').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
            console.log(data);
        })
    })
})


app.put('/adminlogin/stucourse', (req, res) => {
    console.log(req.body);
    var objid = mongoose.Types.ObjectId(req.body._id);
    dbo.collection('coulog').update({ _id: objid }, {
        Typeofcourse: req.body.Typeofcourse, Branch: req.body.Branch,
        Affiliated: req.body.Affiliated, fee: req.body.fee
    }, (err, result) => {
        if (err) throw err;
        dbo.collection('coulog').find().toArray((err, data) => {
            if (err) throw err;
            res.send(data);
            console.log(data);
        })
    })
})








const port = 5000;
app.listen(process.env.PORT || 8080, () => {

});




// app.use(exp.static(path.join(__dirname, 'dist/project')));
// app.get('/Login/AdminLogin', (req, res) => {

//     dbo.collection('collection1').find().toArray((err, data) => {

//         if (err) throw err;
//         res.send(data);
//     })

// });
// const port = 5000;
// app.listen(port, () => {
//     console.log(`server running on port ${port}`);
// });





