import Header from "../../components/Header";
import Comments from "../../components/Comments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {

    const posts = [{
        author: {
            name: "Fulano",
        },
        crated_at: "10/10/2021",
        title: "Este é um post sobre js",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gist: "https://githuv.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "ciclano",
                },
                created_at: "11/10/2021",
                description: "Realmente Js é muito legal"
            }
        ]
    }]

    return (
        <>
            <Header />
            <Main>
                <nav>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <section>
                        <p>Ciclano de Lal</p>
                        <p>RA: 1010110102</p>
                        <p>ciclano@gmail.com</p>
                    </section>
                    <div>
                        <img src="https://img.icons8.com/small/452/github.png "/>
                        <img src="data:image/jpeg;base64,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"/>
                    </div>
                </nav>
                <FeedContainer>
                    {posts.map(post => < PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    <button>Nova Postagem</button>
                </aside>
            </Main>
            
        </>
    );
}

function PostCard({ post }) {
    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Comments coment={coment} />)}
            </footer>
        </Post>
    );
}

export default Home;