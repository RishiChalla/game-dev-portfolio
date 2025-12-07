
import { defineComponent } from 'vue';
import Header from './header';
import Navbar from './navbar';
import About from './about';
import Projects from './projects';
import Education from './education';

import content from './content.json';

export default defineComponent({
  setup() {
    return () => (
      <div class="min-h-screen bg-gray-900">
        <Header {...content.header} />
        <Navbar {...content.navigation} />

        <main>
            <About data={content.about} />
            <Projects data={content.projects} />
            <Education data={content.education} />
        </main>

        <footer
            class="py-8 text-center text-gray-500 text-sm"
            v-html={content.footer.replace('{year}', new Date().getFullYear())}
        />
      </div>
    );
  },
});