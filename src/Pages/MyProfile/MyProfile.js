import styles from "./MyProfile.module.scss";
import { useGetNFTs } from "../../Hooks/useGetNFTs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { NFT } from "../../Components/NFT/NFT";
import React, { useState } from 'react';
import axios from "axios";
import { setMyNFTs } from "../../Store/slicers/accounts";
//import {sendNft}

const MyProfile = () => {
    // const { getNFTs } = useGetNFTs();
    const [chainID, setChainID] = useState(null);
    const [nftid, setNftid] = useState(null);
    const [NFTName, setNFTName] = useState('');
    const [description, setDiscription] = useState('');
    const [minter, setMinter] = useState('');
    const [transactionUrl, setTransactionUrl] = useState('');
    const [contracts, setContracts] = useState([]);
    const [address, setAddress] = useState('');
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        axios.get('https://thentic.tech/api/nfts', {
            params: {
                'key': 'mKHL5FIegy7nanMX94VGIxrdBiqe6spy',
                'chain_id': '97'
            }
        })
            .then(res => {
                console.log(res);
                setNfts(res.data.nfts);
            })
            .catch(err => console.log(err))
    });

    //const handleClick 

    //console.log(getNFTs);
    //console.log(sanat);
    const account = useSelector((state) => state.accounts.account);
    //const NFTs =useSelector((state) => state.accounts.accountNFTs);
    // useEffect(() => {
    //     const work = async () => {
    //         getNFTs()
    //     };
    //     work()
    // }, []);

    return (
    <div className={styles.wrapper}>
        <div>
        <h2> Your NFTs</h2>
        <div className={styles.nfts}>
            {nfts.map((nft, index) => {
                if (nft.status === 'success') return (
                    <div key={index} className={styles.nft} onClick={() => { setAddress(nft.contract); setChainID(nft.chain_id); setNftid(nft.id); }}>
                        <div className={styles.names}>{nft.name}</div>
                        <div className={styles.contracts}>{nft.contract}</div>

                    </div>
                );
            })}
        </div>
        </div>
    </div>)
}

export { MyProfile };