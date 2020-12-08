import DocumentsSearchPage from "./pages/document-search-page/document-search-page.component";
import { HomePage } from "./pages/home-page/home-page.component";
export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/searchpage",
    component: DocumentsSearchPage,
  },
];
