<script setup>
import ContactHeader from "@/modules/contact/components/contactHeader.vue"
</script>

<template>
  <ContactHeader></ContactHeader>
  <div class="mt-0 relative h-96 flex justify-center items-center bg-primary-a">
    <form
      @submit.prevent="submitForm"
      class="form-class w-11/12 absolute flex justify-center items-center flex-col pr-auto pl-auto h-96"
    >
      <label for="subject" class="p-4 w-11/12 text-left">SUBJECT:</label>
      <input
        type="text"
        id="subject"
        v-model.trim="subject"
        class="p-4 w-full"
        placeholder="Work or Job Opportunity!"
      />
      <label for="message" class="p-4 w-11/12 text-left">MESSAGE:</label>
      <textarea
        rows="5"
        id="message"
        v-model.trim="message"
        class="p-4 w-full"
        placeholder="Work or Job Opportunity!"
      ></textarea>
      <div class="p-4">
        <a
          @submit.prevent="submitForm"
          class="btn"
          :href="`mailto:kevinwilmas@outlook.com?subject=${subject}&body=${message}`"
        >
          CLICK TO CONTACT
        </a>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      subject: ""
    }
  },
  methods: {
    submitForm() {
      this.$router.replace("/home")
    }
  }
}
</script>

<style scoped lang="css">
@media (min-width: 650px) {
  .form-class {
    width: 66%;
  }
}
</style>
