import Card from "react-bootstrap/Card";
import Games from "./games";

const GameBox = ({games}) => {
  return (
    <>
    {
        games.map((data,ind)=>{
            return <div style={{margin:"20px 0"}} key={ind} id={data.id}>
        <Card>
          <Card.Body>
            <h4>{data.categoty}</h4>
            <Games games = {data.games}  />
          </Card.Body>
        </Card>
      </div>
      })
    }
    </>
  );
};

export default GameBox;
