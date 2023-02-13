import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 350px;
    width: 582px;
    margin-right: 50px;
  }
`

export const FormContainer = styled.form`
  height: 500px;
  width: 350px;
  @media screen and (min-width: 768px) {
    background: #fefeff;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    border-radius: 8px;
    margin-left: 50px;
  }
`

export const UserInputContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  margin-top: 10px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #262626;
`

export const Logo = styled.img`
  height: 40px;
  width: 78px;
`

export const UserNamePasswordContainer = styled.div`
  width: 90%;
`

export const InputContainer = styled.div`
  margin: 5px;
  margin-left: 8px;
  margin-bottom: 15px;
`

export const Label = styled.label`
  color: #262626;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 15px;
`

export const SubmitBtn = styled.button`
  background-color: #6366f1;
  font-size: 16px;
  font-family: 'Roboto';
  height: 30px;
  color: #ffffff;
  border-radius: 5px;
  border-width: 0;
  width: 100%;
  margin-top: 25px;
`

export const Input = styled.input`
  background-color: #eeeeee;
  color: #64748b;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  border: 1px solid #64748b;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 2px;
  left: 16px;
  top: 32px;
`

export const ErrorMsg = styled.p`
  text-align: center;
  color: #ff0b37;
  font-size: 14px;
  font-family: 'Roboto';
`
