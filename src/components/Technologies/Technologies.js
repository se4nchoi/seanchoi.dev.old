import React from 'react';
import { SiReact, SiPostgresql, SiFigma } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <div style={{marginBottom: "4rem"}}/>
    <SectionDivider />
    <div style={{marginBottom: "4rem"}}/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My tech stack path was...
    </SectionText>
    <List>
      <ListItem>
        <div style={{ minWidth: "80px"}}>
          <SiReact size="8rem"/>
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with :  <br />
            <span style={{ fontWeight: "bold" }}>HTML, CSS, Javascript, React.js</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ minWidth: "80px"}}>
          <SiPostgresql size="8rem"/>
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with :  <br />
            <span style={{ fontWeight: "bold" }}>Spring & Java, Node.js and PSQL Databases</span>            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ minWidth: "80px"}}>
          <SiFigma size="8rem"/>
        </div>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with :  <br />
            <span style={{ fontWeight: "bold"}}>Figma</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
