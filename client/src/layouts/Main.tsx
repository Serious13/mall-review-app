import React, { useState, useEffect, useContext, useRef, useMemo } from "react"
import mallsJson from "../assets/malls.json";
import Mall from "../types/interfaces"

export default function Main() {
    const [data,setData] = useState<{[key: string] : string}>({})
    const mallsParsed = JSON.parse(JSON.stringify(mallsJson))
    const malls : Mall[] = mallsParsed.malls
    console.log("mallsStringified", malls)
    return(
        <div className="main-content">
          <ul className="mall-list">
            {
                malls.map((mall : Mall) => {
                    return (                        
                        <div className="mall-card">                               
                            <div className="mall-content">
                                <h3 className="mall-name">{ mall.name }</h3>
                                <p className="mall-location">{ mall.location.city}</p>
                                <p className="mall-description">
                                A refined shopping destination combining contemporary luxury,
                                artful architecture, and exclusive fashion houses.
                                </p>                                    
                                <div className="mall-brands">
                                    <div className="mall-brands-grid">
                                        <div className="mall-brand"><span>Name :{ mall.name }</span></div>
                                        <div className="mall-brand"><span>City : { mall.location.city } </span></div>
                                        <div className="mall-brand"><span>Stores total : {mall.stores_count}</span></div>
                                        <div className="mall-brand"><span>Rating : { mall.rating }</span></div>
                                        <div className="mall-brand"><span>Opening Hours: { mall.opening_hours }</span></div>                        
                                    </div>
                                </div>
                                <button className="mall-btn">Explore</button>
                            </div>
                        </div>                                
                    )})
            }
            </ul>
        </div>           
    )
} 
/**

 * <li><div>"City":{mall.location.city}</div></li>
                                <li><div>"Country":{mall.location.country}</div></li>
                                <li><div>"Opening hours":{mall.opening_hours}</div></li>
                                <li><div>"Rating":{mall.rating}</div></li>
 */

                            