import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { header: "Bootcamp", text: 'Completed UT Austin\'s rigurous Coding Bootcamp in Spring 2021'},
  { header: "First Web App", text: 'Made my first front-end web application, called Night Out, in a team of three developers.' },
  { header: "Full-Stack MERN App", text: 'Created a more complicated Full-Stack MERN application, called ResuMake, with a team of five developers in the bootcamp cohort.' },
  { header: "Solo Learning", text: 'Learned a number of web technologies post bootcamp, such as Redux and NextJS, to build more applications.' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Acheivements
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.header}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
