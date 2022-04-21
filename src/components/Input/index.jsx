import Text from "../Text";
import Box from "../Box";
import { StyledInput, StyledSelect } from "./styles";

const Input = (props) => {
  return props.type !== "select" ? (
    <Box flexDirection="column" alignItems="flex-start" gap="5px">
      <StyledInput
        border={props.border}
        type={props.type}
        {...props.register}
      />
      <Text size="10" color="#f33561" weight="100">
        Error
      </Text>
    </Box>
  ) : (
    <>
      <StyledSelect {...props.register}>{props.children}</StyledSelect>
    </>
  );
};

export default Input;
