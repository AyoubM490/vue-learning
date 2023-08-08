export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-400 hover:bg-blue-500': type==='primary',
                'bg-purple-200 hover:bg-purple-400': type==='secondary',
                'bg-gray-200 hover:bg-gray-400': type==='muted',
                'is-loading': processing
            }" 
            @click="toggle" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },

        processing: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            !this.processing;
        }
    }
    // mounted() {
    //     alert('hello')
    // }
}