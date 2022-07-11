import React, { useCallback } from "react";
import "survey-core/modern.min.css";
import "./form.scss";
import * as Survey from "survey-react";
//Json for form Survey
import { surveyJson } from "./surveyJson";
//import Overload
import "../../controller/overload/select/OverloadSelectWidget";
import "../../controller/overload/textField/OverloadTextWidget";
// import Custom
import "../../controller/custom/select/CustomSelectWidget";
import "../../controller/custom/textField/CustomTextWidget";

Survey.StylesManager.applyTheme("modern");

export default function Builder() {
  const surveyModel = new Survey.Model(surveyJson);
  surveyModel.focusFirstQuestionAutomatic = true;

  const formCompleted = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);
  surveyModel.onComplete.add(formCompleted);

  //update classes for custom widget
  surveyModel.onUpdateQuestionCssClasses.add(function (survey, options) {
    var classes = options.cssClasses;

    switch (options.question.getType()) {
      case "textcustom":
        classes.mainRoot += " fieldtextcustom";
        break;
      case "selectcustom":
        classes.mainRoot += " fieldselectcustom";
        break;
      case "dropdown":
        classes.mainRoot += " dropdownOverload";
        break;
      case "text":
        classes.mainRoot += " textOverload";
        break;
      default:
        classes.mainRoot += "";
        break;
    }
  });

  return (
    <div id="form_survey">
      <Survey.Survey model={surveyModel} />
    </div>
  );
}
