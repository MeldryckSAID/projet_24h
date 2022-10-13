<template>
  <header class="bg-main_blue">
    <nav>
      <RouterLink to="/Accueil" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/" class="text-blue-600 underline">home</RouterLink>
    </nav>
  </header>

  <main class="bg-main_blue">
    <h1 class="text-2xl text-rose-700">test</h1>
  </main>

  <RouterView />
</template>

<script>
export default {
  components: {},
};
</script>
