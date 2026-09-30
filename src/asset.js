/* Path file di folder public/, aman untuk deploy di subfolder (GitHub Pages) */
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");