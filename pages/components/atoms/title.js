import styled from 'styled-components';

const Title = styled.div`
  font-size: ${$props => $props.size || '2em'};
  width: 100%;
  text-align: center;
  user-select: none;
`;

export default Title;
