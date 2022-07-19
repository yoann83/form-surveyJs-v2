export const surveyJson = {
  pages: [
    {
      name: "page1",
      navigationTitle: "Part 1",
      navigationDescription: "Identity",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "unique_case_id_textbox",
          elements: [
            {
              type: "text",
              name: "firstname",
              title: "Firstname",
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "dropdown",
              name: "car",
              title: "Car",
              hasNone: true,
              choices: ["Renault", "volkswagen", "Audi", "Peugeot"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "textwidget",
              name: "name",
              title: "Name",
              titleLocation: "hidden",
              icon: true,
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              hideNumber: true,
              isRequired: true
            },
            {
              type: "selectwidget",
              name: "post",
              title: "Post",
              hasNone: true,
              titleLocation: "hidden",
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              choices: ["Designer", "Developer", "Manager", "Administration"],
              isRequired: true
            },
            {
              type: "multiselectwidget",
              name: "behavior",
              title: "Behavior",
              hasNone: true,
              titleLocation: "hidden",
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              choices: [
                "Active",
                "Ambitious",
                "Cautious",
                "Conscientious",
                "Creative",
                "Logical",
                "Organized",
                "Perfectionist",
                "Precise"
              ],
              isRequired: true
            },
            {
              type: "text",
              name: "age",
              title: "Age",
              inputType: "number",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: true
            },
            {
              type: "boolean",
              name: "identity",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              indent: 3,
              isRequired: false,
              hideNumber: true
            },
            {
              type: "panel",
              name: "data_collector_information",
              elements: [
                {
                  type: "text",
                  name: "framework",
                  title: "Framework ?",
                  titleLocation: "hidden",
                  inputType: "text",
                  hideNumber: true
                },
                {
                  type: "text",
                  name: "bdd",
                  title: "Database",
                  titleLocation: "hidden",
                  inputType: "text"
                },
                {
                  type: "text",
                  name: "phone",
                  title: "Phone",
                  titleLocation: "hidden",
                  inputType: "tel"
                },
                {
                  type: "text",
                  name: "email",
                  title: "Email",
                  titleLocation: "hidden",
                  inputType: "email"
                },
                {
                  type: "text",
                  name: "birthday",
                  title: "Birthday",
                  description: "What's your birthday ?",
                  titleLocation: "hidden",
                  inputType: "date"
                }
              ],
              title: "Data Collector Information",
              showNumber: true,
              showQuestionNumbers: "off"
            }
          ]
        }
      ]
    },
    {
      name: "page2",
      navigationTitle: "Part 2",
      navigationDescription: "Opinion",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "rating",
          name: "nps_score",
          title:
            "On a scale of zero to ten, how likely are you to recommend our compagny to a friend or colleague ?",
          rateMin: 0,
          rateMax: 10
        },
        {
          type: "checkbox",
          name: "promoter_features2",
          title: "Which features do you value the most?",
          visible: false,
          visibleIf: "{nps_score} >= 9",
          validators: [
            {
              type: "answercount",
              text: "Please select two features maximum.",
              maxCount: 2
            }
          ],
          choices: [
            "Performance",
            "Stability",
            "User Interface",
            "Complete Functionality"
          ],
          hasOther: true,
          otherText: "Other feature:",
          colCount: 2
        },
        {
          type: "comment",
          name: "passive_experience",
          title: "What do you like about our product?",
          visible: false,
          visibleIf: "{nps_score} > 6  and {nps_score} < 9"
        },
        {
          type: "comment",
          name: "disappointed_experience",
          title:
            "What do you miss or find disappointing in your experience with our products?",
          visible: false,
          visibleIf: "{nps_score} notempty"
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons"
};
