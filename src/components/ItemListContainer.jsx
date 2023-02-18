import ItemList from './ItemList';
import data from "../data.json";
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ gretting }) => {
    //console.log(data)) verifico que traiga el json

    const {categoria} = useParams();

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject(new Error("No hay datos"));
            }
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    };

    async function fetchingData() {
        try {
            const datosFetched = await getDatos();            
        } catch (err) {
            console.log(err);            
        }
    }
    fetchingData();    

    const categoriaFiltrada = data.filter((articulo) => articulo.categoria === categoria)
    return (
        <>
            <h3 className='gretting'>{gretting}</h3>
            {categoria ? <ItemList articulos = {categoriaFiltrada} /> : <ItemList articulos= {data}/>}            
        </>
    )
}

export default ItemListContainer;