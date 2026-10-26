<script setup>
defineProps(['items', 'title']);
const importanceClasses = {
  high: 'has-text-danger',
  medium: 'has-text-warning',
  low: 'has-text-success',
};
</script>

<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="item in items" :key="item.id" :class="importanceClasses[item.importance]">
      <label>
        <input type="checkbox" v-model="item.isDone">
        {{ item.text }} ({{ item.importance }})
      </label>
    </li>
  </ul>
</template>
