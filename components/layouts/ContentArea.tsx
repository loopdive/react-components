import styled from "styled-components";

interface Props {
  children: any;
}

export default ({ children }: Props) => <ContentArea>{children}</ContentArea>;

const ContentArea = styled.div`
  display: flex;
  height: 200vh;
  /* border: 1px solid red; */
`;
