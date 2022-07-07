import React from "react";
import * as Survey from "survey-react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./select.scss";

export class CustomSelectModel extends Survey.Question {
  getType() {
    return "selectcustom";
  }
}

export class CustomText extends Survey.SurveyElementBase {
  constructor(props) {
    super(props);
    this.state = {
      choice: ""
    };
  }

  get question() {
    return this.props.question;
  }

  render() {
    const handleChangeValue = (e) => {
      this.question.setValueCore(e.target.value);
      this.setState({ choice: e.target.value });
    };
    if (!this.question) return null;
    return (
      <div>
        <Select
          fullWidth
          name={this.question.name}
          title={this.question.title}
          label={this.question.description}
          variant={this.question.variant}
          value={this.state.choice}
          onChange={handleChangeValue}
        >
          {this.question.choices.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
        {/*
        {this.question.toto}
        <pre>{JSON.stringify(this.question, null, 2)}</pre>
        */}
      </div>
    );
  }
}

Survey.Serializer.addClass(
  "selectcustom",
  [
    {
      name: "choices"
    }
  ],
  function () {
    return new CustomSelectModel("");
  },
  "question"
);

Survey.ReactQuestionFactory.Instance.registerQuestion(
  "selectcustom",
  (props) => {
    return React.createElement(CustomText, props);
  }
);
