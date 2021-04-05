export const backgroundParticlesConfig = {
    particles: {
        number: {
            value: 60,
            density: {
                enable: true,
                value_area: 1500
            }
        },
        line_linked: {
            enable: true,
            opacity: 0.1
        },
        move: {
            speed: 0.3
        },
        size: {
            value: 2
        },
        opacity: {
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05
            }
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            }
        },
        modes: {
            push: {
                particles_nb: 1
            }
        }
    },
    retina_detect: true
};