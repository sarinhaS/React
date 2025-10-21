import { useState, useEffect } from "react";
import Formulario from './Formulario';
import axios from 'axios';

const PaginaPrincipal = () => {
    const [notas, setNotas] = useState([]);

    const acharNotas = axios.get('http://127.0.0.1:8081/notas')
                .then(response => {setNotas(response.data);})
                .catch(error => {console.log('Erro:' + error);})
    
    useEffect(() => { acharNotas(); }, []);

    return (
        <>
            <h1>ANOTAÇÕES</h1>
            <p>Veja as suas notas: </p>
            <br /><br />

            <Form oncreated={acharNotas}/>
            
            <table className="tabela">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default PaginaPrincipal;