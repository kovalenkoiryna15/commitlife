import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../styles';

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = ({ children }) => {
  return (
    <Container>
      2021 ©{' '}
    </Container>
  );
};

export default Footer;

/** Footer styled components */
const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.pink.base,
  marginTop: 30,
  height: 200,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.pink.light}`,
});
