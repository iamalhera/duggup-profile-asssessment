<script>
    import { onMount } from "svelte";
    import { profileDataStore } from "../store/profileStore";
    import Header from "./Header.svelte";
    import Hero from "./Hero.svelte";
    import MainContent from "./MainContent.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let personalData = {};
    let experienceData = {};
    let blogsData = [];
    
    onMount(() => {
        const unsubscribe = profileDataStore.subscribe((data) => {
            if (data) {
                personalData = data.personalData;
                experienceData = data.experience;
                blogsData = data.blogsData;
            }
        });
        return unsubscribe;
    });
</script>

<SectionWrapper>
    <Header {personalData} />
    <Hero {experienceData} {personalData} />
    <MainContent {experienceData} {blogsData} />
</SectionWrapper>
