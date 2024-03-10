<script>
export let personalData ;
import { openModal } from "../store";
</script>
<div class={"items-center justify-center gap-2 cursor-pointer md:flex p-1 hover:bg-slate-200 hover:rounded-md " + ($openModal ? "flex p-3": "hidden")}>
    <span class="outline overflow-hidden outline-1 rounded-full outline-neutral-700"><img class="w-10 h-10" src={personalData.profile_pic} alt={personalData.name}></span>
    <p>{personalData.name}</p>
    <i class="fa-solid fa-chevron-down"></i>
</div>  