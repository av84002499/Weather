import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';

interface Props {
  checked: boolean;
  icons: string[];
  onChange: () => void;
}

const Toggle: React.FC<Props> = ({
  checked,
  onChange,
  icons: [L, R],
  ...props
}) => (
  <Container onClick={onChange}>
    <span>{L}</span>
    <Switch
      checked={checked}
      inputProps={{ ...props, 'aria-checked': checked }}
    />
    <span>{R}</span>
  </Container>
);

export default Toggle;

const Container = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 1.2em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
    margin-top: 4px;
    margin-right: 2px;
  }

  & > span:last-child {
    margin-top: 5px;
  }
`;
