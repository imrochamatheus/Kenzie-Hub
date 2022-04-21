import Text from "../Text";
import Box from "../Box";
import { StyledInput, StyledSelect } from "./styles";

const Input = (props) => {
  return props.type !== "select" ? (
    <Box flexDirection="column" alignItems="flex-start" gap="5px">
      <StyledInput border={props.border} />
      <Text size="10" color="red" weight="100">
        Error
      </Text>
    </Box>
  ) : (
    <>
      <StyledSelect>{props.children}</StyledSelect>
    </>
  );
};

export default Input;
