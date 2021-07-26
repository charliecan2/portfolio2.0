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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </SectionText>
        <Button>
          <a href={`/documents/carlos-cantu-resume.pdf`} download type="button" style={{color: '#fff'}}>
            Download Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;