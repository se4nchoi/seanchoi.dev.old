import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding >
    <LeftSection >
      <SectionTitle main center>
        Hello world, <span style={{ borderBottom: "2px solid #FFCC00dd" }}>Sean Choi</span> here.
      </SectionTitle>
      <SectionText >
        I am an aspiring developer based in Toronto, Canada 🇨🇦, currently working at a software solutions company in Daegu, South Korea 🇰🇷. 
      </SectionText>
      <SectionText>
        Always looking for opportunities to learn and grow ! 
      </SectionText>
      <Button onClick={() => window.location = "#"}>Learn More</Button>
      {/* TODO : attach resume to button*/}      
    </LeftSection>

  </Section>
);

export default Hero;