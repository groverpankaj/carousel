import React from 'react';
import styled from 'styled-components';
import ModalShareComponent from './ModalShareComponent.jsx';
import CloseButton from './CloseButton.jsx';

const socialData = [{ name: 'Facebook', icon_url: 'facebook.png' }, { name: 'Twitter', icon_url: 'twitter.png' }, { name: 'Messenger', icon_url: 'messenger.png' }, { name: 'Email', icon_url: 'email.png' }, { name: 'Whatsapp', icon_url: 'whatsapp.png' }]

const ShareModalBox = styled.div`
  min-width: 376px;
  text-align: left;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 10px;
`;

const Heading = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #484848;
  padding-bottom: 24px;
  line-height: 30px;
  border-bottom: 1px solid #ebebeb;
`;

const ModalShare = props => {
  return (
    <ShareModalBox>
      <CloseButton  closeHandle={props.closeHandle} buttonSize="16"></CloseButton>
      <Heading>Share</Heading>
      {socialData.map((platform, index) => {
        return (
          <ModalShareComponent
            key={index}
            platform={platform}
          ></ModalShareComponent>);
      })}

    </ShareModalBox>
  );
}

export default ModalShare;