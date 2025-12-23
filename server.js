var express = require("express");
var server = express();
var bodyParser = require("body-parser");

server.set("view engine", 'ejs');
server.set("views", __dirname+"/view")

var fileUpload = require("express-fileupload")

server.use(express.static(__dirname + "/FinalSem"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))

var DB = require("nedb-promises");
var ReportDB = DB.create(__dirname+"/Report.db");

server.post("/report", (req, res) =>{
    ReportDB.insert(req.body);
    var upFile=req.files.Bugs;
    upFile.mv(__dirname+"/FinalSem/Uploads/"+upFile.name,function(err){
        if(err==null){
            res.render("msg",{message:"I got a file: "+upFile.name});
        }else{
            res.render("msg",{message:err});
        } 
    })
})

