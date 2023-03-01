import styled from "styled-components";

export default function InputWithLabel({label, type, height, width, placeholder, options = [], handleChange, value}) {
    return (
        <Root width={width}>
            <Label>{label}</Label>
            <InputByType
                type={type ?? 'text'}
                height={height}
                placeholder={placeholder}
                options={options}
                handleChange={handleChange}
                value={value}
            />
        </Root>
    )
}

function InputByType({type, height, placeholder, options, handleChange, value}) {
    if(type === 'select') {
        if(options.length === 0) {
            const error = "quando o input é select, é obrigado a ter as options";
            alert(error)
            throw new Error((error))
        }

        return (
            <SelectInput
                height={height}
                onChange={handleChange}
                value={value}
            >
                <option hidden value>{placeholder}</option>
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </SelectInput>
        );
    }

    return <Input
        type={type ?? 'text'}
        height={height}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
    />
}


const Root = styled.div`
  margin-bottom: 3rem;
  width: ${(props) => props.width || '100px'};
  position: relative;
`

const Label = styled.span`
  font-size: 1rem;
  line-height: 1.8rem;
  display: flex;
  align-items: center;
  color: #666666;
  font-weight: normal;
`

const Input = styled.input`
  height: ${(props) => props.height || '20px'};
  width: 100%;
  transition: all .3s;
  box-shadow: none;
  padding: 0.4rem 2rem 0.4rem 1.2rem;
  font-size: 1.3rem;
  border: 0.1rem solid #E6E6E6;
  box-sizing: border-box;
  border-radius: .8rem;
  color: #414042;
  background: transparent;
`

const SelectInput = styled.select`
  height: ${(props) => props.height || '20px'};
  width: 100%;
  transition: all .3s;
  box-shadow: none;
  padding: 0.4rem 2rem 0.4rem 1.2rem;
  font-size: 1.3rem;
  border: 0.1rem solid #E6E6E6;
  box-sizing: border-box;
  border-radius: .8rem;
  color: #414042;
  background: transparent;
`