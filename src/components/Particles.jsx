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
                distance: {
                    horizontal: 1,
                    vertical: 1000
                },
                enable: true,
                gravity: {
                    enable: true
                },
                speed: { min: .1, max: .3},
                spin: {
                    acceleration: .01,
                    enable: true,
                    position: {
                        x: 50,
                        y: 50
                    }
                },
            },
            number: {
                value: 222
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
        }
    } }, []);

    const particlesInit = useCallback((engine) => { loadSlim(engine); }, []);

    return ( 
        <Particles init={particlesInit} options={options} />
    );
}

export default ParticlesComponent;