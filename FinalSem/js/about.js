const { createApp, nextTick } = Vue;

function initAboutGsap(items) {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ markers: false });

    // 避免重複建立（例如你重新載入資料/熱重載）
    ScrollTrigger.getAll().forEach((t) => t.kill());

    gsap.from("body", { opacity: 0, duration: 1 });

    (items || []).forEach((item) => {
        if (item?.textId) {
            gsap.from(`#${item.textId}`, {
                scrollTrigger: {
                    trigger: `#${item.textId}`,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
                x: -200,
                opacity: 0,
                duration: 2,
            });
        }

        if (item?.imgId) {
            gsap.from(`#${item.imgId}`, {
                scrollTrigger: {
                    trigger: `#${item.imgId}`,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
                x: -200,
                opacity: 0,
                duration: 2,
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
    methods: {
        loadAboutFromDb() {
            // 重要：瀏覽器不能直接讀 About.db；只能呼叫後端 API（/about）
            $.ajax({
                url: "/about",
                method: "GET",
                dataType: "json",
                success: async (data) => {
                    this.content = Array.isArray(data) ? data : [];
                    await nextTick();
                    initAboutGsap(this.content);
                },
                error: (xhr, status, err) => {
                    console.error("Failed to load /about", status, err);
                    if (location.protocol === "file:") {
                        console.warn("請用 http://localhost:8081/About.html 開啟（不要用 file://）");
                    }
                },
            });
        },
    },
    mounted() {
        this.loadAboutFromDb();
    },
}).mount("#about");