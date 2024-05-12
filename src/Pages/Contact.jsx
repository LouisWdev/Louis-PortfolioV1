import Navbar from "../Components/Navbar";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Navbar/>
      <FormContainer>
       <form>
         <InputContainer><input type="text" name="email" /></InputContainer><br/>
         <input type="text" name="description" /><br/>
         <button>Send</button>
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