import { useContext } from "react";
import NoticiasContext from '../context/NoticiasPovider';

const useNoticias = () => {
    return useContext(NoticiasContext);
}

export default useNoticias;