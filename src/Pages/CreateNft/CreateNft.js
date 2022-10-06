import React, {useState} from "react";
import styles from "./CreateNft.module.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateNft =() => {
    //const {connectAccount} = useSetAccount();
    const [chainID, setChainID] = useState();
    const [NFTName, setNFTName] =useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [transactionUrl, setTransactionUrl] = useState('');
    const [status, setStatus] = useState('');
    const account = useSelector((state) => state.accounts.account);
    
    
     const handleClick = async () => {
        if(transactionUrl) window.open(transactionUrl);
        else{
            const data = {
                'key': 'mKHL5FIegy7nanMX94VGIxrdBiqe6spy',
                'chain_id': `${chainID}`,
                'name': `${NFTName}`,
                'short_name': `${tokenSymbol}`
            }
            // await fetchToDo().then (res => {
            //   const data =res.data;
            // })
            await axios.post('https://thentic.tech/api/nfts/contract', data)
            .then(res => {
                console.log(res.data);
                setTransactionUrl(res.data.transaction_url);
                // window.open(res.data.transaction_url);
            })
            .catch(err => console.log(err))
        }
    }

    

    return (
        <div className={styles.wrapper}>
          <h2>Create NFT Contract</h2>
          <label for='ChainID'>ChainID : </label>
          <input placeholder='type chainID' id='ChainID' onChange={e => setChainID(e.target.value)} /><br /><br />
          <label className={styles.label} for='NFTname'>NFT Name : </label>
          <input className={styles.input} placeholder='type NFT name' id='NFTname' onChange={e => setNFTName(e.target.value)} /><br /><br />
          <label className={styles.label} for='Shortname'>Token Symbol : </label>
          <input className={styles.input} placeholder='type NFT shortname' id='tokenSymbol' onChange={e => setTokenSymbol(e.target.value)} /><br /><br />
          <button onClick={handleClick}>{transactionUrl ? 'Deploy Contract' : 'Create NFT'}</button><br /><br />
        </div>
      );
}

export {CreateNft};