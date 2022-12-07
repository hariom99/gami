import { Card } from "react-bootstrap";

const CarouselCards = ({games}) =>{
    return <>
      <div className="carouselGamesContainer">
        {games.map((data, ind) => {
          return (
            <div className="game_container" key={ind}>
              <div className="carousel_heart_icon">
                {true ? <span>&#x1F90D;</span> : <span>&#10084;</span>}
              </div>
              <Card bsPrefix="carousel_game_card">
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
        .carouselGamesContainer{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .carousel_game_card{
          cursor:pointer;
          width: 12rem;
          margin: 10px;
        }
        .carousel_game_card:hover{
          background-color: #e7e7e7;
          transform : scale(1.1);
        }

        .game_container{
          position : relative;
        }
        .carousel_heart_icon{
          font-size : 18px;
          position: absolute;
          right: 10px;
          top: 10px;
          z-index:1;
        }

        @media screen and (max-width:990px){
          .carousel_game_card{
            width: 8rem;
            margin: 10px;
          }
          .carouselGamesContainer{
            justify-content: center;
          }
        }
        `}
      </style>
    </>
}

export default CarouselCards;