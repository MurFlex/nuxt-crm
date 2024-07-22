<script setup lang="ts">
import { account } from '@/utils/appwrite'
import { v4 as uuid } from 'uuid'
import { useAuthStore } from '~/store/auth.store'
import { useIsLoadingStore } from '~/store/isLoading.store'

useSeoMeta({
	title: 'Login',
	description: 'Login page',
})

const emailRef = ref<string>('')
const passwordRef = ref<string>('')
const nameRef = ref<string>('')

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
	isLoadingStore.set(true)
	await account.createEmailPasswordSession(emailRef.value, passwordRef.value)

	const response = await account.get()

	if (response) {
		console.log(response)
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,
		})
	}

	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''

	await router.push('/')
	isLoadingStore.set(false)
}

const register = async () => {
	await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)

	await login()
}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-sidebar w-1/4 p-5">
			<h1 class="font-bold text-2xl mb-5 text-center">Login</h1>

			<form action="" class="flex flex-col gap-3">
				<UiInput v-model="emailRef" placeholder="Email" type="email" />
				<UiInput v-model="passwordRef" placeholder="Password" type="password" />
				<UiInput v-model="nameRef" placeholder="Name" type="text" />
				<div class="flex items-center justify-center gap-5">
					<UiButton type="button" @click="login">Login</UiButton>
					<UiButton type="button" @click="register">Register</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>
