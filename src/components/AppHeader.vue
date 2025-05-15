<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { SfButton } from '@storefront-ui/vue';

const actionItems = [
  {
    label: 'Home',
    ariaLabel: 'Home',
    role: 'home',
    tag: 'router-link',
    to: '/',
  },
  {
    label: 'Sign in',
    ariaLabel: 'Sign in',
    role: 'signin',
    to: '/signin',
  },
  {
    label: 'Sign up',
    ariaLabel: 'Sign up',
    role: 'signup',
    to: '/signup',
  },
];
</script>

<template>
  <header
    class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-primary-700 border-b border-neutral-200"
  >
    <div
      class="flex flex-wrap justify-between lg:flex-nowrap items-center flex-row md:justify-start h-full max-w-[1536px] w-full"
    >
      <RouterLink
        to="/"
        aria-label="Home"
        class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
      >
        <img
          src=""
          alt="Logo"
          class="w-[175px] md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"
        />
      </RouterLink>
      <nav class="flex flex-1 justify-end lg:order-last lg:ml-4">
        <div class="flex flex-row flex-nowrap">
          <SfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            :to="actionItem.to"
            :aria-label="actionItem.ariaLabel"
            tag="router-link"
            class="text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 mr-2 -ml-0.5 rounded-md"
            variant="tertiary"
            square
          >
            <span
              v-if="actionItem.role === 'home'"
              class="xl:inline-flex whitespace-nowrap"
              >{{ actionItem.label }}</span
            >
            <span
              v-if="actionItem.role === 'about'"
              class="xl:inline-flex whitespace-nowrap"
              >{{ actionItem.label }}</span
            >
            <span
              v-if="actionItem.role === 'contact'"
              class="xl:inline-flex whitespace-nowrap"
              >{{ actionItem.label }}</span
            >
            <span
              v-if="actionItem.role === 'signin'"
              class="xl:inline-flex whitespace-nowrap"
              >{{ actionItem.label }}</span
            >
            <span
              v-if="actionItem.role === 'signup'"
              class="xl:inline-flex whitespace-nowrap"
              >{{ actionItem.label }}</span
            >
          </SfButton>
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
header a.router-link-active {
  pointer-events: none;
}

nav a {
  transition: background-color 0.5s;
}

nav a.router-link-active {
  --tw-bg-opacity: 1;

  background-color: rgb(var(--colors-primary-900) / var(--tw-bg-opacity, 1));
}
</style>
