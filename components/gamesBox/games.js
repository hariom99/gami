import { Card } from "react-bootstrap";

const Games = ({ games }) => {
  return (
    <>
      <div className="gamesContainer">
        {games.map((data, ind) => {
          return (
            <div className="game_container" key={ind}>
              <div className="heart_icon">
                {true ? <span>&#x1F90D;</span> : <span>&#10084;</span>}
              </div>
              <Card bsPrefix="game_card">
                <Card.Img
                  variant="top"
                  src="https://static.gamezop.com/B1fSpMkP51m/m/cover.jpg"
                />
                <Card.Body>
                  <center>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.views} Plays</Card.Text>
                  </center>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      <style>
        {`
        .gamesContainer{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
        .game_card{
          cursor:pointer;
          width: 12rem;
          margin: 10px;
        }
        .game_card:hover{
          background-color: #e7e7e7;
          transform : scale(1.1);
        }

        .game_container{
          margin:2px;
          position : relative;
          border: 1px solid #ded1d1;
        }
        .heart_icon{
          font-size : 20px;
          position: absolute;
          right: 5px;
          bottom: 55px;
          z-index:1;
          cursor:pointer;
        }

        @media screen and (max-width:990px){
          .game_card{
            width: 8rem;
            margin: 10px;
          }
          .gamesContainer{
            justify-content: center;
          }
        }
        `}
      </style>
    </>
  );
};
export default Games;
