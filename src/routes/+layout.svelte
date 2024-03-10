<script>
  import "../app.css";
  import ProfileButton from "../components/ProfileButton.svelte";
  import { openModal } from "../store";
  import { onMount } from "svelte";
  import { profileDataStore } from "../store/profileStore";

  let personalData={};

  onMount(() => {
        const unsubscribe = profileDataStore.subscribe((data) => {
            if (data) {
                personalData = data.personalData;
            }
        });
        return unsubscribe;
    });


  </script>
{#if $openModal}
<div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden">
    <div class="flex items-center justify-between gap-4 border-b pb-2">
        <h1 class="font-semibold">
            <img src="/assets/duggup_logo.svg" alt="">
        </h1>
        <button on:click={() => ($openModal = false)} class="outline-none border-none">
            <i class="fa-solid fa-xmark text-2xl"></i>
        </button>
    </div>
    <div class="flex flex-col gap-4 flex-1 items-center">
        <ProfileButton personalData={personalData}/>
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
      <button class="signout">Sign Out</button>

        <!-- <button class="border-none outline-none p-2 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 text-xl font-semibold">Product <i class="fa-solid fa-chevron-right text-xl pl-4" /></p>
        </button>
        <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Reviews <i class="fa-solid fa-chevron-right text-xl pl-4" /></p>
        </button>
        <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left">
            <p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">FAQs <i class="fa-solid fa-chevron-right text-xl pl-4" /></p>
        </button> -->
    </div>
    <!-- <div class="flex flex-col items-center justify-center">
    </div> -->
</div>
{/if}
<slot />
