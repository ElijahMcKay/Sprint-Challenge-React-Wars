import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import People from "./People"; 



function Data() {
    const [data, setData] = useState([]); 


    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            // console.log(`${response.data.results}`)
            setData(response.data.results); 
        })
        .catch(error => {
            console.log('There was an error:', error); 
        })}, []); 
        // console.log(data); 
        
        // const StyleDiv = styled.div`
        // text-align: center

        return (
            <div>
                {data.map(obj => (
                    <People 
                    name={obj.name}
                    height={obj.height}
                    hairColor={obj.hair_color}
                    gender={obj.gender}
                    key={obj.url}
                    /> 
                    ))}
                
                {/* <Image imageSrc={data.url}/>    
                <Title title={data.title}/>
                <Date date={data.date}/>
                <Explanation exp={data.explanation}/>
                <Copyright copyright={data.copyright}/> */}
            </div>
        )

}

export default Data; 

