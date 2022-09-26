<script lang="ts">
  import Tabs from "$lib/components/tabs.svelte";
  import About from "$lib/tabs/about.svelte";
  import Timer from "$lib/tabs/timer.svelte";


  let items: NUT.Tab[] = [
    {
      label: "Hello world",
      value: 1,
      component: Timer,
    },
    {
      label: "About",
      value: 2,
      component: About,
    },
  ];

  // let activeTab = 0,
  //   state = 0;

  // let slideWrapper, anim;

  // function animController() {
  //   if (activeTab == state) return;

  //   const nodeWidth = slideWrapper.offsetWidth;
  //   const currentMultiplier = activeTab > state ? 1 : -1;

  //   console.log(`activeTab ${activeTab > state ? ">" : "<"} state`);

  //   anim = {
  //     in: nodeWidth * currentMultiplier,
  //     out: nodeWidth * -currentMultiplier,
  //   };
  // }

  // $: if (slideWrapper) {
  //   animController();
  //   state = activeTab;
  // }
  // $: currentTab = tabItems[activeTab];
  // $: slideWrapper && console.log(slideWrapper.offsetWidth);
</script>

<div class="main">
  <div class="outer">
    <Tabs {items} />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

  .main,
  .outer {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .main {
    display: table;
    margin: 0 auto;
  }
</style>
