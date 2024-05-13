import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <FormContainer>
       <form>
         <InputContainer><input type="text" name="email" /></InputContainer><br/>
         <InputContainer><input type="text" name="description" /></InputContainer><br/>
         <ButtonContainer><button>Send</button></ButtonContainer>
       </form>
      </FormContainer>
    </>
  )
}

export default Contact

const FormContainer = styled.div`
    margin-top: 35vh;
    margin-left: 45vw;
`;

const InputContainer = styled.div`
    
`;

const ButtonContainer = styled.div`
    width: 200px;
    height: 100px;
`;