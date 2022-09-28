<script lang="ts">
  import Footer from "$lib/components/footer.svelte";
  import Tabs from "$lib/components/tabs.svelte";
  import About from "$lib/tabs/about.svelte";
  import Settings from "$lib/tabs/settings.svelte";
  import Timer from "$lib/tabs/timer.svelte";

  import { t, l, locales } from "$lib/translations";

  let items: NUT.Tab[] = [
    {
      label: $t("tab.timer"),
      value: 1,
      component: Timer,
    },
    {
      label: $t("tab.about"),
      value: 2,
      component: About,
    },
    // {
    //   label: $t("tab.settings"),
    //   value: 3,
    //   component: Settings,
    // },
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

<div class="footer"><Footer /></div>

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

  .footer {
    position: absolute;
    bottom: 0px;
    align-items: center;
    text-align: center;
    width: 100vw;
    margin: 0;
    display: inline-block;
  }
</style>
