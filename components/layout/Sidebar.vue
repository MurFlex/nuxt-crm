<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store'
import { useIsLoadingStore } from '~/store/isLoading.store'

const authStore = useAuthStore()
const isLoadingStore = useIsLoadingStore()

const router = useRouter()

const logout = async () => {
	isLoadingStore.set(true)
	await account.deleteSession('current')
	authStore.clear()
	router.push('/login')
	isLoadingStore.set(false)
}
</script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<NuxtLink class="mb-10 block" to="/">
			<NuxtImg class="mx-auto" src="/logo.svg" alt="logo" width="140px" />
		</NuxtLink>
		<button
			@click="logout"
			class="absolute top-2 right-3 transition-colors hover:text-primary"
		>
			<Icon size="20px" name="line-md:logout"></Icon>
		</button>
		<LayoutMenu />
	</aside>
</template>
