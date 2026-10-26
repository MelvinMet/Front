import { ref } from 'vue';

export const items = ref([
  { id: 0, text: 'Piim', isDone: false, importance: 'high' },
  { id: 1, text: 'Viin', isDone: true, importance: 'low' },
  { id: 2, text: 'Sai', isDone: false, importance: 'medium' },
  { id: 3, text: 'Mac', isDone: true, importance: 'high' },
]);

let nextId = items.value.length;
export function addItem(text, importance) {
  items.value.push({ id: nextId++, text, isDone: false, importance });
}
