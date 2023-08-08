export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex mt-4">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2 w-10/12" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    // props: {
    //     assignments: Function
    // },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = ''
        }
    },

    data() {
        return {
            newAssignment: ''
        }
    }
}