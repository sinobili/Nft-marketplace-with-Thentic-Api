import styles from "./Navbar.module.scss";
import Logo from "../../Assets/Logo.png";
import { Link } from "react-router-dom";
import { useSetAccount } from "../../Hooks/useConnectWallet";
import { parseAddress } from "../../utils/parseAddress";
import { useSelector } from "react-redux";

const Navbar = () => {
    const { connectAccount } = useSetAccount();
    const account = useSelector((state) => state.accounts.account)
    return <div className={styles.wrapper}>
        <div className={styles.brand}>
            <img src={Logo} className={styles.Logo}></img>Thentic Marketplace</div>
        <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/MyProfile">My Profile</Link>
            <Link to="/Mint">Mint Page</Link>
            <Link to="/CreateNft">Create NFT Contract</Link>
            <Link to="/SendNft"> Send Nft</Link>
        </div>
        <button onClick={() => connectAccount()}>{account ? parseAddress(account) : "Connect Wallet"} </button>
    </div>
};

export { Navbar };