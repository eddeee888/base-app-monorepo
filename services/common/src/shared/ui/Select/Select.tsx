import { TextField } from "@material-ui/core";
import { OmittedTextFieldProps } from "../../typings/Omitted";

export interface SelectOption {
  value: string | number | string[];
  label: string;
}

export interface SelectProps extends OmittedTextFieldProps {
  options: SelectOption[];
}

function Select({ options, ...props }: SelectProps): JSX.Element {
  return (
    <TextField fullWidth margin="normal" {...props} select variant="outlined" SelectProps={{ native: true }}>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}

export default Select;
