<script>
export let experienceData ;
export let blogsData ;
</script>
<main class="flex flex-col w-full  items-start md:items-center mx-auto mb-20 relative z-3">
        <div class="section relative flex ml-auto md:mr-auto md:ml-44  md:w-[70%] w-[90%]">
            {#if experienceData && experienceData.current_work}
            <div class="absolute text-xs text-[#7A9299] top-[47.5%] md:left-[-3.2rem] left-[-3.15rem]">{experienceData.current_work.end_date}</div>
            {/if}
            <img class="object-none" src="/assets/bar_plain.jpg" alt="plain bar">
            {#if blogsData && blogsData[0] && blogsData[1]}
            <div class="ml-5 w-full  my-auto flex justify-between items-center">
                <!-- card one -->
                <div class="w-[45%] h-64 md:h-60 rounded-lg shadow-lg cursor-pointer" >
                    <div class="overflow-auto">
                        <img class="object-cover h-36 w-full rounded-t-lg" src={blogsData[0].img} alt={blogsData[0].alt}>
                    </div>
                    <div class="px-6 py-2">
                        <p class="text-xs lg:text-sm text-[#141618]">{blogsData[0].description}</p>
                    </div>
                </div>
                <!-- card two  -->
                <div class="w-[45%] h-64 md:h-60 rounded-lg shadow-lg cursor-pointer" >
                    <div class="overflow-auto">
                        <img class="object-cover h-36 w-full rounded-t-lg" src={blogsData[1].img} alt={blogsData[1].alt}>
                    </div>
                    <div class="px-6 py-2">
                        <p class="text-xs lg:text-sm text-[#141618]">{blogsData[1].description}</p>
                    </div>
                </div>
            </div>
            {/if}
        </div>

        {#if experienceData && experienceData.current_work && experienceData.current_work.location}
        <div class="section relative flex ml-auto md:mr-auto md:ml-44  md:w-[70%] w-[90%]">
            <div class="flex flex-col items-end absolute top-[25%] md:left-[-5rem] left-[-3.75rem]">
                <img class="w-[32%]" src="/assets/duggup_logo.jpg" alt="dugg up logo">
                <p class="font-bold text-xs md:text-lg">{experienceData.current_work.company_name}</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">{experienceData.current_work.location.company}</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">Joined</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">{experienceData.current_work.start_date}</p>
            </div>
            <img class="object-none" src="/assets/bar_arrow.jpg" alt="plain bar">
            <div class="w-full ml-5 shadow-lg h-auto my-auto flex flex-col py-4 px-5 rounded-xl ">
                <div class="font-bold text-xl ">{experienceData.current_work.position}</div>
                <div class="text-[#7A9299] text-xs">{experienceData.current_work.employment_type} · {experienceData.current_work.location.person}</div>
            </div>
        </div>
        {/if}

        <div class="section relative flex ml-auto md:mr-auto md:ml-44  md:w-[70%] w-[90%]">
            {#if experienceData && experienceData.past_experience && experienceData.past_experience[0]}
            <div class="absolute text-xs text-[#7A9299] top-[47.5%] md:left-[-3.9rem] left-[-3.4rem] ">{experienceData.past_experience[0].end_date}</div>
            {/if}
            <img class="object-none" src="/assets/bar_plain.jpg" alt="plain bar">
            {#if blogsData && blogsData[2] && blogsData[3]}
            <div class="ml-5 w-full  my-auto flex justify-between items-center">
                <!-- card three -->
                <div class="w-[45%] h-64 md:h-60 rounded-lg shadow-lg cursor-pointer" >
                    <div class="overflow-auto">
                        <img class="object-cover h-36 w-full rounded-t-lg" src={blogsData[2].img} alt={blogsData[2].alt}>
                    </div>
                    <div class="px-6 py-2">
                        <p class="text-xs lg:text-sm text-[#141618]">{blogsData[2].description}</p>
                    </div>
                </div>
                <!-- card four -->
                <div class="w-[45%] h-64 md:h-60 rounded-lg shadow-lg cursor-pointer" >
                    <div class="overflow-auto">
                        <img class="object-cover h-36 w-full rounded-t-lg" src={blogsData[3].img} alt={blogsData[3].alt}>
                    </div>
                    <div class="px-6 py-2">
                        <p class="text-xs lg:text-sm text-[#141618]">{blogsData[3].description}</p>
                    </div>
                </div>
            </div>
            {/if}
        </div>

        {#if experienceData && experienceData.past_experience && experienceData.past_experience[0] && experienceData.past_experience[0].location}
        <div class="section relative flex ml-auto md:mr-auto md:ml-44  md:w-[70%] w-[90%]">
            <div class="flex flex-col items-end absolute top-[22%] md:left-[-5.2rem] left-[-3.8rem]">
                <img class="w-[48%]" src="/assets/betterup_logo.jpg" alt="better up logo">
                <p class="font-bold text-xs md:text-lg">{experienceData.past_experience[0].company_name}</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">{experienceData.past_experience[0].location.company}</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">Joined</p>
                <p class="font-normal text-[#7A9299] text-[10px] md:text-xs">{experienceData.past_experience[0].start_date}</p>
            </div>
            <img class="object-none" src="/assets/bar_arrow.jpg" alt="plain bar">
            <div class="w-full ml-5 shadow-lg h-auto my-auto flex flex-col py-4 px-5 rounded-xl ">
                <div class="font-bold text-xl ">{experienceData.past_experience[0].position}</div>
                <div class="text-[#7A9299] text-xs">{experienceData.past_experience[0].employment_type}</div>
            </div>
        </div>
        {/if}
</main>