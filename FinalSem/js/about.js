const { createApp, ref } = Vue;

var aboutApp=createApp({
    data(){
        return{
             bannerSrc: "HD2Banner.jpg",
            content: [
                 {
                        textId: "text1",
                        imgId: "welcome",
                        imgSrc: "Welcome.jpg",
                        imgAlt: "Welcome",
                        contentfirst: true,
                        title: "THE MINISTRY OF DEFENCE HAVE SOMETHING TO TELL",
                        desc: "Fellow new recruits,congratulations of becoming a Helldiver.\nIts time to spread our true peace,freedom and democracy.\nLiberate every single enemy territory that threaten the safety of Super Earth.",
                        warning: "WARNING ANY UNDEMOCRATIC BEHAVIOUR WILL BE TREATED AS TREASON!!!!",
                    },
                    {
                        textId: "text2",
                        imgId: "team",
                        imgSrc: "Team.jpg",
                        imgAlt: "Team",
                        contentfirst: false,
                        title: "CHAOTIC FUN IMMERSIVE AND AMAZING COOP EXPERIENCE",
                        desc: "Spreading Peace and Freedom alone maybe honourable but why not share the honour among other fellow Helldivers.\nEach Helldivers can cover each other weakness which enemies have no strategy to exploited weakness.",
                        warning: "FRIENDLY FIRE BEHAVIOUR ISNT IN YOUR TRAINING MANUAL",
                    },
                    {
                        textId: "text3",
                        imgId: "enemy",
                        imgSrc: "Enemies.jpg",
                        imgAlt: "Enemies",
                        contentfirst: true,
                        title: "FACE OUR ENEMIES AND SHOW THEM NO MERCY",
                        desc: "Our enemy have continous expand their territory towards Super Earth.\nThey are a threats towards our freedom and democracy.\nWe as Helldivers should send them back to hell and let them have a taste of liber tea.\nNo Bug,Bots or Squids can terrorise our freedom.",
                        warning: "NEVER TRUST ENEMIES PROPAGANDA",
                    },
                    {
                        textId: "text4",
                        imgId: "weapons",
                        imgSrc: "Weapons.jpg",
                        imgAlt: "Weapons",
                        contentfirst: false,
                        title: "DIVERSE WEAPON ARSENAL",
                        desc: "Ministry of Defence have conducted multiple weapon research to expand Helldivers Arsenals.\nIt is encourage Helldivers to experiment different weapon,stratagem to best fit the situation.\nSo feel free to use your enemies as test subject to spread liberty and democracy.",
                        warning: "ANY CRITICISM TOWARDS SUPEREARTH WEAPON WILL UNDERGOES STRICT REVIEW PROTOCALL",
                    },
                    {
                        textId: "text5",
                        imgId: "dev",
                        imgSrc: "Dev.jpg",
                        imgAlt: "Dev Team",
                        contentfirst: true,
                        title: "ARROWHEAD DEV TEAM",
                        desc: "The dev team consist of 100+ talented employees that is extremely skilled in creating fun,exciting and excellent cooperative experience games.\nTheir game development always emphasis on create games that not only they will enjoy and have a blast with it.\n They always listening to players feedback to improve the game further.",
                        warning: "THEIR FAMOUS QUOTE\"A GAME FOR EVERYONE IS A GAME FOR NO ONE\".",
                    },
            ]
        }
    }
}).mount("#about");