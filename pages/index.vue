<template>
  <div>
    <div class="h-screen flex justify-center">
      <h1 class="text-5xl self-center">
        Brent Nequin
      </h1>
    </div>
    <main>
      <div class="absolute flex-grow flex bottom-0 right-0 w-full">
        <div class="mx-auto self-start animate-bounce">
          <fa class="text-2xl" :icon="['solid', 'caret-down']" />
        </div>
      </div>
      <About />
      <!-- <Projects /> -->
      <Posts />
    </main>
  </div>
</template>