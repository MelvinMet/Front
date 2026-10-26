<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
let i = 0;
let items = ref([
  {id:i++, text:'Piim', isDone: false, importance: 'high'},
  {id:i++, text:'Viin', isDone: true, importance: 'low'},
  {id:i++, text:'Sai', isDone: false, importance: 'medium'},
  {id:i++, text:'Mac', isDone: true, importance: 'low'},
]);
let newItem = ref('');
let newImportance = ref('medium');

function add(){
  if(newItem.value.trim() !== '') {
    items.value.push({id:i++, text: newItem.value.trim(), isDone: false, importance: 'high'});
  }
  newItem.value = '';
}

const importanceOrder = { high: 3, medium: 2, low: 1 };
const sortedItems = computed(() => [...items.value].sort(
  (a, b) => importanceOrder[b.importance] - importanceOrder[a.importance],
));

let doneItems = computed(() => sortedItems.value.filter(item => item.isDone));
let toDoItems = computed(() => sortedItems.value.filter(item => !item.isDone));
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
        <div class="control is-expanded">
            <input @keydown.enter="add" v-model="newItem" class="input" type="text" placeholder="New item" aria-label="New item">
        </div>
        <div class="control">
            <div class="select">
                <select v-model="newImportance" aria-label="Importance">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
        <div class="control">
            <button @click="add" class="button is-info">
                Add
            </button>
        </div>
    </div>
    <ItemList :items="sortedItems" title="All Items"></ItemList>
    <ItemList :items="doneItems" title="Done Items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
  </div>
</template>

<style></style>

