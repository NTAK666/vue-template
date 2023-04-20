import { defineStore } from "pinia";

const STORE_KEY = "counterStore";

interface CounterStoreState {
	count: number;
}

export const useCounterStore = defineStore({
	id: STORE_KEY,
	state: (): CounterStoreState => ({
		count: 0,
	}),
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		}
	}
})
