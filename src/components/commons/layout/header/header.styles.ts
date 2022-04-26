import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  .contents {
    width: 1024px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 1.5rem;
    }
    .rightWrapper {
      display: flex;
      .download {
        border-radius: 20px;
        padding: 10px 20px;
        color: rgb(42, 193, 188);
        background-color: white;
        font-size: 1.25rem;
      }
      .logo {
        padding: 10px 20px;
        font-size: 1.5rem;
      }
    }
  }
  .scroll {
    position: fixed;
    bottom: 0;
    left: 50%;
  }
`
