import  NavBar  from './Components/NavBar';
import  CardDetails from './Components/CardDetails';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'



function App(){

  const data=[
    {title:"Title 1", discription:"Discription 1", img:img1 },
    {title:"Title 2", discription:"Discription 2", img:img2},
    {title:"Title 3", discription:"Discription 3", img:img3 },
    {title:"Title 4", discription:"Discription 4", img:img4 }
  ];
  const printMassage = (massage)=>{
    alert("This from App File" + massage)
  }
      return (
        <>
        <NavBar/>

        {
        data.map ((item, index)=>{
          return (
            <CardDetails key={index} title={item.title} discription={item.discription}  img={item.img} onClick={printMassage}/>
          )
        })}
        
        </>
      );
    }
    
    export default App;
    