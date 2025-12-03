import { Route, Routes } from "react-router-dom"
import Test from "./components/Articles"
import Index from "./Layouts";
import Article from "./components/Article";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Propos from "./components/Propos";


export default function App() {
  console.log('App');
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Test/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="propos" element={<Propos/>}/>
        <Route path="article/:id" element={<Article/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}