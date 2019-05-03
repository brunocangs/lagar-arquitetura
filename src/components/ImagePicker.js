import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(${120 * 16 / 9}px, 1fr));
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-top: ${9 / 16 * 100}%;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
// const Close = styled()
const ImagePicker = props => {
  const openWidget = e => {
    e.stopPropagation();
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'brunocangs',
        uploadPreset: 'lagar-dev',
        multiple: false
      },
      (err, res) => {
        if (res.event === 'success') {
          console.log(res);
          props.onChange({
            target: {
              value: [...props.images, { url: res.info.url, order: props.images.length }],
              id: props.id
            }
          });
        }
      }
    );
  };
  const doDelete = (img) => () => {
    if (window.confirm('Deseja remover esta imagem? Esta ação é irreversível')) {
      props.onChange({
        target: {
          value: props.images.filter(item => item.url !== img.url),
          id: props.id
        }
      });
    }
  };
  return (
    <div style={{ flexGrow: 1 }}>
      <Wrapper>
        {(props.images || []).map((img, i) => {
          return (
            <ImageWrapper
              key={i}
              onClick={doDelete(img)}
            >
              <Image
                key={i}
                src={img.url}
              />
            </ImageWrapper>
          );
        })}
      </Wrapper>
      <Button onClick={openWidget}>Selecionar imagens</Button>
    </div>
  );
};

export default ImagePicker;
