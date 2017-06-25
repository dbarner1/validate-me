function run_report(type) {

        if (type === "detailed") {
          $('#passed-results').append("<p>These Tests Passed:</p>");
          $('#failed-results').append("<p>These Tests Failed:</p>");
          print_result("Menu exists",isRightType(responseMenu,schemaMenu, "menu"));
          print_result("Menu's key 'name' is right type",isRightType(responseMenu_Name,schemaMenu_Name,"menu/name"));
          print_result("Menu's key 'categories' is right type",isRightType(responseMenu_Categories,schemaMenu_Categories,"menu/categories"));
          print_result("Menu's key 'provider_id' is right type",isRightType(responseMenu_ProviderID,schemaMenu_ProviderID,"menu/provider_id"));
          print_result("Menu's key 'option_groups' is right type",isRightType(responseMenu_OptionGroups,schemaMenu_OptionGroups,"menu/option_groups"));
          print_result("Menu's key 'category_groups' is right type",isRightType(responseMenu_CategoryGroups,schemaMenu_CategoryGroups,"menu/category_groups"));
          print_result("Menu's key 'allows_special_instructions' is right type",isRightType(responseMenu_AllowsSpecialInstructions,schemaMenu_AllowsSpecialInstructions,"menu/allows_special_instructions"));
          print_result("This is a test that should fail and be floated to the fail list!",false);
        }
        else {
          console.log("this ran!")
        }
}

//tests["____Response was 200"] = ;
// tests["____Response was under 1000ms"] = responseTime < 10000;
// tests["MENU"] = true;
//  special_instructions_character_limit"] = eachItemHasaChildWithRightTypeCalled("special_instructions_character_limit");
// tests["____Each item has a child called..."] = true;
// tests["__________menu"] = ;

// tests["CATEGORIES"] = true;
// tests["____Each Categories has a child..."] = true;
// tests["__________name"] = doesKeyHaveAValue(responseMenu_Name,"menu/name");
// tests["__________categories"] = doesKeyHaveAValue(responseMenu_Categories,"menu/categories");
// tests["__________provider_id"] = doesKeyHaveAValue(responseMenu_ProviderID,"menu/provider_id");
// tests["__________option_groups"] = doesKeyHaveAValue(responseMenu_OptionGroups,"menu/option_groups");
//
//
// tests["OPTION_GROUPS"] = true;
// tests["____Each option_groups has a child..."] = true;
// tests["__________Yes!"] = doesArrayContainChildren(responseMenu_OptionGroups,"menu/option_groups");
//
//
// tests["CATEGORY"] = true;
// tests["____Each category has at least one child called..."] = true;
// tests["__________items"] = eachObjectHasAChildCalled("category",responseMenu_Categories,"responseObjectParent[i].category.items");
// tests["__________name key"] = eachObjectHasAChildCalled("category",responseMenu_Categories,"responseObjectParent[i].category.name");
// tests["__________category group"] = eachObjectHasAChildCalled("category",responseMenu_Categories,"responseObjectParent[i].category.category_group");
// tests["__________provider_id"] = eachObjectHasAChildCalled("category",responseMenu_Categories,"responseObjectParent[i].category.provider_id");
// tests["__________item"] = eachObjectHasAChildCalled("category",responseMenu_Categories,"responseObjectParent[i].category.items");
//
//
// tests["ITEM"] = true;
// tests["____Each item has at least one child called..."] = true;
// tests["__________allows_special_instructions"] = eachItemHasaChildWithRightTypeCalled("allows_special_instructions");
// tests["__________description"] = eachItemHasaChildWithRightTypeCalled("description");
// tests["__________name"] = eachItemHasaChildWithRightTypeCalled("name");
// tests["__________price"] = eachItemHasaChildWithRightTypeCalled("price");
// tests["__________provider_id"] = eachItemHasaChildWithRightTypeCalled("provider_id");
// tests["__________
