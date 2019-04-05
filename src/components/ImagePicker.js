import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(${120 * 16 / 9}px, 1fr));
`;
const Image = styled.img`
  height: 120px;
  width: 100%;
  object-fit: contain;
`;
const ImagePicker = props => {
  const openWidget = e => {
    e.stopPropagation();
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'brunocangs',
        uploadPreset: 'lagar-dev'
      },
      (err, res) => {
        if (res.event === 'success') props.onImagesSelect(res);
      }
    );
  };
  return (
    <div style={{flexGrow: 1}}>
      <Wrapper>
        {(props.images || []).map((img, i) => {
          return (
            <Image
              key={i}
              src={img.url}
            />
          );
        })}
      </Wrapper>
      <Button onClick={openWidget}>Selecionar imagens</Button>
    </div>
  );
};

export default ImagePicker;
