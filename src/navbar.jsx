
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  props: {
    items: {
      type: Array, // [{ label: string, target: string }]
      required: true
    }
  },
  setup(props) {
    // Smooth scroll handler
    const handleScroll = (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return () => (
      <nav class="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-md">
        <div class="container mx-auto px-4">
          <ul class="flex justify-center space-x-8 py-4">
            {props.items.map((item) => (
              <li key={item.target}>
                <a 
                  href={`#${item.target}`}
                  onClick={(e) => handleScroll(e, item.target)}
                  class="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
});
