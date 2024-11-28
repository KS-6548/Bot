import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import './About.css'

function About({ isDark }) {
  return (
    <>
      <section className="about" id="about">
        <h2>About</h2>
        <VerticalTimeline lineColor={isDark ? "#fff": "#ccc" }  >
          <VerticalTimelineElement
            className='vertical-timeline-element--education '
            icon={<FaGraduationCap />}
          >
            <div className="date-left">June 2017 - April 2018</div>
            <h3 className="vertical-timeline-element-title text-end">SSLC</h3>
            <h4 className="vertical-timeline-element-subtitle text-end">Don Bosco Hr Sec School</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            icon={<FaGraduationCap />}
          >
            <div className="date-right ">June 2018 - April 2019</div>
            <h3 className="vertical-timeline-element-title text-start">HSL</h3>
            <h4 className="vertical-timeline-element-subtitle text-start">Don Bosco Hr Sec School</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            icon={<FaGraduationCap />}
          >
            <div className="date-left">Aug 2019 - July 2023</div>
            <h3 className="vertical-timeline-element-title text-end">Biomedical Engineering(BE)</h3>
            <h4 className="vertical-timeline-element-subtitle text-end">Agni College Of Technology</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            icon={<AiOutlineFundProjectionScreen />}
          >
            <div className="date-right ">Nov 2022</div>
            <h3 className="vertical-timeline-element-title text-start">ULTRASONIC WALKING STICK USING ARDUINO</h3>
            <h4 className="vertical-timeline-element-subtitle text-start">Agni College Of Technology</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            icon={<AiOutlineFundProjectionScreen />}
          >
            <div className="date-left ">Nov 2023</div>
            <h3 className="vertical-timeline-element-title text-end">ESTIMATION OF MUSCLE FATIGUE AND ANALYSIS
            USING MEDIAN FREQUENCY AND RMS VALUE</h3>
            <h4 className="vertical-timeline-element-subtitle text-end">Agni College Of Technology</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            icon={<MdOutlineWork />}
          >
            <div className="date-right ">Feb 2023- Sep 2023</div>
            <h3 className="vertical-timeline-element-title text-start">Service Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle text-start">Everlife CPC Pvt Ltd</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  )
}

export default About