import "./App.css";
import React from "react";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basics/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basics/Aleatorio";
import Primeiro from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import FamiliaMembro from "./components/basics/FamiliaMembro";


export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      
      <Card titulo="Contador">
        <Contador></Contador>
      </Card>
      
      <Card titulo="Componente Controlado(Input)">
        <Input></Input>
      </Card>

      <Card titulo="Comunicação Indireta" color="#DCBD14">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="Comunicação Direta">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="Renderização Condicional 2" color="#009933">
        <UsuarioInfo usuario={{ nome: "Alex" }} />
        <UsuarioInfo usuario={{ email: "Al@ex.com" }} />
        <UsuarioInfo usuario={{}} />
      </Card>

      <Card titulo="Renderização Condicional" color="#cc33ff">
        <ParOuImpar min={1} max={100}></ParOuImpar>
      </Card>

      <Card titulo="Tabela de produtos" color="#0066ff">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="Lista de Alunos">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Component com filhos" color="#E4E32B">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Maria"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="Desafio Aleatório" color="#E0411F">
        <Aleatorio min={1} max={100} />
      </Card>

      <Card titulo="Vazio" color="#00ff40">
        <p>
          <strong>Vazio</strong>
        </p>
      </Card>

      <Card titulo="Com Parametro" color="#E4EB">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="José Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="Primeiro Component">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
