import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

//^^ REF https://particles.js.org/docs/classes/Options_Classes_Options.Options.html

const ParticlesComponent = () => {
    const options = useMemo(() => { return {
        particles: {
            background: {
                color: "#EBEBEB"
            },
            color: {
                value: "#202734"
            },
            fpsLimit: 60,
            fullScreen: {
                enable: true,
                zIndex: 1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    repulse: {
                        radius: 100
                    }
                }
            },
            links: {
                color: {
                    value: "#000000" 
                },
                distance: 22,
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: "bounce",
                random: true,
                straight: false,
                speed: { min: .1, max: .25},
                warp: true,
            },
            number: {
                value: 500,
            },
            opacity: {
                value: {min: .10, max: .90 }
            },
            outModes: {
                default: "destroy"
            },
            shape: {
                options: {
                    "star": {
                        sides: 4
                    }
                },
                type: "star"
            },
            size: {
                value: { min: .22, max: 2.2 }
            },
        },
    } }, []);

    const particlesInit = useCallback((engine) => { loadSlim(engine); }, []);

    return ( 
        <Particles init={particlesInit} options={options} />
    );
}

export default ParticlesComponent;