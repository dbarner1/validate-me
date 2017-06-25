//Shared Variables
var response
  , responseMenu_Name
  , responseMenu_Categories
  , responseMenu_ProviderID
  , responseMenu_OptionGroups
  , responseMenu_CategoryGroups
  , responseMenu
  , schemaType;

function get_test_objects() {
     response = menu
   , responseMenu = menu
   , responseMenu_Name = response.name
   , responseMenu_Categories = response.categories
   , responseMenu_ProviderID = response.provider_id
   , responseMenu_OptionGroups = response.option_groups
   , responseMenu_CategoryGroups = response.category_groups
   , responseMenu_AllowsSpecialInstructions = response.allows_special_instructions

    , schemaMenu = schema.properties.menu.type
    , schemaMenu_Name = schema.properties.menu.properties.name.type
    , schemaMenu_Categories = schema.properties.menu.properties.categories.type
    , schemaMenu_ProviderID = schema.properties.menu.properties.provider_id.type
    , schemaMenu_OptionGroups = schema.properties.menu.properties.option_groups.type
    , schemaMenu_CategoryGroups = schema.properties.menu.properties.category_groups.type
    , schemaMenu_AllowsSpecialInstructions = schema.properties.menu.properties.allows_special_instructions.type
    , schemaMenu_CategoriesCategoryItems = schema.properties.menu.properties.categories.items.properties.category.properties.items
}
   //placeholder...bad practice... :)
  //    schemaType = {
  //           "allows_special_instructions" : schema.properties.menu.properties.categories.items.properties.category.properties.items.items.properties.item.properties.allows_special_instructions.type,
  //           "decription" : schema.properties.menu.properties.categories.items.properties.category.properties.items.items.properties.item.properties.description.type,
  //           "name" : typeof(schema.whatever),
  //           "price" : typeof(schema.whatever),
  //           "provider_id" : typeof(schema.whatever),
  //       };
