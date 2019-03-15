import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useForm } from '../../hooks';
import { getProjects, getMedia } from '../../actions';

const Wrapper = styled.div`
    padding-top: 64px;
    text-align: center;
    width: 90%;
    margin: auto;
    min-height: calc(100vh - 90px);
    @media screen and (max-width: 768px){
      padding-top: 32px;
    }
`;

const Title = styled.h2`
  font-weight: normal;
  margin: 0;
`;

const List = styled.ul`
  padding: 0;
  margin-bottom: 18px;
`;

const Dashboard = (props) => {
  // Refresh projects and media on open dash
  useEffect(() => {
    props.getProjects();
    props.getMedia();
  }, [props.projects.length, props.media.length]);

  const {loading, projects, media} = props;
  if (loading) return <div>loading...</div>;
  return (
    <Wrapper>
      <Title>Projetos</Title>
      <List>
        {projects.map((item, i) => {
          console.log(item);
          return (
            <div key={i}>
              {item.name}
            </div>
          );
        })}
      </List>
      <Title>Mídia</Title>
      <List>
        {media.map((item, i) => {
          console.log(item);
          return (
            <div key={i}>
              {item.title}
            </div>
          );
        })}
      </List>
    </Wrapper>
  );
};

const mapDispatch = {
  getMedia,
  getProjects
};

const mapStateToProps = ({mediaReducer, projectsReducer}) => ({
  media: mediaReducer.items,
  projects: projectsReducer.items,
  loading: mediaReducer.loading || projectsReducer.loading
});

export default connect(mapStateToProps, mapDispatch)(Dashboard);