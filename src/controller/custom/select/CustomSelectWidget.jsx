import React from "react";
import * as Survey from "survey-react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
/* style Custom */
import "./select.scss";

export class CustomSelectModel extends Survey.Question {
  //select type in json form to work
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
  //get datas in json of SurveyJs
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
        <pre>{JSON.stringify(this.question, null, 2)}</pre>
        */}
      </div>
    );
  }
}

/* 
Add attributs.
Warning : attributes with arrays must be filled
*/
Survey.Serializer.addClass(
  "selectcustom",
  [
    {
      name: "choices"
    },
    {
      name: "attrPerso"
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
