import { writable } from 'svelte/store';

const store = writable([]);

export const playersStore = {
    subscribe: store.subscribe,
    addPlayer: function(name) {
        store.update(value => [...value, {
            name: name,
            cards: []
        }])
    }
};