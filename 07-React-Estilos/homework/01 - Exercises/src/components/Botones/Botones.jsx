import React from 'react';
import styled from 'styled-components'

const Buttons = styled.div`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
`
const DivButtons = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: green;
`





export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
