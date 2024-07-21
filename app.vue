<template>
	<NuxtLayout>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
	</NuxtLayout>
</template>

<script lang="ts" setup>
import { APP_WRITE_ID } from '@/app.constants'

console.log(APP_WRITE_ID)
</script>
