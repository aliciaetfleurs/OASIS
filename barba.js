barba.init({
    transitions: [{
        leave(data) {
            return gsap.to(data.current.container, {
                duration: 0.5,
                /* y:"-100%",
                x:"-100%", */
                opacity: 0,
            });
        },
        enter(data) {
            gsap.from(data.next.container, {
                duration: 0.5,
                /* y: "100%",
                x:"-100%", */
                opacity: 0,
                ease: "power2.inOut",
            });
        }
    }]
});