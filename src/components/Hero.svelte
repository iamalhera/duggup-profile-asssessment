<script>
    import CTA from "./CTA.svelte";
    let followState = false;
    function toggleSwitch(){
        followState = !followState ;
    }
</script>
<div class="flex px-6 md:px-16 py-12 items-center justify-between relative">
    <div class="flex-col flex md:flex-row gap-14 lg:ml-20">
        <div>
            <img class="w-24 outline outline-[5px] outline-[#EAEFF5] rounded-full" src="/assets/user.jpeg" alt="">
            <p class="pt-2 text-lg md:text-2xl text-start md:text-center text-[#4B5C6D] font-[600]">Krishna Kiran</p>
        </div>
        <div>
            <p class="text-wrap md:w-[100%] mb-8"> Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.</p>
            <button on:click={toggleSwitch}>
            <CTA  hover={true}>
                    {followState ? "Follow": "Followed"}
                </CTA>
            </button>
        </div>
    </div>
    <div class="min-w-40 flex flex-col items-end md:relative absolute md:top-0 md:left-0 top-16 right-10 lg:mr-36 ">
        <div class="flex flex-col items-end">
            <img src="/assets/duggup_logo.jpg" alt="dugg up logo">
            <p class="font-bold">Duggup</p>
            <p class="font-normal text-[#7A9299] text-xs">Co-Founder and CEO</p>
        </div>
        <div class="flex items-center gap-4 pt-4">
            <a class="text-sm font-normal text-[#4D4D4D] " href="https://duggup.com/" target="_blank">My Website <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            <i class="fa-solid fa-ellipsis text-[#A5B9D3] cursor-pointer"></i>
        </div>
    </div>
</div>