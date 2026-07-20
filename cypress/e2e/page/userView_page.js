import { UserViewElements } from "../elements/userView_elements";

class UserViewPage {
      accessBroworkoutPage() {
            cy.visit("/")
        }
    
        accessUserViewPage() {
            UserViewElements.usersLink().should('be.visible').click();
        }
}
export default UserViewPage
