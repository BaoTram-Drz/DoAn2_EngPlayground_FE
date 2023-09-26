
import styled from "styled-components";

export const Answers = styled.p`
    text-align: center;
    padding: 0px 24px;
    font: normal 400 2rem 'Roboto';
  
    @media (max-width: 1200px) {
      font-size: 2rem;
    }
    
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
  
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
export const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin: 5% auto;
  gap : 50px;

  @media (max-width: 1024px) {
    width: 80%;
    gap : 4rem;
  }
  @media (max-width: 912px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    gap : 2rem;
  }
  @media (max-width: 540px) {
    width: 100%;    
    grid-template-columns: 1fr ;
    gap : 1rem;
  }
`;

export const TableRow = styled.div`
  margin: auto;
`;

export const TableCell = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 2% auto;
  padding: 5px 24px;
  text-align: center;
  font: normal 400 28px 'Roboto';
  color: #0E606B;
  border: 2px dashed #0e606b;
  border-radius: 50px;

  @media (max-width: 900px) {
    font-size: 1.5rem;
    width: 90%;
  }

  @media (max-width: 700px) {
    width: 80%;
    font-size: 1rem;
  }
`;

export const InputCell = styled.input`
  width: 80%;
  margin: 2% auto;
  padding: 5px 24px;
  text-align: center;
  font: normal 400 2rem 'Roboto';
  color: #0E606B;
  border: 2px dashed #0e606b;
  border-radius: 50px;

  @media (max-width: 900px) {
    margin: 2% auto;
    font-size: 2rem;
    width: 80%;
  }

  @media (max-width: 700px) {
    margin: 2% auto;
    font-size: 1rem;
  }
  @media (max-width: 540px) {
    margin: 2% auto;
    font-size: 1rem;
  }
  @media (max-width: 420px) {
    width: 80%;
    margin: 5% auto;
  }
  @media (max-width: 300px) {
    margin: 2% auto;
  }
`;

export const ImageAns = styled.img`
  width: 50%;
  height: 50%;

  @media (max-width: 900px) {
    width: 60%;
    height: 60%;
  }

  @media (max-width: 600px) {
    width: 70%;
    height: 70%;
  }
`;