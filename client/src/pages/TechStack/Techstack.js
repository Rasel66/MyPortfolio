import React from 'react'
import './Techstack.css'
import { TechstackList } from '../../utils/TechstackList'

const Techstack = () => {
  return (
    <>
        <div className="container techstack">
            <h2 className='col-12 mb-3 mt-5 text-center'>Technologies Stack</h2>
            <hr />
            <h5 className='pb-3 text-center'>👉 Including Programming languages, Frameworks, Databases, Front-end and Back-end tools, and APIs.</h5>

            <div className="row">
                {TechstackList.map(tech=>(
                    <div key={tech._id} className="col-md-3">
                        <div className="card m-2">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex justify-content-center">
                                        <div className="alig-self-center">
                                            <tech.icon className='tech-icon' />
                                        </div>
                                        <div className="media-body px-1">
                                            <h5>{tech.name}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Techstack