import { useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../constants/constants.js";

export default function mintNFT() {
  /*const {runContractFuction: buyNFT} = useWeb3Contract{
        abi: abi,
        contractAddress: contractAddress ,
        functionName: "buyNFT" ,
        params:{},
    }
*/

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUI() {
        const mint = buyNFT();
      }
      updateUI();
    }
  }, [isWeb3Enabled]);
  return (
    <div>
      <button
        onClick={async () =>
          await buyNFT({
            // onComplete:
            // onError:
            onSuccess: handleSuccess,
            onError: (error) => console.log(error),
          })
        }
      >
        mintNFT
      </button>
    </div>
  );
}
