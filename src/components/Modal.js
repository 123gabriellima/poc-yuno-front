import styled from "styled-components";

export default function Modal({children, width, maxHeight, display, height}) {
    return (
        <Root
            width={width}
            maxHeight={maxHeight}
            display={display}
            height={height}
        >
            {children}
        </Root>
    )
}

const Root = styled.div`
  width: ${(props) => props.width};
  ${(props) => props.height ? `height: ${props.height};` : ""}
  min-height: ${(props) => props.minHeight || '600px'};
  background: #ffffff;
  margin: 0 0 4rem;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 10px 10px 20px rgb(166 171 189 / 53%), -10px -10px 20px #fafbff;
  overflow: hidden;
  display: flex;
`;