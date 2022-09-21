<script lang="ts">
  import { readable } from "svelte/store";
  import { hasStart, startDateMillis } from "$lib/store";
  import dayjs from "dayjs";

  let hasStartValue = false;
  hasStart.subscribe((value) => {
    hasStartValue = value;
  });

  let startDateMillisValue = 0;
  startDateMillis.subscribe((value) => {
    startDateMillisValue = Number(value);
  });

  let second = 0,
    minute = 0,
    hour = 0,
    day = 0;

  const time = readable(0, function start(set) {
    const interval = setInterval(() => {
      if (hasStart && startDateMillisValue > 500) {
        set(dayjs().diff(startDateMillisValue, "milliseconds"));
        second = Math.floor(($time / 1000) % 60);
        minute = Math.floor(($time / 1000 / 60) % 60);
        hour = Math.floor(($time / 1000 / 60 / 60) % 24);
        day = Math.floor($time / 1000 / 60 / 60 / 24);
      } else {
        set(0);
      }
    }, 1000);
  });

  function startTimer() {
    startDateMillis.set(Date.now());
    hasStart.set(true);
  }

  function resetTimer() {
    startDateMillisValue = 0;
    hasStart.set(false);
    startDateMillis.set(0);
    (second = 0), (minute = 0), (hour = 0), (day = 0);
  }

  let currentDate = new Date();
</script>

<div class="main">
  <div class="outer" />

  <div class="content">
    {#if hasStartValue && startDateMillisValue != 0}
      <div class="timer-text">你堅持咗</div>
      <div class="timer">
        <div id="day">{day} 日</div>

        <div id="hour">{hour} 小時</div>

        <div id="minute">{minute} 分鐘</div>

        <div id="second">{second} 秒</div>
      </div>

      <button on:click={resetTimer} class="button">屌</button>
    {:else}
      <button on:click={startTimer} class="button">開始戒色</button>
    {/if}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

  .main,
  .outer {
    height: 10vh;
  }

  .main {
    display: table;
    margin: 0 auto;
  }
  
  .content {
    border-color: #ffe54c;
    border-style: dotted;
    height: 80vh;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 10px 10px #ffe54c;
  }

  .timer {
    padding-top: 5vh;
    padding-bottom: 5vh;
    font-size: xx-large;
  }

  .timer-text {
    font-size: xx-large;
  }

  .button {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    /* font-family: "Roboto", sans-serif; */
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  .button:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    .button {
      padding: 13px 50px 13px;
    }
  }
</style>
