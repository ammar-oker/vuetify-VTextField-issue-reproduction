<template>
  <v-app>
    <v-container>
      <!-- CASE 1: The hint message is not showing -->
      <div class="my-5 border">
        <v-text-field label="hint issue" persistent-hint hint="hint example" />
      </div>

      <!-- CASE 2: Error messages are not showing. -->
      <div class="mt-5 border">
        <v-text-field
          label="error-messages issue"
          error
          :error-messages="['something went wrong!']"
        />
      </div>

      <!-- CASE 3: The reserved details aria is not hidden. -->
      <div class="my-5 border">
        <v-text-field label="hide-details issue" hide-details />
        <div>
          *The spacing between this text and the text-field above is not
          supposed to be existed
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
