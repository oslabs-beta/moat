// TODO: This file was added to try and fix the error with loading images via express.static. It still isn't working. However, it seems like it's a file-loader issue, not related to anything wrong with this page. 
// https://dev.to/minompi/add-images-to-a-react-project-with-typescript-4gbm

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}
