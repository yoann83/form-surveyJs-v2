import React from "react";
import * as Survey from "survey-react";
import TextField from "@mui/material/TextField";

import "./textField.scss";

export class CustomTextModel extends Survey.Question {
  getType() {
    return "textcustom";
  }
  get text() {
    return this.getPropertyValue("text", "");
  }
  set text(newValue) {
    this.setPropertyValue("text", newValue);
  }
}

export class CustomText extends Survey.SurveyElementBase {
  get question() {
    return this.props.question;
  }

  render() {
    const handleChangeValue = (e) => {
      this.question.setValueCore(e.target.value);
    };
    if (!this.question) return null;
    return (
      <>
        <TextField
          fullWidth
          name={this.question.name}
          title={this.question.title}
          label={this.question.label}
          variant={this.question.variant}
          onChange={handleChangeValue}
        />
      </>
    );
  }
}

Survey.Serializer.addClass(
  "textcustom",
  [
    {
      name: "text"
    },
    {
      name: "toto"
    }
  ],
  function () {
    return new CustomTextModel("");
  },
  "question"
);

Survey.ReactQuestionFactory.Instance.registerQuestion("textcustom", (props) => {
  return React.createElement(CustomText, props);
});
