import React, { Component } from 'react';
import api from './api';
import './App.css';


class App extends Component {

  state = {
    dados: [],
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ dados: response.data });
  }

  render() {

    const { dados } = this.state;

    return ( 
      <div>
            <table class="test">
        <tr>
                  <th>Name</th>
                  <th>Gênero</th>
                  <th>Probabilidade</th>
                  <th>Valor</th>
                </tr>
                <tr>
                  <td>{dados.name}</td>
                  <td>{dados.gender}</td>
                  <td>{dados.probability}</td>
                  <td>{dados.count}</td>
                </tr>
            </table>
      </div>
    );
  };
};

export default App;