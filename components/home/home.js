import HeaderAdCard from "../advertisement/headerAd"
import GameCarousel from "../carousel/carousel"
import GameBox from "../gamesBox/gamesBox"
import Navbar from "../navbar/navbar"

const Home = () =>{
    const games = [
        {id:"Action",categoty:"Action",games:[{name:"abc",views:400},{name:"xyz",views:100},{name:"abc",views:400},{name:"xyz",views:100},{name:"abc",views:400},{name:"xyz",views:100},{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Advendure",categoty:"Advendure",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Arcade",categoty:"Arcade",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Puzzle",categoty:"Puzzle & Logic",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Sport",categoty:"Sport & Racing",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Strategy",categoty:"Strategy",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
        {id:"Favorites",categoty:"Favorites",games:[{name:"abc",views:400},{name:"xyz",views:100}]},
    ]
return <>
<Navbar />
<GameCarousel />
<HeaderAdCard />
<GameBox  games = {games} />
</>
}
export default Home