import styled from 'styled-components'

export default styled.a`
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  background: #f7f7f7;
  border-left: solid 6px #ff7c5c; /* 左線 */
  color: #ff7c5c; /* 文字色 */
  font-weight: bold;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.29);
  &:active {
    box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
    transform: translateY(2px);
  }
`
