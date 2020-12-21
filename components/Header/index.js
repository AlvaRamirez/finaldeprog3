import Head from "next/head";
import { Container as HeaderContainer } from "./styled";
import { useProtected } from "lib/useProtected";
import { useUser } from "lib/useUser";
import { default as NextLink } from "next/link";

const Header = () => {
  const auth = useUser();
  const auth2 = useProtected();

  if (!auth2.user) return null;
  return (
    <>
      <Head />

      <HeaderContainer>
        <div className="contnav">
          <a href="/">
            {" "}
            <img src="./assets/logo.png"></img>
          </a>
        </div>

        <div className="contnav">
          <ul>
            {/* <li> <a href="dashboard"><img  src="./assets/more.png"></img></a></li> */}
            <li>
              <NextLink href={`/perfil/${auth2.user.id}`}><img id="userh" src="./assets/user.png" /></NextLink>
            </li>
            {/* <li><p>{auth2.user.email}</p></li> */}
            <li>
              <img onClick={() => auth.logout()} id="conf" src="./assets/logout.png"></img>
            </li>
          </ul>
        </div>
      </HeaderContainer>
    </>
  );
};
export default Header;
