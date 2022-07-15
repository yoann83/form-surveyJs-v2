import React from "react";
import { ReactQuestionFactory } from "survey-react";
import TextField from "@mui/material/TextField";
import NotListedLocationOutlinedIcon from "@mui/icons-material/NotListedLocationOutlined";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import IconButton from "@mui/material/IconButton";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* style Overload */
import "./textField.scss";

export default function OverloadTextWidget(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

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
        <div className="TextField">
          <TextField
            fullWidth
            name={props.question.name}
            title={props.question.title}
            label={props.question.placeHolder}
            variant="outlined"
            onChange={handleChangeValue}
          />
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
                      <span className="text">Text textField help here...</span>
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>
            <IconButton className="icon-question">
              <FontAwesomeIcon icon={faEllipsisV} />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(OverloadTextWidget, props);
});
