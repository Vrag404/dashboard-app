import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  min-height: 85vh;
  background: white;
  border-radius: 25px;
`

export const SectionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 65rem;

  @media (max-width: 1150px) {
    width: 75%;
  }
`

