import React, { useState } from "react";
import { ReactQuestionFactory } from "survey-react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
/* style Overload */
//import "./select.scss";

export default function OverloadSelectWidget(props) {
  const [choice, setchoice] = useState("");
  const onSelectChange = (e) => {
    setchoice(e.target.value);
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
        <Select
          fullWidth
          id={props.question.inputId}
          value={choice}
          onChange={onSelectChange}
          required={props.question.isRequired}
        >
          {props.question.choices.map((c) => (
            <MenuItem key={c.value} value={c.value}>
              {c.value}
            </MenuItem>
          ))}
        </Select>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdownOrigin", (props) => {
  return React.createElement(OverloadSelectWidget, props);
});
