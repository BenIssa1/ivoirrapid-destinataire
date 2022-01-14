/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import datas from "../data/destinataires";

const Details = ({ match }) => {
  const [data, setData] = useState("");
  const name = match.params.name;

  useEffect(() => {
    for (let index = 0; index < datas.length; index++) {
      const element = datas[index];
      let text = element.name;
      let nameUp = name.toUpperCase();
      let position = text.search(`${nameUp}`);

      if (position !== -1) {
        setData(element);
        break;
      }
    }
  }, [data, name]);

  return (
    <>
      {data ? (
        <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
          <div className='card border-dark mb-3' style={{ maxWidth: "18rem" }}>
            <div className='card-header'>Informations</div>
            <div className='card-body text-dark'>
              <h5 className='card-title'>
                {data.name ? data.name : data.name}
              </h5>
              <p className='card-text'>
                Commune :{" "}
                <span>{data.city ? data.city : <>commune vide</>}</span> ,
                Quartier :{" "}
                <span>{data.common ? data.common : <>quartier vide</>}</span>,
                Rue : <span>{data.street ? data.street : <>rue vide</>}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='container mt-5'>
          <div class='alert alert-danger' role='alert'>
            <Link to={"/"} className='btn btn-info'>
              Back
            </Link>{" "}
            Aucun resultat
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Details);
