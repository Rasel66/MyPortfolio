import React from 'react'
import './Skill.css'
import Fade from 'react-reveal/Fade';
const Skill = () => {
    return (
        <>
            <div className="container skills" id='skill'>
                <h2 className='col-12 mb-3 mt-5 text-center text-uppercase'>Skills</h2>
                <hr />
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-12">
                        <Fade left>
                        <div className="skill">
                            <h5>HTML</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "92%"}}>
                                    92%
                                </div>
                            </div>
                            <h5>CSS</h5>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "90%", background: "#f29"}}>
                                    90%
                                </div>
                            </div>
                            <h5>JavaScript</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "65%", background: "blue"}}>
                                    65%
                                </div>
                            </div>
                            <h5>Bootstrap</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "85%", background: "green"}}>
                                    85%
                                </div>
                            </div>
                            <h5>SQL</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "60%", background: "#f29"}}>
                                    60%
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-12">
                        <Fade right>
                        <div className="skill">
                            <h5>React</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "80%",background: "blue"}}>
                                    80%
                                </div>
                            </div>
                            <h5>NodeJs</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "73%", background: "green"}}>
                                    73%
                                </div>
                            </div>
                            <h5>MongoDB</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "55%", background: "#f29"}}>
                                    55%
                                </div>
                            </div>
                            <h5>C++</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "80%", background: "#f29f27"}}>
                                    80%
                                </div>
                            </div>
                            <h5>ExpressJs</h5>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                    aria-valuemin="0" aria-valuemax="100" style={{width: "70%", background: "red"}}>
                                    70%
                                </div>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
