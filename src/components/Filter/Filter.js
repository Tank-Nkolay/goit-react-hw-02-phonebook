import React from 'react';
// import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);

export default Filter;
