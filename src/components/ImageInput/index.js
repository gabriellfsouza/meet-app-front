import React, { useState } from 'react';
import { useFields } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import { Container } from './styles';

export default function ImageInput() {
  const [image, setImage] = useState('');

  function handleChange(input) {
    if (!input.target.files[0]) return;
    const reader = new FileReader();

    reader.onload = e => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(input.target.files[0]);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {!image ? (
          <>
            <MdPhotoCamera size={50} />
            Selecionar imagem
          </>
        ) : (
          <img src={image} alt="" />
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
