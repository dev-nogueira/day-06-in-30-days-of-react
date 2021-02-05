import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #a2e6f1;
  height: 90px;
  width: 290px;
  border-radius: 10px;

  position: relative;
  left: ${props => props.leftP};
  top: ${props => props.topP};
`;
