import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import mintNFT from "../components/buyNFT";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isWeb3Enabled } = useMoralis();
  return (
    <div>
      <head>
        <Header />
      </head>
      {isWeb3Enabled ? (
        <div>
          <mintNFT />
        </div>
      ) : (
        <div>Please connect to a Wallet</div>
      )}
    </div>
  );
}
