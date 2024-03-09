<script>
    import CTA from "./CTA.svelte";
    import Hero from "./Hero.svelte";

</script>
<div>
    <div class="flex flex-row justify-between items-center py-4">
        <img src="/assets/duggup_logo.svg" alt="duggup logo" >
        <div class="flex items-center justify-center gap-2 md:gap-8 ">
            <div class="gap-2 hidden md:flex">
                <div id="home" class="flex items-center justify-center cursor-pointer gap-1">
                    <img class="object-none" src="/assets/home_icon.jpg" alt="home">
                    <span>Home</span>
                </div>
                <div id="explore" class="flex items-center justify-center cursor-pointer gap-1">
                    <img class="object-none" src="/assets/explore_icon.jpg" alt="explore">
                    <span>Explore</span>
                </div>
                <div id="learn" class="flex items-center justify-center cursor-pointer gap-1">
                    <img class="object-none" src="/assets/learn_icon.jpg" alt="learn">
                    <span>Learn</span>
                </div>
            </div>
            <CTA>
                <div class="flex gap-3" >
                    <img src="/assets/post_icon.jpg" alt="Post button icon"> 
                    <span class="pr-2">Post</span>
                </div>
            </CTA>
            <div class="items-center justify-center gap-2 cursor-pointer hidden md:flex p-1 hover:bg-slate-200 hover:rounded-md">
                <span class="outline overflow-hidden outline-1 rounded-full outline-neutral-700"><img class="w-10 h-10" src="/assets/user.jpeg" alt="user"></span>
                <p>Krishna Kiran</p>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <button class="flex md:hidden mx-4"><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>
    <hr class="dotted-line">
    <Hero />
</div>