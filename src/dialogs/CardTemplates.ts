// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import * as config from "config";
import * as constants from "../constants";

function appRoot(): string {
    if (typeof window === "undefined") {
        return config.get("app.baseUri");
    } else {
        return window.location.protocol + "//" + window.location.host;
    }
}

// tslint:disable:trailing-comma
export const cardTemplates: any = {
    taskModule: {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text": "{{title}}"
                    },
                    {
                        "type": "ColumnSet",
                        "columns": [
                            {
                                "type": "Column",
                                "items": [
                                    {
                                        "type": "TextBlock",
                                        "weight": "Bolder",
                                        "text": "{{subTitle}}",
                                        "wrap": true
                                    }
                                ],
                                "width": "stretch"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "{{instructions}}",
                        "wrap": true
                    }
                ]
            }
        ],
        "actions": [
            {
                "type": "Action.ShowCard",
                "title": "Deep Links",
                "card": {
                    "type": "AdaptiveCard",
                    "style": "emphasis",
                    "body": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "Button 1 URL",
                                    "value": "{{markdown1}}"
                                },
                                {
                                    "title": "Button 2 URL",
                                    "value": "{{markdown2}}"
                                },
                                {
                                    "title": "Button 3 URL",
                                    "value": "{{markdown3}}"
                                }
                            ]
                        },
                        {
                            "type": "TextBlock",
                            "text": "Click on the buttons below below to open a task module via deep link.",
                            "wrap": true
                        }
                    ],
                    "actions": [
                        {
                            "type": "Action.OpenUrl",
                            "title": "{{linkbutton1}}",
                            "url": "{{url1}}"
                        },
                        {
                            "type": "Action.OpenUrl",
                            "title": "{{linkbutton2}}",
                            "url": "{{url2}}"
                        },
                        {
                            "type": "Action.OpenUrl",
                            "title": "{{linkbutton3}}",
                            "url": "{{url3}"
                        }
                    ]
                }
            },
            {
                "type": "Action.ShowCard",
                "title": "task/fetch",
                "card": {
                    "type": "AdaptiveCard",
                    "style": "emphasis",
                    "body": [
                        {
                            "type": "TextBlock",
                            "weight": "Bolder",
                            "text": "task/fetch JSON"
                        },
                        {
                            "type": "TextBlock",
                            "spacing": "None",
                            "height": "stretch",
                            "text": "{{taskFetchJSON}}",
                            "isSubtle": true,
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": "Click on the buttons below below to open a task module via `task/fetch`.",
                            "wrap": true
                        }
                    ],
                    "actions": [
                        {
                            "type": "Action.Submit",
                            "id": "{{fetchButtonId1}}",
                            "title": "{{fetchButtonTitle1}}",
                            "data": {
                                "msteams": {
                                    "type": "task/fetch"
                                },
                                "taskModule": "{{fetchButtonId1}}"
                            }
                        },
                        {
                            "type": "Action.Submit",
                            "id": "{{fetchButtonId2}}",
                            "title": "{{fetchButtonTitle2}}",
                            "data": {
                                "msteams": {
                                    "type": "task/fetch"
                                },
                                "taskModule": "{{fetchButtonId2}}"
                            }
                        },
                        {
                            "type": "Action.Submit",
                            "id": "{{fetchButtonId3}}",
                            "title": "{{fetchButtonTitle3}}",
                            "data": {
                                "msteams": {
                                    "type": "task/fetch"
                                },
                                "taskModule": "{{fetchButtonId3}}"
                            }
                        }
                    ]
                }
            }
        ],
        "version": "1.0"
    },
    acTester: {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "size": "Medium",
                        "weight": "Bolder",
                        "text": "Adaptive Card Tester"
                    }
                ]
            },
            {
                "type": "Container",
                "items": [
                    {
                        "type": "TextBlock",
                        "text": "Copy/paste Adaptive Card JSON from [Adaptive Cards Designer](http://acdesignerbeta.azurewebsites.net/) or [Adaptive Cards Samples](http://adaptivecards.io/samples/) into the text box below and press Submit.",
                        "wrap": true
                    }
                ]
            },
            {
                "type": "Input.Text",
                "id": "acBody",
                "title": "New Input.Toggle",
                "placeholder": "Adaptive Card JSON",
                "isMultiline": true
            }
        ],
        "actions": [
            {
                "type": "Action.Submit",
                "title": "Submit",
                "data": {
                    "actester": true
                }
            }
        ],
        "version": "1.0"
    },
    adaptiveCard: {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
          {
            "type": "TextBlock",
            "size": "medium",
            "weight": "bolder",
            "text": "Input.Text elements",
            "horizontalAlignment": "center"
          },
          {
            "type": "Input.Text",
            "placeholder": "Name",
            "style": "text",
            "maxLength": 0,
            "id": "SimpleVal"
          },
          {
            "type": "Input.Text",
            "placeholder": "Homepage",
            "style": "url",
            "maxLength": 0,
            "id": "UrlVal"
          },
          {
            "type": "Input.Text",
            "placeholder": "Email",
            "style": "email",
            "maxLength": 0,
            "id": "EmailVal"
          },
          {
            "type": "Input.Text",
            "placeholder": "Phone",
            "style": "tel",
            "maxLength": 0,
            "id": "TelVal"
          },
          {
            "type": "Input.Text",
            "placeholder": "Comments",
            "style": "text",
            "isMultiline": true,
            "maxLength": 0,
            "id": "MultiLineVal"
          },
          {
            "type": "Input.Number",
            "placeholder": "Quantity",
            "min": -5,
            "max": 5,
            "value": 1,
            "id": "NumVal"
          },
          {
            "type": "Input.Date",
            "placeholder": "Due Date",
            "id": "DateVal",
            "value": "2017-09-20"
          },
          {
            "type": "Input.Time",
            "placeholder": "Start time",
            "id": "TimeVal",
            "value": "16:59"
          },
          {
            "type": "TextBlock",
            "size": "medium",
            "weight": "bolder",
            "text": "Input.ChoiceSet",
            "horizontalAlignment": "center"
          },
          {
            "type": "TextBlock",
            "text": "What color do you want? (compact)"
          },
          {
            "type": "Input.ChoiceSet",
            "id": "CompactSelectVal",
            "style": "compact",
            "value": "1",
            "choices": [
              {
                "title": "Red",
                "value": "1"
              },
              {
                "title": "Green",
                "value": "2"
              },
              {
                "title": "Blue",
                "value": "3"
              }
            ]
          },
          {
            "type": "TextBlock",
            "text": "What color do you want? (expanded)"
          },
          {
            "type": "Input.ChoiceSet",
            "id": "SingleSelectVal",
            "style": "expanded",
            "value": "1",
            "choices": [
              {
                "title": "Red",
                "value": "1"
              },
              {
                "title": "Green",
                "value": "2"
              },
              {
                "title": "Blue",
                "value": "3"
              }
            ]
          },
          {
            "type": "TextBlock",
            "text": "What colors do you want? (multiselect)"
          },
          {
            "type": "Input.ChoiceSet",
            "id": "MultiSelectVal",
            "isMultiSelect": true,
            "value": "1,3",
            "choices": [
              {
                "title": "Red",
                "value": "1"
              },
              {
                "title": "Green",
                "value": "2"
              },
              {
                "title": "Blue",
                "value": "3"
              }
            ]
          },
          {
            "type": "TextBlock",
            "size": "medium",
            "weight": "bolder",
            "text": "Input.Toggle",
            "horizontalAlignment": "center"
          },
          {
            "type": "Input.Toggle",
            "title": "I accept the terms and conditions (True/False)",
            "valueOn": "true",
            "valueOff": "false",
            "id": "AcceptsTerms"
          },
          {
            "type": "Input.Toggle",
            "title": "Red cars are better than other cars",
            "valueOn": "RedCars",
            "valueOff": "NotRedCars",
            "id": "ColorPreference"
          }
        ],
        "actions": [
          {
            "type": "Action.Submit",
            "title": "Submit",
            "data": {
              "id": "1234567890"
            }
          },
          {
            "type": "Action.ShowCard",
            "title": "Show Card",
            "card": {
              "type": "AdaptiveCard",
              "body": [
                {
                  "type": "Input.Text",
                  "placeholder": "enter comment",
                  "style": "text",
                  "maxLength": 0,
                  "id": "CommentVal"
                }
              ],
              "actions": [
                {
                  "type": "Action.Submit",
                  "title": "OK"
                }
              ]
            }
          }
        ]
    },
};

export const fetchTemplates: any = {
    youtube: {
        "task": {
            "type": "continue",
            "value": {
                "title": constants.TaskModuleStrings.YouTubeTitle,
                "height": "large",
                "width": "large",
                "fallbackUrl": `${appRoot()}/${constants.TaskModuleIds.YouTube}`,
                "url": `${appRoot()}/${constants.TaskModuleIds.YouTube}`,
            },
        },
    },
    powerapp: {
        "task": {
            "type": "continue",
            "value": {
                "title": constants.TaskModuleStrings.PowerAppTitle,
                "height": "large",
                "width": "large",
                "fallbackUrl": `${appRoot()}/${constants.TaskModuleIds.PowerApp}`,
                "url": `${appRoot()}/${constants.TaskModuleIds.PowerApp}`,
            },
        },
    },
    customform: {
        "task": {
            "type": "continue",
            "value": {
                "title": constants.TaskModuleStrings.CustomFormTitle,
                "height": "medium",
                "width": "small",
                "fallbackUrl": `${appRoot()}/${constants.TaskModuleIds.CustomForm}`,
                "url": `${appRoot()}/${constants.TaskModuleIds.CustomForm}`,
            },
        },
    },
    adaptivecard: {
        "task": {
            "type": "continue",
            "value": {
                "title": constants.TaskModuleStrings.AdaptiveCardTitle,
                "height": "large",
                "width": "small",
                "fallbackUrl": null,
                "card": cardTemplates.adaptiveCard,
            },
        },
    },
};