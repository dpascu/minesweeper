import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Row.styles';

interface Props {}

const Row: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: null,
};

export default Row;
