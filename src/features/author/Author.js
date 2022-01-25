import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="Sobre el autor" />
      <Section 
        title="Nikita Rysiev" 
        body={
          <p contentEditable>
            <p>puedes editar el texto a continuación</p>
            <p>¡Eh! Mi nombre es Nick, y soy un desarrollador front-end junior (React) principiante y 👶 probador de software manual junior con introducción a la automatización.
             Mi lengua materna es el ruso, pero aprendo y practico más inglés, polaco y algo de alemán.</p> 
            <p>Ahora trato de estudiar pruebas de software y algo de codificación de aplicaciones web simples.</p>
            <p>Quiero saber codificar y hablar muy bien inglés para ser útil en el mercado laboral. 
            </p>
          </p>
          } 
        />
  </Container>
);