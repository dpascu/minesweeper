import React from 'react';

import { Board, Cell, Row } from '../../components';

const App: React.FC = () => (
  <>
    <Board>
      <Row>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </Row>
      <Row>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </Board>
  </>
);

export default App;
