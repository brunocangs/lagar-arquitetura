import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: calc(100vh - 90px);
`;

const ProjectsList = (props) => {
  return (
    <Wrapper>
      {props.projects.map((item, i) => item.title)}
    </Wrapper>
  );
};

export default ProjectsList;