import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: calc(100vh - 90px);
    padding-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  padding-top: 18px;
  margin-top: 0;
  font-weight: normal;
  text-transform: uppercase;
`;

const Profile = styled.div`
  display: flex;
  max-width: 85%;
  margin: auto;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const PersonImage = styled.img`
  height: auto;
  width: 100%;
  background-size: contain;
  background: rgba(0,0,0,0.2);
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Description = styled.div`
  flex: 3;
  padding-left: 22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px){
    padding-left: 0;
  }
`;

const Name = styled.h2`
  margin: 0;
  margin-bottom: 18px;
  position: relative;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 18px;
  &::after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: -22px;
    width: calc(100% + 22px);
    border-bottom: 2px solid ${props => props.theme.secondary};
  }
  @media screen and (max-width: 768px){
    margin-top: 16px;
    &::after {
      left: 0;
      width: 100%;
    }
  }
`;

const Text = styled.p`
  font-size: 18px;
  text-align: left;
  line-height: 2.2em;
`;
class OfficeView extends React.Component {
  render () {
    return (
      <Wrapper>
        <Title>Quem somos</Title>
        <Profile>
          <ImageWrapper>
            <PersonImage src={require('../../assets/images/full_body_person.png')} />
          </ImageWrapper>
          <Description>
            <Name>Escritorio</Name>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure unde tempore quis cumque, rem at aut ullam perferendis velit inventore pariatur fugit ipsum sint! Iusto et iure rerum odit sed sapiente recusandae perspiciatis aliquam, ratione vel ad, impedit, quis dignissimos voluptatum velit alias sint voluptate! Odio culpa, voluptas dolor nobis libero corporis perspiciatis tenetur! Quam temporibus ratione rerum saepe autem magnam atque dignissimos, suscipit, iure, voluptatum ipsam. Esse quod reprehenderit error, iure explicabo enim doloribus non exercitationem veniam aperiam animi, vel assumenda rerum autem quidem modi necessitatibus commodi placeat sapiente voluptates quos pariatur! Labore sed hic fugit dolor aperiam.
            </Text>
          </Description>
        </Profile>
        <br />
        <br />
        <br />
        <Profile>
          <ImageWrapper>
            <PersonImage src={require('../../assets/images/full_body_person.png')} />
          </ImageWrapper>
          <Description>
            <Name>Pessoa 1</Name>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure unde tempore quis cumque, rem at aut ullam perferendis velit inventore pariatur fugit ipsum sint! Iusto et iure rerum odit sed sapiente recusandae perspiciatis aliquam, ratione vel ad, impedit, quis dignissimos voluptatum velit alias sint voluptate! Odio culpa, voluptas dolor nobis libero corporis perspiciatis tenetur! Quam temporibus ratione rerum saepe autem magnam atque dignissimos, suscipit, iure, voluptatum ipsam. Esse quod reprehenderit error, iure explicabo enim doloribus non exercitationem veniam aperiam animi, vel assumenda rerum autem quidem modi necessitatibus commodi placeat sapiente voluptates quos pariatur! Labore sed hic fugit dolor aperiam.
            </Text>
          </Description>
        </Profile>
        <br />
        <br />
        <br />
        <Profile>
          <ImageWrapper>
            <PersonImage src={require('../../assets/images/full_body_person.png')} />
          </ImageWrapper>
          <Description>
            <Name>Pessoa 2</Name>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure unde tempore quis cumque, rem at aut ullam perferendis velit inventore pariatur fugit ipsum sint! Iusto et iure rerum odit sed sapiente recusandae perspiciatis aliquam, ratione vel ad, impedit, quis dignissimos voluptatum velit alias sint voluptate! Odio culpa, voluptas dolor nobis libero corporis perspiciatis tenetur! Quam temporibus ratione rerum saepe autem magnam atque dignissimos, suscipit, iure, voluptatum ipsam. Esse quod reprehenderit error, iure explicabo enim doloribus non exercitationem veniam aperiam animi, vel assumenda rerum autem quidem modi necessitatibus commodi placeat sapiente voluptates quos pariatur! Labore sed hic fugit dolor aperiam.
            </Text>
          </Description>
        </Profile>
        <br />
        <br />
        <br />
        <Profile>
          <ImageWrapper>
            <PersonImage src={require('../../assets/images/full_body_person.png')} />
          </ImageWrapper>
          <Description>
            <Name>Pessoa 3</Name>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure unde tempore quis cumque, rem at aut ullam perferendis velit inventore pariatur fugit ipsum sint! Iusto et iure rerum odit sed sapiente recusandae perspiciatis aliquam, ratione vel ad, impedit, quis dignissimos voluptatum velit alias sint voluptate! Odio culpa, voluptas dolor nobis libero corporis perspiciatis tenetur! Quam temporibus ratione rerum saepe autem magnam atque dignissimos, suscipit, iure, voluptatum ipsam. Esse quod reprehenderit error, iure explicabo enim doloribus non exercitationem veniam aperiam animi, vel assumenda rerum autem quidem modi necessitatibus commodi placeat sapiente voluptates quos pariatur! Labore sed hic fugit dolor aperiam.
            </Text>
          </Description>
        </Profile>
      </Wrapper>
    );
  }
}

export default OfficeView;