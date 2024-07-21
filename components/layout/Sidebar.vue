<script lang="ts"></script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<NuxtLink class="mb-10 block" to="/">
			<NuxtImg class="mx-auto" src="/logo.svg" alt="logo" width="140px" />
		</NuxtLink>
		<button class="absolute top-2 right-3 transition-colors hover:text-primary">
			<Icon size="20px" name="line-md:logout"></Icon>
		</button>
		<LayoutMenu />
	</aside>
</template>
