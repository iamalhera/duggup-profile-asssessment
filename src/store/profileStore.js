import { writable } from 'svelte/store';

// Simulated profile data
const profileData = {
    personalData: {
        username: "krishna_kiran",
        email: "krishnakiran@duggup.com",
        name: "Krishna Kiran",
        headline: "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
        profile_pic: "/assets/user.jpeg",
        website_URL: "https://duggup.com",
    },
    experience: {
        current_work: {
            position: "Co-Founder and CEO",
            company_logo: "/assets/duggup_logo.jpg",
            company_name: "Dugg Up",
            employment_type: "Full time",
            location: {
                company: "SF Bay Area",
                person: "Remote"
            },
            start_date: "Nov 2023",
            end_date: "Present",
        },
        past_experience: [
            {
                position: "VP Engineering",
                company_logo: "/assets/betterup_logo.jpg",
                company_name: "Betterup",
                employment_type: "Full time",
                location: {
                    company: "SF Bay Area",
                    person: "null"
                },
                start_date: "Nov 2022",
                end_date: "Nov 2023",
            },
        ]
    },
    blogsData: [
        {
            description: "No amount of technology can convert a bad story into a good story.",
            URL: "https://www.wikipedia.org/",
            img: "/assets/blog_img_1.jpg",
            alt: "Steve Jobs"
        },
        {
            description: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.",
            URL: "https://www.wikipedia.org/",
            img: "/assets/blog_img_2.jpg",
            alt: "Sam Altman"
        },
        {
            description: "Startup Lesson I am reflecting. Don't build for the average person..",
            URL: "https://www.wikipedia.org/",
            img: "/assets/blog_img_3.jpg",
            alt: "Remote work setup"
        },
        {
            description: "Your biggest regrets at 80 will be acts of omission.",
            URL: "https://www.wikipedia.org/",
            img: "/assets/blog_img_4.png",
            alt: "tokyo city plan"
        },
    ]
};

export const profileDataStore = writable(profileData);