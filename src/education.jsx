
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Education',
    props: { data: { type: Object, required: true } },
    setup(props) {
        return () => (
            <section id="education" class="min-h-[50vh] py-20 bg-gray-900">
                <div class="container mx-auto px-8 max-w-4xl">
                    <h2 class="text-4xl font-bold text-white mb-8 text-center">{props.data.title}</h2>
                    <div class="bg-gray-800 p-8 rounded-xl border-l-4 border-indigo-500 shadow-lg">
                        <h3 class="text-2xl text-white font-semibold">University Name Placeholder</h3>
                        <p class="text-indigo-400 mb-4">Bachelor of Science in Computer Science</p>
                        <p class="text-gray-400">{props.data.description}</p>
                    </div>
                </div>
            </section>
        );
    }
});
