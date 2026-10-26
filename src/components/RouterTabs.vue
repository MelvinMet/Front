<script setup>
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <nav class="tabs is-centered" aria-label="Pages">
    <ul>
      <RouterLink v-for="route in router.getRoutes()" :key="route.path"
        :to="route.path" custom v-slot="{ href, navigate, isExactActive }">
        <li :class="{ 'is-active': isExactActive }">
          <a :href="href" @click="navigate">{{ route.name }}</a>
        </li>
      </RouterLink>
    </ul>
  </nav>
</template>
