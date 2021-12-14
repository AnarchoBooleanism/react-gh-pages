import facePic from './assets/face_pic1.jpg';

const About = () => {
    return (
      <div className="About">
        <div className="flex-container">
          <div>
            <img src={ facePic } alt="A selfie of mine"></img>
          </div>
          <div>
            <h1>About Me (Hello!)</h1>
            <h2>I am Nathan Guerrero, a Computer Science & Engineering student at the University of California, Irvine (class of 2025).</h2>
            <p>Ever since childhood, creating and tinkering with software has been a passion of mine, a passion that has followed me into college. Some things that I am strong at include persistence and attention to detail. I am a first-year but have already been up to quite a bit, including participating in a team hackathon. I know a fair amount about Python, and have some experience in web development, including in React. In addition to programming, I also like to compose/produce music in my free time and know a bit of Japanese.</p>
          </div>
        </div>
      </div>
    );
  }

export default About;