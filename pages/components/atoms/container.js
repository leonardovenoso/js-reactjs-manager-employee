import styled from 'styled-components';

const Container = styled.div`
  margin: ${$props => $props.margin || 'inherit'};
  width: 100%;
`;

export default Container;
