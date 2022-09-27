<script lang="ts">
  import { readable } from "svelte/store";
  import { hasStart, startDateMillis } from "$lib/store";
  import dayjs from "dayjs";

  import { t, l, locales } from "$lib/translations";

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

<div class="timer-container">
  {#if hasStartValue && startDateMillisValue != 0}
    <div class="timer-text">{$t("timer.persist")}</div>
    <table class="timer">
      <tr>
        <td>{day}</td>
        <td>{$t("timer.day")}</td>
      </tr>

      <tr>
        <td id="hour">{hour} </td>
        <td>{$t("timer.hour")}</td>
      </tr>

      <tr>
        <td id="minute">{minute} </td>
        <td>{$t("timer.minute")}</td>
      </tr>

      <tr>
        <td id="second">{second} </td>
        <td>{$t("timer.second")}</td>
      </tr>
    </table>

    <button on:click={resetTimer} class="button">{$t("timer.fuck")}</button>
  {:else}
    <button on:click={startTimer} class="button">{$t("timer.start")}</button>
  {/if}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

  table {
    table-layout: auto;
  }
  
  .timer-container {
    display: flex;
    flex-direction: column;
  }

  .timer {
    padding-top: 3vh;
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
