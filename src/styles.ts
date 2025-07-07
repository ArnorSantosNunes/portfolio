import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${({ theme }) => theme.corDeFundo};
    color: ${({ theme }) => theme.corPrincipal};
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  min-height: 100vh;

  @media (max-width: 768px) {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`
