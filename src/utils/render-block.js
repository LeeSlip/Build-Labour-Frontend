import React from 'react'
import MainBanner from '../components/main-banner'
import PageBanner from '../components/page-banner'
import TrainingBanner from '../components/training-banner'
import SliderLink from '../components/slider'
import CreateProfileBanner from '../components/create-profile-banner'
import Faq from '../components/faq'
import Accordions from '../components/accordions'
import Accordion from '../components/accordion'
import Features from '../components/features'
import Courses from '../components/courses'
import CourseEnquiry from '../components/course-enquiry'
import Content from '../components/content'


const renderBlock = (param, el, i, page = {}) => {
  let block = {
    'WordPressAcf_main_banner': (el, i) => <MainBanner key={i} {...el} />,
    'WordPressAcf_page_banner': (el, i) => <PageBanner key={i} {...el} />,
    'WordPressAcf_slider': (el, i) => <SliderLink key={i} {...el} />,
    'WordPressAcf_create_profile_banner': (el, i) => <CreateProfileBanner key={i} {...el} />,
    'WordPressAcf_faq': (el, i) => <Faq key={i} {...el} />,
    'WordPressAcf_training_banner': (el, i) => <TrainingBanner key={i} {...el} />,
    'WordPressAcf_accordion': (el, i) => <Accordion key={i} {...el} />,
    'WordPressAcf_accordions': (el, i) => <Accordions key={i} {...el} />,
    'WordPressAcf_features': (el, i) => <Features key={i} {...el} />,
    'WordPressAcf_courses': (el, i) => <Courses key={i} {...el} />,
    'WordPressAcf_course_enquiry': (el, i) => <CourseEnquiry key={i} {...el} />,
    'WordPressAcf_content': (el, i) => <Content key={i} {...el} />,

  }[param]

  if (!block) return <div><h1>{param}</h1></div>

  return block(el, i)
}

export default renderBlock