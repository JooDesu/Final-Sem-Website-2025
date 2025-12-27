var express = require("express");
var server = express();
var bodyParser = require("body-parser");


server.set("view engine", 'ejs');
server.set("views", __dirname+"/view")


var fileUpload = require("express-fileupload")
var path = require("path");


server.use(express.static(__dirname + "/FinalSem"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))


var DB = require("nedb-promises");
var ReportDB = DB.create(__dirname+"/Report.db");
var AboutDB= DB.create(__dirname+"/About.db");


// AboutDB.insert([
//     {
//                         textId: "text1",
//                         imgId: "welcome",
//                         imgSrc: "Welcome.jpg",
//                         imgAlt: "Welcome",
//                         contentfirst: true,
//                         title: "THE MINISTRY OF DEFENCE HAVE SOMETHING TO TELL",
//                         desc: "Fellow new recruits,congratulations of becoming a Helldiver.\nIts time to spread our true peace,freedom and democracy.\nLiberate every single enemy territory that threaten the safety of Super Earth.",
//                         warning: "WARNING ANY UNDEMOCRATIC BEHAVIOUR WILL BE TREATED AS TREASON!!!!",
//                         textStart: "top 50%",
//                         textEnd: "bottom 10%",
//                         imgStart: "top 50%",
//                         imgEnd: "bottom 10%"
//                     },
//                     {
//                         textId: "text2",
//                         imgId: "team",
//                         imgSrc: "Team.jpg",
//                         imgAlt: "Team",
//                         contentfirst: false,
//                         title: "CHAOTIC FUN IMMERSIVE AND AMAZING COOP EXPERIENCE",
//                         desc: "Spreading Peace and Freedom alone maybe honourable but why not share the honour among other fellow Helldivers.\nEach Helldivers can cover each other weakness which enemies have no strategy to exploited weakness.",
//                         warning: "FRIENDLY FIRE BEHAVIOUR ISNT IN YOUR TRAINING MANUAL",
//                         textStart: "top 80%",
//                         textEnd: "bottom 10%",
//                         imgStart: "top 80%",
//                         imgEnd: "bottom 20%"
//                     },
//                     {
//                         textId: "text3",
//                         imgId: "enemy",
//                         imgSrc: "Enemies.jpg",
//                         imgAlt: "Enemies",
//                         contentfirst: true,
//                         title: "FACE OUR ENEMIES AND SHOW THEM NO MERCY",
//                         desc: "Our enemy have continous expand their territory towards Super Earth.\nThey are a threats towards our freedom and democracy.\nWe as Helldivers should send them back to hell and let them have a taste of liber tea.\nNo Bug,Bots or Squids can terrorise our freedom.",
//                         warning: "NEVER TRUST ENEMIES PROPAGANDA",
//                         textStart: "top 80%",
//                         textEnd: "bottom 10%",
//                         imgStart: "top 80%",
//                         imgEnd: "bottom 20%"
//                     },
//                     {
//                         textId: "text4",
//                         imgId: "weapons",
//                         imgSrc: "Weapons.jpg",
//                         imgAlt: "Weapons",
//                         contentfirst: false,
//                         title: "DIVERSE WEAPON ARSENAL",
//                         desc: "Ministry of Defence have conducted multiple weapon research to expand Helldivers Arsenals.\nIt is encourage Helldivers to experiment different weapon,stratagem to best fit the situation.\nSo feel free to use your enemies as test subject to spread liberty and democracy.",
//                         warning: "ANY CRITICISM TOWARDS SUPEREARTH WEAPON WILL UNDERGOES STRICT REVIEW PROTOCALL",
//                         textStart: "top 80%",
//                         textEnd: "bottom 10%",
//                         imgStart: "top 80%",
//                         imgEnd: "bottom 10%"
//                     },
//                     {
//                         textId: "text5",
//                         imgId: "dev",
//                         imgSrc: "Dev.jpg",
//                         imgAlt: "Dev Team",
//                         contentfirst: true,
//                         title: "ARROWHEAD DEV TEAM",
//                         desc: "The dev team consist of 100+ talented employees that is extremely skilled in creating fun,exciting and excellent cooperative experience games.\nTheir game development always emphasis on create games that not only they will enjoy and have a blast with it.\n They always listening to players feedback to improve the game further.",
//                         warning: "THEIR FAMOUS QUOTE\"A GAME FOR EVERYONE IS A GAME FOR NO ONE\".",
//                         textStart: "top 80%",
//                         textEnd: "bottom 10%",
//                         imgStart: "top 80%",
//                         imgEnd: "bottom 10%"
//                     },
// ])


server.get("/about", async (req, res) => {
    const results = await AboutDB.find({}, {});
    res.json(results);
});


// serve the main static Home page at root
server.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'FinalSem', 'Loading.html'));
    // since the first main page name isnt index.html it will required to add a route to accessit or change name to index.html
});


server.get("/report", async (req, res) => {
    const results = await ReportDB.find({}, {});
    res.json(results);
});


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


server.listen(8081, function(){
    console.log('Server listening on http://localhost:8081');
});


