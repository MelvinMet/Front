<script setup>
import { computed, ref } from 'vue'
 
let i = 0
 
let items = ref([
  { id: i++, text: 'Piim', isDone: false },
  { id: i++, text: 'Viin', isDone: true },
  { id: i++, text: 'Sai', isDone: false },
  { id: i++, text: 'Mac', isDone: true },
])
 
let newItem = ref('')
 
function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({
      id: i++,
      text: newItem.value.trim(),
      isDone: false
    })
  }
 
  newItem.value = ''
}
 
let doneItems = computed(() =>
  items.value.filter(item => item.isDone)
)
 
let toDoItems = computed(() =>
  items.value.filter(item => !item.isDone)
)
</script>
 
<template>
  <div class="container content mt-3">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          @keydown.enter="add"
          v-model="newItem"
          class="input"
          type="text"
          placeholder="Add an item"
        >
      </div>
 
      <div class="control">
        <button @click="add" class="button is-info">
          Add
        </button>
      </div>
    </div>
 
    <h1>All items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
 
    <h1>Done items</h1>
    <ul>
      <li v-for="item in doneItems" :key="item.id">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
 
    <h1>To-do items</h1>
    <ul>
      <li v-for="item in toDoItems" :key="item.id">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
  </div>
  <itemsList :items="items" title="All Items"></itemsList>
  <itemsList :items="doneItems" title="Done Items"></itemsList>
  <itemsList :items="toDoItems" title="ToDo Items"></itemsList>
</template>
 
<style>
</style>
 