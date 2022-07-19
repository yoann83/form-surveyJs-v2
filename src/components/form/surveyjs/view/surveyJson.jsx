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
              isRequired: true,
              choices: ["Renault", "volkswagen", "Audi", "Peugeot"],
              titleLocation: "hidden"
            },
            {
              type: "textwidget",
              name: "name",
              title: "Name",
              description: "PERSONALIZED - What's your name ?",
              placeHolder: "My name is...",
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
              description: "PERSONALIZED - What's your professional post ?",
              hasNone: true,
              isRequired: true,
              help: {
                title: "The content of the ",
                text: "Text textField help here..."
              },
              choices: ["Designer", "Developer", "Manager", "Administration"]
            },
            {
              type: "text",
              name: "age",
              title: "Age",
              inputType: "number",
              titleLocation: "hidden",
              hideNumber: true
            },
            {
              type: "boolean",
              name: "identity",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              indent: 3,
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
                  inputType: "text",
                  description: "What's your framework ?",
                  hideNumber: true
                },
                {
                  type: "text",
                  name: "bdd",
                  title: "Database",
                  inputType: "text",
                  description: "What's your database ?"
                },
                {
                  type: "text",
                  name: "phone",
                  title: "Phone",
                  inputType: "tel",
                  description: "What's your professional phone ?"
                },
                {
                  type: "text",
                  name: "email",
                  title: "Email",
                  description: "What's your Email ?",
                  inputType: "email"
                },
                {
                  type: "text",
                  name: "birthday",
                  title: "Birthday",
                  description: "What's your birthday ?",
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
