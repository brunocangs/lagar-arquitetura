import React from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { IoIosPin } from 'react-icons/io';
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: -21.780752, lng: -43.361674 }}
      defaultZoom={15}
      options={{
        disableDefaultUI: true
      }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: -21.780752, lng: -43.361674 }} />
      )}
    </GoogleMap>
  ))
);

const Wrapper = styled.div`
  background-color: ${props => props.theme.gray};
  padding: 0 30px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 12px;
    padding-bottom: 60px;
  }
`;

const SocialItem = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: ${props => (props.noMargin ? 0 : 18)}px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Row = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HelpCenter = styled.span`
  margin-top: 8px;
  margin-left: 8px;
  max-width: 90%;
  font-size: ${props => (props.phone ? 18 : 24)}px;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  @media (max-width: 768px) {
    margin-top: 8px;
    &::first-child {
      margin-top: 0;
    }
  }
`;

const MapWrapper = styled.div`
  margin: 0 -30px;
  height: 300px;
  @media (max-width: 768px) {
    margin: 0 -12px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  text-align: center;
`;

const Footer = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <Wrapper ref={ref}>
      <Title>Sobre nós</Title>
      {props.match.url === '/' && <MyMapComponent
        containerElement={<MapWrapper />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDN1b5PfPhFgStwLvIR71Y9w6IUM52EIhc"
        isMarkerShown
        loadingElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />}
      <Row>
        <ExternalLink
          href={'https://instagram.com/lagar.arq'}
          target="_blank"
        >
          <SocialItem>
            <i className="icon icon-instagram icon-bg-circle icon-bg-black" />
            <HelpCenter>@lagar.arq</HelpCenter>
          </SocialItem>
        </ExternalLink>
        <ExternalLink
          href={'https://facebook.com/lagar.arq'}
          target="_blank"
        >
          <SocialItem noMargin>
            <i className="icon icon-facebook icon-bg-circle icon-bg-black" />
            <HelpCenter>/lagar.arq</HelpCenter>
          </SocialItem>
        </ExternalLink>
      </Row>
      <Row>
        <ExternalLink href={'tel://+5532984417138'}>
          <SocialItem>
            <i className="icon icon-phone icon-bg-circle icon-bg-black" />
            <HelpCenter phone>(32) 98441-7138</HelpCenter>
          </SocialItem>
        </ExternalLink>
        <ExternalLink href={'tel://+5532984417138'}>
          <SocialItem>
            <i className="icon icon-phone icon-bg-circle icon-bg-black" />
            <HelpCenter phone>(32) 98818-1811</HelpCenter>
          </SocialItem>
        </ExternalLink>
        <ExternalLink href={'tel://+5532984417138'}>
          <SocialItem>
            <i className="icon icon-phone icon-bg-circle icon-bg-black" />
            <HelpCenter phone>(32) 98823-4077</HelpCenter>
          </SocialItem>
        </ExternalLink>
      </Row>
      <Row>
        <ExternalLink href={'https://www.google.com.br/maps/place/Av.+Presidente+Itamar+Franco,+3840+-+1310+-+S%C3%A3o+Mateus,+Juiz+de+Fora+-+MG,+36010-532/@-21.7810989,-43.3638592,17z/data=!3m1!4b1!4m5!3m4!1s0x989b0c4683f277:0x25015fe65b47bc44!8m2!3d-21.7810989!4d-43.3616705'}>
          <SocialItem>
            <IoIosPin
              style={{ fontSize: 28, padding: 4, borderRadius: '100%', background: 'black', color: 'white' }}
            />
            <HelpCenter phone>Av. Presidente Itamar Franco, 3840 - Sala 1310 São Mateus <br /> Juiz de Fora - MG/Brasil 36033-318</HelpCenter>
          </SocialItem>
        </ExternalLink>
      </Row>
    </Wrapper>
  );
});

export default Footer;
