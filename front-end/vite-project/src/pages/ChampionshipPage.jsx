import { useParams } from "react-router-dom";
import Bracket from "../components/Bracket";

const ChampionshipPage = () => {
    const { name } = useParams();

    const championshipData = {
        name: name,
        rounds: [
            {
                phase: "Round of 16",
                matches: [
                    { team1: "Arsenal", team2: "PSV" },
                    { team1: "Real Madrid", team2: "Atlético de Madrid" },
                    { team1: "PSG", team2: "Liverpool" },
                    { team1: "Club Brugge", team2: "Aston Villa" },
                ]
            },
            {
                phase: "Quarter Finals",
                matches: [ {}, {}, {}, {} ] 
            },
            {
                phase: "Semi Finals",
                matches: [ {}, {} ] 
            },
            {
                phase: "Final",
                matches: [ {} ] 
            }
        ]
    };

    return (
        <div className="championship-page">
            <h1>{championshipData.name}</h1>
            <Bracket rounds={championshipData.rounds} />
        </div>
    );
};

export default ChampionshipPage;
