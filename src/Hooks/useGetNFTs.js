import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
//import { setMyNFTs } from "../Store/slicers/accounts";

export const useGetNFTs = () => {
    const account = useSelector((state) => state.accounts.account)
    console.log(account);
    var result;
    const dispatch=useDispatch();

    const options = {
        method: 'GET',
        url: 'https://thentic.p.rapidapi.com/nfts',
        params: { key: 'mKHL5FIegy7nanMX94VGIxrdBiqe6spy', chain_id: '97' },
        headers: {
            'X-RapidAPI-Key': '9807a3aad5msh72b5c7e788a7d3fp1838eejsn3320ae5729cd',
            'X-RapidAPI-Host': 'thentic.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        result = response.data;
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });

    // const useGetNFTs = async () => {
    //     const nftsForOwner = await getNftsForOwner(options, account);
    //     dispatch(setMyNFTs(nftsForOwner));
    // }
};