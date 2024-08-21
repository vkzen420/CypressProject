describe('Test Suite',()=>{
    
    beforeEach('Before each Test case',()=>{

      cy.visit('');

    })
  it.skip('Test Case1',()=>{
     
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[name ='username']").type('Admin');
    cy.get("input[name ='password']").type('admin123');
    cy.get("button[type ='submit']").click();
    
})

it.skip('Cypress Features DropDown',()=>{

 
  cy.get('input#autocomplete').type('Ind');
  cy.get('#ui-id-1>li').each(e =>{
      cy.log(e.text());
      if(e.text()=== 'India')
      {
        cy.wrap(e).click();
      }  


  })

  cy.get('#dropdown-class-example').select(2);
  

})

it('Cypress Features',()=>{




})





})