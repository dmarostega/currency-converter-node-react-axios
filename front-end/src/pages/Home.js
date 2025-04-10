import DefaultLayout from '../layouts/default';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from '../components/Board';

export default function Home() {
    const [message, setMensagem] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:3000/')
                .then(res => {
                    console.log('res.data:', res.data);
                    setMensagem(res.data.message);
                })
             .catch(err => {
                console.error('Erro ao buscar mensagem:', err);
                setMensagem('Erro ao carregar mensagem');
             });
    }, []);
    
    return (
        <DefaultLayout>
             <div>
                <h2 className="text-2xl font-bold text-red-600">{message}</h2>
                <Board id="Boardes" />
            </div>
        </DefaultLayout>
    );
}
