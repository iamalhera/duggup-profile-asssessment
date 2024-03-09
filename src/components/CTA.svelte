<script>
        export let hover;
    // console.log(hover);
</script>
<div>
    {#if hover === true}
    <button class="CTABtnHover">
    <!-- <button class="CTABtn"> -->
        <slot />
    </button>
    {:else}
    <button class="CTABtn">
        <slot />
    </button>
    {/if}
</div>