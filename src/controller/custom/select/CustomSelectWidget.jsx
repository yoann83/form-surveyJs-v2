import React from "react";
import * as Survey from "survey-react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
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
      choice: "",
      anchorEl: null,
      open: false,
      placement: "top-start"
    };
  }
  //get datas in json of SurveyJs
  get question() {
    return this.props.question;
  }

  render() {
    const handleClick = (newPlacement) => (e) => {
      this.setState({ anchorEl: e.currentTarget });
      this.setState({ open: !this.state.open });
    };
    const handleChangeValue = (e) => {
      this.question.setValueCore(e.target.value);
      this.setState({ choice: e.target.value });
    };

    if (!this.question) return null;
    return (
      <div>
        <div className="SelectField">
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
          {this.question.help ? (
            <div className="icons">
              <Button onClick={handleClick("top-start")}>
                <NotListedLocationOutlinedIcon className="icon-question" />
              </Button>
              <Popper
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                placement={this.state.placement}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                      <Typography className="popper" sx={{ p: 2 }}>
                        <span className="h5">
                          {this.question.help.title}
                          <dfn>{this.question.name}</dfn>
                        </span>
                        <span className="text">{this.question.help.text}</span>
                      </Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </div>
          ) : null}
        </div>
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
      name: "help"
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
