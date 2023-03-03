const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// database connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'miniproject_fullstack',
    port : 3306
});

// check database connect
db.connect(err=>{
    if(err){
        console.log(err,"database error");
    }
    console.log('database connect ..');
})

// get data
app.get('/subject',(req,res)=>{

    let qr = `select * from subject`;
    
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length > 0){
            res.send({
                message : 'all subject data',
                data : result
            });
        }
    });
})

// app.get('/subject/:subject_id/:section/:teacher_id',(req,res)=>{

//     let sjid = req.params.subject_id;
//     let sec = req.params.section;
//     let tid = req.params.teacher_id;
//     let qr = `select * from subject where subject_id = ${sjid} and section = ${sec} and teacher_id = ${tid}` ;

//     db.query(qr,(err,result)=>{
//         if(err){
//             console.log(err,'error');
//         }
//         if(result.length > 0){
//             res.send({
//                 message : 'get single data',
//                 data : result
//             });
//         }
//         else{
//             res.send({
//                 message : 'data not found'
//             });
//         }
//     });
// })

app.get('/subject/:year/:semester',(req,res)=>{

    let y = req.params.year;
    let s = req.params.semester;
    let qr = `select * from subject where year = ${y} and semester = ${s}` ;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length > 0){
            res.send({
                message : 'get single data',
                data : result
            });
        }
        else{
            res.send({
                message : 'data not found'
            });
        }
    });
})

// create data
app.post('/subject',(req,res)=>{

    let sid = req.body.subject_id;
    let sec = req.body.section;
    let sname = req.body.subject_name;
    let t = req.body.time;
    let u = req.body.unit;
    let ms = req.body.max_std;
    let y = req.body.year;
    let s = req.body.semester;
    let tid = req.body.teacher_id;

    let qr = `insert into subject(subject_id,section,subject_name,time,unit,max_std,year,semester,teacher_id)
              value('${sid}','${sec}','${sname}','${t}','${u}','${ms}','${y}','${s}','${tid}')`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message : 'data inserted'
        })
                    
    })
})

// update
app.put('/subject/:subject_id',(req,res)=>{

    let sid= req.params.subject_id;
    let sec = req.body.section;
    let sname = req.body.subject_name;
    let t = req.body.time;
    let u = req.body.unit;
    let ms = req.body.max_std;

    let qr = `update subject set section ='${sec}',subject_name = '${sname}',
             time = '${t}' , unit ='${u}', max_std = '${ms}' where subject_id = '${sid}'`
        db.query(qr,(err,result)=>{
            if(err){
                console.log(err);
            }
            res.send({
                 message : 'data updated'
            })               
        })
})

// delete
app.delete('/subject/:subject_id',(req,res)=>{
    
    let sid = req.params.subject_id;
    let qr = `delete from subject where subject_id = '${sid}'`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message : 'data deleted'
        })
                    
    })
})


//-------------------------------------------------------------------------------------------//
// get by std_id
app.get('/register',(req,res)=>{

    // let sjid = req.params.subject_id
    // let sec = req.params.section

    //console.log(req.body.year)
    // let qr = `select * from subject where subject_id = ${sjid} and section = ${sec}`

    let qr = `select * from subject 
              join register where subject.subject_id = register.subject_id
              and subject.section = register.section
              `
            
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'get register error');
        }
        res.send({
            message : 'all data',
            data : result
            });
    });
})
app.get('/register/:year/:semester',(req,res)=>{

    let y = req.params.year;
    let s = req.params.semester;
    
    let qr = `select * from subject 
              join register 
              where register.year = ${y}
              and register.semester = ${s}
              and register.subject_id = subject.subject_id
              and register.section = subject.section`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'error');
        }
        if(result.length > 0){
            res.send({
                message : 'get single data',
                data : result
            });
        }
        else{
            res.send({
                message : 'data not found'
            });
        }
    });
})
// app.get('/register/:teacher_id/:subject_id/:section',(req,res)=>{

//     let tid = req.params.teacher_id
//     let sjid = req.params.subject_id
//     let sec = req.params.section


//     let qr = `select * from student
//               join register where register.teacher_id = ${tid}
//               and register.subject_id = ${sjid}
//               and register.section = ${sec}`
//     // let qr = `select *
//     //          from student 
//     //          join register on student.std_id = register.std_id
//     //          and register.subject_id = ${sjid}
//     //          and register.section = ${sec}
//     //          join teacher on register.teacher_id = ${tid}
//     //         `
//     db.query(qr)
// })
app.post('/register',(req,res)=>{

    let sid = req.body.std_id;
    let tid = req.body.teacher_id;
    let sjid = req.body.subject_id;
    let sname = req.body.subject_name 
    let sec = req.body.section;
    let u = req.body.unit;
    let ms = req.body.max_std;
    let y = req.body.year;
    let s= req.body.semester

    //console.log(sid,sjid,sec,ms,y);

    let qr = `insert into register(std_id,teacher_id,subject_id,section,unit,max_std,year,semester)
              value('${sid}','${tid}','${sjid}','${sec}',${u},'${ms}','${y}','${s}')`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"post register error");
        }
        res.send({
            message : 'data inserted'
        })
                    
    })
    
    
})
// get by std_id
// app.get('/register/:subject_id',(req,res)=>{

//     let sid = req.params.subject_id;
//     let qr = `select * from register where subject_id= ${sid}`;

//     db.query(qr,(err,result)=>{
//         if(err){
//             console.log(err,'error');
//         }
//         if(result.length > 0){
//             res.send({
//                 message : 'get single data',
//                 data : result
//             });
//         }
//         else{
//             res.send({
//                 message : 'data not found'
//             });
//         }
//     });
// })
// get vby year
app.put('/register/:subject_id',(req,res)=>{

    let sjid = req.body.subject_id;
    let sec = req.body.section;

    let qr = `update register set section ='${sec}' 
             where subject_id = '${sjid}'`
        db.query(qr,(err,result)=>{
            if(err){
                console.log(err);
            }
            res.send({
                 message : 'data updated'
            })               
        })
})
app.delete('/register/:subject_id/:section',(req,res)=>{
    
    let subid = req.params.subject_id;
    let sec = req.params.section;
    let qr = `delete from register where subject_id = '${subid}' and section = '${sec}'`;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message : 'data deleted'
        })
                    
    })
})

//-------------------------------------------------------------------------------------------//

app.get('/teacher/:teacher_id',(req,res)=>{
    
    let tid = req.params.teacher_id

    let qr = `select * from subject where teacher_id = '${tid}'`
    // let qr = `select * from subject 
    //          join register where subject.subject_id = register.subject_id
    //          and register.teacher_id = '${tid}'`

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,'get register error');
        }
        res.send({
            message : 'all data',
            data : result
            });
    });
})
app.post('/teacher',(req,res)=>{

    let tid = req.body.teacher_id
    let pass = req.body.password;
    let fname= req.body.first_Name;
    let lname = req.body.last_Name;
    

    let qr = `insert into teacher(teacher_id,password,first_Name,last_Name)
              value('${tid}','${pass}','${fname}','${lname}')`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"post teacher error");
        }
        res.send({
            message : 'data inserted'
        })
                    
    })
})



app.post('/student',(req,res)=>{

    let sid = req.body.std_id
    let pass = req.body.password;
    let fname= req.body.firstname;
    let lname = req.body.lastname;
    let stdy = req.body.std_year;

    let qr = `insert into student(std_id,password,firstname,lastname,std_year)
             value('${sid}','${pass}','${fname}','${lname}','${stdy}')`

     db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"post teacher error");
        }
        res.send({
            message : 'data inserted'
        })
                    
    })
})
app.listen(3000,()=>{
    console.log("server is running ..");
})