const About = (props) => {
    return (
        <div className={`about_page`}>
            <img className={`headshot bg_${props.theme}`} src="https://i.imgur.com/PjKN4sJ.jpg" alt="headshot"></img>
            <div className={`blurb bg_${props.theme}`}>
                <p>
                    I am Matt Pero, a software engineer transitioning from mechanical engineering.
                    Towards the end of my four year engineering degree, I fell in love with computer programming while modeling FEA and dynamic system reactions.
                    Thus, I took every elective I could in programming and began studying Python on my own.
                    Following graduation, I was fortunate to land a position at an aerospace and defense company where I was able to build both my software and mechanical skillsets,
                    however, just like in college, the complex, multidisciplinary projects furthered my love of programming.
                    Knowing that software engineering was my true passion, I took a leap of faith and left my job to develop my skillset and enrolled in a coding bootcamp.
                </p>
                <br />
                <p>
                    I am a creative and critical thinker that appreciates a challenge. I enjoy working both individually or collaborating with others, and put the team before myself.
                    I find the most gratitude in programming when I am able to design a clever solution to a problem that improves my clients' or coworkers' workflow.
                    When I am not programming though, I enjoy seeing friends, playing video games, swimming, running, or escaping into nature with a hike.
                </p>
            </div>
        </div>
    );
}

export default About;
