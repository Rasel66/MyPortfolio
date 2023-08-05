import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <>
        <div className="container projects">
            <h2 className='col-12 mb-3 mt-5 text-center text-uppercase'>Top Recenet Projects</h2>
            <hr />
            <h5 className='pb-3 text-center'>👉 Here are my top recent projects with live demo.</h5>

            <div className="row" id='ads'>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full Stack</span>
                            <img src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4" alt="Project-1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Node</span>
                        </div>
                        <div className="card-body">
                            <div className="ad-title ">
                                <h4 className='text-uppercase text-center mb-4 mt-3'>Portfolio</h4>
                            </div>
                            <a href="" className='ad-btn text-center'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full Stack</span>
                            <img src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4" alt="Project-1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Node</span>
                        </div>
                        <div className="card-body">
                            <div className="ad-title ">
                                <h4 className='text-uppercase text-center mb-4 mt-3'>Portfolio</h4>
                            </div>
                            <a href="" className='ad-btn text-center'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">Full Stack</span>
                            <img src="https://media.licdn.com/dms/image/D5612AQFnY506s0lVlA/article-cover_image-shrink_600_2000/0/1660523886268?e=2147483647&v=beta&t=6COoLa8lubKoAyjj2jh6Hu1QQSq--e_jnJ5z0nneVz4" alt="Project-1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                            <span className='card-detail-badge'>MongoDB</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Node</span>
                        </div>
                        <div className="card-body">
                            <div className="ad-title ">
                                <h4 className='text-uppercase text-center mb-4 mt-3'>Portfolio</h4>
                            </div>
                            <a href="" className='ad-btn text-center'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects