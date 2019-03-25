import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useForm } from '../../hooks';
import { getProjects, getMedia } from '../../actions';
import { Input, Loading } from '../../components';
import FormBuilder from './formBuilder';

const Wrapper = styled.div`
    padding-top: 64px;
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

const ListItemContent = styled.div`
  max-height: 0;
  overflow: hidden;
  width: 100%;
  transition: all 0.15s ease-in-out;
`;

const ListItem = styled.li`
  padding: 8px 16px 6px 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  background-color: #f0f0f0;
  ${props => props.open ? `
  margin: 12px 0;
  border-radius: 6px;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.15);
  ${ListItemContent} {
    max-height: 250px;
    margin-top: 16px;
  }
  ` : ''}
  :first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  :last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const ListItemTitle = styled.h3`
  font-weight: normal;
  margin: 9px 0;
  :hover {
    color: ${props => props.theme.secondary}
  }
`;

const ListItemForm = (props) => {
  const { item, onItemClick, open } = props;
  return (
    <ListItem
      onClick={onItemClick(item)}
      open={open}
    >
      <ListItemTitle>
        {item.title || item.name}
      </ListItemTitle>
      <ListItemContent>
        <FormBuilder
          form={{
            'test': 'text',
            'other': 'text',
            'lala': 'text'
          }}
          labels={{
            'test': 'Teste',
            'other': 'Outro',
            'lala': 'Boop'
          }}
          onStateChange={() => { }}
        />
      </ListItemContent>
    </ListItem>
  );
};


const Dashboard = (props) => {
  // Refresh projects and media on open dash
  const fetchProjects = () => {
    props.getProjects();
    props.getMedia();
  };
  useEffect(fetchProjects, [props.projects.length, props.media.length]);
  const [open, setOpen] = useState('');
  const { loading, projects, media } = props;
  if (loading) return <Loading />;
  const onItemClick = item => () => {
    if (open === item.id) return setOpen('');
    setOpen(item.id);
  };
  return (
    <Wrapper>
      <Title>Projetos</Title>
      <List>
        {projects.map((item, i) => {
          return (
            <ListItemForm
              item={item}
              key={i}
              onItemClick={onItemClick}
              open={open === item.id}
            />
          );
        })}
      </List>
      <Title>Mídia</Title>
      <List>
        {media.map((item, i) => {
          return (
            <ListItemForm
              item={item}
              key={i}
              onItemClick={onItemClick}
              open={open === item.id}
            />
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

const mapStateToProps = ({ mediaReducer, projectsReducer }) => ({
  media: mediaReducer.items,
  projects: projectsReducer.items,
  loading: mediaReducer.loading || projectsReducer.loading
});

export default connect(mapStateToProps, mapDispatch)(Dashboard);