import React from 'react';

import Image from 'next/image';
import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from './ProjectsStyles';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
    <Section id='projects'>
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({
                    id,
                    image,
                    title,
                    description,
                    tags,
                    code,
                    retro,
                    visit,
                }) => (
                    <BlogCard key={id}>
                        <Image
                            src={image}
                            width={4}
                            height={3}
                            layout='responsive'
                            quality={100}
                            style={{ marginBottom: '1.5rem', objectFit: 'contain'}}
                        />
                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <TagList>
                                {tags.map((tag, i) => (
                                    <Tag key={i}>{tag}</Tag>
                                ))}
                            </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks href={visit} target='_blank'>
                                View
                            </ExternalLinks>
                            <ExternalLinks href={code} target='_blank'>
                                Code
                            </ExternalLinks>
                            <ExternalLinks href={retro}>
                                Retrospect
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
