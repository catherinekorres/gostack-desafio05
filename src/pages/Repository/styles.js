import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 1.5s linear infinite;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 13px;
    text-decoration: none;
    align-self: flex-start;
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueFilter = styled.select`
  width: 120px;
  padding: 5px 10px;
  font-size: 14px;
  margin-bottom: 20px;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;
          transition: 0.5s;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 12px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Pagination = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: #fff;
    color: #7159c1;
    font-size: 13px;
    border: 0;
    margin: 0 10px;
    display: flex;
    align-items: center;
    margin: 0 10px;

    &[disabled] {
      cursor: not-allowed;
      color: #666;
    }

    svg {
      margin: 0 3px;
    }
  }

  span {
    border: 1px solid #eee;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
  }
`;
