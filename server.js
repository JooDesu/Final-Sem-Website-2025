var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var path = require("path");

server.set("view engine", 'ejs');
server.set("views", __dirname+"/view")

var fileUpload = require("express-fileupload")

server.use(express.static(__dirname + "/FinalSem"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))

server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "FinalSem", "Index.html"));
});
// main use to identify which is the first web page to be loaded and shown in the webpage

var DB = require("nedb-promises");
var ReportDB = DB.create(__dirname+"/Report.db");
var AboutDB= DB.create(__dirname+"/About.db");
var EnemiesDB = DB.create(__dirname+"/Enemies.db");

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
//                     },
// ])

// EnemiesDB.insert([
//                     {
//                         icon: "BugsIcon",
//                         imgSrc: "TerminidsIcon.png",
//                         imgAlt: "Bugs",
//                         title: "Terminids,The Bugs",
//                         desc: "Terminids were sentient extraterrestrial species,similars to Earth insects.\nThey generate large amount of Element-710,similar to fossile fuel source.\nAttempt to extracts of the E-710 from their hive-world have triggered their aggression to attack extraction sites,and begin a war between the bugs and humanity.\nAfter the first war ended,the remaining small population of terminids are confined in asecure and controlled farms for extraction of the fuels.\nHowever,the terminids have develop new strains due to toxic chemical waste lead to creation of bile varients.\nAfter 100 years,the eastern sector terminids farm have been overrun and lead to outbreak of terminids,and the Second Galactic War begins.\nThey exceels in melee combat with their claws with a few exception of bile varients that will have acid spit attacks,they are experts in swarm tactics.",
//                     },
               
//                     {
//                         bugId: "Stalker",
//                         name: "Stalker",
//                         description: "Due to SuperEarth genetic tempering with the Hunters,they have mutated to gain the ability of camouflage themselves to hide themselves.\nWhen threaten,they can leap away from danger and prepare for the next attack.\nThey have learn to ambush Helldivers with razorsharp claws,or use its tongue attack to knock down helldiver to make them even more vulnarble.",
//                         imgId: "Stalker",
//                         imgSrc: "Stalker.png",
//                         imgAlt: "Stalker",
//                         videoId: "Stalkervid",
//                         videoSrc: "Stalker.mp4",
//                     },
//                     {
//                         bugId: "BileTitan",
//                         name: "Bile Titans",
//                         description: "Bile Titans are massive,heavily armoured terminids,which makes them impervious to light and medium pen firearms.\nDespite their sheer size,they can move quite quickly to catch up to helldivers.\nTheir corrosive biles can melt through helldivers tough armour or crush them with their claws.",
//                         imgId: "BileTitan",
//                         imgSrc: "BileTitan.png",
//                         imgAlt: "BileTitan",
//                         videoId: "BileTitanvid",
//                         videoSrc: "Bile Titan.mp4",
//                     },
//                     {
//                         bugId: "HiveLord",
//                         name: "Hive Lords",
//                         description: "Hive Lords are one of the biggest Terminids,they usually traverse in the ground that cause massive quakes.\nTheir armour is extremely durable make it resistance to most heavy weapons.\nThey will ermerged from the ground to crush helldivers or spit vollies of corrosive bile",
//                         imgId: "HiveLord",
//                         imgSrc: "HiveLord.png",
//                         imgAlt: "HiveLord",
//                         videoId: "Hivelordvid",
//                         videoSrc: "Hivelord.mp4",
//                     },
               
//                     {
//                         icon: "BotsIcon",
//                         imgSrc: "AutomatonIcon.png",
//                         imgAlt: "Bots",
//                         title: "Automatons,The Robots",
//                         desc: "Cyborgs are known for their different athethics,cultural and obessions with manipulating their own bodies into machinenary.\nA war have started due to Super Earth suspect the involvement of the cyborgs bombing one of the Super Earth Districts and causes 8 civilian casualities.\nAfter the first war,they have surrendered and being enslave as labours for greater good of Super Earth and consentration camps to be reeducated.\nAutomatons are the descendants of Cyborg Nations.\nThey are created to continue fighting Super Earth and liberate the cyborgs from their enslavement.\nAlong side the terminids outbreak,the Automatons forces have made serveral incursion at the Serverin Sector.\nThey exceels in range combat combine with their advanced technology and weaponry.",
//                     },
               
//                     {
//                         botId:"Hulks",
//                         name: "Hulks", 
//                         description: "Hulks are heavily-armored siege walkers utilized by the Automatons that make them impervious to light and medium pen weapons.\nThey are equipped with different weaponry that makes them excel in close or long range combat.\nHulk bruisers that are armed with rapid fire cannons and rapid fire pulse cannons.\nHulk scorchers are close range combatant that are armed with flamethrower and a buzzsaw and will aggressively try to close the distance.",
//                         imgId: "Hulks",
//                         imgSrc: "Hulks.png",
//                         imgAlt: "Hulks",
//                         videoId: "Hulkvid",
//                         videoSrc: "Hulks.mp4",
//                     },
//                     {
//                         botId:"FactoryStrider",
//                         name: "Factory Strider", 
//                         description: "Factory Striders are currently the biggest automatons on the battlefield, its shell is enhanced with heavy plating and reinforced joints which make it resistance to heavy weaponry.\nThey are equipped with a cannon on its back and its head is armed with 2 miniguns to attack Helldivers.\nThey can also fabricate devastators to assist it in battle.",
//                         imgId: "FactoryStrider",
//                         imgSrc: "FactoryStrider.png",
//                         imgAlt: "FactoryStrider",
//                         videoId: "FactorystriderVid",
//                         videoSrc: "FactoryStrider.mp4",
//                     },
                
//                     {
//                         icon: "SquidsIcon",
//                         imgSrc: "IlluminatesIcon.png",
//                         imgAlt: "Squids",
//                         title: "Illuminates,The Squids",
//                         desc: "The illuminates society are had endured several hundred thousand of years.\nThe illuminates approached Super Earth with peace offering,however Super Earth discovered their possession weapons that capable of destroying planets.\nSuper Earth justify their weapon as a reason to wage the first war with the illuminates and successfully defeat them.\nSuper Earth suspect they are extint after the first war,but some illuminates survivors fled to unknown spaces.\nDue to this revelation,the illuminates have alter their society and begin plotting revenge agaiunst Super Earth.\nThey have return with a vengence and begining invading Mega Cities that lead by elite Overseers and supported with swarms of Voteless.\nVoteless are Super Earth citizen that have abducted and mutated into mindless zombies.",
//                     },
               
//                     {
//                         squidId:"Fleshmobs",
//                         name: "Fleshmobs", 
//                         description: "The Fleshmobs are heavy illuminates units that the illuminates experimented with SuperEarth Citizen that have failed and created the grotesque abominations.\nThey are slow while stumbling around the battlefield but they will charged towards Helldivers with surprising speed.\nThey are most dangerous when they are hordes of voteless supporting it.",
//                         imgId: "Fleshmobs",
//                         imgSrc: "Fleshmobs.png",
//                         imgAlt: "Fleshmobs",
//                         videoId: "FleshmobsVid",
//                         videoSrc: "Fleshmobs.mp4",
//                     },
//                     {
//                         squidId:"Leviathan",
//                         name: "Leviathans", 
//                         description: "Leviathans are massive illuminates airships.\nThey are armed with 8 laser cannons that have increadible destructive powers.\nThey are also equipped with advanced shielding technology, making them difficult to destroy.",
//                         imgId: "Leviathan",
//                         imgSrc: "Leviathan.png",
//                         imgAlt: "Leviathan",
//                         videoId: "LeviathanVid",
//                         videoSrc: "Leviathan.mp4",
//                     }

// ]);

server.get("/about", async (req, res) => {
    const results = await AboutDB.find({}).sort({ textId: 1 });
    res.json(results);
});

server.get("/enemies", async (req, res) => {
    const results = await EnemiesDB.find({}, {});
    res.json(results);
});

server.get("/report", async (req, res) => {
    const results = await ReportDB.find({}, {});
    res.json(results);
});

server.post("/report", (req, res) =>{
    ReportDB.insert(req.body);
    var upFile=req.files.BugsFiles;
    upFile.mv(__dirname+"/FinalSem/Uploads/"+upFile.name,function(err){
        if(err==null){
            res.render("msg",{message:"Report Submitted Successfully,We appreciate your effort in making Helldivers a better game!"});
        }else{
            res.render("msg",{message:"You are in a Jammer Zone.Report Submission Failed,Please try again later."});
        }
    })
})

var PORT = process.env.PORT || 8081;
var HOST = process.env.HOST || "0.0.0.0";

server.listen(PORT, HOST, function(){
    var displayHost = HOST === "0.0.0.0" ? "localhost" : HOST;
    console.log(`Server listening on http://${displayHost}:${PORT}`);
});
// main use for this section is to set the server IP address and port and display the server address in the console