import React from "react";
import { ReactQuestionFactory } from "survey-react";
import TextField from "@mui/material/TextField";

/* style Overload */
//import "./textField.scss";

export default function TextFieldComponent(props) {
  const handleChangeValue = (e) => {
    props.question.setValueCore(e.target.value);
  };

  return (
    <div>
      {props.isDisplayMode ? (
        /* replace original component with theme surveyJs */
        <div
          id={props.question.inputId}
          className={props.question.getControlClass()}
          disabled
        >
          {props.question.displayValue || props.question.optionsCaption}
        </div>
      ) : (
        /* construct (overloard) all components (ex : material ui) */
        <TextField
          fullWidth
          name={props.question.name}
          title={props.question.title}
          label={props.question.placeHolder}
          variant="outlined"
          onChange={handleChangeValue}
        />
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("textOrigin", (props) => {
  return React.createElement(TextFieldComponent, props);
});
