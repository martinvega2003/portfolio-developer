import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutMeSection from './sections/AboutMeSection'
import SoftSkillsSection from './sections/SoftSkillsSection'
import CVSection from './sections/CVSection'
import FieldsSection from './sections/FieldsSection'
import ProjectsSection from './sections/ProjectsSection'

export const MainPage = () => {
  return (
    <>
        <HeroSection />
        <AboutMeSection />
        <SoftSkillsSection />
        <CVSection />
        <FieldsSection />
        <ProjectsSection />
    </>
  )
}
