import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

//^^ REF https://particles.js.org/docs/classes/Options_Classes_Options.Options.html

const ParticlesComponent = () => {
    const options = useMemo(() => { return {
        particles: {
            fpsLimit: 60,
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {

            },
            links: {
                distance: 22,
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                straight: false,
                speed: .15,
                spin: {
                    acceleration: .01,
                    enable: true,
                },
                warp: true,
            },
            number: {
                value: 250,
                density: {
                    enable: true,
                    value_area: 800
                }
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