import OrganismeModelGenerated from "./generated/OrganismeModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = OrganismeModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await OrganismeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...OrganismeModelGenerated,
  ...customModel
};
