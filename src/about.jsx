
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About',
    props: { data: { type: Object, required: true } },
    setup(props) {
        return () => (
            <section id="about" class="min-h-[50vh] py-20 bg-gray-900 border-b border-gray-800">
                <div class="container mx-auto px-8 max-w-4xl text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">{props.data.title}</h2>
                    {props.data.description.map(content => (
                        <p class="text-xl text-gray-400 leading-relaxed">{content}</p>
                    ))}
                </div>
            </section>
        );
    }
});
