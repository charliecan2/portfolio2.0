import React from 'react';
import { DiNodejsSmall, DiMongodb, DiMysql, DiJsBadge, DiReact, DiSass, DiGit} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle, IconContainer } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle style={{marginTop: '50px'}}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of full-stack technologies in my projects, with a concentration in some of the most popular front-end technologies.
    </SectionText>
    <List>
      <ListItem>
        <IconContainer>
          <DiReact size="3rem"/>
          <DiSass size="3rem"/>
          <DiJsBadge size="3rem"/>
        </IconContainer>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            ReactJS, Redux, Sass, JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IconContainer>
          <DiNodejsSmall size="3rem" />
          <DiMongodb size="3rem" />
          <DiMysql size="3rem"/>
        </IconContainer>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            NodeJS, MongoDB, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
          <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with<br />
            Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
