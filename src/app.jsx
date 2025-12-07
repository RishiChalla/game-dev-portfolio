
import { defineComponent } from 'vue';
import Header from './header';

import content from './content.json';

export default defineComponent({
  setup() {
    return () => (
      <div class="min-h-screen bg-gray-900">
        <Header {...content.header} />

        <main class="container mx-auto p-8 text-white">
            <h2 class="text-3xl font-bold mb-4">My Projects</h2>
            <p>Content for the rest of your portfolio goes here...</p>
        </main>
      </div>
    );
  },
});