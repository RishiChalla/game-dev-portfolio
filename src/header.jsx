import { defineComponent } from 'vue';

import { getImagePath } from './utils';

// Define the component's props structure
const componentProps = {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  links: {
    type: Array, // Array of { label: string, url: string }
    default: () => [],
  },
  imageAlt: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
};

export default defineComponent({
  name: 'Header',
  props: componentProps,
  
  setup(props) {
    return () => (
      <header class="relative h-[600px] w-full overflow-hidden">
        
        {/* 1. Image Grid Container */}
        <div class="absolute inset-0 grid grid-cols-12 grid-rows-2 gap-2">
          {props.images.map((image) => (
            <div key={image.name} class={`${image.class} overflow-hidden`}>
              <img
                src={getImagePath(image.name)}
                alt={props.imageAlt.replace('{name}', image.name)}
                class="object-cover w-full h-full transform transition duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        {/* 2. Gradient Overlay for Text Visibility */}
        <div
          class="absolute top-0 left-0 right-0 h-full lg:h-1/2"
          style={{
            // CSS to create a black gradient from the top (opacity 25%) to the bottom (opacity 0%)
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.60), rgba(0,0,0,0))',
          }}
        ></div>

        {/* 3. Text and Link Content Overlay */}
        <div class="absolute inset-0 flex flex-col justify-start items-center text-white text-center pt-12 px-4 z-10">
          
          {/* Title */}
          <h1 class="text-3xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {props.title}
          </h1>
          
          {/* Description */}
          <p class="text-xl max-w-2xl mb-8 drop-shadow-lg">
            {props.description}
          </p>

          {/* Links/Buttons */}
          <div class="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            {props.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                class="px-6 py-3 border-2 border-white text-white font-bold rounded-full transition duration-300 hover:bg-white hover:text-black shadow-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  },
});