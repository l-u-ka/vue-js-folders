<template>
  <base-dialog @close="confirmError" v-if="inputIsInvalid" title="Invalid Input">
    <template #default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>Please check all inputs and make sure you enter at least a few characters into each input field</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input ref="titleInput" id="title" name="title" type="text"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea ref="descInput" rows="3" id="description" name="description"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input ref="linkInput" id="link" name="link" type="url"/>
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "../UI/BaseButton";
import BaseDialog from "../UI/BaseDialog";
export default {
  components: {BaseDialog, BaseButton},
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (enteredTitle.trim() === '' || enteredDescription.trim()==='' || enteredUrl.trim()==='') {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource(enteredTitle, enteredDescription, enteredUrl)
    },
    confirmError() {
      this.inputIsInvalid = false;
    }

  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>