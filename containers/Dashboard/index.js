import Container from "./styles";
import { useProtected } from "lib/useProtected";
import { PostsForm, ListPosts } from "components";
import { Header } from "components";

import Footer from "../Footer";

const Dashboard = () => {
  const auth = useProtected();
  if (!auth.user) return null;

  console.log(`USUARIO`, auth);
  return (
    <>
      <Header />
      <Container>
        <div className="dash">
          <h2 className="mail">Agrega tu proyecto</h2>
          <PostsForm userId={auth.user.id} />
          {/* <ListPosts  userId={auth.user.id}/> */}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
