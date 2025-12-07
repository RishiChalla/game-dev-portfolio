
// Utility function to get the image path relative to the public directory
// Note: When running with Vite, assets in the 'public' folder are served at the root.
// We'll use a dynamic import approach for local assets outside of 'public' 
// or the simple root path if they are in 'public' and directly accessible.
export const getImagePath = (imageName) => `/images/${imageName}.png`;
