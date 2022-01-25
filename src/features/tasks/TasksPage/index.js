import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Projects from "../../../common/Projects";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Projects />
      <Header title="Lista de quehaceres" />
      <Section 
        title="Agregar nueva tarea" 
        body={<Form />} 
        />
        <Section 
        title="Buscador" 
        body={<Search />} 
        />
      <Section 
        title="Lista de quehaceres"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
        />
  </Container>
  );
};


export default TasksPage;
