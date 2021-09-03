// import cy from "cypress"

describe('addCart', () => {
    it('user can add to cart', () => {
        //*integration flow
        //login
        //check home page
        cy.visit('http://localhost:3000/');
        // cy.get('#root > div > div:nth-child(1) > header > div > div:nth-child(3) > button > span:nth-child(1) > span > svg > path')
    //    cy.get('button').first().click();
        // cy.getByText(totalItems).should('be.visible');
        cy.get('[data-mui-cy=testAddToCart]').first().click();
        // cy.get(`[aria-label="Add to Cart"]`).first().click();
        cy.get('[data-mui-cy=testnav]').click();
        // cy.findByText(/\+/i).first().click({force: true});
        cy.get('[data-mui-cy=addQuantityInNavCart]').first().click();
        // cy.contains('+').first().click({ force: true });
        //click item 
        //click cart on nav
        //add more quantity
        // check out
    })
})