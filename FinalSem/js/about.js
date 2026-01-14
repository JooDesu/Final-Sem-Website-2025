// const { createApp, ref } = Vue;

// var aboutApp=createApp({
//     data(){
//         return{
//              bannerSrc: "HD2Banner.jpg",
//             content: [
//                  {
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
//             ]
//         }
//     }
// }).mount("#about");

const { createApp, nextTick } = Vue;
// nextTick is used to wait for the webpage element and text to be update after data changes,ensure that the content is fully loaded before running the gsap animation

function initAboutGsap(data) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ markers: false });

    (data || []).forEach((item) => {
        // if the data array is not empty proceed to run every single data in the array with the code below
        if (item.textId) {
            gsap.from(`#${item.textId}`, {
                x: -200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: `#${item.textId}`,
                    start: "top 50%",
                    end:"bottom 10%",
                    toggleActions: "play reverse play reverse",
                    // 1.onEnter 2.Onleave 3.onEnterBack 4.onLeaveBack

                },
            });
        }

        if (item.imgId) {
            gsap.from(`#${item.imgId}`, {
                x: -200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: `#${item.imgId}`,
                    start: "top 50%",
                    end:"bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }
    });
    ScrollTrigger.refresh();
}

var aboutApp = createApp({
    data() {
        return {
            bannerSrc: "HD2Banner.jpg",
            content: [],
        };
    },
    mounted() {
        // mounted responsible for the initiate data upload when the page start loading
        $.ajax({
            url: "/about",
            method: "GET",
            dataType: "json",
            success: async (data) => {
                this.content = Array.isArray(data) ? data : [];
                // if the data obtained is an array proceed to upload the data into the content variable
                await nextTick();
                // wait for the webpage element and text to be update after data changes
                initAboutGsap(this.content)
            },
        });
    },
    updated(){  
        // Only refresh ScrollTrigger on updates, don't reinitialize animations
        ScrollTrigger.refresh();
    }
}).mount("#about");

