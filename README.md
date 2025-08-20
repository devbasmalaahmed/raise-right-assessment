# raise-right-assessment
This project is an implementation of the **Raise Right Front-end Assessment** using **Angular**.  
It fetches campaign data from a provided **GraphQL / REST API** and displays both a campaigns list and campaign details with donors.
##Live Demo:
 [Live Demo on Vercel](raise-right-assessment-deploy.vercel.app)
 ##Features
- Campaigns List Page  
  - Displays all campaigns from the API.  
  - Clicking on a campaign navigates to its details page.  

- Campaign Details Page  
  - Shows campaign image, description, goal, raised funds, progress bar.  
  - Displays donor count and donor list.  
  - Error and loading states handled gracefully.  

- Champions Section  
  - Shows individual donor cards with name and donation amount.  

- Smooth Routing  
  - On navigation, page scrolls to the top automatically.  
---

##Tech Stack
- **Angular 17** (Standalone Components)
- **Apollo Angular** (GraphQL client)
- **REST API** (for donors data)
- **Bootstrap 5** (styling & layout)
- **RxJS** (reactive programming)

---

##Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/basmalaa-ahmed/raise-right-assessment.git
   cd raise-right-assessment
 2. **Install dependencies**
    npm install
3. **Run the development server**
   ng serve
 **Project Structure**
src/
 ├── app/
 │   ├── core/services/campaign.service.ts   # Handles API calls
 │   ├── campaigns-list/                     # Campaign list page
 │   ├── campaigns-details/                  # Campaign details page
 │   └── shared/models/campaign.models.ts    # Campaign interface
 │
 ├── assets/Logomark.png                     # App favicon/logo
 └── index.html
