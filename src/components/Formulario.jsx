import { useState } from 'react';
import axios from 'axios';

const Form = ({ onCreated }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [carregando, setCarregando] = useState(false);

    const Form = async (e) => {
        e.preventDefault();
        if (!titulo.trim() || !descricao.trim()) return;
        setCarregando(true);
        try {
            await axios.post('http://127.0.0.1:8081/notas', { titulo, descricao });
            setTitulo('');
            setDescricao('');
            if (onCreated) onCreated();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="todo">
            <h1>Criar uma nova nota</h1>
            <form onSubmit={Form} className="form">
                <br/>
                <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                <br/>
                <input type="text" name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                <br/>
                <button type="submit" className="btn" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</button>
            </form>
        </div>
    )
}

export default Form;