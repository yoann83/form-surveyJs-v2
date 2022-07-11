import React from "react";
import * as Survey from "survey-react";
import TextField from "@mui/material/TextField";
/* style Custom */
import "./textField.scss";

export class CustomTextModel extends Survey.Question {
  //select type in json form to work
  getType() {
    return "textcustom";
  }
}

export class CustomText extends Survey.SurveyElementBase {
  //get datas in json of SurveyJs
  get question() {
    return this.props.question;
  }

  //create and customize the component
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
        {/*
          <pre>{JSON.stringify(this.question, null, 2)}</pre>
        */}
      </>
    );
  }
}

/* 
Add attributs.
Warning : attributes with arrays must be filled
*/
Survey.Serializer.addClass(
  "textcustom",
  [
    {
      name: "attrPerso"
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
