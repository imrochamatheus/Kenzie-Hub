import Text from "../Text";
import Box from "../Box";
import { StyledInput, StyledSelect } from "./styles";

const Input = (props) => {
  return (
    <Box flexDirection="column" alignItems="flex-start" gap="15.07px">
      <label style={{ fontSize: "10px" }}>{props.label}</label>
      {props.type !== "select" ? (
        <Box flexDirection="column" alignItems="flex-start" gap="5px">
          <StyledInput
            autoComplete="off"
            border={props.border}
            type={props.type}
            {...props.register}
          />
          {props.error && (
            <Text size="10" color="#f33561" weight="100">
              {props.error.message}
            </Text>
          )}
        </Box>
      ) : (
        <StyledSelect {...props.register}>{props.children}</StyledSelect>
      )}
    </Box>
  );
};

export default Input;
