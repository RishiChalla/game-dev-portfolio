import { defineComponent, ref } from 'vue';
import { getImagePath } from './utils';

// Small Plus Icon SVG component for the hint badge
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

export default defineComponent({
  name: 'Projects',
  props: { data: { type: Object, required: true } },
  setup(props) {
    // State to track which project is actively "clicked" on mobile/touch
    const activeIndex = ref(-1);

    const toggleProject = (index) => {
      // Toggle logic: If clicking the same one, close it. If new one, open it.
      if (activeIndex.value === index) {
        activeIndex.value = -1;
      } else {
        activeIndex.value = index;
      }
    };

    return () => (
      <section id="projects" class="min-h-screen py-20 bg-gray-800/30 border-b border-gray-800">
        <div class="container mx-auto px-6 md:px-12 max-w-7xl">

          {/* Section Header */}
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-white mb-4">{props.data.title}</h2>
            <p class="text-gray-400 max-w-2xl mx-auto mb-8">{props.data.description}</p>
          </div>

          {/* Grid Layout */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
            {props.data.items.map((project, index) => {
              // Determine layout classes
              const layoutClasses = project.layout || "col-span-1 aspect-video";
              const isActive = activeIndex.value === index;

              return (
                <div
                  key={index}
                  onClick={() => toggleProject(index)}
                  class={`group relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 ${layoutClasses}`}
                  // Add role and aria-label for accessibility checking
                  role="button"
                  aria-label={`View details for project: ${project.title}`}
                  aria-expanded={isActive}
                >
                  {/* Image Background */}
                  <img
                    src={getImagePath(project.image)}
                    alt={project.title}
                    class={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}
                  />

                  {/* Overlay Gradient */}
                  <div
                    class={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-95' : 'opacity-20 group-hover:opacity-95'}`}
                  />

                  {/* Tap Hint Badge - Visible by default. Fades out if Active (clicked) OR Hovered. */}
                  <div
                    class={`absolute top-4 right-4 pointer-events-none bg-black/50 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                      }`}
                  >
                    <PlusIcon />
                    <span class="uppercase tracking-wider">Details</span>
                  </div>

                  {/* Year - Visible by default. Fades out if Active (clicked) OR Hovered. */}
                  <div
                    class={`absolute top-4 left-4 pointer-events-none bg-black/50 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                      }`}
                  >
                    <span class="uppercase tracking-wider">{project.year}</span>
                  </div>

                  {/* Text Content Container */}
                  <div
                    class={`absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}
                  >
                    <h3 class="text-2xl font-bold text-white mb-1 drop-shadow-md leading-tight">{project.title}</h3>

                    {/* Revealed Content: Shown on Hover (Desktop) OR Active Click (Mobile) */}
                    <div
                      class={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'h-auto opacity-100 scale-100' : 'h-0 opacity-0 scale-95 group-hover:h-auto group-hover:opacity-100 group-hover:scale-100'}`}
                    >
                      <p
                        class="text-gray-300 text-sm mb-3 line-clamp-3 text-shadow mt-3 leading-relaxed"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.description}
                      </p>

                      <div class="flex flex-wrap gap-2 mb-4">
                        {project.tags && project.tags.map(tag => (
                          <span key={tag} class="text-xs border border-indigo-500/30 bg-indigo-900/30 text-indigo-200 px-2 py-0.5 rounded-full backdrop-blur-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      {project.links && project.links.length > 0 && (
                        <div class="flex gap-4 border-t border-white/10 pt-4">
                          {project.links.map(link => (
                            <a
                              href={link.url}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              class="text-white hover:text-indigo-300 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all"
                            >
                              {link.label}
                              <span>&rarr;</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
});
