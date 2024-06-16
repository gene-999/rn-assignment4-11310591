# rn-assignment4-11310591

# Jobizz App

Jobizz is a mobile application designed to help users find and apply for jobs easily. Below is a brief description of each component within the app and their usage.

## Components

### `Login.js`

- **Usage**: This component is responsible for user authentication. It allows users to log in using their name and email. Additionally, it provides options to log in with social media accounts like Apple, Google, and Facebook.
- **Screenshot**: ![Login Screen](/MyApp/images/ScreenShot_2.jpg)

### `Homepage.js`

- **Usage**: After successful login, users are navigated to the Homepage. This component displays a personalized greeting with the user's name and email, and includes the `SearchBar`, `Featured`, and `Popular` components for job searching and discovery.
- **Screenshot**: ![Homepage](/MyApp/images/ScreenShot_1.jpg)

### `SearchBar.js`

- **Usage**: Embedded within the Homepage, this component allows users to search for jobs or positions using keywords. It features a text input for the search query and an icon to initiate the search.

### `Featured.js`

- **Usage**: This component showcases featured jobs in a horizontal flatlist. Each job card displays the job role, company name, salary, location, and company logo with a distinct background color.

### `Popular.js`

- **Usage**: This component displays a list of popular jobs in a scrollable view. Each job card within the list shows the job title, company name, salary, location, and a company logo.

## Getting Started

To get started with the Jobizz app, clone the repository, install dependencies, and run the app on your local development environment. Ensure you have React Native set up correctly for either iOS or Android development.

```bash
git clone https://github.com/gene-999/rn-assignment4-11310591.git
cd myApp
npm install
npx expo start