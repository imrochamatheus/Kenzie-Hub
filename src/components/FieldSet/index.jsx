import StyledFieldSet from "./styles";

const CustomFieldSet = (props) => {
  return (
    <StyledFieldSet background={props.background}>
      <label> {props.label}</label>
      <input type={props.type} />
    </StyledFieldSet>
  );
};

export default CustomFieldSet;
