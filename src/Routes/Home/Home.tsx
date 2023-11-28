import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import MenuAlternative from "../../components/Menu-alternative.tsx/menuAlternative";
import "./Home.module.css";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <MenuAlternative />
      <div className={styles.home}>
        {posts.length <= 0 ? <h1>Últimos posts</h1> : null}
        {posts.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          posts.map((post: any) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link className="btn" to={`/posts/${post.id}`} id={post.id}>
                Ler mais
              </Link>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
