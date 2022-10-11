import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

// const BG_COLOR_DARK = "#202734";
const FONT_COLOR_DARK = "#EBEBEB";
// const ACTIVE_FONT_COLOR_DARK = "#7C96EA";

// const BG_COLOR_LIGHT = "#EBEBEB";
const FONT_COLOR_LIGHT = "#202734";
// const ACTIVE_FONT_COLOR_LIGHT = "#334371";

//^^ REF https://particles.js.org/docs/classes/Options_Classes_Options.Options.html

const ParticlesComponent = (props) => {

    const currentTheme = props.theme
    
    const particlesInit = useCallback((engine) => { 
        loadSlim(engine);
     }, []);
    
    const options = useMemo(() => { return {
        themes: [
          {
            name: "light",
            options: {
                particles: {
                    color: FONT_COLOR_LIGHT,
                    links: {
                        enable: true,
                        color: FONT_COLOR_LIGHT,
                        distance: 22,
                    }
                },
            }
          },
          {
            name: "dark",
            options: {
                particles: {
                    color: FONT_COLOR_DARK,
                    links: {
                        enable: true,
                        color: FONT_COLOR_DARK,
                        distance: 22,
                    }
                },
            }
          },
        ],
        particles: {
            fullScreen: {
                enable: true,
                zIndex: -1,
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
                value: {min: .10, max: .75 }
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

    const particlesLoaded = (container) => {
        currentTheme === "light" ? container.loadTheme("light") : container.loadTheme("dark")
    }

    return ( 
        <Particles init={particlesInit} loaded={particlesLoaded} options={options} />
    );
}

export default ParticlesComponent;