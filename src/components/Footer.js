import React from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

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
  height: 400px;
  @media (max-width: 768px) {
    margin: 0 -12px;
  }
`;

const Title = styled.p`
  font-size: 30px;
  text-align: center;
`;

const Footer = React.forwardRef((props, ref) => (
  <Wrapper ref={ref}>
    <Title>Sobre nós</Title>
    <MyMapComponent
      containerElement={<MapWrapper />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDN1b5PfPhFgStwLvIR71Y9w6IUM52EIhc"
      isMarkerShown
      loadingElement={<div style={{ height: '100%' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
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
  </Wrapper>
));

export default Footer;
