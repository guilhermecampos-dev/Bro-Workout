import { userViewElements } from "../elements/userView_elements";

class UserViewPage {
      accessBroworkoutPage() {
            cy.visit("/")
        }
    
        accessUserViewPage() {
            cy.get(userViewElements.btnUserViews).first().click();
        }
}
export default UserViewPage
