
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Education',
    props: { data: { type: Object, required: true } },
    setup(props) {
        return () => (
            <section id="education" class="min-h-[50vh] py-20 bg-gray-900">
                <div class="container mx-auto px-8 max-w-4xl">
                    <h2 class="text-4xl font-bold text-white mb-8 text-center">{props.data.title}</h2>
                    {props.data.education.map(({ institution, degree, years, description }) => (
                        <div class="bg-gray-800 p-8 mt-8 rounded-xl border-l-4 border-indigo-500 shadow-lg">
                            <h3 class="text-2xl text-white font-semibold">{institution}</h3>
                            <p class="text-white">{years}</p>
                            <p class="text-indigo-400 mb-4">{degree}</p>
                            <p class="text-gray-400">{description}</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
});
