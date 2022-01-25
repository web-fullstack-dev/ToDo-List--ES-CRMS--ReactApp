import React from 'react';
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Detalles de la tarea" />
      <Section 
        title={task ? task.content : "No se encontró la tarea 😢"} 
        body={!!task && (
          <><strong>Terminado:</strong> {task.done ? "Sí" : "No"}</>
        )} 
      />

  </Container>
  );
};

export default TaskPage;