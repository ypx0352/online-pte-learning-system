import { Button } from '@material-ui/core';

const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-container">
                <div className="hero__content">
                    <h5>The Best PTE Education</h5>
                    <h2>Practice PTE Real Exam Questions for FREE</h2>
                    <p>Join 100,000 PTE test takers to practice and share the latest exam questions.</p>
                    <Button variant="contained">Contained</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;