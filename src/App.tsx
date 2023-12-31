// DEPENDENCIES
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// CONTEXTS
import { FetchingProvider } from "./context/fetching-context";
// COMPONENTS
import { Layout } from "./layout/layout";
import { PodcastList } from "./views/podcast-list/PodcastList";
import { PodcastInfo } from "./views/podcast-info/PodcastInfo";
import { EpisodeInfo } from "./views/episode-info/EpisodeInfo";

function App() {
  return (
    <BrowserRouter>
      <FetchingProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<PodcastList />} />
            <Route path="/podcast/:id" element={<PodcastInfo />} />
            <Route path="/podcast/:id/episode/:episodeId" element={<EpisodeInfo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </FetchingProvider>
    </BrowserRouter>
  );
}

export default App;
