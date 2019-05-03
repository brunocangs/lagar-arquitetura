import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProjects, getMedia, deleteMedia, updateMedia, deleteProject, updateProject } from '../../actions';
import { Loading, Button } from '../../components';
import FormBuilder from './formBuilder';

const projectForm = {
  'name': 'text',
  'firstPage': 'toggle',
  'comercial': 'toggle',
  'residencial': 'toggle',
  'description': 'area',
  'photos': 'images',
};

const projectLabels = {
  'description': 'Descrição',
  'firstPage': 'Mostrar na primeira página',
  'comercial': 'É comercial?',
  'residencial': 'É residencial?',
  'name': 'Nome',
  'photos': 'Imagens'
};

const mediaForm = {
  'title': 'text',
  'subtitle': 'text',
  'images': 'images'
};

const mediaLabels = {
  'title': 'Nome',
  'subtitle': 'Subtítulo',
  'images': 'Imagens'
};

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
  display: flex;  
  transition: all 0.15s ease-in-out;
  flex-wrap: wrap;
  & > div {
    flex-basis: 51%;
    margin-bottom: 14px;
  }
`;

const ListItem = styled.li`
  padding: 8px 16px 6px 16px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.15s ease-in-out;
  background-color: #f0f0f0;
  ${props => props.open ? `
  margin: 12px 0;
  border-radius: 6px;
  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.15);
  ${ListItemContent} {
    max-height: ${props.maxHeight}px;
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
  cursor: pointer;
  font-weight: normal;
  margin: 9px 0;
  width: 100%;  
  :hover {
    color: ${props => props.theme.secondary}
  }
`;

const ButtonsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-basis: 100%;
  justify-content: flex-end;
`;
const Delete = styled(Button)`
  background-color: #ce2929;
  margin-right: 6px;
`;

const ListItemForm = (props) => {
  const { item, onItemClick, open, isProject, onSave, onDelete } = props;
  const listItem = useRef(null);
  const [maxHeight, setMaxHeight] = useState(200);
  const [formState, setFormState] = useState({ ...item });
  const content = useRef(null);
  useEffect(() => {
    const { current } = listItem;
    const next = current.nextSibling;
    const prev = current.previousSibling;
    if (open) {
      if (next) {
        next.style.borderTopLeftRadius = '6px';
        next.style.borderTopRightRadius = '6px';
      }
      if (prev) {
        prev.style.borderBottomLeftRadius = '6px';
        prev.style.borderBottomRightRadius = '6px';
      }
    } else {
      if (next) {
        next.style.borderTopLeftRadius = '';
        next.style.borderTopRightRadius = '';
      }
      if (prev) {
        prev.style.borderBottomLeftRadius = '';
        prev.style.borderBottomRightRadius = '';
      }
    }
  }, [open]);
  useEffect(() => {
    const listener = () => {
      setMaxHeight(content.current.scrollHeight + 10);
    };
    window.addEventListener('resize', listener);
    setMaxHeight(content.current.scrollHeight + 10);
    return () => window.removeEventListener('resize', listener);
  }, [content, formState]);
  return (
    <ListItem
      maxHeight={maxHeight}
      open={open}
      ref={listItem}
    >
      <ListItemTitle onClick={onItemClick(item)}>
        {item.title || item.name}
      </ListItemTitle>
      <ListItemContent ref={content}>
        <FormBuilder
          form={isProject ? projectForm : mediaForm}
          initialState={formState}
          labels={isProject ? projectLabels : mediaLabels}
          onStateChange={setFormState}
        />
        <ButtonsContainer>
          <Delete onClick={() => onDelete(item)}>
            Deletar
          </Delete>
          <Button onClick={() => onSave({ ...formState, id: item.id })}>
            Salvar
          </Button>
        </ButtonsContainer>
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
  const { loading, projects, media, updateMedia, deleteMedia, updateProject, deleteProject } = props;
  if (loading) return <Loading />;
  const onItemClick = item => () => {
    if (open === item.id) return setOpen('');
    setOpen(item.id);
  };
  return (
    <Wrapper>
      <Title>Projetos</Title>
      <List>
        {[{ id: 'newProject', title: 'Novo Projeto' }].concat(projects).map((item, i) => {
          return (
            <ListItemForm
              isProject
              item={item}
              key={i}
              onDelete={deleteProject}
              onItemClick={onItemClick}
              onSave={updateProject}
              open={open === item.id}
            />
          );
        })}
      </List>
      <Title>Mídia</Title>
      <List>
        {[{ id: 'newMedia', name: 'Nova Mídia' }].concat(media).map((item, i) => {
          return (
            <ListItemForm
              isProject={false}
              item={item}
              key={i}
              onDelete={deleteMedia}
              onItemClick={onItemClick}
              onSave={updateMedia}
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
  getProjects,
  deleteMedia,
  updateMedia,
  deleteProject,
  updateProject
};

const mapStateToProps = ({ mediaReducer, projectsReducer }) => ({
  media: mediaReducer.items,
  projects: projectsReducer.items,
  loading: mediaReducer.loading || projectsReducer.loading
});

export default connect(mapStateToProps, mapDispatch)(Dashboard);