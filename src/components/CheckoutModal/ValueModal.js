import styled from "styled-components";

export default function ValueModal({value}) {
    return (
        <Root>
            <ResumoFinanceiro>Resumo financeiro</ResumoFinanceiro>
            <ValuesDiv>
                <DescriptionAndValue
                    description={"1 adulto"}
                    value={value}
                    bold={true}
                />
                <DescriptionAndValue
                    description={"Taxa de embarque"}
                    value={"0.00"}
                />
                <DescriptionAndValue
                    description={"Taxa de serviço"}
                    value={"0.00"}
                />
            </ValuesDiv>
            <TotalDiv>
                <TotalDescription>TOTAL</TotalDescription>
                <TotalDescription>R$ {value}</TotalDescription>
            </TotalDiv>
            <ButtonPromotionalCode onClick={() => alert("Botao somente de enfeite :)")}>
                <span>Código promocional</span>
                <span className="material-symbols-outlined">add_circle</span>
            </ButtonPromotionalCode>
        </Root>
    )
}


function DescriptionAndValue({description, value, bold= false}) {
    return (
        <DescriptionAndValueDiv bold={bold}>
            <span>{description}</span>
            <span>R$ {value}</span>
        </DescriptionAndValueDiv>
    )
}

const DescriptionAndValueDiv = styled.div`
  ${(props) => props.bold && 'font-weight: bold;'}
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const Root = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  background: #ffffff;
  margin: 0 0 4rem;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 10px 10px 20px rgb(166 171 189 / 53%), -10px -10px 20px #fafbff;
  overflow: hidden;
`

const ResumoFinanceiro = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-size: 1.7rem;
  line-height: 2.5rem;
  font-weight: bold;
`

const ValuesDiv = styled.div`
  display: grid;
  height: 130px;
  width: 100%;
`
const TotalDiv = styled.div`
  background-color: #F05929;
  margin: 2rem -2rem;
  margin-left: -48px;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 60px;
`

const TotalDescription = styled.span`
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.5rem;
`

const ButtonPromotionalCode = styled.button`
  color: #F05929;
  background: transparent;
  border-color: #F05929;
  border-radius: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: none;
  text-align: center;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  font-size: 1.1rem;

  &:hover {
    background: rgba(240, 89, 41, 0.15);
    color: #C83E2B;
    border-color: #C83E2B;
    cursor: pointer;
  }
`