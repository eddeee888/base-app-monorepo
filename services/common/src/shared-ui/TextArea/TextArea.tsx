import { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import { OmittedTextFieldProps } from "../../shared-typings/Omitted";

const TextArea: FunctionComponent<OmittedTextFieldProps> = (props) => (
  <TextField fullWidth margin="normal" {...props} multiline variant="outlined" />
);

export default TextArea;
