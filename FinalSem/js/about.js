const { createApp, nextTick } = Vue;
// next.Tick is a must need to ensure that the all the data have been uploaded to the screen,then continue to run the later code example for gsap

function initAboutGsap(data) {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    //if there  no gsap or scroll trigger exist,return nothing and stop the code from running

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ markers: false });

    ScrollTrigger.getAll().forEach((t) => t.kill());
    //obtain the current webpage existed scroll trigger and remove all the previous scroll trigger 

    gsap.from("body", { opacity: 0, duration: 1 });

    (data || []).forEach((item) => {
        // if the data array is not empty proceed to run every single data in the array with the code below
        if (item.textId) {
            gsap.from(`#${item.textId}`, {
                x: -200,
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: `#${item.textId}`,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                    // 1.onEnter 2.Onleave 3.onEnterBack 4.onLeaveBack

                },
            });
        }

        if (item.imgId) {
            gsap.from(`#${item.imgId}`, {
                x: -200,
                opacity: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: `#${item.imgId}`,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }
    });

    ScrollTrigger.refresh();
    // refresh the scroll trigger to ensure that all the scroll trigger are working properly
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
                // when the data have been fully uploaded to the screen proceed to the next code
                initAboutGsap(this.content);
            },
        });
    },
}).mount("#about");

