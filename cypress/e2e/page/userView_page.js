import { userViewElements } from "../elements/userView_elements";

class UserViewPage {
      accessBroworkoutPage() {
            cy.visit("/")
        }
    
        accessUserViewPage() {
            userViewElements.usersLink().should('be.visible').click();
        }
}
export default UserViewPage
