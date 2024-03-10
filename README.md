# Project Title
User Profile UI, DuggUp - Assessment, Frontend Engineer Role

## Demo link:
Access this part of application at [staging-duggup-profile](https://staging-duggup-profile.netlify.app)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)

## About The App
<strong>DuggUp</strong> is a no-nonsense social network for people in tech for people who want to build their personal brand by sharing their stories. And this is an assessment project for <strong>Frontend Engineer</strong> Role.

## Screenshots

![View](/static/assets/screenshots/dugggup_profilepage.png)
![View](/static/assets/screenshots/dugggup_profilepage_2.png)
![View](/static/assets/screenshots/dugggup_profilepage_mobile.png)
![View](/static/assets/screenshots/dugggup_profilepage_mobile_2.png)
![View](/static/assets/screenshots/dugggup_profilepage_mobile_navbar.png)


## Technologies
I used `sveltekit`, `tailwindcss`, `CSS`, `HTML` to build it from scratch.

## Setup
- clone the repository
- run `npm install` in your terminal
- run `npm run dev` in your terminal

## Approach
1. Initial Assessment:
    - Reviewed the assessment document provided by Google and the Figma screen of DuggUp-Profile to understand the requirements and visual design.
2. Frontend Development Perspective:
    - Adopted the mindset of a Frontend Developer for DuggUp, focusing on both data management and the overall structure of the user interface.
3. Modular Design Approach:
    - Recognized the need for modularity and reusability in the profile page, given its nature as a core component of the application.
4. Data Handling Strategy:
    - Generated a dummy JSON representing user data, hypothetically sourced from `/profile/${username}`, and stored it in a SvelteKit store for easy access and management.
5. Component Breakdown:
    - Divided the UI into smaller, manageable components to enhance maintainability and scalability.
    - Structured the parent `ProfilePage` component to encapsulate three main sections: `Header`, `Hero`, and `Main`.
6. Responsive Design Consideration:
    - Leveraged Tailwind CSS framework to build the profile section with a focus on responsiveness across various devices and screen sizes.
7. Deployment:
    - Utilized [Netlify](https://app.netlify.com) for seamless deployment, integrating with GitHub to automate the deployment process and make the project accessible online.

## Status
[Staging-Duggup-Profile] is `Completed` as per assessments need but probably going to build the `Prod-DuggUp-Profile` .

## Credits
List of Help Guides:
- [google](https://google.com)
- [chatGPT](https://chat.openai.com)
- [tailwindcss official doc](https://tailwindcss.com/)
- [sveltekit official doc](https://kit.svelte.dev/)

## License

This is brought to you by [Alhera Ahmad](https://gentleshah.netlify.app)