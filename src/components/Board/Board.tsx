import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Board.styles';

interface Props {}

const Board: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Board.propTypes = {
  children: PropTypes.node,
};

Board.defaultProps = {
  children: null,
};

export default Board;
