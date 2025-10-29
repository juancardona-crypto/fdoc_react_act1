import React from 'react';

export default function ContenedorRenderProp({ contenido, render }) {
  return (
    <div>{render ? render() : contenido}</div>
  );
}