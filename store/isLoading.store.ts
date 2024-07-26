export interface ILoadingStore {
	isLoading: boolean
}

export const useIsLoadingStore = defineStore('isLoading', {
	state: (): ILoadingStore => ({
		isLoading: true,
	}),
	actions: {
		set(data: boolean): void {
			this.$patch({
				isLoading: data,
			})
		},
	},
})
