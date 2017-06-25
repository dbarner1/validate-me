var schema ={
  "type": "object",
  "properties": {
    "menu": {
      "description": "A representation of a menu for a specific merchant and location",
      "type": "object",
      "properties": {
        "name": {
          "description": "The title of the menu (e.g. Burger King Summer St)",
          "type": "string"
        },
        "provider_id": {
          "description": "A unique string that identifies the menu",
          "type": "string"
        },
        "allows_special_instructions": {
          "description": "Whether or not a user may input special instructions to be sent along with their order",
          "type": "boolean"
        },
        "special_instructions_character_limit": {
          "description": "The maximum number of characters that the provider accepts for the special instructions (required if allows_special_instructions is true)",
          "type": "number"
        },
        "timescopes": {
          "type": "array",
          "items": {
            "type": "object",
            "title": "timescope",
            "properties": {
              "time_of_day_starts_at": {
                "type": "string"
              },
              "time_of_day_ends_at": {
                "type": "string"
              },
              "day_of_week_starts_at": {
                "type": "string"
              },
              "day_of_week_ends_at": {
                "type": "string"
              },
              "date_starts_at": {
                "type": "string"
              },
              "date_ends_at": {
                "type": "string"
              }
            },
            "dependencies": {
              "time_of_day_ends_at": [
                "time_of_day_starts_at"
              ],
              "time_of_day_starts_at": [
                "time_of_day_ends_at"
              ],
              "day_of_week_ends_at": [
                "day_of_week_starts_at"
              ],
              "day_of_week_starts_at": [
                "day_of_week_ends_at"
              ],
              "date_ends_at": [
                "date_starts_at"
              ],
              "date_starts_at": [
                "date_ends_at"
              ]
            }
          }
        },
        "updated_at": {
          "description": "An iso8601 timestamp representing when the menu was last updated, in UTC",
          "type" : "string"
        },
        "categories": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "category": {
                "description": "A collection of individual items (e.g. Smoothies)",
                "type": "object",
                "properties": {
                  "description": {
                    "description": "A description of the category scraped from the provider",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the category (e.g. Smoothies)",
                    "type": "string"
                  },
                  "provider_id": {
                    "description": "A unique ID (or XPath selector) for this element",
                    "type": "string"
                  },
                  "category_group": {
                    "description": "The id of the category group to which the category belongs",
                    "type": "string"
                  },
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "item": {
                          "description": "A specific thing on a menu (e.g. Banana Smoothie)",
                          "type": "object",
                          "properties": {
                            "allows_special_instructions": {
                              "description": "Whether or not a user may input special instructions to be sent along with this specific item",
                              "type": "boolean"
                            },
                            "description": {
                              "description": "A description of the item scraped from the provider",
                              "type": "string"
                            },
                            "image": {
                              "description": "The URL for an image associated with the item",
                              "type": "string"
                            },
                            "metadata": {
                              "description": "Any keys prefixed with integration- will be passed back to the provider during order validation and submission",
                              "type": "object"
                            },
                            "name": {
                              "description": "The name of the item",
                              "type": "string"
                            },
                            "nutrition": {
                              "description": "Calorie and other nutrition information",
                              "type": "object",
                              "properties": {
                                "caloric_description": {
                                  "type": "string",
                                  "description": "Range of calories for a menu item (e.g. '850 cal - 1100 cal')"
                                },
                                "calories": {
                                  "type": "integer",
                                  "description": "Calories in the menu item"
                                },
                                "calories_from_fat": {
                                  "type": "integer",
                                  "description": "Calories from fat in the menu item"
                                },
                                "carbohydrates": {
                                  "type": "integer",
                                  "description": "Carbohydrates in the menu item"
                                },
                                "dietary_fiber": {
                                  "type": "integer",
                                  "description": "Dietary fiber in the menu item"
                                },
                                "ingredient_description": {
                                  "type": "string",
                                  "description": "Ingredients in the menu item"
                                },
                                "protein": {
                                  "type": "integer",
                                  "description": "Protein in the menu item"
                                },
                                "saturated_fat": {
                                  "type": "integer",
                                  "description": "Saturated fat in the menu item"
                                },
                                "sodium": {
                                  "type": "integer",
                                  "description": "Sodium in the menu item"
                                },
                                "sugars": {
                                  "type": "integer",
                                  "description": "Sugars in the menu item"
                                },
                                "tags": {
                                  "type": "array",
                                  "items": {
                                    "description": "Tags for the menu item",
                                    "type": "string"
                                  }
                                },
                                "trans_fat": {
                                  "type": "integer",
                                  "description": "Trans fat in the menu item"
                                }
                              }
                            },
                            "option_groups": {
                              "type": "donut",
                              "items": {
                                "description": "The provider id for an option group that the item includes",
                                "type": "string"
                              }
                            },
                            "price": {
                              "description": "The cost of the item in cents",
                              "type": "number"
                            },
                            "provider_id": {
                              "description": "A unique ID (or XPath selector) for this element",
                              "type": "string"
                            },
                            "special_instructions_character_limit": {
                              "description": "The maximum number of characters that the provider accepts for the special instructions (required if allows_special_instructions is true)",
                              "type": "number"
                            },
                            "timescopes": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "title": "timescope",
                                "properties": {
                                  "time_of_day_starts_at": {
                                    "type": "string"
                                  },
                                  "time_of_day_ends_at": {
                                    "type": "string"
                                  },
                                  "day_of_week_starts_at": {
                                    "type": "string"
                                  },
                                  "day_of_week_ends_at": {
                                    "type": "string"
                                  },
                                  "date_starts_at": {
                                    "type": "string"
                                  },
                                  "date_ends_at": {
                                    "type": "string"
                                  }
                                },
                                "dependencies": {
                                  "time_of_day_ends_at": [
                                    "time_of_day_starts_at"
                                  ],
                                  "time_of_day_starts_at": [
                                    "time_of_day_ends_at"
                                  ],
                                  "day_of_week_ends_at": [
                                    "day_of_week_starts_at"
                                  ],
                                  "day_of_week_starts_at": [
                                    "day_of_week_ends_at"
                                  ],
                                  "date_ends_at": [
                                    "date_starts_at"
                                  ],
                                  "date_starts_at": [
                                    "date_ends_at"
                                  ]
                                }
                              }
                            }
                          },
                          "required" : [
                            "name",
                            "price",
                            "provider_id"
                          ]
                        }
                      },
                      "required": [
                        "item"
                      ]
                    }
                  },
                  "timescopes": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "title": "timescope",
                      "properties": {
                        "time_of_day_starts_at": {
                          "type": "string"
                        },
                        "time_of_day_ends_at": {
                          "type": "string"
                        },
                        "day_of_week_starts_at": {
                          "type": "string"
                        },
                        "day_of_week_ends_at": {
                          "type": "string"
                        },
                        "date_starts_at": {
                          "type": "string"
                        },
                        "date_ends_at": {
                          "type": "string"
                        }
                      },
                      "dependencies": {
                        "time_of_day_ends_at": [
                          "time_of_day_starts_at"
                        ],
                        "time_of_day_starts_at": [
                          "time_of_day_ends_at"
                        ],
                        "day_of_week_ends_at": [
                          "day_of_week_starts_at"
                        ],
                        "day_of_week_starts_at": [
                          "day_of_week_ends_at"
                        ],
                        "date_ends_at": [
                          "date_starts_at"
                        ],
                        "date_starts_at": [
                          "date_ends_at"
                        ]
                      }
                    }
                  }
                },
                "required": [
                  "items",
                  "name",
                  "provider_id"
                ]
              }
            }
          }
        },
        "category_groups": {
          "type": "array",
          "items": {
            "description": "A collection into which a category fits (e.g. Beverages)",
            "type": "object",
            "properties": {
              "category_group": {
                "type": "object",
                "properties": {
                  "description": {
                    "description": "A description of the category group scraped from the provider",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the category group (e.g. Beverages)",
                    "type": "string"
                  },
                  "provider_id": {
                    "description": "A unique ID (or XPath selector) for this element",
                    "type": "string"
                  },
                  "timescopes": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "title": "timescope",
                      "properties": {
                        "time_of_day_starts_at": {
                          "type": "string"
                        },
                        "time_of_day_ends_at": {
                          "type": "string"
                        },
                        "day_of_week_starts_at": {
                          "type": "string"
                        },
                        "day_of_week_ends_at": {
                          "type": "string"
                        },
                        "date_starts_at": {
                          "type": "string"
                        },
                        "date_ends_at": {
                          "type": "string"
                        }
                      },
                      "dependencies": {
                        "time_of_day_ends_at": [
                          "time_of_day_starts_at"
                        ],
                        "time_of_day_starts_at": [
                          "time_of_day_ends_at"
                        ],
                        "day_of_week_ends_at": [
                          "day_of_week_starts_at"
                        ],
                        "day_of_week_starts_at": [
                          "day_of_week_ends_at"
                        ],
                        "date_ends_at": [
                          "date_starts_at"
                        ],
                        "date_starts_at": [
                          "date_ends_at"
                        ]
                      }
                    }
                  }
                },
                "required": [
                  "provider_id",
                  "name"
                ]
              }
            }
          }
        },
        "option_groups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "option_group": {
                "description": "A collection of item options (e.g. Size)",
                "type": "object",
                "properties": {
                  "defaults": {
                    "type": "array",
                    "items": {
                      "description": "The id for an option that is selected by default",
                      "type": "string"
                    }
                  },
                  "free_choices": {
                    "description": "The number of options that can be selected without incurring additional charges",
                    "type": "number"
                  },
                  "maximum_choices": {
                    "description": "The maximum number of options from the option group that may be selected",
                    "type": "number"
                  },
                  "maximum_unique_options": {
                    "description": "The maximum number of unique options from the option group that may be selected",
                    "type": "number"
                  },
                  "minimum_choices": {
                    "description": "The minimum number of options from the option group that may be selected",
                    "type": "number"
                  },
                  "minimum_unique_options": {
                    "description": "The minimum number of unique options from the option group that may be selected",
                    "type": "number"
                  },
                  "name": {
                    "description": "The name of the option group (e.g. Size)",
                    "type": "string"
                  },
                  "options": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "option": {
                          "description": "A possible option to be applied to a menu item",
                          "type": "object",
                          "properties": {
                            "maximum_quantity": {
                              "description": "The maximum number of the option that may be selected. Note that the minimum quantity is always assumed to be zero",
                              "type": "number"
                            },
                            "default_quantity": {
                              "description": "The default quantity of the option. Defaults to one. Only applicable when a maximum_quantity is given.",
                              "type": "number"
                            },
                            "name": {
                              "description": "The name of the option (e.g. 16oz)",
                              "type": "string"
                            },
                            "option_groups": {
                              "type": "array",
                              "items": {
                                "description": "The id for a parent option",
                                "type": "string"
                              }
                            },
                            "price": {
                              "description": "The cost of adding the option in cents",
                              "type": "number"
                            },
                            "provider_id": {
                              "description": "A unique ID (or XPath selector) for this element",
                              "type": "string"
                            },
                            "timescopes": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "title": "timescope",
                                "properties": {
                                  "time_of_day_starts_at": {
                                    "type": "string"
                                  },
                                  "time_of_day_ends_at": {
                                    "type": "string"
                                  },
                                  "day_of_week_starts_at": {
                                    "type": "string"
                                  },
                                  "day_of_week_ends_at": {
                                    "type": "string"
                                  },
                                  "date_starts_at": {
                                    "type": "string"
                                  },
                                  "date_ends_at": {
                                    "type": "string"
                                  }
                                },
                                "dependencies": {
                                  "time_of_day_ends_at": [
                                    "time_of_day_starts_at"
                                  ],
                                  "time_of_day_starts_at": [
                                    "time_of_day_ends_at"
                                  ],
                                  "day_of_week_ends_at": [
                                    "day_of_week_starts_at"
                                  ],
                                  "day_of_week_starts_at": [
                                    "day_of_week_ends_at"
                                  ],
                                  "date_ends_at": [
                                    "date_starts_at"
                                  ],
                                  "date_starts_at": [
                                    "date_ends_at"
                                  ]
                                }
                              }
                            }
                          },
                          "required": [
                            "name",
                            "price",
                            "provider_id"
                          ]
                        }
                      }
                    }
                  },
                  "provider_id": {
                    "description": "A unique ID (or XPath selector) for this option group",
                    "type": "string"
                  },
                  "timescopes": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "title": "timescope",
                      "properties": {
                        "time_of_day_starts_at": {
                          "type": "string"
                        },
                        "time_of_day_ends_at": {
                          "type": "string"
                        },
                        "day_of_week_starts_at": {
                          "type": "string"
                        },
                        "day_of_week_ends_at": {
                          "type": "string"
                        },
                        "date_starts_at": {
                          "type": "string"
                        },
                        "date_ends_at": {
                          "type": "string"
                        }
                      },
                      "dependencies": {
                        "time_of_day_ends_at": [
                          "time_of_day_starts_at"
                        ],
                        "time_of_day_starts_at": [
                          "time_of_day_ends_at"
                        ],
                        "day_of_week_ends_at": [
                          "day_of_week_starts_at"
                        ],
                        "day_of_week_starts_at": [
                          "day_of_week_ends_at"
                        ],
                        "date_ends_at": [
                          "date_starts_at"
                        ],
                        "date_starts_at": [
                          "date_ends_at"
                        ]
                      }
                    }
                  },
                  "required": [
                    "name",
                    "options",
                    "provider_id"
                  ]
                }
              }
            },
            "required": [
              "option_group"
            ]

          }
        }
      },
      "required": [
        "allows_special_instructions",
        "categories",
        "name",
        "option_groups",
        "provider_id",
        "updated_at"
      ]
    }
  }
};
