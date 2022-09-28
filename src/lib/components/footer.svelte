<div class="bottom">
  <p>
    Made with <svg
      viewBox="0 0 1792 1792"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 0.8rem;"
      ><path
        d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
        fill="#e25555"
      /></svg
    >
    by
    <a class="link" href="https://github.com/wingstako" target="_blank"
      >@wingstako</a
    >
  </p>
</div>

<style>
  .link {
    /* RESET */

    text-decoration: none;
    line-height: 1;

    position: relative;
    z-index: 0;
    display: inline-block;
    padding: 5px 5px;
    overflow: hidden;
    color: #333;
    vertical-align: bottom;
    transition: color 0.3s ease-out;
  }

  .link::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: translateY(calc(100% - 2px));
    width: 100%;
    height: 100%;
    background-image: linear-gradient(60deg, #ffe54c 0%, #c2e59c 100%);
    transition: transform 0.25s ease-out;
  }

  .link:hover {
    color: #fff;
  }
  .link:hover::before {
    transform: translateY(0);
    transition: transform 0.25s ease-out;
  }
</style>
