import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello world,<br />
          my name is Carlos Cantu
        </SectionTitle>
        <SectionTitle>
          Full Stack Web Developer
        </SectionTitle>
        <SectionText>
          Web applications should not only be aesthetically pleasing, but intuitive to use. Here, you'll find several projects I've created throughout my development journey based on this principle; from simple front-end apps to larger full-stack applications.
        </SectionText>
        <Button href={`/documents/carlos-cantu-resume.pdf`} type={"button"}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;