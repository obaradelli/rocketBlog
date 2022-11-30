import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 3.75rem 0rem;

    border-bottom: 4px solid ${theme.colors['--green']};

    .geralDiv {
      width: 80%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 3.75rem;
    }

    .header {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .divNavBar {
        display: flex;
        flex-direction: row;

        gap: 2rem;

        a {
          text-decoration: none;

          font-family: ${theme.fontFamily['Roboto']};
          font-weight: ${theme.fontWeight.regular};
          font-size: ${theme.fontSize[18]};
          line-height: ${theme.lineHeight[130]};

          font-style: normal;
          color: ${theme.colors['--white']};
          border-left: 2px solid transparent;
          padding-left: 8px;
        }

        a:hover {
          border-left: 2px solid ${theme.colors['--green']};
          padding-left: 0.5rem;

          font-family: ${theme.fontFamily['Roboto']};
          font-weight: ${theme.fontWeight.bold};
          font-size: ${theme.fontSize[18]};
          line-height: ${theme.lineHeight[130]};

          font-style: normal;
          color: ${theme.colors['--white']};
        }
      }

      .divForm {
        display: flex;
        flex-direction: row;

        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

        input {
          all: unset;

          padding: 0.625rem 1.5625rem;

          border-radius: 5px 0px 0px 5px;
          background: ${theme.colors['--button-dark-bg']};

          font-family: ${theme.fontFamily['Roboto']};
          font-weight: ${theme.fontWeight.regular};
          font-size: ${theme.fontSize[14]};
          line-height: ${theme.lineHeight[130]};

          font-style: normal;
          color: ${theme.colors['--light-purple']};
        }

        button {
          all: unset;

          padding: 0.625rem 1.5625rem;

          border-radius: 0px 5px 5px 0px;

          background: ${theme.colors['--button-bg']};
        }
      }
    }
  `}
`

export const DivGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 30px;

    .div1 {
      width: 100%;

      display: flex;
      flex-direction: column;

      gap: 20px;

      h1 {
        font-family: ${theme.fontFamily['Poppins']};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[36]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--button-bg']};
      }

      p {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[18]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--light-purple']};
      }

      a {
        width: fit-content;

        display: flex;
        flex-direction: row;

        align-items: center;

        gap: 5px;

        text-decoration: none;

        font-family: ${theme.fontFamily['Poppins']};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[18]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--button-bg']};
      }
    }

    .div2 {
      width: 100%;
      height: 100%;

      img {
        object-fit: cover;
        height: 100%;

        width: 100%;

        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
      }
    }
  `}
`
export const DivContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 3.75rem 0rem;

    background: ${theme.colors['--light-purple']};

    .aplyGrid {
      width: 80%;
      height: 100%;

      display: flex;
      flex-direction: column;

      gap: 4rem;
    }

    .groupPosts1 {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;

      gap: 8.125rem;
    }

    .posts1 {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      gap: 1rem;

      img {
        width: 100%;
        height: 100%;

        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
      }

      span {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }

      h2 {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--purple-bg']};
      }

      p {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }
    }

    .posts2 {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 1.5rem;

      span {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }

      h2 {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--purple-bg']};
      }

      p {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }
    }

    .post1InPosts2 {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 0.5rem;
    }

    .divider {
      border-top: 1px solid #f2e7fa;
      width: 100%;
    }

    .post2InPosts2 {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      gap: 0.5rem;
    }

    .groupPosts2 {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(3, 1fr);

      gap: 1.875rem;

      img {
        width: 100%;

        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
      }

      span {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }

      h2 {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--purple-bg']};
      }

      p {
        font-family: ${theme.fontFamily['Roboto']};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--blak']};
      }
    }

    .PostsGroup2 {
      width: 100%;

      display: flex;
      flex-direction: column;

      gap: 1rem;
    }

    .postGroup2Gap {
      width: 100%;

      display: flex;
      flex-direction: column;

      gap: 0.5rem;
    }
  `}
`
