export default class User {
      first_name="";
      last_name="";
      email="";
      password="";
      company_name="";
      telephone_number="";
      code_fiscal="";
      categorie="";
      image="";
    constructor(first_name, last_name,email,password,company_name,telephone_number,code_fiscal,categorie,image) 
    {
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.password = password;
      this.company_name = company_name;
      this.telephone_number = telephone_number;
      this.code_fiscal = code_fiscal;
      this.categorie = categorie;
      this.image = image;
    }
    
    getFirstName()
    {
      return this.FirstName;
    }
    getLastName()
    {
      return this.LastName;
    }        
}