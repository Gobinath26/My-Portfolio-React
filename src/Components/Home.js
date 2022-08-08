import "../Styles/Home.css";
export default function Home(){
    return(
        <section id="home">
            <div className="container" id="home-container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2 className="Hi-msg">Hi There, I'm ~</h2>
                        <h1 className="name">Gobinath</h1>
                        <h2 className="sub-name">I am a <span style={{color:"crimson"}}>Fullstack Developer</span></h2>
                        <p className="home-para">A self-taught developer with an interest in Web Development.</p>
                        <div className="github-linkedin">
                        <a href="https://drive.google.com/file/d/1L4yK7TH5jQafev9360HdTkha6gWRXQsy/view?usp=sharing" target="_blank" type="button" className="btn btn-outline-secondary av">View My CV. <i className="bi bi-box-arrow-up-right" style={{color:"rgb(65, 201, 255)"}}></i></a>
                        <a href="https://github.com/Gobinath26" target="_blank" className="btn btn-secondary av"><i className="bi bi-github" style={{color:"rgb(65, 201, 255)"}}></i> Github</a>
                        <a href="https://www.linkedin.com/in/gobinath-m-98019021a/" target="_blank" className="btn btn-outline-secondary av"><i className="bi bi-linkedin" style={{color:"rgb(65, 201, 255)"}}></i> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}