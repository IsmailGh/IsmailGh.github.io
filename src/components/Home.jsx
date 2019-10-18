import React from 'react';
import "./Home.css";
import Pdf from "./resume.pdf";
import { Spring } from 'react-spring/renderprops';



function Home(props) {

    return(
        <div class="wrapper">
            <section class="top">
                <div class="top__content">
                    <Spring from={{opacity:0 , marginTop:-500}}
                    to={{opacity:1, marginTop:0}} 
                    config={{delay:500,duration:700}}
                    >
                        {props => (
                            <div style={props}>
                                <span class='resume'>
                                
                                    <a href= {Pdf} target="_blank" rel="nofollow noopener noreferrer" 
                                    >Resume</a>
                                </span>
                                    <p class="greet">Hi, My name is <br /></p>
                                <h1>
                                <span class="name">
                                    Ismail Ghelle
                                </span> <br />
                                <span class="description">
                                    I build things on the web.
                                </span><br />
                                <span class="underline">
                                </span>
                                </h1>
                                <p class="para">
                                    I’m a software engineer based in Toronto, currently studying at Ryerson University. I enjoy building and designing great, high-quality websites and applications. 
                                </p>
                                <span class="button">
                                    <a href="mailto:ismailghelle6@gmail.com">Get in touch!</a>
                                </span>
                            </div>
                        )}
                    </Spring>
                </div>
            </section>
         </div>      
    )
}

export default Home