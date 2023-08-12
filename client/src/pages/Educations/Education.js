import React from 'react'
import {MdCastForEducation,MdSchool} from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
    return (
        <>
            <div className="container-fluid education" id='education'>
                <div className="container">
                <h2 className='col-12 mb-3 mt-5 pt-5 rounded text-center text-uppercase'>Education Details</h2>
                <hr />

                <VerticalTimeline className='items'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2010 - 2015"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title title text-white">Moulanabad Secondary School, Jhenaidah</h3>
                        <h4 className="vertical-timeline-element-subtitle text-white">Science Group</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f29', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f29' }}
                        date="2016 - 2018"
                        iconStyle={{ background: '#f29', color: '#fff' }}
                        icon={<MdCastForEducation />}
                    >
                        <h3 className="vertical-timeline-element-title text-white">Govt. K.C College, Jhenaidah</h3>
                        <h4 className="vertical-timeline-element-subtitle text-white">Science Group</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-white mb-3">Jahore University of Science and Technology, Jashore</h3>
                        <h4 className="vertical-timeline-element-subtitle text-white">Computer Science and Engineering</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default Education
