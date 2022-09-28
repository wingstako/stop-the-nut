<script lang="ts">
  import { cloudSync, startDateMillis, userId } from "$lib/store";
  import { supabase } from "$lib/supabase-client";

  let loading = false;

  function importProgress() {
    try {
      loading = true;
      supabase
        .from("stop-nut-record")
        .select("id, started_at")
        .eq("id", $userId)
        .single()
        .then(({ data, error, status }) => {
          if (data) {
            let cloudUserId = data.id;
            let cloudStartedAt = data.started_at;

            userId.set(cloudUserId);
            startDateMillis.set(cloudStartedAt);
          }
          if (error && status !== 406) throw error;
        });
    } catch (error: any) {
      alert(error.message);
    } finally {
      loading = false;
    }
  }
  const enableCloudSync =
    ({ password = "" }) =>
    async () => {
      loading = true;

      let id = crypto.randomUUID();
      console.log(id);

      let cloudStaredAt = $startDateMillis == 0 ? Date.now() : $startDateMillis;

      const data = {
        id: id,
        started_at: cloudStaredAt,
        password: password,
      };

      try {
        let { error } = await supabase.from("stop-nut-record").insert(data);
        if (error) throw error;

        userId.set(id);
        startDateMillis.set(cloudStaredAt), cloudSync.set(true);
      } catch (error: any) {
        alert(error.message);
      } finally {
        loading = false;
      }
    };
</script>

<div>
  {#if $cloudSync}
    <p>Your ID: {$userId}</p>
  {:else}
    <div class="btn" on:click={enableCloudSync({ password: "" })}>
      Enable cloud sync
    </div>
  {/if}
</div>

<style scoped>
  .btn {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .btn:after {
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

  .btn:hover:after {
    top: 0px;
    left: 0px;
  }

  @media (min-width: 768px) {
    .btn {
      padding: 13px 50px 13px;
    }
  }
</style>
