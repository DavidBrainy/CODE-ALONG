
import baby from"../assets/img/baby.jpg";

function Practice (){
    return(
    <div className="flex justify-center items-center h-screen">
        <div className="shadow-md">
            <div className="h-60 overflow-hidden w-96">
                <img src={baby} alt=""/>
            </div>
           <div className="p-5">
             <div className="flex justify-between">
                <h3 className="font-bold capitalize">Hp Pavilion 15</h3>
                <h6 className="font-bold">GHC 4500</h6>
            </div>
                <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, corporis!
                </p>
          </div>
                   
        </div>
    </div>
    );
    
}


export default Practice;