<script lang="ts">
  export let items: NUT.Tab[] = [];
  export let activeTabValue = 1;

  const handleClick: any = (tabValue: number) => () =>
    (activeTabValue = tabValue);
</script>

<div class="content">
  <ul>
    {#each items as item}
      <li class={activeTabValue === item.value ? "active" : ""}>
        <span on:click={handleClick(item.value)}>{item.label}</span>
      </li>
    {/each}
  </ul>
  {#each items as item}
    {#if activeTabValue == item.value}
      <div class="box">
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/each}
</div>

<style>

  .content {
    border-color: #ffe54c;
    border-style: dotted;
    height: 80vh;
    width: 80vw;
    /* display: flex; */
    /* justify-content: center; */
    align-items: center;
    /* flex-direction: column; */
    box-shadow: 10px 10px #ffe54c;
  }

  .content > ul, .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 10vh;
    list-style: none;
    /* border-bottom: 1px solid #ffe54c; */
  }
  li {
    margin-bottom: -1px;
  }

  .box {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }

  span {
    border: 1px solid transparent;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  span:hover {
    background-color: #fde979de;
  }

  li.active > span {
    position: relative;
  }
  

  li.active > span::after {

    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 50%; /* Change this to whatever width you want. */

    border-bottom: 1px solid black;
    border-bottom-width: 5;
  }
  
</style>
