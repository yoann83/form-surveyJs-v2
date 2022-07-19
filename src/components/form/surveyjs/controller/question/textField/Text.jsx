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
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

/* style Overload */
import "./text.scss";

export default function Text(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const [value, setValue] = React.useState(new Date());
  const handleChangeDate = (newValue) => {
    setValue(newValue);
    props.question.setValueCore(newValue);
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
        <div className="text-question">
          <div className="TextField">
            <div className="icons-help">
              <IconButton className="icon-question">
                <FontAwesomeIcon icon={faIdCard} />
              </IconButton>
            </div>
            {props.question.inputType === "date" ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  fullWidth
                  name={props.question?.name}
                  label={props.question?.title}
                  variant="outlined"
                  inputFormat="dd/MM/yyyy"
                  className="date"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            ) : (
              <TextField
                fullWidth
                name={props.question?.name}
                label={props.question?.title}
                type={props.question?.inputType}
                variant="outlined"
                onChange={handleChangeValue}
                required={props.question.isRequired}
              />
            )}
            <div className="icons">
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
                          Text textField help here...
                        </span>
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
        </div>
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});
