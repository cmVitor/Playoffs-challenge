import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Bracket from "../components/Bracket";

const ChampionshipPage = () => {
    const { name } = useParams();
    const [championshipData, setChampionshipData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChampionship = async () => {
            try {
                const response = await fetch(`http://localhost:5000/campeonatos/${name}`);
                if (!response.ok) {
                    throw new Error("Campeonato não encontrado");
                }
                const data = await response.json();
                setChampionshipData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchChampionship();
    }, [name]);

    if (loading) return <p>Carregando...</p>;
    if (!championshipData) return <p>Campeonato não encontrado</p>;

    return (
        <div className="championship-page">
            <h1>{championshipData.name}</h1>
            <Bracket rounds={championshipData.rounds} />
        </div>
    );
};

export default ChampionshipPage;
