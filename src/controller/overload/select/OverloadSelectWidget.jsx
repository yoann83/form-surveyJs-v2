import React, { useState } from "react";
import { ReactQuestionFactory } from "survey-react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
/* style Overload */
import "./select.scss";

export default function OverloadSelectWidget(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

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
        <div className="SelectField">
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
          <div className="icons-fields">
            <Button onClick={handleClick("top-start")}>
              <NotListedLocationOutlinedIcon className="icon-question" />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography className="popper" sx={{ p: 2 }}>
                      <span className="h5">
                        The content of the <dfn>{props.question.name}</dfn>
                      </span>
                      <span className="text">
                        Text selectField help here...
                      </span>
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(OverloadSelectWidget, props);
});
